import React from 'react'
import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = (props) => {

  return (
    <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell className="tableCell">ID</TableCell>
                <TableCell className="tableCell">Package</TableCell>
                <TableCell className="tableCell">Username</TableCell>
                <TableCell className="tableCell">Capital</TableCell>
                <TableCell className="tableCell">Capital Back</TableCell>
                <TableCell className="tableCell">Profit</TableCell>
                <TableCell className="tableCell">Status</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.data.map((row) => (
                <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.package}</TableCell>
                <TableCell className="tableCell">{row.username}</TableCell>
                <TableCell className="tableCell">{row.capital}</TableCell>
                <TableCell className="tableCell">{row.capitalBack} <span className="percentage">({row.capitalPorcent}%)</span></TableCell>
                <TableCell className="tableCell">{row.profit} <span className="percentage">({row.profitPorcent}%)</span></TableCell>
                <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell className="tableCell">
                    {row.date}  <span className="percentage">
                        ( {(row.leftDays < 0) ? Math.abs(row.leftDays) + " Days ago": row.leftDays+" Days Left"} )
                    </span>    
                </TableCell>
                <TableCell className="tableCell">
                    {(row.status === "Approved") ? 
                        <div className="action Edit" >Edit</div> : <div className="action Approve" >Approve</div> }
                    
                </TableCell>
                </TableRow>
            ))}

                <TableRow style={{background: "#71717126"}}>
                    <TableCell className="tableCell">#</TableCell>
                    <TableCell className="tableCell">TOTAL</TableCell>
                    <TableCell className="tableCell">{props.packageInfo.username}</TableCell>
                    <TableCell className="tableCell">{`$${props.packageInfo.capital}`}</TableCell>
                    <TableCell className="tableCell">
                        <span className="green">
                            {`$${(props.packageInfo.capital * props.packageInfo.receiveCapitalPorcent / 100)} `} 
                            <span className="percentage">({props.packageInfo.receiveCapitalPorcent}%)</span>
                        </span>
                    </TableCell>
                    <TableCell className="tableCell">
                        <span className="green">
                            {`$${(props.packageInfo.capital * props.packageInfo.receiveProfitPorcent / 100)} `} 
                            <span className="percentage">({props.packageInfo.receiveProfitPorcent}%)</span>
                        </span>
                    </TableCell>
                    <TableCell className="tableCell">
                        <span className="green">
                            {`==>  $${(props.packageInfo.capital * props.packageInfo.receiveCapitalPorcent / 100) + 
                                (props.packageInfo.capital * props.packageInfo.receiveProfitPorcent / 100)} `}
                                <span className="percentage">({props.packageInfo.receiveProfitPorcent +
                                props.packageInfo.receiveCapitalPorcent}%)</span>
                        </span>
                    </TableCell>
                    <TableCell className="tableCell">{ `TARGET ==>` }</TableCell>
                    <TableCell className="tableCell">
                        <span className="green">
                            {`$${(props.packageInfo.capital * (props.packageInfo.totalProfitPorcent + props.packageInfo.totalCapitalPorcent) / 100)} `}
                            <span className="percentage">({(props.packageInfo.totalProfitPorcent + props.packageInfo.totalCapitalPorcent)}%)</span>
                        </span>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default List