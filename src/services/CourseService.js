export default class CourseService {
    static myInstance = null;
    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }
    API_URL = "https://wbdv-f19-a2hb-server-jpa.herokuapp.com/";
    findAllCourses=()=>{
        fetch(this.API_URL+"findCourses").then(response => response.json());
    }
    findCourseById=(id)=>{
        fetch(this.API_URL+"findCourse/"+id).then(response => response.json());
    }
    updateCourse=(course)=>{
        var id = course.id +"";
        fetch(this.API_URL + "updateCourse/" + id, {
            body: JSON.stringify(course),
            headers: {
            'Content-Type': 'application/json' },
            method: 'PUT'
            });
    }
    createNewCourse = (course) =>{
        fetch(this.API_URL + "createCourse", {
            body: JSON.stringify(course),
            headers: {
            'Content-Type': 'application/json' },
            method: 'POST'
            }).then(response =>response.json());
    }
    deleteCourse=(id)=>{
        fetch(this.API_URL + "deleteCourse/"+id,{
            method: 'DELETE'
            }).then(response =>response.json());
    }
}
