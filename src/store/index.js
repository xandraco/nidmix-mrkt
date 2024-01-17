import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '../backend/firebase/index.js'
import { collection, doc, setDoc } from 'firebase/firestore'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        CLEAR_USER(state) {
            state.user = null
        }
    },
    actions: {
        async login({ commit }, details) {
            const { email, password } = details

            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (err) {
                switch (err.code) {
                    case 'auth/user-not-found':
                        alert("No se ha encontrado el usuario")
                        break;
                    case 'auth/wrong-password':
                        alert("Contraseña incorrecta")
                        break;
                    default:
                        console.log(err)
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async register({ commit }, details) {
            const { email, password, firstName, lastName, User } = details

            try {
                const authUser = await createUserWithEmailAndPassword(auth, email, password)

                // Add user data to Firestore
                const userDocRef = doc(collection(db, 'Users'), authUser.user.uid)
                const userData = {
                    firstName,
                    lastName,
                    User
                }
                await setDoc(userDocRef, userData)
            } catch (err) {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        alert("Este correo ya existe")
                        break
                    case 'auth/invalid-email':
                        alert("El correo no es válido")
                        break
                    case 'auth/operation-not-allowed':
                        alert("Acción no válida")
                        break
                    case 'auth/weak-password':
                        alert("La contraseña es muy débil")
                        break
                    default:
                        console.log(err)
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async registerPro({ commit }, details) {
            const { email, password, firstName, lastName, User, profession, credentials, references, additional, CardName, CardLastName, CardNumber, CardCVV, BillingAddress, BillingPostal, CardYear, CardMonth, OficialID } = details

            try {
                const authUser = await createUserWithEmailAndPassword(auth, email, password)

                // Add user data to Firestore
                const userDocRef = doc(collection(db, 'Users'), authUser.user.uid)
                const userData = {
                    firstName,
                    lastName,
                    User,
                    profession,
                    credentials,
                    references,
                    additional,
                    OficialID
                }
                const newCardData = {
                    CardName,
                    CardLastName,
                    CardNumber,
                    CardCVV,
                    BillingAddress,
                    BillingPostal,
                    CardYear,
                    CardMonth,
                }
                // Almacenar información del usuario
                await setDoc(userDocRef, userData);

                // Obtener referencia de la colección 'Cards' del usuario
                const cardsCollectionRef = collection(userDocRef, 'Cards');

                // Generar un ID único para la nueva tarjeta (por ejemplo, los últimos 4 dígitos de la tarjeta)
                const cardId = CardNumber.slice(-4);

                // Obtener referencia del documento de la nueva tarjeta
                const cardDocRef = doc(cardsCollectionRef, cardId);

                // Almacenar información de la tarjeta
                await setDoc(cardDocRef, newCardData);
            } catch (err) {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        alert("Este correo ya existe")
                        break
                    case 'auth/invalid-email':
                        alert("El correo no es válido")
                        break
                    case 'auth/operation-not-allowed':
                        alert("Acción no válida")
                        break
                    case 'auth/weak-password':
                        alert("La contraseña es muy débil")
                        break
                    default:
                        console.log(err)
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async logout({ commit }) {
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/login')
        },
        fetchUser({ commit }) {
            auth.onAuthStateChanged(async user => {
                if (user === null) {
                    commit('CLEAR_USER')
                } else {
                    commit('SET_USER', user)

                    if (router.isReady() && router.currentRoute.value.path === '/login') {
                        router.push('/')
                    }
                }
            })
        }
    }
})
