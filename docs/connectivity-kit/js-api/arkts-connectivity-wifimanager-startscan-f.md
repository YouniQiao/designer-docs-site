# startScan

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="startscan"></a>
## startScan

```TypeScript
function startScan(): void
```

Scan Wi-Fi hotspot.

**Since:** 21

**Required permissions:** ohos.permission.SET_WIFI_INFO

<!--Device-wifiManager-function startScan(): void--><!--Device-wifiManager-function startScan(): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.startScan();
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

