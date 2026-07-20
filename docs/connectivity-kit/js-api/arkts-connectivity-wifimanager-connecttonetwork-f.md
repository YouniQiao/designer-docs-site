# connectToNetwork

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## connectToNetwork

```TypeScript
function connectToNetwork(networkId: number): void
```

Connect to Wi-Fi hotspot by networkId.

**Since:** 15

**Required permissions:** ohos.permission.MANAGE_WIFI_CONNECTION or ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

<!--Device-wifiManager-function connectToNetwork(networkId: int): void--><!--Device-wifiManager-function connectToNetwork(networkId: int): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | number | Yes | ID of the connected network. The value of networkId cannot be less than 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
    try {
      let networkId = 0;
      wifiManager.connectToNetwork(networkId);
    }catch(error){
      console.error("failed:" + JSON.stringify(error));
    }
  

```

