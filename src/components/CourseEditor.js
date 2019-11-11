import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LessonTab from "./LessonTab";
import Module from "./Module";
import TopicPill from "./TopicPill";
import './CourseEditor.css';
import WidgetListContainer from "../containers/WidgetListContainer";
import widgetListReducer from "../reducers/WidgetListReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(widgetListReducer)
class CourseEditor extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isPreview : true
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({isPreview: !this.state.isPreview});
        console.log(this.state.isPreview)
    }
    render(){
        return( 
        <div className="container-fluid">
        <ul className="nav">
                <li className="nav-item close-icon wbdv-course-editor">
                        <FontAwesomeIcon className="wbdv-close" icon={faTimes}/>
                </li>

                <li className="nav-item col-2s wbdv-course-title">
                    <h1 className="aa-title-course">
                        CS 4550 - Web Development
                    </h1>
                </li>

                <LessonTab title="Lesson 1"/>
                <LessonTab title="Lesson 2"/>
                <LessonTab title="Lesson 3"/>
                <LessonTab title="Lesson 4"/>
                <LessonTab title="Lesson 5"/>

                <li className="nav-item plus-icon wbdv-new-page-btn">
                    <FontAwesomeIcon className="wbdv-close" 
                        icon={faPlus}/>
                </li>
            </ul>

            <div className="row">
                <div className="col-3">
                <div className="flex-column nav-pills aa-sidenav wbdv-module-list" 
                        id="v-pills-tab" 
                        role="tablist" 
                        aria-orientation="vertical">

                    <Module title="Module 1"/>
                    <Module title="Module 2"/>
                    <Module title="Module 3"/>
                    <Module title="Module 4"/>

                <a className="nav-link d-flex justify-content-end aa-plus-sidenav" 
                    id="v-pills-home-tab" 
                    data-toggle="pill" 
                    href="#v-pills-home" 
                    role="tab" 
                    aria-controls="v-pills-home" 
                    aria-selected="true">
                    <span className="nav-item add-icon wbdv-module-item-add-btn">
                        <div className="container align-self-center">
                            
                            <div className="col">
                                <FontAwesomeIcon className="wbdv-close" icon={faPlus}/>
                            </div>
                        </div>
                    </span>
                </a>
                </div>
            </div>
        </div>

        <div className="aa-content">
            <div className="wbdv-topic-pill-list">

        <TopicPill title = "Topic 1"/>
        <TopicPill title = "Topic 2"/>
        <TopicPill title = "Topic 3"/>
        <TopicPill title = "Topic 4"/>

        <div className="input-group input-group-sm">
        </div>
        </div>    

        <div className="row justify-content-end container-fluid">
            <h5 className="d-flex align-items-center">
                Preview
            </h5>


            <label className="switch">
            <input type="checkbox" 
                   onClick={this.handleChange}/>
                <span className="slider round">
                </span>
            </label>
            </div>

            <div>
                <Provider store={store}>
                    <WidgetListContainer/>
                </Provider>
            </div>
    </div>
</div>
    );     
    }
}   

export default CourseEditor;