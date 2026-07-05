# disconnect

## disconnect

```TypeScript
function disconnect(): boolean
```

Disconnect Wi-Fi network.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.disconnect

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} for disconnecting network success, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.disconnect();
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

