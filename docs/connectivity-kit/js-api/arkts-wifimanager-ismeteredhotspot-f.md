# isMeteredHotspot

## isMeteredHotspot

```TypeScript
function isMeteredHotspot(): boolean
```

Whether the hotspot is metered hotspot or not.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the hotspot is metered hotspot, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let isMeteredHotspot = wifiManager.isMeteredHotspot();
    console.info("isMeteredHotspot:" + isMeteredHotspot);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

