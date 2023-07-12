import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDkSH8wX2w1NvznLGJ9hYU8vViAEbCouAs',
  authDomain: 'pokedex-53ee9.firebaseapp.com',
  projectId: 'pokedex-53ee9',
  storageBucket: 'pokedex-53ee9.appspot.com',
  messagingSenderId: '37697694098',
  appId: '1:37697694098:web:0cc45aaa47bd2d3194f94b'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getPokemons = callback => {
  const q = query(collection(db, 'pokemons'), orderBy('number', 'asc'))
  onSnapshot(q, snapshot => {
    let pokemons = []
    snapshot.forEach(doc => {
      pokemons.push({ id: doc.id, ...doc.data() })
    })
    callback(pokemons)
  })
}

export const addPokemon = pokemon => {
  addDoc(collection(db, 'pokemons'), pokemon)
}

export const updatePokemon = pokemon => {
  updateDoc(doc(db, 'pokemons', pokemon.id), pokemon)
}

export const deletePokemon = pokemon => {
  deleteDoc(doc(db, 'pokemons', pokemon.id))
}
