# disableHotspot

## disableHotspot

```TypeScript
function disableHotspot(): void
```

Disable Wi-Fi hotspot function. This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled.

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_WIFI_HOTSPOT

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  wifiManager.disableHotspot();  
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

