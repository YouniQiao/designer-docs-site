# updateNetwork

## updateNetwork

```TypeScript
function updateNetwork(config: WifiDeviceConfig): int
```

Update the specified Wi-Fi configuration.

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | 是 | Indicates the Wi-Fi configuration to update. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the network ID in the updated Wi-Fi configuration if the update is successful;  returns {@code -1} if the specified Wi-Fi configuration is not contained in the list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.WifiDeviceConfig = {
    ssid : "****",
    preSharedKey : "****",
    securityType : 3
  }
  let ret = wifiManager.updateNetwork(config);
  console.info("ret:" + ret);
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

