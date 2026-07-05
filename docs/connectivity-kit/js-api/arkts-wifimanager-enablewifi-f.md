# enableWifi

## enableWifi

```TypeScript
function enableWifi(): void
```

Enable Wi-Fi.

**Since:** 15

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)

**System capability:** SystemCapability.Communication.WiFi.STA

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501003 | Operation failed because the service is being closed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
  try {
    wifiManager.enableWifi();
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

