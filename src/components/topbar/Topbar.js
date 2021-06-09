import React from "react";
import "./Topbar.css"


import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
const Topbar = () => {

    return (
        <div className="topbar">

            <div className="topbarwrapper">

                <div className="topLeft">
                    <span className="logo">Deltoid</span>
                </div>

                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNoneIcon />
                        <span className="topbarbadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <LanguageIcon />
                        <span className="topbarbadge">2</span>
                    </div>
                    <div className="topbarIcons">
                        <SettingsIcon />

                    </div>

                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" alt="avater" className="top-avatar"></img>               </div>
            </div>
        </div>

    )
}

export default Topbar;