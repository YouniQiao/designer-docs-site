# getGeofenceSupportedCoordTypes

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## getGeofenceSupportedCoordTypes

```TypeScript
function getGeofenceSupportedCoordTypes(): Array<CoordinateSystemType>
```

Obtains the coordinate system types supported by geofence.

**Since:** 12

<!--Device-geoLocationManager-function getGeofenceSupportedCoordTypes(): Array<CoordinateSystemType>--><!--Device-geoLocationManager-function getGeofenceSupportedCoordTypes(): Array<CoordinateSystemType>-End-->

**System capability:** SystemCapability.Location.Location.Geofence

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<CoordinateSystemType> | Return the coordinate system types supported by geofence. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getGeofenceSupportedCoordTypes} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let supportedCoordTypes: Array<geoLocationManager.CoordinateSystemType> = geoLocationManager.getGeofenceSupportedCoordTypes();
  console.info("getGeofenceSupportedCoordTypes return:" + JSON.stringify(supportedCoordTypes));
} catch (error) {
  console.error("getGeofenceSupportedCoordTypes: error=" + JSON.stringify(error));
}

```

