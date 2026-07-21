# scan

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="scan"></a>
## scan

```TypeScript
function scan(): void
```

Scan Wi-Fi hotspot.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [startScan](arkts-connectivity-wifimanager-startscan-f.md#startscan-1)

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

<!--Device-wifiManager-function scan(): void--><!--Device-wifiManager-function scan(): void-End-->

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
    wifiManager.scan();
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

