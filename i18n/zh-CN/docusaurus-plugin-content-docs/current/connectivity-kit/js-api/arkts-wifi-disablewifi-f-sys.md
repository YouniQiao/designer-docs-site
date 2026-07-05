# disableWifi

## disableWifi

```TypeScript
function disableWifi(): boolean
```

Disables Wi-Fi.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.disableWifi

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.disableWifi();
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}


```

