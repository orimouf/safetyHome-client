import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows, packageColumns, packageRows } from "../../datatablesource"
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ title }) => {

  const [ userData, setUserData ] = useState(userRows)
  const [ packageData, setPackageData ] = useState(packageRows)

  const handleDelete = (id, title) => {
    (title === "Users") ?
    setUserData(userData.filter((item) => item.id !== id)) :
    setPackageData(packageData.filter((item) => item.id !== id))
  }

  const actionColumn = [
    { field: "action", headerName: "Action", width: 150, renderCell: (params)=>{
      return (
        <div className="cellAction">
          <Link to={`/${title.toLowerCase()}/${params.row.id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={()=>handleDelete(params.row.id, title)} title={params.row.name}>Delete</div>
        </div>
      )
    }} 
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {title}
        <Link to={`/${title.toLowerCase()}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={(title === "Users") ? userData : packageData}
        columns={(title === "Users") ? userColumns.concat(actionColumn) : packageColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable