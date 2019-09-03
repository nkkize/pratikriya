let initState = {
    todoData: {
        name: "narender"
    }
}

const todo = (state = initState.todoData, action) => {
    switch(action) {
        default:
          return state;
    }

}
export default todo;