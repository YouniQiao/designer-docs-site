# getDisconnectedReason

## getDisconnectedReason

```TypeScript
function getDisconnectedReason(): DisconnectedReason
```

Obtain the latest disconnected reason.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DisconnectedReason | Returns the latest disconnected reason. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let disconnectedReason = wifiManager.getDisconnectedReason();  
    console.info("disconnectedReason:" + disconnectedReason);
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

