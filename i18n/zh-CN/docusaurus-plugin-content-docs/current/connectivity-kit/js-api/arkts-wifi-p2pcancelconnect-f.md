# p2pCancelConnect

## p2pCancelConnect

```TypeScript
function p2pCancelConnect(): boolean
```

Canceling a P2P connection.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.p2pCancelConnect

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  wifi.p2pCancelConnect();  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

