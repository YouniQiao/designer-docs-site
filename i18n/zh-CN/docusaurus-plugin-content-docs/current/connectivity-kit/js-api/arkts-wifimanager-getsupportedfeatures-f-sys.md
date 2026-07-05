# getSupportedFeatures

## getSupportedFeatures

```TypeScript
function getSupportedFeatures(): long
```

Obtain the features supported by the device. To check whether this device supports a specified feature.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Returns the features supported by this device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2401000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
    let ret = wifiManager.getSupportedFeatures();
    console.info("supportedFeatures:" + ret);
} catch (error) {
    console.error("failed:" + JSON.stringify(error));
}


```

