# addGnssGeofence

## addGnssGeofence

```TypeScript
function addGnssGeofence(fenceRequest: GnssGeofenceRequest): Promise<int>
```

Add a geofence.

**Since:** 22

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Geofence

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fenceRequest | GnssGeofenceRequest | Yes | Indicates the Geofence configuration parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | The promise returned by the function, for reporting the ID of geofence. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.addGnssGeofence} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301601 | The number of geofences exceeds the maximum. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { notificationManager } from '@kit.NotificationKit';
// Create a geofence.
let geofence: geoLocationManager.Geofence = {
  "latitude": 34.12, "longitude": 124.11, "radius": 10000.0, "expiration": 10000.0
}
// Specify the types of geofence transition events to listen for. Geofence entry and exit events are used as an example.
let transitionStatusList: Array<geoLocationManager.GeofenceTransitionEvent> = [
geoLocationManager.GeofenceTransitionEvent.GEOFENCE_TRANSITION_EVENT_ENTER,
geoLocationManager.GeofenceTransitionEvent.GEOFENCE_TRANSITION_EVENT_EXIT,
];
// Create a notification object for GEOFENCE_TRANSITION_EVENT_ENTER.
let notificationRequest1: notificationManager.NotificationRequest = {
  id: 1,
  content: {
    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
    normal: {
      title: "Geofence Notification",
      text: "Geofence Entry",
      additionalText: ""
    }
  }
};
// Create a notification object for GEOFENCE_TRANSITION_EVENT_EXIT.
let notificationRequest2: notificationManager.NotificationRequest = {
  id: 2,
  content: {
    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
    normal: {
      title: "Geofence Notification",
      text: 'Geofence Exit',
      additionalText: ""
    }
  }
};
// Save the created notification objects to Array in the same sequence as in transitionStatusList.
let notificationRequestList: Array<notificationManager.NotificationRequest> =
  [notificationRequest1, notificationRequest2];
// Construct a gnssGeofenceRequest object.
let gnssGeofenceRequest: geoLocationManager.GnssGeofenceRequest = {
  // Geofence attributes, including the circle center and radius.
  geofence: geofence,
  // Specify the types of geofence transition events to listen for.
  monitorTransitionEvents: transitionStatusList,
  // Specify the notification objects for geofence transition events. This parameter is optional.
  notifications: notificationRequestList,
  // Specify the duration during which the device dwells in the geofence. This parameter is optional.
  loiterTimeMs: 10000,
  // Specify the name of FenceExtensionAbility to be started for the geofence callback. This parameter is optional.
  fenceExtensionAbilityName: "FenceExtensionAbility",
  // Specify the callback used to receive geofence transition events.
  geofenceTransitionCallback: (err: BusinessError, transition: geoLocationManager.GeofenceTransition) => {
    if (err) {
      console.error('geofenceTransitionCallback: err=' + JSON.stringify(err));
    }
    if (transition) {
      console.info("GeofenceTransition: %{public}s", JSON.stringify(transition));
    }
  }
}
try {
  // Add a geofence.
  geoLocationManager.addGnssGeofence(gnssGeofenceRequest).then((id) => {
    // Obtain the geofence ID after the geofence is successfully added.
    console.info("addGnssGeofence success, fence id: " + id);
    let fenceId = id;
  }).catch((err: BusinessError) => {
    console.error("addGnssGeofence failed, promise errCode:" + (err as BusinessError).code +
    ",errMessage:" + (err as BusinessError).message);
  });
} catch (error) {
  console.error("addGnssGeofence failed, err:" + JSON.stringify(error));
}

```

