import React from "react";
import PropTypes from "prop-types";
const ConfirmationText = (props) => {
  return (
      <div className="saveNotificiationWrapper saveNotificiationWrapper--show">
          <div className="saveNotification">
              <span className="saveNotificiation_copy">
                  {props.confirm}
              </span>
          </div>
      </div>
  );
};
ConfirmationText.propTypes = {
    confirmText: PropTypes.string
};
export default ConfirmationText;
