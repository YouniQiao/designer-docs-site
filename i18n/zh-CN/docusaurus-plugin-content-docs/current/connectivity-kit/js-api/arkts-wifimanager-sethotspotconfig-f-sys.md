# setHotspotConfig

## setHotspotConfig

```TypeScript
function setHotspotConfig(config: HotspotConfig): void
```

Set the hotspot configuration for the device.

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | HotspotConfig | 是 | Indicates the Wi-Fi hotspot configuration.  The SSID and {@code securityType} must be available and correct.  If {@code securityType} is not {@code open}, {@code preSharedKey} must be available and correct. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Incorrect parameter types.  2.Parameter verification failed. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.HotspotConfig = {
    ssid: "****",
    securityType: 3,
    band: 0,
    channel: 0,
    preSharedKey: "****",
    maxConn: 0
  }
  let ret = wifiManager.setHotspotConfig(config);
  console.info("result:" + ret);    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

