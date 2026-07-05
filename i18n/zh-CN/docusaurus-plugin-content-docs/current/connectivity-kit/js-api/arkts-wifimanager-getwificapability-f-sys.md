# getWifiCapability

## getWifiCapability

```TypeScript
function getWifiCapability(capability: WifiCapability): boolean
```

Get Wi-Fi capability

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.WiFi.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capability | WifiCapability | 是 | Identifies the Wi-Fi capability |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} the specified is enable Returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

let result = wifiManager.getWifiCapability(wifiManager.WifiCapability.WIFI_AUTO_ENABLE);
console.info("result:" + result);


```

