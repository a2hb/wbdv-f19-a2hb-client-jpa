import WidgetService from "../services/WidgetService";

const initialState = {
    widgets: [
       // {type:"HEADING", size:1, text: "Hello from Redux", id: 12},
    ]
}
const widgetListReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'FIND_ALL_WIDGETS':
            return {
                widgets: action.items
            }
        default:
            return state
    }
}



export default widgetListReducer;