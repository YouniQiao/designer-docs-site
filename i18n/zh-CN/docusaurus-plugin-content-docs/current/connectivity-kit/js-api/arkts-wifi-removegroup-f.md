# removeGroup

## removeGroup

```TypeScript
function removeGroup(): boolean
```

Removes a P2P group.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.removeP2pGroup

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
  wifi.removeGroup();  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

