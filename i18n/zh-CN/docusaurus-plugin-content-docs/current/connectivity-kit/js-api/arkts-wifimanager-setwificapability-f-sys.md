# setWifiCapability

## setWifiCapability

```TypeScript
function setWifiCapability(capability: WifiCapability, enable: boolean): void
```

Set Wi-Fi capability

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.SET_WIFI_CONFIG

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.WiFi.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capability | WifiCapability | 是 | Identifies the Wi-Fi capability |
| enable | boolean | 是 | Identifies enable or disable specified Wi-Fi capability. |

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

wifiManager.setWifiCapability(wifiManager.WifiCapability.WIFI_AUTO_ENABLE, true);


```

