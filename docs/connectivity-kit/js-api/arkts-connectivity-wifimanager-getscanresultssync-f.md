# getScanResultsSync

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="getscanresultssync"></a>
## getScanResultsSync

```TypeScript
function getScanResultsSync(): Array<WifiScanInfo>
```

Obtain the scanned sta list.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [getScanInfoList](arkts-connectivity-wifimanager-getscaninfolist-f.md#getscaninfolist-1)

**Required permissions:** ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))

<!--Device-wifiManager-function getScanResultsSync(): Array<WifiScanInfo>--><!--Device-wifiManager-function getScanResultsSync(): Array<WifiScanInfo>-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WifiScanInfo&gt; | Returns information about scanned Wi-Fi hotspot if any. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

