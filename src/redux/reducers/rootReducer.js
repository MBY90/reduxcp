const rootReducer = (state={counter:0},action) =>{
    switch(action.type) {
        case 'ICRIMENTATION':
          return {
            counter: state.counter + 1
          };
        case 'DICRIMENTATION':
          return {
            counter: state.counter - 1
          };
        case 'RESET':
          return {
            counter: 0
          };
        default:
          return state;
      }
    }

export default rootReducer