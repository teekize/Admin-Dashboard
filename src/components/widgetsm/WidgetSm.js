import "./WidgetSm.css";
import VisibilityIcon from '@material-ui/icons/Visibility';

const WidgetSm = () => {
    return (

        <div className="widget-sm">
            <span className="widget-sm-title">New Joined Members</span>
            <ul className="widget-sm-list">

                <li className="widget-sm-list-item">

                    <img className="widget-sm-item-image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" alt="profile pic" />

                    <div className="widget-sm-user">

                        <span className="widget-sm-username">Kevin Thuita</span>
                        <span className="widget-sm-job">Jazz Muscian</span>

                    </div>
                    <button className="widget-sm-button">
                        <VisibilityIcon className="widget-sm-button-icon" />
                        Display
                    </button>
                </li>

                <li className="widget-sm-list-item">

                    <img className="widget-sm-item-image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" alt="profile pic" />

                    <div className="widget-sm-user">

                        <span className="widget-sm-username">Kevin Thuita</span>
                        <span className="widget-sm-job">Jazz Muscian</span>

                    </div>
                    <button className="widget-sm-button">
                        <VisibilityIcon className="widget-sm-button-icon" />
                        Display
                    </button>
                </li>

                <li className="widget-sm-list-item">

                    <img className="widget-sm-item-image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" alt="profile pic" />

                    <div className="widget-sm-user">

                        <span className="widget-sm-username">Kevin Thuita</span>
                        <span className="widget-sm-job">Jazz Muscian</span>

                    </div>
                    <button className="widget-sm-button">
                        <VisibilityIcon className="widget-sm-button-icon" />
                        Display
                    </button>
                </li>

                <li className="widget-sm-list-item">

                    <img className="widget-sm-item-image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" alt="profile pic" />

                    <div className="widget-sm-user">

                        <span className="widget-sm-username">Kevin Thuita</span>
                        <span className="widget-sm-job">Jazz Muscian</span>

                    </div>
                    <button className="widget-sm-button">
                        <VisibilityIcon className="widget-sm-button-icon" />
                        Display
                    </button>
                </li>
            </ul>

        </div>
    )

}

export default WidgetSm;