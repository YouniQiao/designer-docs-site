# getIpv6Info

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## getIpv6Info

```TypeScript
function getIpv6Info(): Ipv6Info
```

Obtain the IPv6 information of the Wi-Fi connection. The IPv6 information includes the host IP address, gateway address, and DNS information.

**Since:** 10

**Required permissions:** ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Ipv6Info | Returns the IPv6 information of the Wi-Fi connection. |

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
    let info = wifiManager.getIpv6Info();
    console.info("info:" + JSON.stringify(info));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

