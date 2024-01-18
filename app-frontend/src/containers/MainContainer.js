import React, { useEffect, useState } from 'react'
import './MainContainer.scss';
import DisplayTable  from '../components/DisplayTable';
import { INVENTORY, KNOWLEDGE_BTN, KO } from '../constants/common-constants';
import { connect } from 'react-redux';

function MainContainer(props) {
    // console.log('props in Main container',props);
    const [tableType, setTableType] = useState("");
    const [tableData, setTableData] = useState("");
    const [tableHeaders, setTableHeaders] = useState("");

    useEffect(() => {
        if (props.knowledgeBtnActive === KNOWLEDGE_BTN.KO) {
            setTableType(KO[0]);   
        } else if (props.knowledgeBtnActive === KNOWLEDGE_BTN.INVENTORY) {
            setTableType(INVENTORY[0]);   
        }
    }, [props.knowledgeBtnActive])
    

    useEffect(() => {

        let tempData = props[`${tableType.name}`];
        setTableData(tempData);
        let tempHeader = props[`${tableType.name}`] && props[`${tableType.name}`][0] &&
            Object.keys(props[`${tableType.name}`][0]).map((header, count) => {return {label:header.toUpperCase(), name:header, id:count}});
        setTableHeaders(tempHeader);
        console.log("tempHeader", tempHeader);

    }, [tableType])

    const handleTypeClick = (ele) => {
        setTableType(ele);
    }

    // console.log("tableType",tableType)
    return (
        <div className='main-container'>
            <div className='left-panel'>
                <div className='knowledge-list'>
                    {props.knowledgeBtnActive === KNOWLEDGE_BTN.KO ?
                        KO.map((ele, index) => (
                            <div key={index} className={`type ${tableType===ele?"selected-type":""}`} onClick={() => handleTypeClick(ele)}>
                                {ele.label}
                            </div>
                        ))
                        :
                        INVENTORY.map((ele, index) => (
                            <div key={index} className={`type ${tableType===ele?"selected-type":""}`} onClick={() => handleTypeClick(ele)}>
                                {ele.label}
                            </div>
                        ))
                }
                </div>
            </div>
            <div className='right-panel'>
                <DisplayTable
                    selectedTable={tableType}
                    tableData={tableData}
                    tableHeaders={tableHeaders}
                />
            </div>
            
        </div>
    )
}


const mapStateToProps = (state) => {
   return {
        alertAction:state.alertAction ,
        apps: state.apps,
        dashboards: state.dashboards,
        savedSearches: state.savedSearches,
        lookups: state.lookups,
        fields: state.fields,
        indexes: state.indexes,
        sourcetypes:state.sourcetypes
   };
};

export default connect(mapStateToProps, null)(MainContainer);