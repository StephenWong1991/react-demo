const defalutState = {
  user : 'wangsai',
  todoList :[
    'html',
    'css',
    'js'
  ]
};

export default (state = defalutState, action) => {
  if (action.type === 'REPEAT') {
    let newState = {...state};
    newState.user = newState.user.repeat(2);
    return newState;
  } else {
    return state;
  }
};