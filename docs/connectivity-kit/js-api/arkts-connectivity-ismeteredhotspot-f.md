# isMeteredHotspot

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## isMeteredHotspot

```TypeScript
function isMeteredHotspot(): boolean
```

Whether the hotspot is metered hotspot or not.

**Since:** 11

**Required permissions:** ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the hotspot is metered hotspot, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |

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

