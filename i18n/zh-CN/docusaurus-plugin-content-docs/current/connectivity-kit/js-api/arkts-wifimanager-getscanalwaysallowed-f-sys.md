# getScanAlwaysAllowed

## getScanAlwaysAllowed

```TypeScript
function getScanAlwaysAllowed(): boolean
```

Get scan always allowed flag.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if scan running state is true, returns {@code false} otherwise. |

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
    let isScanAlwaysAllowed = wifiManager.getScanAlwaysAllowed();
    console.info("isScanAlwaysAllowed:" + isScanAlwaysAllowed);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

