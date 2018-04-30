import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/Aboutpage';
import Register from './components/login/register';
import Login from './components/login/signin';
import ManageCoursePage from './components/course/ManageCoursePage';
import CoursePage from './components/course/CoursePage';
import ManageRegisterForm from './components/login/ManageRegisterForm';
import ManageUserForm from './components/login/ManageUserForm';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={ManageUserForm} />
    <Route path="register" component= {ManageRegisterForm}/>
    <Route path="homepage" component={HomePage} />
    <Route path="login" component={ManageUserForm}/>
    <Route path="About" component={AboutPage}/>
    <Route path="Course/:id" component={ManageCoursePage}/>
    <Route path="Course" component={ManageCoursePage}/>
    <Route path="Courses" component={CoursePage}/>
    </Route>
);