# enableHotspot

## Modules to Import

```TypeScript
import { wifiManagerExt } from '@kit.ConnectivityKit';
```

<a id="enablehotspot"></a>
## enableHotspot

```TypeScript
function enableHotspot(): void
```

Enable Wi-Fi hotspot function.This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.

**Since:** 9

**Deprecated since:** 10

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

<!--Device-wifiManagerExt-function enableHotspot(): void--><!--Device-wifiManagerExt-function enableHotspot(): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2701000](../errorcode-wifi.md#2701000-ap-extension-module-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManagerExt } from '@kit.ConnectivityKit';

  try {
      wifiManagerExt.enableHotspot();
  }catch(error){
      console.error("failed: " + JSON.stringify(error));
  }

```

