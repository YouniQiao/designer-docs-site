# getIpInfo

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="getipinfo"></a>
## getIpInfo

```TypeScript
function getIpInfo(): IpInfo
```

Obtain the IPv4 information of the Wi-Fi connection.The IP information includes the host IP address, gateway address, and DNS information.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getIpInfo(): IpInfo--><!--Device-wifiManager-function getIpInfo(): IpInfo-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| [IpInfo](arkts-connectivity-wifi-ipinfo-i.md) | Returns the IP information of the Wi-Fi connection. |

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
    let info = wifiManager.getIpInfo();
    console.info("info:" + JSON.stringify(info));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

