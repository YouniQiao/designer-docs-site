# reconnect

## reconnect

```TypeScript
function reconnect(): boolean
```

Re-connects to current network.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.reconnect

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | {@code true} if the Wi-Fi network is re-connect successfully. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.reconnect();
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

