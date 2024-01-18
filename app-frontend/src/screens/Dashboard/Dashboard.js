import React, { useEffect, useState } from 'react'
import './Dashboard.scss';
// import dashboardBg from '../../img/dashboard-background.jpg';
import splunkLogo from '../../img/Splunk-Logo.jpg';
import { Loader } from '../../utils/Loader';
import * as service from '../../service/service';
import { KNOWLEDGE_BTN } from '../../constants/common-constants';
import {
    sourcetypesAction,
    indexesAction,
    fieldsAction,
    lookupsAction,
    savedSearchesAction,
    dashboardsAction,
    appsAction,
    alertAction
} from '../../actions/actions';
import { connect } from 'react-redux';
import MainContainer from '../../containers/MainContainer';

function Dashboard(props) {
    // console.log('props in Main container',props);

    const [appsLoading, setAppsLoading] = useState(true);
    const [indexesLoading, setIndexesLoading] = useState(true);
    const [savedSearchesLoading, setSavedSearchesLoading] = useState(true);
    const [lookupsLoading, setLookupsLoading] = useState(true);
    const [fieldsLoading, setFieldsLoading] = useState(true);
    const [sourceTypesLoading, setSourceTypesLoading] = useState(true);
    const [dashboardsLoading, setDashboardsLoading] = useState(true);
    const [alertActionsLoading, setAlertActionsLoading] = useState(true);

    const [appsCount, setAppsCount] = useState(0);
    const [indexesCount, setIndexesCount] = useState(0);
    const [savedSearchesCount, setSavedSearchesCount] = useState(0);
    const [lookupsCount, setLookupsCount] = useState(0);
    const [fieldsCount, setFieldsCount] = useState(0);
    const [sourceTypesCount, setSourceTypesCount] = useState(0);
    const [dashboardsCount, setDashboardCount] = useState(0);
    const [alertActionsCount, setAlertActionsCount] = useState(0);

    const [knowledgeBtnActive, setKnowledgeBtnActive] = useState(KNOWLEDGE_BTN.OVERVIEW);

    useEffect(() => {

        service.getAlertActions().then((res) => {
            // console.log("res from alert actions API", res);
            setAlertActionsLoading(false)
            if (res.data && res.data.data) {
                console.log("res in alert if", res.data.data);
                setAlertActionsCount(res.data.data.length);
                props.alertAction(res.data.data)    
            }
        }).catch((err) => {
            throw err
        })
        
        service.getLookups().then((res) => {
            // console.log("res from lookups API", res);
            setLookupsLoading(false)
            if (res.data && res.data.data) {
                setLookupsCount(res.data.data.length);
                props.lookupsAction(res.data.data)
            }
                
        }).catch((err) => {
            throw err
        })
        
        service.getFields().then((res) => {
            // console.log("res from fields API", res);
            setFieldsLoading(false)
            if (res.data && res.data.data) {
                props.fieldsAction(res.data.data)
                setFieldsCount(res.data.data.length);
            }
        }).catch((err) => {
            throw err
        })
        
        service.getIndexes().then((res) => {
            // console.log("res from indexes API", res);
            setIndexesLoading(false)
            if (res.data && res.data.data) {
                props.indexesAction(res.data.data)
                setIndexesCount(res.data.data.length);
            }
        }).catch((err) => {
            throw err
        })

        service.getSourceTypes().then((res) => {
            // console.log("res from SourceTypes. API", res);
            setSourceTypesLoading(false)
            if (res.data && res.data.data) {
                setSourceTypesCount(res.data.data.length);
                props.sourcetypesAction(res.data.data);
            }
            
        }).catch((err) => {
            throw err
        })

        service.getSavedSearches().then((res) => {
            // console.log("res from SavedSearches API", res);
            setSavedSearchesLoading(false)
            if (res.data && res.data.data) {
                setSavedSearchesCount(res.data.data.length);
                props.savedSearchesAction(res.data.data)
            }
        }).catch((err) => {
            throw err
        })
        
        service.getDashboards().then((res) => {
            // console.log("res from Dashboards API", res);
            setDashboardsLoading(false)
            if (res.data && res.data.data) {
                props.dashboardsAction(res.data.data)
            setDashboardCount(res.data.data.length)    
            }
            
        }).catch((err) => {
            throw err
        })

        service.getApps().then((res) => {
            // console.log("res from apps API", res);
            setAppsLoading(false)
            if (res.data && res.data.data) {
                props.appsAction(res.data.data);
                setAppsCount(res.data.data.length);
            }
        }).catch((err) => {
            throw err
        })

    }, [])

    return (
        <div className='splunk-dashboard'>
            <div className='dashboard-header'>
                <img src={splunkLogo} />
                <div className='main-heading'>Data Dictionary</div>
            </div>    
            <div className='dashboard-btn-container'>
                <div className={`${knowledgeBtnActive===KNOWLEDGE_BTN.OVERVIEW?'active-know':'knowledge-nav'}`} onClick={()=> setKnowledgeBtnActive(KNOWLEDGE_BTN.OVERVIEW)} >Overview</div>
                <div className={`${knowledgeBtnActive===KNOWLEDGE_BTN.KO?'active-know':'knowledge-nav'}`} onClick={()=> setKnowledgeBtnActive(KNOWLEDGE_BTN.KO)}>KOs</div>
                <div className={`${knowledgeBtnActive===KNOWLEDGE_BTN.INVENTORY?'active-know':'knowledge-nav'}`} onClick={()=> setKnowledgeBtnActive(KNOWLEDGE_BTN.INVENTORY)}>Data Inventory</div>
            </div>
            {knowledgeBtnActive === KNOWLEDGE_BTN.OVERVIEW ?
                <div className='dashboard-objects-container'>
                    <div className='db-ob-apps'>{appsLoading ? <Loader/> : `${appsCount} Custom Apps`}</div>
                    <div className='db-objects'>
                        <div className='db-object'>{dashboardsLoading ? <Loader /> : `${dashboardsCount} Dashboards`}</div>
                        <div className='db-object'>{ savedSearchesLoading ? <Loader/>:`${savedSearchesCount} Saved Searches`}</div>
                        <div className='db-object'>{alertActionsLoading ? <Loader/>:`${alertActionsCount}  Alert Actions`} </div>
                        <div className='db-object'>{ lookupsLoading ? <Loader/>:`${lookupsCount} Lookups`}</div>
                        <div className='db-object'>{ fieldsLoading ? <Loader/>:`${fieldsCount} Fields`} </div>
                        <div className='db-object'>{ indexesLoading ? <Loader/>:`${indexesCount} Custom Indexes`}</div>
                            <div className='db-object'>{sourceTypesLoading ? <Loader/>:` ${sourceTypesCount} Sourcetypes`}</div>
                    </div>
                </div>
                :
                <MainContainer
                    knowledgeBtnActive={knowledgeBtnActive}

                />
            }
        </div>
    )
}


// const mapStateToProps = (state) => {
//     console.log("state",state)
//    return {
//         alertsActions:state.alertsActions ,
//         apps: state.apps,
//         dashboards: state.dashboards,
//         savedSearches: state.savedSearches,
//         lookups: state.lookups,
//         fields: state.fields,
//         indexes: state.indexes,
//         sourcetypes:state.sourcetypes
//    };
// };
const mapDispatchToProps = (dispatch) => {
   return {
        alertAction: (data) => dispatch(alertAction(data)),
        appsAction: (data) => dispatch(appsAction(data)),
        dashboardsAction: (data) => dispatch(dashboardsAction(data)),
        savedSearchesAction: (data) => dispatch(savedSearchesAction(data)),
        lookupsAction: (data) => dispatch(lookupsAction(data)),
        fieldsAction: (data) => dispatch(fieldsAction(data)),
        indexesAction: (data) => dispatch(indexesAction(data)),
        sourcetypesAction: (data) => dispatch(sourcetypesAction(data)),
      
   };
};
export default connect(null, mapDispatchToProps)(Dashboard);