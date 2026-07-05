# stopDiscoverDevices

## stopDiscoverDevices

```TypeScript
function stopDiscoverDevices(): void
```

Stop discover Wi-Fi P2P devices.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.stopDiscoverDevices();  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

