# setDeviceName

## setDeviceName

```TypeScript
function setDeviceName(devName: string): boolean
```

Sets the name of the Wi-Fi P2P device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.setP2pDeviceName

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.P2P

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| devName | string | 是 | Indicates the name to be set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let name = "****";
    wifi.setDeviceName(name);    
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

