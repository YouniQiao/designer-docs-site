# updateNetwork

## updateNetwork

```TypeScript
function updateNetwork(config: WifiDeviceConfig): int
```

Update the specified Wi-Fi configuration.

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | Yes | Indicates the Wi-Fi configuration to update. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the network ID in the updated Wi-Fi configuration if the update is successful;  returns {@code -1} if the specified Wi-Fi configuration is not contained in the list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.WifiDeviceConfig = {
    ssid : "****",
    preSharedKey : "****",
    securityType : 3
  }
  let ret = wifiManager.updateNetwork(config);
  console.info("ret:" + ret);
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

