# addGnssGeofence

## addGnssGeofence

```TypeScript
function addGnssGeofence(fenceRequest: GnssGeofenceRequest): Promise<int>
```

Add a geofence.

**起始版本：** 22

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Geofence

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fenceRequest | GnssGeofenceRequest | 是 | Indicates the Geofence configuration parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | The promise returned by the function, for reporting the ID of geofence. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.addGnssGeofence} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301601 | The number of geofences exceeds the maximum. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { notificationManager } from '@kit.NotificationKit';
// 创建围栏
let geofence: geoLocationManager.Geofence = {
  "latitude": 34.12, "longitude": 124.11, "radius": 10000.0, "expiration": 10000.0
}
// 指定APP需要监听的地理围栏事件类型，这里表示需要监听进入围栏和退出围栏事件
let transitionStatusList: Array<geoLocationManager.GeofenceTransitionEvent> = [
geoLocationManager.GeofenceTransitionEvent.GEOFENCE_TRANSITION_EVENT_ENTER,
geoLocationManager.GeofenceTransitionEvent.GEOFENCE_TRANSITION_EVENT_EXIT,
];
// 创建GEOFENCE_TRANSITION_EVENT_ENTER事件对应的通知对象
let notificationRequest1: notificationManager.NotificationRequest = {
  id: 1,
  content: {
    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
    normal: {
      title: "围栏通知",
      text: "围栏进入",
      additionalText: ""
    }
  }
};
// 创建GEOFENCE_TRANSITION_EVENT_EXIT事件对应的通知对象
let notificationRequest2: notificationManager.NotificationRequest = {
  id: 2,
  content: {
    notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
    normal: {
      title: '围栏通知',
      text: '围栏退出',
      additionalText: ""
    }
  }
};
// 把创建的通知对象存入Array中，存入顺序与transitionStatusList一致
let notificationRequestList: Array<notificationManager.NotificationRequest> =
  [notificationRequest1, notificationRequest2];
// 构造GNSS地理围栏请求对象gnssGeofenceRequest
let gnssGeofenceRequest: geoLocationManager.GnssGeofenceRequest = {
  // 围栏属性，包含圆心和半径等信息
  geofence: geofence,
  // 指定APP需要监听的地理围栏事件类型
  monitorTransitionEvents: transitionStatusList,
  // 地理围栏事件对应的通知对象，该参数为可选
  notifications: notificationRequestList,
  // 设备驻留在地理围栏内的时间，该参数为可选
  loiterTimeMs: 10000,
  // 围栏回调要拉起的FenceExtensionAbility名称，该参数为可选
  fenceExtensionAbilityName: "FenceExtensionAbility",
  // 用于监听围栏事件的callback
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
  if (geoLocationManager.isGnssFenceServiceSupported()) {
    // 添加围栏
    geoLocationManager.addGnssGeofence(gnssGeofenceRequest).then((id) => {
      // 围栏添加成功后返回围栏ID
      console.info("addGnssGeofence success, fence id: " + id);
      let fenceId = id;
    }).catch((err: BusinessError) => {
      console.error("addGnssGeofence failed, promise errCode:" + (err as BusinessError).code +
      ",errMessage:" + (err as BusinessError).message);
    });
  }
} catch (error) {
  console.error("addGnssGeofence failed, err:" + JSON.stringify(error));
}

```

