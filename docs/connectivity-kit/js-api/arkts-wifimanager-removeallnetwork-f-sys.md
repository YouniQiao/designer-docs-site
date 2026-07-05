# removeAllNetwork

## removeAllNetwork

```TypeScript
function removeAllNetwork(): void
```

Remove all the saved Wi-Fi configurations.

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  wifiManager.removeAllNetwork();    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

