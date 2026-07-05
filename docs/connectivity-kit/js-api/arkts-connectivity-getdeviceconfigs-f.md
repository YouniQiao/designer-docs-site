# getDeviceConfigs

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## getDeviceConfigs

```TypeScript
function getDeviceConfigs(): Array<WifiDeviceConfig>
```

Obtain the list of all existed Wi-Fi configurations.

**Since:** 15

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WifiDeviceConfig&gt; | Returns the list of all existing Wi-Fi configurations you created on your application. |

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
      let configs = wifiManager.getDeviceConfigs();
      console.info("configs:" + JSON.stringify(configs));
    }catch(error){
      console.error("failed:", error.code, error.message);
    }
  

```

