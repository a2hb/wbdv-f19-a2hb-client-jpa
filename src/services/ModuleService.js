export default class ModuleService {
    static myInstance = null;
    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }
    API_URL = "https://wbdv-f19-a2hb-server-jpa.herokuapp.com/";
    findAllModules=()=>{
        fetch(this.API_URL+"findModules").then(response => response.json());
    }
    findModuleById=(id)=>{
        fetch(this.API_URL+"findModule/"+id).then(response => response.json());
    }
    updateModule=(moduleOp)=>{
        var id = moduleOp.id +"";
        fetch(this.API_URL + "updateModule/" + id, {
            body: JSON.stringify(moduleOp),
            headers: {
            'Content-Type': 'application/json' },
            method: 'PUT'
            });
    }
    createNewModule = (moduleOp) =>{
        fetch(this.API_URL + "createModule", {
            body: JSON.stringify(moduleOp),
            headers: {
            'Content-Type': 'application/json' },
            method: 'POST'
            }).then(response =>response.json());
    }
    deleteModule=(id)=>{
        fetch(this.API_URL + "deleteModule/"+id,{
            method: 'DELETE'
            }).then(response =>response.json());
    }
}
