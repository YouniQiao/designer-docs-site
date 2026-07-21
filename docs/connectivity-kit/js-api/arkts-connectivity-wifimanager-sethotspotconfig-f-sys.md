# setHotspotConfig (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="sethotspotconfig"></a>
## setHotspotConfig

```TypeScript
function setHotspotConfig(config: HotspotConfig): void
```

Set the hotspot configuration for the device.

**Since:** 9

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

<!--Device-wifiManager-function setHotspotConfig(config: HotspotConfig): void--><!--Device-wifiManager-function setHotspotConfig(config: HotspotConfig): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [HotspotConfig](arkts-connectivity-wifi-hotspotconfig-i-sys.md) | Yes | Indicates the Wi-Fi hotspot configuration.The SSID and {@code securityType} must be available and correct.If {@code securityType} is not {@code open}, {@code preSharedKey} must be available and correct. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Incorrect parameter types.2.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2601000](../errorcode-wifi.md#2601000-hotspot-module-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.HotspotConfig = {
    ssid: "****",
    securityType: 3,
    band: 0,
    channel: 0,
    preSharedKey: "****",
    maxConn: 0
  }
  let ret = wifiManager.setHotspotConfig(config);
  console.info("result:" + ret);    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

