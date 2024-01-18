import React, { useEffect, useState } from 'react'
import './DisplayTable.scss'
import DisplayPopup from './DisplayPopup';

export default function DisplayTable(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [dataForPopup, setDataForPopup] = useState("");

    const handleRowClick = (data) => {
        setShowPopup(true);
        setDataForPopup(data);   
    }

    const handleCrossClick = () => {
        setShowPopup(false);
        setDataForPopup("");
    }

    return (
        <div className='display-table-container'>
            {showPopup?<DisplayPopup data={dataForPopup} handleCrossClick={handleCrossClick} />:""}
            <div className='table-container'>
                <table>
                    {props.tableHeaders && props.tableHeaders.map((header, count) => {
                        if (count > 6) {
                            return null;
                        }
                        return (
                            <th key={`${header.name}${header.id}`}>
                                {header.label}
                            </th>
                        );
                    })}
                    {props.tableData && props.tableData.map((rowData, rowCount) =>
                        <tr key={`row-${rowCount}`} onClick={()=>handleRowClick(rowData)}>
                            {props.tableHeaders &&
                                props.tableHeaders.map((header, count) =>
                                {
                                    if (count > 6) return;
                                    return(<td key={`${header.name}${header.id}`}>
                                        {rowData[`${header.name}`]}{ (typeof rowData[`${header.name}`]==='boolean')?(rowData[`${header.name}`===true]) ?"Yes":"No":""}
                                    </td>)
                                    }
                                )
                            }
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}