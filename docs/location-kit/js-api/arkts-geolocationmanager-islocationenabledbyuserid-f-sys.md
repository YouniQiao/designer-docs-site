# isLocationEnabledByUserId

## isLocationEnabledByUserId

```TypeScript
function isLocationEnabledByUserId(userId: int): boolean
```

Obtaining the location switch status of a specified user.

**Since:** 18

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | Indicates the ID of a specified user. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the location switch on, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.isLocationEnabledByUserId} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  // Check whether the location switch is enabled for the specified system account. For example, if the account ID is below 101, you can check whether the location switch is enabled for the account whose ID is 100.
  let userId: number = 100;
  let locationEnabled = geoLocationManager.isLocationEnabledByUserId(userId);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

