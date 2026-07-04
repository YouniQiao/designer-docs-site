# getLocatingRequiredData (System API)

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## getLocatingRequiredData

```TypeScript
function getLocatingRequiredData(config: LocatingRequiredDataConfig): Promise<Array<LocatingRequiredData>>
```

Get WiFi/BT scanning information, and use the WiFi/BT scanning information for localization.

**Since:** 10

**Required permissions:** ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | LocatingRequiredDataConfig | Yes | Indicates the request parameters for obtaining the data required for locating. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LocatingRequiredData&gt;&gt; | The promise returned by the function, for reporting WiFi/BT scan info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call ${geoLocationManager.getLocatingRequiredData} due to limited device capabilities. |
| [3301800](../errorcode-geoLocationManager.md#3301800-failed-to-start-wifi-or-bluetooth-scanning) | Failed to start WiFi or Bluetooth scanning. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let config: geoLocationManager.LocatingRequiredDataConfig = { 'type': 1, 'needStartScan': true, 'scanInterval': 10000 };
try {
  geoLocationManager.getLocatingRequiredData(config).then((result) => {
    console.info('getLocatingRequiredData return: ' + JSON.stringify(result));
  })
    .catch((error: BusinessError) => {
      console.error('promise, getLocatingRequiredData: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

