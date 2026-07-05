# enableHotspot

## enableHotspot

```TypeScript
function enableHotspot(): boolean
```

Enables a Wi-Fi hotspot. <p>This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.enableHotspot

**需要权限：** 

 ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if this method is called successfully, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.enableHotspot();    
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

