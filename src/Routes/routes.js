import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from '../components/Header/header';
import HeaderSecond from '../components/Header/header-second';
import Footer from '../components/Footer/footer';
import Search from '../components/Pages/Search/search';
import CourseList from '../components/Pages/Course-List/course-list';
import CourseDetail from '../components/Pages/Course-Detail/course-detail';
import SelectCourse from '../components/Pages/Select-Course/select-course';

export default function IndexRoute() {
    return (
        <BrowserRouter>
            <HeaderSecond />
            <main className="main-wrapper">
                <Switch>
                    <Route exact path="/" component={Search}  />
                    <Route path="/CourseList" component={CourseList} exact />
                    <Route path="/CourseDetail" component={CourseDetail} exact />
                    <Route path="/SelectCourse" component={SelectCourse} exact />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

