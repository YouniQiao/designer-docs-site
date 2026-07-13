# off (System API)

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## off('locatingRequiredDataChange')

```TypeScript
function off(type: 'locatingRequiredDataChange', callback?: Callback<Array<LocatingRequiredData>>): void
```

Stop WiFi/BT scanning and unsubscribe from WiFi/BT scanning information changes.

**Since:** 10

**Required permissions:** ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'locatingRequiredDataChange' | Yes | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;Array&lt;LocatingRequiredData&gt;&gt; | No | Indicates the callback for reporting WiFi/BT scan info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call ${geoLocationManager.off('locatingRequiredDataChange')} due to limited device capabilities. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: Array<geoLocationManager.LocatingRequiredData>): void => {
  console.info('locatingRequiredDataChange: ' + JSON.stringify(code));
}
let config: geoLocationManager.LocatingRequiredDataConfig = { 'type': 1, 'needStartScan': true, 'scanInterval': 10000 };
try {
  geoLocationManager.on('locatingRequiredDataChange', config, callback);
  geoLocationManager.off('locatingRequiredDataChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```


## off('locationIconStatusChange')

```TypeScript
function off(type: 'locationIconStatusChange', callback?: Callback<LocationIconStatus>): void
```

Unsubscribe location icon status changed.

**Since:** 12

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'locationIconStatusChange' | Yes | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;LocationIconStatus&gt; | No | Indicates the callback for reporting the location icon status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call ${geoLocationManager.off('locationIconStatusChange')} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: geoLocationManager.LocationIconStatus): void => {
  console.info('LocationIconStatus: ' + JSON.stringify(code));
}
try {
  geoLocationManager.on('locationIconStatusChange', callback);
  geoLocationManager.off('locationIconStatusChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

