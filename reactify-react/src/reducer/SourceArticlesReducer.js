const initialState = {
     result: {
          sources: []
     }
}

export default(state = initialState , {type , payload }) =>{
     switch (type) {
          case 'FETCH_SOURCES': {
               let newState = { ...state, result : payload }
               return newState
          }
          default:
               return state
     }
}
