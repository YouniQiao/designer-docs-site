# isWifiActive

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="iswifiactive"></a>
## isWifiActive

```TypeScript
function isWifiActive(): boolean
```

Query the Wi-Fi status

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-wifiManager-function isWifiActive(): boolean--><!--Device-wifiManager-function isWifiActive(): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let isWifiActive = wifiManager.isWifiActive();
    console.info("isWifiActive:" + isWifiActive);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

