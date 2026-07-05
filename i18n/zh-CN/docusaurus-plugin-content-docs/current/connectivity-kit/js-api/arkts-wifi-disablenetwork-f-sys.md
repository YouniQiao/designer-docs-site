# disableNetwork

## disableNetwork

```TypeScript
function disableNetwork(netId: number): boolean
```

Disables a specified network. <p>The disabled network will not be associated with again.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.disableDeviceConfig

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netId | number | 是 | Identifies the network to disable. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the specified network is disabled, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let netId = 0;
    wifi.disableNetwork(netId);        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

