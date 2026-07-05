# getHotspotConfig

## getHotspotConfig

```TypeScript
function getHotspotConfig(): HotspotConfig
```

Obtains the Wi-Fi hotspot configuration.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getHotspotConfig

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| HotspotConfig | Returns the configuration of an existing or enabled Wi-Fi hotspot. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let config = wifi.getHotspotConfig();
    console.info("result:" + JSON.stringify(config));        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

