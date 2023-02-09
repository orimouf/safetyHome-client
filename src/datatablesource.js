//temporary dtat
export const userColumns = [
    { field: "id", headerName: "ID", width: 70},
    { field: "user", headerName: "User", width: 230, 
    renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},
    { field: "telegram", headerName: "Telegram", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "status", headerName: "Status", width: 160, 
    renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    } }

]

export const packageColumns = [
    { field: "id", headerName: "ID", width: 70},
    { field: "name", headerName: "Name", width: 130},
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "myWithdrawalAmount", headerName: "Revenue", width: 100 },
    { field: "myWithdrawal", headerName: "Withdrawal", width: 100 },
    { field: "startDate", headerName: "Start Date", width: 130 },
    { field: "status", headerName: "Status", width: 160, 
    renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    } }
]

export const packageRows = [
    {
        id: 1,
        name: "MINI",
        amount: "500",
        profitPorcent: [10,10,10,10,10,10,10,10,10,10],
        capitalPorcent: 10,
        WithdrawalEvery: "10 Days",
        totalWithdrawal: 10,
        myWithdrawal: 6,
        myWithdrawalAmount: "600",
        currentWeek: 6,
        startDate: "03/04/2022",
        finDate: "14/07/2022",
        status: "pending"//"pending""passive"
    },
    {
        id: 2,
        name: "MINI",
        amount: "1000",
        profitPorcent: [10,10,10,10,10,10,10,10,10,10],
        capitalPorcent: 10,
        WithdrawalEvery: "10 Days",
        totalWithdrawal: 10,
        myWithdrawal: 1,
        myWithdrawalAmount: "200",
        currentWeek: 18,
        startDate: "29/05/2022",
        finDate: "10/09/2022",
        status: "pending"//"pending""passive"
    },
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "jojo",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "pending",
        email: "jojjo@gmail.com",
        age: 45,
    },
    {
        id: 3,
        username: "nina",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "active",
        email: "nina@gmail.com",
        age: 20,
    },
    {
        id: 4,
        username: "maro",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "active",
        email: "maro@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "mima",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "passive",
        email: "mima@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "mama",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "passive",
        email: "mama@gmail.com",
        age: 60,
    },
    {
        id: 7,
        username: "nesrine",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "pending",
        email: "nesrin@gmail.com",
        age: 27,
    },
    {
        id: 8,
        username: "amir",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "active",
        email: "amir@gmail.com",
        age: 23,
    },
    {
        id: 9,
        username: "miro",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "active",
        email: "miro@gmail.com",
        age: 53,
    },
    {
        id: 10,
        username: "asSnow",
        img: "https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg",
        status: "passive",
        email: "assnow@gmail.com",
        age: 30,
    },
]