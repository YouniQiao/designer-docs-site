# setPowerMode

## Modules to Import

```TypeScript
import { wifiManagerExt } from '@ohos.wifiManagerExt';
```

## setPowerMode

```TypeScript
function setPowerMode(mode: PowerMode): void
```

Set the current Wi-Fi power mode.

**Since:** 9

**Deprecated since:** 10

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | PowerMode | Yes |  |

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
      let model = 0;
      wifiManagerExt.setPowerMode(model);
  }catch(error){
      console.error("failed: " + JSON.stringify(error));
  }

```

