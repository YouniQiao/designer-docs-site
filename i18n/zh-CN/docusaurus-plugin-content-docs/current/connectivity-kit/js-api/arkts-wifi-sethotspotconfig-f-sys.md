# setHotspotConfig

## setHotspotConfig

```TypeScript
function setHotspotConfig(config: HotspotConfig): boolean
```

Sets the hotspot for a device. <p>Only OPEN and WPA2 PSK hotspot can be configured.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.setHotspotConfig

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | HotspotConfig | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the method is called successfully, returns {@code false} otherwise. |

**示例：**

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

