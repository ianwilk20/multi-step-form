import { createContext } from 'react'

// const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'UPDATE_VALUES':
//             return { ...state, ...action.payload }
//         case 'UPDATE_STEP':
//             return { ...state, step: action.payload }
//         default:
//             return state
//     }
// }

export const FormContext = createContext()