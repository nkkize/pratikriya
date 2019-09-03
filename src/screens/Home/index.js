import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header"
import Todo from "../../components/Todo"


class Home extends React.Component {
    constructor(props){
        super(props);
    }

    

    render(){
        console.log(this.props.name);
        return (
            <>
                <Header/>
                <Todo name={this.props.name} />
                <div>This is home</div>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        name: store.todoData.name
    };
}

// add todo task in action with type
const mapDispatchToProps = (dispatch) => {
    return {
        addTasks: (tasks) => dispatch(addTasks(tasks))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
