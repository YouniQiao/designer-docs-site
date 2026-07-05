# on

## on('locatingRequiredDataChange')

```TypeScript
function on(type: 'locatingRequiredDataChange', config: LocatingRequiredDataConfig, callback: Callback<Array<LocatingRequiredData>>): void
```

Subscribe to changes in WiFi/BT scanning information, and use the WiFi/BT scanning information for localization.

**Since:** 10

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'locatingRequiredDataChange' | Yes | Indicates the location service event to be subscribed to. |
| config | LocatingRequiredDataConfig | Yes | Indicates the locating required data configuration parameters. |
| callback | Callback&lt;Array&lt;LocatingRequiredData>> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.on('locatingRequiredDataChange')} due to limited device capabilities. |
| 3301800 | Failed to start WiFi or Bluetooth scanning. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: Array<geoLocationManager.LocatingRequiredData>): void => {
  console.info('locatingRequiredDataChange: ' + JSON.stringify(code));
}
let config: geoLocationManager.LocatingRequiredDataConfig = { 'type': 1, 'needStartScan': true, 'scanInterval': 10000 };
try {
  geoLocationManager.on('locatingRequiredDataChange', config, callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('locationIconStatusChange')

```TypeScript
function on(type: 'locationIconStatusChange', callback: Callback<LocationIconStatus>): void
```

Subscribe location icon status changed.

**Since:** 12

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'locationIconStatusChange' | Yes | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;LocationIconStatus> | Yes | Indicates the callback for reporting the location icon status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.on('locationIconStatusChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: geoLocationManager.LocationIconStatus): void => {
  console.info('LocationIconStatus: ' + JSON.stringify(code));
}
try {
  geoLocationManager.on('locationIconStatusChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

