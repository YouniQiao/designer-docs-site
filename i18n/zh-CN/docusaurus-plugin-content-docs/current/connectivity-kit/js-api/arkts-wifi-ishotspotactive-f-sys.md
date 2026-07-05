# isHotspotActive

## isHotspotActive

```TypeScript
function isHotspotActive(): boolean
```

Checks whether Wi-Fi hotspot is active on a device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.isHotspotActive

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let ret = wifi.isHotspotActive();
    console.info("result:" + ret);        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

