import "./User.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import PublishIcon from "@material-ui/icons/Publish";

export default function User() {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <button className="user-add-button">Create</button>
      </div>

      <div className="user-container">
        <div className="user-display">
          <div className="user-display-top">
            <img
              className="user-display-top-image"
              src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo"
              alt="img"
            />

            <div className="user-display-top-title">
              <span className="user-top-name">John Gathuita</span>
              <span className="user-top-job">GIS</span>
            </div>
          </div>

          <div className="user-display-bottom">
            <span className="user-display-bottom-title">Account Details</span>

            <div className="user-display-info">
              <PermIdentityIcon className="user-display-bottom-icon" />
              <span className="user-display-bottom-name">John Gathuita</span>
            </div>

            <div className="user-display-info">
              <CalendarTodayIcon className="user-display-bottom-icon" />
              <span className="user-display-bottom-name">12.14.1998</span>
            </div>

            <span className="user-display-bottom-title">Contact Details</span>

            <div className="user-display-info">
              <PhoneAndroidIcon className="user-display-bottom-icon" />
              <span className="user-display-bottom-name">+254720122014</span>
            </div>

            <div className="user-display-info">
              <MailIcon className="user-display-bottom-icon" />
              <span className="user-display-bottom-name">
                gathuita@mail.com
              </span>
            </div>

            <div className="user-display-info">
              <HomeIcon className="user-display-bottom-icon" />
              <span className="user-display-bottom-name">Juja | Kenya</span>
            </div>
          </div>
        </div>

        <div className="user-update">
          <span className="user-update-title">Edit</span>

          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>

                <input
                  type="text"
                  placeholder="John Gathuita"
                  className="user-update-input"
                />
              </div>

              <div className="user-update-item">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="John Gathuita"
                  className="user-update-input"
                />
              </div>

              <div className="user-update-item">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="gathuita@mail.com"
                  className="user-update-input"
                />
              </div>

              <div className="user-update-item">
                <label>Phone</label>

                <input
                  type="text"
                  placeholder="+254720122014"
                  className="user-update-input"
                />
              </div>

              <div className="user-update-item">
                <label>Address</label>

                <input
                  type="text"
                  placeholder="Juja | Kenya"
                  className="user-update-input"
                />
              </div>
            </div>

            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  className="user-update-image"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo"
                />
                <lable htmlFor="file">
                  <PublishIcon />
                </lable>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
