# enableHotspot

## enableHotspot

```TypeScript
function enableHotspot(): void
```

Enable Wi-Fi hotspot function. This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.

**Since:** 9

**Deprecated since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2701000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManagerExt } from '@kit.ConnectivityKit';

  try {
      wifiManagerExt.enableHotspot();
  }catch(error){
      console.error("failed: " + JSON.stringify(error));
  }

```

