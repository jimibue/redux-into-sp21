// REDUCER -> is a JS pure function that takes 'state' and a 'action' and
// returns new state (DOES NOT CHANGE ORIGINAL STATE RETURN NEW STATE)

// action is a javascript object with type (required), additonal keys ,data,or payload...

//{type: "SET_TODOS", todos: ['todo 1', 'todo2']}

//{type: "ADD_TODO", todo: 'todo new'}

const todos = (state = [], action) => {
   switch(action.type){
      case "SET_TODOS" :
          return action.todos
      case "ADD_TODO" :
          return [action.todo, ...state] 
      default:
          return state        
   }
}

export default todos

