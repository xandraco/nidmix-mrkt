import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../backend/firebase/index.js'
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
                        alert("Algo ha salido mal")
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async register({ commit }, details) {
            const { email, password } = details

            try {
                await createUserWithEmailAndPassword(auth, email, password)
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
                        alert("Algo ha salido mal")
                        console.log(err)
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async logout({ commit }) {
            await signOut (auth)

            commit('CLEAR_USER')

            router.push('/login')
        },
        fetchUser ({ commit }) {
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
