# isOpenSoftApAllowed

## isOpenSoftApAllowed

```TypeScript
function isOpenSoftApAllowed(): boolean
```

Check whether Wi-Fi hotspot is can be operated under some situation. When the airplane mode is turned on and does not support the coexistence of softap and sta, nor does it support signal bridge, the hotspot switch cannot be operated.

**起始版本：** 18

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | {@code true} if Wi-Fi hotspot can be operated, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let ret = wifiManager.isOpenSoftApAllowed();
  console.info("result:" + ret);
}catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

