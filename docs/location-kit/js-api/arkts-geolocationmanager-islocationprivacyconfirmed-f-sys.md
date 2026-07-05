# isLocationPrivacyConfirmed

## isLocationPrivacyConfirmed

```TypeScript
function isLocationPrivacyConfirmed(type: LocationPrivacyType): boolean
```

Querying location privacy protocol confirmation status.

**Since:** 9

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | LocationPrivacyType | Yes | Indicates location privacy protocol type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the location privacy protocol has been confirmed, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.isLocationPrivacyConfirmed} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isConfirmed = geoLocationManager.isLocationPrivacyConfirmed(1);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

