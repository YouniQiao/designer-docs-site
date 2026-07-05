# startPortalCertification

## startPortalCertification

```TypeScript
function startPortalCertification(): void
```

Start Portal certification.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  wifiManager.startPortalCertification();
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

