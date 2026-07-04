# offLocationChange

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## offLocationChange

```TypeScript
function offLocationChange(callback?: Callback<Location>): void
```

Unsubscribe location changed.

**Since:** 26.0.0

**Required permissions:** 
- API version 23 - 24: ohos.permission.APPROXIMATELY_LOCATION

**System capability:** 
- API version 23 and later: SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Location&gt; | No | Indicates the callback for reporting the location result.<br>**Since:** 23 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. Introduced in API 9 andwill not be threw above API 24.<br>**Applicable version:** 23 - 24 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call ${geoLocationManager.off('locationChange')} due to limited device capabilities.<br>**Applicable version:** 23 |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable.<br>**Applicable version:** 23 |

