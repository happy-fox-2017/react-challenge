const initialState = []

export default( state = initialState, { type, payload }) => {
     switch (type) {
          case 'LISTARTICLE': {
               let newState = { ...state, result: payload }
               return newState
           }
          default:
               return state
     }
}
