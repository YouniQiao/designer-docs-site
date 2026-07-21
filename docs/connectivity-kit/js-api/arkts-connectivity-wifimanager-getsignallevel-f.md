# getSignalLevel

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="getsignallevel"></a>
## getSignalLevel

```TypeScript
function getSignalLevel(rssi: number, band: number): number
```

Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getSignalLevel(rssi: int, band: int): int--><!--Device-wifiManager-function getSignalLevel(rssi: int, band: int): int-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rssi | number | Yes | Indicates the Wi-Fi RSSI. |
| band | number | Yes | Indicates the Wi-Fi frequency band. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns Wi-Fi signal level ranging from 0 to 4. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let rssi = 0;
    let band = 0;
    let level = wifiManager.getSignalLevel(rssi,band);
    console.info("level:" + JSON.stringify(level));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

