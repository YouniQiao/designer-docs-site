# setHotspotConfig

## setHotspotConfig

```TypeScript
function setHotspotConfig(config: HotspotConfig): boolean
```

Sets the hotspot for a device. <p>Only OPEN and WPA2 PSK hotspot can be configured.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.setHotspotConfig

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | HotspotConfig | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the method is called successfully, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let config:wifi.HotspotConfig = {
        ssid: "****",
        securityType: 3,
        band: 0,
        preSharedKey: "****",
        maxConn: 0
    }
    let ret = wifi.setHotspotConfig(config);
    console.info("result:" + ret);        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

