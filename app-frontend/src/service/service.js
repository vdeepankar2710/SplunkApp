import axios, * as others from 'axios';

const url = 'http://localhost:3000'; 

export const getAlertActions = async () => { 
    try {
        let response = await axios.get(`${url}/get/alert-actions`)
        return response;
    } catch (err) {
        return err;
    }
}

export const getLookups = async () => { 
    try {
        let response = await axios.get(`${url}/get/lookups`)
        return response;
    } catch (err) {
        return err;
    }
}

export const getFields = async () => { 
    try {
        let response = await axios.get(`${url}/get/fields`)
        return response;
    } catch (err) {
        return err;
    }
}

export const getIndexes = async () => { 
    try {
        let response = await axios.get(`${url}/get/indexes`)
        return response;
    } catch (err) {
        return err;
    }
}

export const getSourceTypes = async () => { 
    try {
        let response = await axios.get(`${url}/get/sourcetypes`)
        return response;
    } catch (err) {
        return err;
    }
}

export const getSavedSearches = async () => { 
    try {
        let response = await axios.get(`${url}/get/saved-searches`)
        return response;   
    } catch (err) {
        return err;
    }
}

export const getDashboards = async () => { 
    try {
        let response = await axios.get(`${url}/get/dashboards`)
        return response;   
    } catch (err) {
        return err;
    }
}

export const getApps = async () => { 
    try {
        let response = await axios.get(`${url}/get/apps`)
        return response;   
    } catch (err) {
        return err;
    }
}