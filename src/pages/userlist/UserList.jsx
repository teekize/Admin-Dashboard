import "./UserList.css";
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { UserRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [rows, setrow] = useState(UserRows);

    const handledelete = (id) => {
        setrow(rows.filter((data) => data.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        {
            field: 'user', headerName: 'UserName', width: 170, renderCell: (params) => {
                return (
                    <div className="userlist-user">
                        <img src={params.row.avatar} alt="user image" className="userlist-user-image" />
                        {params.row.userName}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120
        },
        {
            field: 'transaction',
            headerName: 'Transaction Amount',
            width: 160
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userlist-edit-button">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userlist-edit-delete" onClick={() => handledelete(params.id)} />
                    </>

                )
            }
        }
    ];


    return (
        <div className="userlist">

            <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={7} checkboxSelection />
        </div>
    )
}