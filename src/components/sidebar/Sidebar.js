import React from "react";
import "./Sidebar.css"
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SmsIcon from '@material-ui/icons/Sms';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const Sidebar = () => {

    return (
        <div className="sidebar">

            <div className="sidebar-wrapper">
                <div className="sidebar-menu">

                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">

                        <li className="sidebar-list-item">
                            <LineStyleIcon className="sidebar-icon" />
                            Home
                        </li>

                        <li className="sidebar-list-item">
                            <TimelineIcon className="sidebar-icon" />
                            Analytics
                        </li>

                        <li className="sidebar-list-item">
                            <TrendingUpIcon className="sidebar-icon" />
                            Sales
                        </li>

                    </ul>
                </div>


                <div className="sidebar-menu">

                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">

                        <li className="sidebar-list-item">
                            <PersonOutlineIcon className="sidebar-icon" />
                            Users
                        </li>

                        <li className="sidebar-list-item">
                            <TimelineIcon className="sidebar-icon" />
                            Products
                        </li>

                        <li className="sidebar-list-item">
                            <MonetizationOnIcon className="sidebar-icon" />
                            Transaction
                        </li>
                        <li className="sidebar-list-item">
                            <AssessmentIcon className="sidebar-icon" />
                            Reports
                        </li>

                    </ul>
                </div>

                <div className="sidebar-menu">

                    <h3 className="sidebar-title">Notification</h3>
                    <ul className="sidebar-list">

                        <li className="sidebar-list-item">
                            <MailIcon className="sidebar-icon" />
                            Mail
                        </li>

                        <li className="sidebar-list-item">
                            <FeedbackIcon className="sidebar-icon" />
                            Feedback
                        </li>

                        <li className="sidebar-list-item">
                            <SmsIcon className="sidebar-icon" />
                            Messages
                        </li>

                    </ul>
                </div>

                <div className="sidebar-menu">

                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">

                        <li className="sidebar-list-item">
                            <SupervisorAccountIcon className="sidebar-icon" />
                            Manage
                        </li>

                        <li className="sidebar-list-item">
                            <TimelineIcon className="sidebar-icon" />
                            Analytics
                        </li>

                        <li className="sidebar-list-item">
                            <AssessmentIcon className="sidebar-icon" />
                            Reports
                        </li>

                    </ul>
                </div>


            </div>

        </div>
    )
};

export default Sidebar;