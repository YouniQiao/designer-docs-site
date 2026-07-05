# on

## on('locationChange')

```TypeScript
function on(type: 'locationChange', request: LocationRequest, callback: Callback<Location>): void
```

Subscribe location changed

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:locationChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationChange' | 是 | Indicates the location service event to be subscribed to. |
| request | LocationRequest | 是 | Indicates the location request parameters. |
| callback | Callback&lt;Location> | 是 | Indicates the callback for reporting the location result. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.LocationRequest = {'priority': 0x203, 'scenario': 0x300, 'timeInterval': 0, 'distanceInterval': 0, 'maxAccuracy': 0};
let locationChange = (location:geolocation.Location):void => {
    console.info('locationChanger: data: ' + JSON.stringify(location));
};
geolocation.on('locationChange', requestInfo, locationChange);

```

## on('locationServiceState')

```TypeScript
function on(type: 'locationServiceState', callback: Callback<boolean>): void
```

Subscribe location switch changed

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:locationEnabledChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationServiceState' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;boolean> | 是 | Indicates the callback for reporting the location result. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let locationServiceState = (state:boolean):void => {
    console.info('locationServiceState: ' + JSON.stringify(state));
}
geolocation.on('locationServiceState', locationServiceState);

```

## on('cachedGnssLocationsReporting')

```TypeScript
function on(type: 'cachedGnssLocationsReporting', request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void
```

Subscribe to cache GNSS locations update messages

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:cachedGnssLocationsChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cachedGnssLocationsReporting' | 是 | Indicates the location service event to be subscribed to. |
| request | CachedGnssLocationsRequest | 是 | Indicates the cached GNSS locations request parameters. |
| callback | Callback&lt;Array&lt;Location>> | 是 | Indicates the callback for reporting the cached GNSS locations. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let cachedLocationsCb = (locations:Array<geolocation.Location>):void => {
    console.info('cachedGnssLocationsReporting: locations: ' + JSON.stringify(locations));
}
let requestInfo:geolocation.CachedGnssLocationsRequest = {'reportingPeriodSec': 10, 'wakeUpCacheQueueFull': true};
geolocation.on('cachedGnssLocationsReporting', requestInfo, cachedLocationsCb);

```

## on('gnssStatusChange')

```TypeScript
function on(type: 'gnssStatusChange', callback: Callback<SatelliteStatusInfo>): void
```

Subscribe gnss status changed

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:satelliteStatusChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'gnssStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;SatelliteStatusInfo> | 是 | Indicates the callback for reporting the gnss status change. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let gnssStatusCb = (satelliteStatusInfo:geolocation.SatelliteStatusInfo):void => {
    console.info('gnssStatusChange: ' + JSON.stringify(satelliteStatusInfo));
}
geolocation.on('gnssStatusChange', gnssStatusCb);

```

## on('nmeaMessageChange')

```TypeScript
function on(type: 'nmeaMessageChange', callback: Callback<string>): void
```

Subscribe nmea message changed

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:nmeaMessage

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'nmeaMessageChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;string> | 是 | Indicates the callback for reporting the nmea message. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let nmeaCb = (str:string):void => {
    console.info('nmeaMessageChange: ' + JSON.stringify(str));
}
geolocation.on('nmeaMessageChange', nmeaCb );

```

## on('fenceStatusChange')

```TypeScript
function on(type: 'fenceStatusChange', request: GeofenceRequest, want: WantAgent): void
```

Add a geofence and subscribe geo fence status changed

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:gnssFenceStatusChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geofence

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'fenceStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| request | GeofenceRequest | 是 | Indicates the Geo-fence configuration parameters. |
| want | WantAgent | 是 | Indicates which ability to start when the geofence event is triggered. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
import wantAgent from '@ohos.app.ability.wantAgent';

let wantAgentInfo:wantAgent.WantAgentInfo = {
    wants: [
        {
            bundleName: "com.example.myapplication",
            abilityName: "EntryAbility",
            action: "action1"
        }
    ],
    operationType: wantAgent.OperationType.START_ABILITY,
    requestCode: 0,
    wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG],
};

wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {
  let requestInfo:geolocation.GeofenceRequest = {'priority': 0x201, 'scenario': 0x301, "geofence": {"latitude": 31.12, "longitude": 121.11, "radius": 100, "expiration": 10000}};
  geolocation.on('fenceStatusChange', requestInfo, wantAgentObj);
});

```

