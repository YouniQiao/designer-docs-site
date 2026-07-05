# getHotspotConfig (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## getHotspotConfig

```TypeScript
function getHotspotConfig(): HotspotConfig
```

Obtain the Wi-Fi hotspot configuration.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| HotspotConfig | Returns the configuration of an existed or enabled Wi-Fi hotspot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |

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

