# getDeviceConfig

## getDeviceConfig

```TypeScript
function getDeviceConfig(networkId: int): WifiDeviceConfig
```

Obtain the single Wi-Fi configuration with Network ID.

**Since:** 24

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | int | Yes | The network ID of the Wi-Fi configuration to retrieve. |

**Return value:**

| Type | Description |
| --- | --- |
| WifiDeviceConfig | Returns the Wi-Fi configuration corresponding to the network ID. |

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

  try {
    let networkId = 0;
    let config = wifiManager.getDeviceConfig(networkId);
    console.info(`config: ${JSON.stringify(config)}`);    
  }catch(error){
    console.error(`failed: ${JSON.stringify(error)}`);
  }

```

