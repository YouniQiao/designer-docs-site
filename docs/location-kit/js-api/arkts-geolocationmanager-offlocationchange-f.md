# offLocationChange

## offLocationChange

```TypeScript
function offLocationChange(callback?: Callback<Location>): void
```

Unsubscribe location changed.

**Since:** 23

**Required permissions:** 

- API version23  to  24: ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Location> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. Introduced in API 9 and  will not be threw above API 24. [since 23 - 24] |
| 801 | Capability not supported.  Failed to call ${geoLocationManager.off('locationChange')} due to limited device capabilities.  [since 23] |
| 3301000 | The location service is unavailable. [since 23] |

