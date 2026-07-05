# off

## off('locationChange')

```TypeScript
function off(type: 'locationChange', callback?: Callback<Location>): void
```

Unsubscribe location changed. You are advised to use the {@link offLocationChange} instead.

**起始版本：** 9

**需要权限：** 

- API版本9 - 24： ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationChange' | 是 | Indicates the location service event to be subscribed to. [since 9] |
| callback | Callback&lt;Location> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. Introduced in API 9 and will not be threw above  API 24. [since 9 - 24] |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('locationChange')} due to limited device capabilities. [since 9] |
| 3301000 | The location service is unavailable. [since 9] |
| 3301100 | The location switch is off.  Introduced in API 9 and will not be threw above API 17. [since 9 - 17] |
| 3301200 | Failed to obtain the geographical location.  Introduced in API 9 and will not be threw above API 17. [since 9 - 17] |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let requestInfo: geoLocationManager.LocationRequest = {
  'priority': geoLocationManager.LocationRequestPriority.FIRST_FIX,
  'scenario': geoLocationManager.LocationRequestScenario.UNSET,
  'timeInterval': 1,
  'distanceInterval': 0,
  'maxAccuracy': 0
};
let locationChange = (location: geoLocationManager.Location): void => {
  console.info('locationChange: data: ' + JSON.stringify(location));
};
try {
  geoLocationManager.on('locationChange', requestInfo, locationChange);
  geoLocationManager.off('locationChange', locationChange);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('locationError')

```TypeScript
function off(type: 'locationError', callback?: Callback<LocationError>): void
```

Unsubscribe continuous location error changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationError' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;LocationError> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are  left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('locationError')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let locationErrorChange = (errcode: geoLocationManager.LocationError): void => {
  console.info('locationErrorChange: data: ' + JSON.stringify(errcode));
};
try {
  geoLocationManager.on('locationError', locationErrorChange);
  geoLocationManager.off('locationError', locationErrorChange);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('locationEnabledChange')

```TypeScript
function off(type: 'locationEnabledChange', callback?: Callback<boolean>): void
```

Unsubscribe location switch changed.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationEnabledChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('locationEnabledChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let locationEnabledChange = (state: boolean): void => {
    console.info('locationEnabledChange: state: ' + JSON.stringify(state));
}
try {
    geoLocationManager.on('locationEnabledChange', locationEnabledChange);
    geoLocationManager.off('locationEnabledChange', locationEnabledChange);
} catch (err) {
    console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('cachedGnssLocationsChange')

```TypeScript
function off(type: 'cachedGnssLocationsChange', callback?: Callback<Array<Location>>): void
```

Unsubscribe to cache GNSS locations update messages.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cachedGnssLocationsChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;Array&lt;Location>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('cachedGnssLocationsChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let cachedLocationsCb = (locations: Array<geoLocationManager.Location>): void => {
  console.info('cachedGnssLocationsChange: locations: ' + JSON.stringify(locations));
}
let requestInfo: geoLocationManager.CachedGnssLocationsRequest = {
  'reportingPeriodSec': 10,
  'wakeUpCacheQueueFull': true
};
try {
  if (geoLocationManager.isCachedGnssServiceSupported()) {
    geoLocationManager.on('cachedGnssLocationsChange', requestInfo, cachedLocationsCb);
    geoLocationManager.off('cachedGnssLocationsChange');
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('satelliteStatusChange')

```TypeScript
function off(type: 'satelliteStatusChange', callback?: Callback<SatelliteStatusInfo>): void
```

Unsubscribe satellite status changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'satelliteStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;SatelliteStatusInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('satelliteStatusChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let gnssStatusCb = (satelliteStatusInfo: geoLocationManager.SatelliteStatusInfo): void => {
  console.info('satelliteStatusChange: ' + JSON.stringify(satelliteStatusInfo));
}
try {
  if (geoLocationManager.isGnssServiceSupported()) {
    geoLocationManager.on('satelliteStatusChange', gnssStatusCb);
    geoLocationManager.off('satelliteStatusChange', gnssStatusCb);
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('nmeaMessage')

```TypeScript
function off(type: 'nmeaMessage', callback?: Callback<string>): void
```

Unsubscribe nmea message changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'nmeaMessage' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('nmeaMessage')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let nmeaCb = (str: string): void => {
  console.info('nmeaMessage: ' + JSON.stringify(str));
}

try {
  if (geoLocationManager.isGnssServiceSupported()) {
    geoLocationManager.on('nmeaMessage', nmeaCb);
    geoLocationManager.off('nmeaMessage', nmeaCb);
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('gnssFenceStatusChange')

```TypeScript
function off(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void
```

Remove a geofence and unsubscribe geofence status changed.

**起始版本：** 9

**需要权限：** 

- API版本9 - 24： ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Geofence

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'gnssFenceStatusChange' | 是 | Indicates the location service event to be subscribed to. [since 9] |
| request | GeofenceRequest | 是 | Indicates the Geofence configuration parameters. [since 9] |
| want | WantAgent | 是 | Indicates which ability to start when the geofence event is triggered. [since 9] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. [since 9 - 24] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. [since 9] |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('gnssFenceStatusChange')} due to limited device capabilities. [since 9] |
| 3301000 | The location service is unavailable. [since 9] |
| 3301100 | The location switch is off. [since 9] |
| 3301600 | Failed to operate the geofence. [since 9] |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { wantAgent } from '@kit.AbilityKit';


let wantAgentInfo: wantAgent.WantAgentInfo = {
  wants: [
    {
      bundleName: "com.example.myapplication",
      abilityName: "EntryAbility",
      action: "action1",
    }
  ],
  actionType: wantAgent.OperationType.START_ABILITY,
  requestCode: 0,
  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {
  let requestInfo: geoLocationManager.GeofenceRequest = {
    'scenario': 0x301,
    "geofence": { "latitude": 31.12, "longitude": 121.11, "radius": 100, "expiration": 10000 }
  };
  try {
    if (geoLocationManager.isGnssFenceServiceSupported()) {
      geoLocationManager.on('gnssFenceStatusChange', requestInfo, wantAgentObj);
      geoLocationManager.off('gnssFenceStatusChange', requestInfo, wantAgentObj);
    }
  } catch (err) {
    console.error("errCode:" + err.code + ", message:" + err.message);
  }
});

```

## off('countryCodeChange')

```TypeScript
function off(type: 'countryCodeChange', callback?: Callback<CountryCode>): void
```

Unregistering the callback function for listening to country code changes.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'countryCodeChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;CountryCode> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('countryCodeChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301500 | Failed to query the area information. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: geoLocationManager.CountryCode): void => {
  console.info('countryCodeChange: ' + JSON.stringify(code));
}

try {
  geoLocationManager.on('countryCodeChange', callback);
  geoLocationManager.off('countryCodeChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## off('bluetoothScanResultChange')

```TypeScript
function off(type: 'bluetoothScanResultChange', callback?: Callback<BluetoothScanResult>): void
```

Stop bluetooth scanning and unregister to listen to bluetooth scanning result changes.

**起始版本：** 22

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bluetoothScanResultChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;BluetoothScanResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.off('bluetoothScanResultChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (result: geoLocationManager.BluetoothScanResult): void => {
  console.info('bluetoothScanResultChange: ' + JSON.stringify(result));
};
try {
  geoLocationManager.on('bluetoothScanResultChange', callback);
  geoLocationManager.off('bluetoothScanResultChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

