# getDeviceConfigs

## getDeviceConfigs

```TypeScript
function getDeviceConfigs(): Array<WifiDeviceConfig>
```

Obtain the list of all existed Wi-Fi configurations.

**Since:** 15

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WifiDeviceConfig> | Returns the list of all existing Wi-Fi configurations you created on your application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
    try {
      let configs = wifiManager.getDeviceConfigs();
      console.info("configs:" + JSON.stringify(configs));
    }catch(error){
      console.error("failed:", error.code, error.message);
    }
  

```

