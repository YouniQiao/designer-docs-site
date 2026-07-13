# onLocationChange

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## onLocationChange

```TypeScript
function onLocationChange(request: LocationRequest | ContinuousLocationRequest,
  callback: Callback<Location>): void
```

Subscribe location changed.

**Since:** 26.0.0

**Required permissions:** ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | LocationRequest \| ContinuousLocationRequest | Yes | Indicates the location request parameters. |
| callback | Callback&lt;Location&gt; | Yes | Indicates the callback for reporting the location result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call ${geoLocationManager.on('locationChange')} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301100](../errorcode-geoLocationManager.md#3301100-positioning-failed-because-the-location-switch-is-turned-off) | The location switch is off. |

