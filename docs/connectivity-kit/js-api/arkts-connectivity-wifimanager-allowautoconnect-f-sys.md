# allowAutoConnect (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="allowautoconnect"></a>
## allowAutoConnect

```TypeScript
function allowAutoConnect(netId: number, isAllowed: boolean): void
```

Set whther to allow automatic connnect by networkId.The network can be associated with again if isAllowed is true, else not.

**Since:** 17

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifiManager-function allowAutoConnect(netId: int, isAllowed: boolean): void--><!--Device-wifiManager-function allowAutoConnect(netId: int, isAllowed: boolean): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netId | number | Yes | Identifies the network to be set. The value of networkId cannot be less than 0. |
| isAllowed | boolean | Yes | Identifies whether allow auto connect or not. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |

