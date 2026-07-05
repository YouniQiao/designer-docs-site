# getGeofenceSupportedCoordTypes

## getGeofenceSupportedCoordTypes

```TypeScript
function getGeofenceSupportedCoordTypes(): Array<CoordinateSystemType>
```

Obtains the coordinate system types supported by geofence.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;CoordinateSystemType> | Return the coordinate system types supported by geofence. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getGeofenceSupportedCoordTypes} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  if (geoLocationManager.isGnssFenceServiceSupported()) {
    let supportedCoordTypes: Array<geoLocationManager.CoordinateSystemType> = geoLocationManager.getGeofenceSupportedCoordTypes();
    console.info("getGeofenceSupportedCoordTypes return:" + JSON.stringify(supportedCoordTypes));
  }
} catch (error) {
  console.error("getGeofenceSupportedCoordTypes: error=" + JSON.stringify(error));
}

```

