import { TYPES } from "./actionTypes"

export function alertAction(payload) {
   return {
       type: TYPES.ALERT_ACTION,
       payload: payload
   }
}

export function appsAction(payload) {
    return {
        type: TYPES.APPS,
        payload: payload
    }
}

export function dashboardsAction(payload) {
    return {
        type: TYPES.DASHBOARDS,
        payload: payload
    }
}

export function savedSearchesAction(payload) {
    return {
        type: TYPES.SAVED_SERACHES,
        payload: payload
    }
}

export function lookupsAction(payload) {
    return {
        type: TYPES.LOOKUPS,
        payload: payload
    }
}

export function fieldsAction(payload) {
    return {
        type: TYPES.FIELDS,
        payload: payload
    }
}

export function indexesAction(payload) {
    return {
        type: TYPES.INDEXES,
        payload: payload
    }
}

export function sourcetypesAction(payload) {
    return {
        type: TYPES.SOURCETYPES,
        payload: payload
    }
}