# getCandidateConfigs

## getCandidateConfigs

```TypeScript
function getCandidateConfigs(): Array<WifiDeviceConfig>
```

Obtain the list of all existed candidate Wi-Fi configurations which added by ourself. You can obtain only the Wi-Fi configurations you created on your own application.

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WifiDeviceConfig> | Returns the list of all existed Wi-Fi configurations you created on your application. |

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
    let configs = wifiManager.getCandidateConfigs();
    console.info("configs:" + JSON.stringify(configs));
    let len = configs.length;
        console.info("result len: " + len);
    if(len > 0){
      for (let i = 0; i < len; ++i) {
        console.info("ssid: " + configs[i].ssid);
        console.info("bssid: " + configs[i].bssid);
      }
    }  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }
  

```

