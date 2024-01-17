import { TYPES } from "../actions/actionTypes"
import { initialState } from "./initialState"

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case TYPES.ALERT_ACTIONS: {
         let payload = action.payload
        //    console.log("payload type", payload);
           if (payload.length === 0) return state;
           return {
               ...state,
               alertsAction: action.payload
           }
       }
       case TYPES.APPS: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               apps:payload
           }
       }
        case TYPES.DASHBOARDS: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               dashboards:payload
           }
       }
        case TYPES.SAVED_SERACHES: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               savedSearches:payload
           }
       }
        case TYPES.LOOKUPS: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               lookups:payload
           }
       }
        case TYPES.FIELDS: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               fields:payload
           }
       }
        case TYPES.INDEXES: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               indexes:payload
           }
       }
        case TYPES.SOURCETYPES: {
           let payload = action.payload
           if (payload.length === 0) return state;
           return {
               ...state,
               sourcetypes:payload
           }
       }
        default: return state
   }
}
export default reducer;