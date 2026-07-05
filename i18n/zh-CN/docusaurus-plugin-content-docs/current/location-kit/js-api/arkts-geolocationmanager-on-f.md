# on

## on('locationChange')

```TypeScript
function on(type: 'locationChange', request: LocationRequest | ContinuousLocationRequest,
  callback: Callback<Location>): void
```

Subscribe location changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationChange' | 是 | Indicates the location service event to be subscribed to. |
| request | LocationRequest \| ContinuousLocationRequest | 是 | Indicates the location request parameters. |
| callback | Callback&lt;Location> | 是 | Indicates the callback for reporting the location result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters  are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('locationChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

// 方式一：使用LocationRequest作为入参
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
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

// 方式二：使用ContinuousLocationRequest作为入参
let request: geoLocationManager.ContinuousLocationRequest = {
  'interval': 1,
  'locationScenario': geoLocationManager.UserActivityScenario.NAVIGATION
};
let locationCallback = (location: geoLocationManager.Location): void => {
  console.info('locationCallback: data: ' + JSON.stringify(location));
};
try {
  geoLocationManager.on('locationChange', request, locationCallback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('locationError')

```TypeScript
function on(type: 'locationError', callback: Callback<LocationError>): void
```

Subscribe continuous location error changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationError' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;LocationError> | 是 | Indicates the callback for reporting the  continuous location error. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not  have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters  are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('locationError')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

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
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

let locationErrorChange = (errcode: geoLocationManager.LocationError): void => {
  console.info('locationErrorChange: data: ' + JSON.stringify(errcode));
};
try {
  geoLocationManager.on('locationError', locationErrorChange);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('locationEnabledChange')

```TypeScript
function on(type: 'locationEnabledChange', callback: Callback<boolean>): void
```

Subscribe location switch changed.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationEnabledChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;boolean> | 是 | Indicates the callback for reporting the location switch status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('locationEnabledChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable.  @crossplatform |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let locationEnabledChange = (state: boolean): void => {
    console.info('locationEnabledChange: ' + JSON.stringify(state));
}
try {
    geoLocationManager.on('locationEnabledChange', locationEnabledChange);
} catch (err) {
    console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('cachedGnssLocationsChange')

```TypeScript
function on(type: 'cachedGnssLocationsChange', request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void
```

Subscribe to cache GNSS locations update messages.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cachedGnssLocationsChange' | 是 | Indicates the location service event to be subscribed to. |
| request | CachedGnssLocationsRequest | 是 | Indicates the cached GNSS locations request parameters. |
| callback | Callback&lt;Array&lt;Location>> | 是 | Indicates the callback for reporting the cached GNSS locations. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('cachedGnssLocationsChange')} due to limited device capabilities. |
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
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('satelliteStatusChange')

```TypeScript
function on(type: 'satelliteStatusChange', callback: Callback<SatelliteStatusInfo>): void
```

Subscribe satellite status changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'satelliteStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;SatelliteStatusInfo> | 是 | Indicates the callback for reporting the satellite status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('satelliteStatusChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let gnssStatusCb = (satelliteStatusInfo: geoLocationManager.SatelliteStatusInfo): void => {
  console.info('satelliteStatusChange: ' + JSON.stringify(satelliteStatusInfo));
  // 表示卫星个数
  let totalNumber: number = satelliteStatusInfo.satellitesNumber;
  let satelliteIds: Array<number> = satelliteStatusInfo.satelliteIds;
  let carrierToNoiseDensitys: Array<number> = satelliteStatusInfo.carrierToNoiseDensitys;
  let altitudes: Array<number> = satelliteStatusInfo.altitudes;
  let azimuths: Array<number> = satelliteStatusInfo.azimuths;
  let carrierFrequencies: Array<number> = satelliteStatusInfo.carrierFrequencies;
  let satelliteConstellations: Array<geoLocationManager.SatelliteConstellationCategory> | undefined = satelliteStatusInfo.satelliteConstellation;
  let satelliteAdditionalInfos: Array<number> | undefined = satelliteStatusInfo.satelliteAdditionalInfo;
  for (let i = 0;i < totalNumber; i++) {
    // 卫星的ID
    let satelliteId: number = satelliteIds[i];
    // 表示卫星的ID为 ${satelliteId} 的卫星的载波噪声功率谱密度比
    let carrierToNoiseDensity: number = carrierToNoiseDensitys[i];
    // 表示卫星的ID为 ${satelliteId} 的卫星的高度角信息
    let altitude: number = altitudes[i];
    // 表示卫星的ID为 ${satelliteId} 的卫星的方位角
    let azimuth: number = azimuths[i];
    // 表示卫星的ID为 ${satelliteId} 的卫星的载波频率
    let carrierFrequency: number = carrierFrequencies[i];
    if (satelliteConstellations != undefined) {
      // 表示卫星的ID为 ${satelliteId} 的卫星的星座类型
      let satelliteConstellation: geoLocationManager.SatelliteConstellationCategory = satelliteConstellations[i];
    }
    if (satelliteAdditionalInfos != undefined) {
      // 表示卫星的ID为 ${satelliteId} 的卫星的附加信息；表示是否在最新的位置解算中使用了本卫星，是否具有星历数据，是否具有年历数据，是否具有载波频率信息等。
      let satelliteAdditionalInfo: number = satelliteAdditionalInfos[i];
    }
  }
}

try {
  if (geoLocationManager.isGnssServiceSupported()) {
    geoLocationManager.on('satelliteStatusChange', gnssStatusCb);
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('nmeaMessage')

```TypeScript
function on(type: 'nmeaMessage', callback: Callback<string>): void
```

Subscribe nmea message changed.

**起始版本：** 22

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'nmeaMessage' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;string> | 是 | Indicates the callback for reporting the nmea message. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('nmeaMessage')} due to limited device capabilities. |
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
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('gnssFenceStatusChange')

```TypeScript
function on(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void
```

Add a geofence and subscribe geofence status changed.

**起始版本：** 9

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Geofence

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'gnssFenceStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| request | GeofenceRequest | 是 | Indicates the Geofence configuration parameters. |
| want | WantAgent | 是 | Indicates which ability to start when the geofence event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.on('gnssFenceStatusChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301600 | Failed to operate the geofence. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { wantAgent } from '@kit.AbilityKit';


let wantAgentInfo: wantAgent.WantAgentInfo = {
  wants: [
    {
      bundleName: "com.example.myapplication",
      abilityName: "EntryAbility",
      action: "action1"
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
    }
  } catch (err) {
    console.error("errCode:" + err.code + ", message:" + err.message);
  }
});

```

## on('countryCodeChange')

```TypeScript
function on(type: 'countryCodeChange', callback: Callback<CountryCode>): void
```

Registering the callback function for listening to country code changes.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'countryCodeChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;CountryCode> | 是 | Indicates the callback for reporting country code changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('countryCodeChange')} due to limited device capabilities. |
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
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('bluetoothScanResultChange')

```TypeScript
function on(type: 'bluetoothScanResultChange', callback: Callback<BluetoothScanResult>): void
```

Registers and listens to bluetooth scanning results for location services.

**起始版本：** 22

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bluetoothScanResultChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;BluetoothScanResult> | 是 | Indicates the callback for reporting Bluetooth scan info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does  not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.on('bluetoothScanResultChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';


let callback = (result: geoLocationManager.BluetoothScanResult): void => {
  console.info('bluetoothScanResultChange: ' + JSON.stringify(result));
};
try {
  geoLocationManager.on('bluetoothScanResultChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}


```

