# getWifiCapability

## getWifiCapability

```TypeScript
function getWifiCapability(capability: WifiCapability): boolean
```

Get Wi-Fi capability

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.WiFi.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | WifiCapability | Yes | Identifies the Wi-Fi capability |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} the specified is enable Returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let result = wifiManager.getWifiCapability(wifiManager.WifiCapability.WIFI_AUTO_ENABLE);
console.info("result:" + result);


```

