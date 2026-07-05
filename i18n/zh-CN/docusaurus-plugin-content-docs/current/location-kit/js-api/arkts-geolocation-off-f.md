# off

## off('locationChange')

```TypeScript
function off(type: 'locationChange', callback?: Callback<Location>): void
```

Unsubscribe location changed

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:locationChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;Location> | 否 |  |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.LocationRequest = {'priority': 0x203, 'scenario': 0x300, 'timeInterval': 0, 'distanceInterval': 0, 'maxAccuracy': 0};
let locationChange = (location:geolocation.Location):void => {
    console.info('locationChanger: data: ' + JSON.stringify(location));
};
geolocation.on('locationChange', requestInfo, locationChange);
geolocation.off('locationChange', locationChange);

```

## off('locationServiceState')

```TypeScript
function off(type: 'locationServiceState', callback?: Callback<boolean>): void
```

Unsubscribe location switch changed

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:locationEnabledChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationServiceState' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;boolean> | 否 |  |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let locationServiceState = (state:boolean):void => {
    console.info('locationServiceState: state: ' + JSON.stringify(state));
}
geolocation.on('locationServiceState', locationServiceState);
geolocation.off('locationServiceState', locationServiceState);

```

## off('cachedGnssLocationsReporting')

```TypeScript
function off(type: 'cachedGnssLocationsReporting', callback?: Callback<Array<Location>>): void
```

Unsubscribe to cache GNSS locations update messages

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:cachedGnssLocationsChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cachedGnssLocationsReporting' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;Array&lt;Location>> | 否 |  |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let cachedLocationsCb = (locations:Array<geolocation.Location>):void => {
    console.info('cachedGnssLocationsReporting: locations: ' + JSON.stringify(locations));
}
let requestInfo:geolocation.CachedGnssLocationsRequest = {'reportingPeriodSec': 10, 'wakeUpCacheQueueFull': true};
geolocation.on('cachedGnssLocationsReporting', requestInfo, cachedLocationsCb);
geolocation.off('cachedGnssLocationsReporting');

```

## off('gnssStatusChange')

```TypeScript
function off(type: 'gnssStatusChange', callback?: Callback<SatelliteStatusInfo>): void
```

Unsubscribe gnss status changed

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:satelliteStatusChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'gnssStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;SatelliteStatusInfo> | 否 |  |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let gnssStatusCb = (satelliteStatusInfo:geolocation.SatelliteStatusInfo) => {
    console.info('gnssStatusChange: ' + JSON.stringify(satelliteStatusInfo));
}
geolocation.on('gnssStatusChange', gnssStatusCb);
geolocation.off('gnssStatusChange', gnssStatusCb);

```

## off('nmeaMessageChange')

```TypeScript
function off(type: 'nmeaMessageChange', callback?: Callback<string>): void
```

Unsubscribe nmea message changed

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:nmeaMessage

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'nmeaMessageChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;string> | 否 |  |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let nmeaCb = (str:string):void => {
    console.info('nmeaMessageChange: ' + JSON.stringify(str));
}
geolocation.on('nmeaMessageChange', nmeaCb);
geolocation.off('nmeaMessageChange', nmeaCb);

```

## off('fenceStatusChange')

```TypeScript
function off(type: 'fenceStatusChange', request: GeofenceRequest, want: WantAgent): void
```

Remove a geofence and unsubscribe geo fence status changed

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:gnssFenceStatusChange

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
            action: "action1",
        }
    ],
    operationType: wantAgent.OperationType.START_ABILITY,
    requestCode: 0,
    wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
};

wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {
  let requestInfo:geolocation.GeofenceRequest = {'priority': 0x201, 'scenario': 0x301, "geofence": {"latitude": 31.12, "longitude": 121.11, "radius": 100, "expiration": 10000}};
  geolocation.on('fenceStatusChange', requestInfo, wantAgentObj);
  geolocation.off('fenceStatusChange', requestInfo, wantAgentObj);
});

```

