# getWifiCapability (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## getWifiCapability

```TypeScript
function getWifiCapability(capability: WifiCapability): boolean
```

Get Wi-Fi capability

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_WIFI_INFO

**Model restriction:** This API can be used only in the stage model.

<!--Device-wifiManager-function getWifiCapability(capability: WifiCapability): boolean--><!--Device-wifiManager-function getWifiCapability(capability: WifiCapability): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | [WifiCapability](arkts-connectivity-wifimanager-wificapability-e.md) | Yes | Identifies the Wi-Fi capability |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} the specified is enable Returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let result = wifiManager.getWifiCapability(wifiManager.WifiCapability.WIFI_AUTO_ENABLE);
console.info("result:" + result);


```

