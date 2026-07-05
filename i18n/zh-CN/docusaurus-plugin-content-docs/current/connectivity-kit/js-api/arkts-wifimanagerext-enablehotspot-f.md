# enableHotspot

## enableHotspot

```TypeScript
function enableHotspot(): void
```

Enable Wi-Fi hotspot function. This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.

**起始版本：** 9

**废弃版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

**系统能力：** SystemCapability.Communication.WiFi.AP.Extension

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2701000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManagerExt } from '@kit.ConnectivityKit';

  try {
      wifiManagerExt.enableHotspot();
  }catch(error){
      console.error("failed: " + JSON.stringify(error));
  }

```

