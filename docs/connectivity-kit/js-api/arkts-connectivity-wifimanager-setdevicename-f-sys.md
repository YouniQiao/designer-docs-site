# setDeviceName (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## setDeviceName

```TypeScript
function setDeviceName(devName: string): void
```

Set the name of the Wi-Fi P2P device.

**Since:** 9

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifiManager-function setDeviceName(devName: string): void--><!--Device-wifiManager-function setDeviceName(devName: string): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| devName | string | Yes | Indicate the name to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2801000](../errorcode-wifi.md#2801000-p2p-module-error) | Operation failed. |
| [2801001](../errorcode-wifi.md#2801001-p2p-module-error) | Wi-Fi STA disabled. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let name = "****";
  wifiManager.setDeviceName(name);  
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

