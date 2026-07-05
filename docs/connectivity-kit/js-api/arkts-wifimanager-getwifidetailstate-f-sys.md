# getWifiDetailState

## getWifiDetailState

```TypeScript
function getWifiDetailState(): WifiDetailState
```

Obtains information about a Wi-Fi detail state.

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| WifiDetailState | Returns information about wifi state. |

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

try {
    let ret = wifiManager.getWifiDetailState();
    console.info("wifiDetailState:" + ret);
} catch (error) {
    console.error("failed:" + JSON.stringify(error));
}


```

