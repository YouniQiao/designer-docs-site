# getWifiDetailState

## getWifiDetailState

```TypeScript
function getWifiDetailState(): WifiDetailState
```

Obtains information about a Wi-Fi detail state.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WifiDetailState | Returns information about wifi state. |

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

try {
    let ret = wifiManager.getWifiDetailState();
    console.info("wifiDetailState:" + ret);
} catch (error) {
    console.error("failed:" + JSON.stringify(error));
}


```

