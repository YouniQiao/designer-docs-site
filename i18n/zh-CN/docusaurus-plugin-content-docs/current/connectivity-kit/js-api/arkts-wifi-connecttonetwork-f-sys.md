# connectToNetwork

## connectToNetwork

```TypeScript
function connectToNetwork(networkId: number): boolean
```

Connects to Wi-Fi network.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.connectToNetwork

**需要权限：** 

 ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | number | 是 | ID of the connected network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the network connection is successful, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let networkId = 0;
    wifi.connectToNetwork(networkId);
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}    

```

