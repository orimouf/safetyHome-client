import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CategoryIcon from '@mui/icons-material/Category';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className='logo'>admin app</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                        <PeopleOutlineIcon className="icon" />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <Link to="/packages" style={{ textDecoration: "none" }}>
                    <li>
                        <AutoStoriesIcon className="icon" />
                        <span>Packages</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                </Link>
                <p className="title">USEFUL</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <QueryStatsOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <NotificationImportantOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                </Link>
                <p className="title">SERVICE</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <HealthAndSafetyOutlinedIcon className="icon" />
                        <span>System health</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                </Link>
                <p className="title">USER</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <AdminPanelSettingsOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </Link>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar