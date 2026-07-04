# on

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
```

## on('locationChange')

```TypeScript
function on(type: 'locationChange', request: LocationRequest, callback: Callback<Location>): void
```

Subscribe location changed

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:locationChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'locationChange' | Yes | Indicates the location service event to be subscribed to. |
| request | LocationRequest | Yes | Indicates the location request parameters. |
| callback | Callback&lt;Location&gt; | Yes | Indicates the callback for reporting the location result. |

**Example**

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

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:locationEnabledChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'locationServiceState' | Yes | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;boolean&gt; | Yes | Indicates the callback for reporting the location result. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:cachedGnssLocationsChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cachedGnssLocationsReporting' | Yes | Indicates the location service event to be subscribed to. |
| request | CachedGnssLocationsRequest | Yes | Indicates the cached GNSS locations request parameters. |
| callback | Callback&lt;Array&lt;Location&gt;&gt; | Yes | Indicates the callback for reporting the cached GNSS locations. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:satelliteStatusChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'gnssStatusChange' | Yes | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;SatelliteStatusInfo&gt; | Yes | Indicates the callback for reporting the gnss status change. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:nmeaMessage

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nmeaMessageChange' | Yes | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;string&gt; | Yes | Indicates the callback for reporting the nmea message. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:gnssFenceStatusChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Geofence

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fenceStatusChange' | Yes | Indicates the location service event to be subscribed to. |
| request | GeofenceRequest | Yes | Indicates the Geo-fence configuration parameters. |
| want | WantAgent | Yes | Indicates which ability to start when the geofence event is triggered. |

**Example**

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

