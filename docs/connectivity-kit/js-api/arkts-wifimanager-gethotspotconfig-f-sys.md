# getHotspotConfig

## getHotspotConfig

```TypeScript
function getHotspotConfig(): HotspotConfig
```

Obtain the Wi-Fi hotspot configuration.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| HotspotConfig | Returns the configuration of an existed or enabled Wi-Fi hotspot. |

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
  let config = wifiManager.getHotspotConfig();
  console.info("result:" + JSON.stringify(config));    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

