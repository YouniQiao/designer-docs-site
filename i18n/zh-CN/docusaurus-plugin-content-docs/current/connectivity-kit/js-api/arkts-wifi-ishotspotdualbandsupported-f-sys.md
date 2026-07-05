# isHotspotDualBandSupported

## isHotspotDualBandSupported

```TypeScript
function isHotspotDualBandSupported(): boolean
```

Checks whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.isHotspotDualBandSupported

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the method is called successfully, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let ret = wifi.isHotspotDualBandSupported();
    console.info("result:" + ret);        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

