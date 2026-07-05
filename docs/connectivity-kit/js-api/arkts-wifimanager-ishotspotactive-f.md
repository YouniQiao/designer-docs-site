# isHotspotActive

## isHotspotActive

```TypeScript
function isHotspotActive(): boolean
```

Check whether Wi-Fi hotspot is active on a device.

**Since:** 15

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let ret = wifiManager.isHotspotActive();
    console.info("result:" + ret);    
  } catch(error) {
    console.error("failed:" + JSON.stringify(error));
  }

```

