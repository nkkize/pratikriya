exports.getAllNames = function() {
    return {
        type: "ADD_TASK",
        payload: addTaskToDB()
    }
}