import "./styles.scss";

import React, { useState } from "react";

import { isReachable, getServerUrl } from "../../../utils/connectionStatus";

import IconWithText from "../IconWithText";
import Info from "../Icons/Info";

function ConnectionStatus() {
  const [isConnected, setConnectionStatus] = useState(true);
  const [hasErrorsConnecting, setErrorsStatus] = useState(false);

  const hasNoConnectivity = isConnected && hasErrorsConnecting;
  console.log(hasNoConnectivity)

  const handleConnection = () => {
    if (navigator.onLine) {
      isReachable(getServerUrl()).then(online => {
        if (online) {
          // handle online status
          setConnectionStatus(true);
        } else {
          setErrorsStatus(false);
        }
      });
    } else {
      // handle offline status
      setConnectionStatus(false);
    }
  };

  // Test this by running the code snippet below and then
  // use the "Offline" checkbox in DevTools Network panel

  window.addEventListener("online", handleConnection);
  window.addEventListener("offline", handleConnection);

  return (
    <>
      {!isConnected && (
        <IconWithText
          className="connectionStatus__no-internet-container"
          icon={Info}
          iconSize="big"
        >
          Offline
        </IconWithText>
      )}
      {/* {hasNoConnectivity && (
        <IconWithText
          className="connectionStatus__no-internet-container"
          icon={Info}
          iconSize="big"
        >
          Issues with Internet
        </IconWithText>
      )} */}
    </>
  );
}

export default ConnectionStatus;
