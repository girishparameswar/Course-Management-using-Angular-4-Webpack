import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import '../../styles/styles.css';
import CourseList from './courseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
    constructor(props, context){
        super(props, context);
        // this.state = {
        //     course: {title: ""}
        // };
        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this); 
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    

/*     courseRow(course, index){
        return (
                        <div className="jumbotron" id="tile" key={index}>{course.title}
                        </div>
    );
}  */
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <hr/>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}/>
                <CourseList courses = {courses}/>
                    {/* <div className="container-fluid">
                            {this.props.courses.map(this.courseRow)}    
                    </div> */}
                <hr/>
            </div>
        );
    }
}

CoursePage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    //ownProps - Usally useful for accessing routing related props injected
                //by react-router by which it can access all the props
                //related to this component.
                // debugger;
    return {
        courses: state.courses
    };
}
// This function is optional where we can specify what 
//action we want to expose in our component, if not specified in
//the connect function, it will automatically add it in the render
//with this.props.dispatch() => dispatch method fires an action and 
//passes it to the reducer.
 function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //createCourse: course => dispatch(courseActions.createCourse(course))
    };
 }

// Alternate way to use connect function.
// const connectedStateProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateProps(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);