# disconnect

## disconnect

```TypeScript
function disconnect(): void
```

Disconnect connection between sta and Wi-Fi hotspot.

**起始版本：** 15

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)

**系统能力：** SystemCapability.Communication.WiFi.STA

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.disconnect();
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

