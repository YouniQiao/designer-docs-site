# setWifiCapability

## setWifiCapability

```TypeScript
function setWifiCapability(capability: WifiCapability, enable: boolean): void
```

Set Wi-Fi capability

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.SET_WIFI_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.WiFi.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | WifiCapability | Yes | Identifies the Wi-Fi capability |
| enable | boolean | Yes | Identifies enable or disable specified Wi-Fi capability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

wifiManager.setWifiCapability(wifiManager.WifiCapability.WIFI_AUTO_ENABLE, true);


```

