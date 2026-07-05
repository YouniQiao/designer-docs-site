# enableSemiWifi

## enableSemiWifi

```TypeScript
function enableSemiWifi(): void
```

Enable semi - Wifi.

**Since:** 12

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
| 2501004 | Operation failed because the service is being opened. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.enableSemiWifi();
  } catch(error) {
    console.error("failed:" + JSON.stringify(error));
  }

```

