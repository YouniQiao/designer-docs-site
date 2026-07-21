# setLocationPrivacyConfirmStatus (System API)

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

<a id="setlocationprivacyconfirmstatus"></a>
## setLocationPrivacyConfirmStatus

```TypeScript
function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): void
```

Set location privacy protocol confirmation status.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_SECURE_SETTINGS

<!--Device-geoLocationManager-function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): void--><!--Device-geoLocationManager-function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): void-End-->

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [LocationPrivacyType](arkts-location-geolocation-locationprivacytype-e.md) | Yes | Indicates location privacy protocol type. |
| isConfirmed | boolean | Yes | Indicates whether the location privacy protocol has been confirmed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.setLocationPrivacyConfirmStatus} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.setLocationPrivacyConfirmStatus(1, true);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

