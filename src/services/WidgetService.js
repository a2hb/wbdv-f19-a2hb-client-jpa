export default class WidgetService {
    static myInstance = null;
    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }
    API_URL = "https://wbdv-f19-a2hb-server-jpa.herokuapp.com/";
    findAllWidgets=()=>{
        fetch(this.API_URL+"findWidgets").then(response => response.json());
    }
    moveUp=()=>{
        fetch(this.API_URL+"moveUp");
    }
    moveDown=()=>{
        fetch(this.API_URL+"moveDown");
    }
    findWidgetById=(id)=>{
        fetch(this.API_URL+"findWidget/"+id).then(response => response.json());
    }
    updateWidget=(widget)=>{
        var id = widget.id +"";
        fetch(this.API_URL + "updateWidget/" + id, {
            body: JSON.stringify(widget),
            headers: {
            'Content-Type': 'application/json' },
            method: 'PUT'
            });
    }
    createNewWidget = (newWidget) =>{
        fetch(this.API_URL + "createWidget", {
            body: JSON.stringify(newWidget),
            headers: {
            'Content-Type': 'application/json' },
            method: 'POST'
            }).then(response =>response.json());
    }
    deleteWidget=(id)=>{
        fetch(this.API_URL + "deleteWidget/"+id,{
            method: 'DELETE'
            }).then(response =>response.json());
    }
}
