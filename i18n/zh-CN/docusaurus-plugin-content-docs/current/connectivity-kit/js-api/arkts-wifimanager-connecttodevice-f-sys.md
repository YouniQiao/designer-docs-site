# connectToDevice

## connectToDevice

```TypeScript
function connectToDevice(config: WifiDeviceConfig): void
```

Connect to Wi-Fi hotspot by WifiDeviceConfig.

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and * ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | 是 | Indicates the device configuration for connection to the Wi-Fi hotspot. |

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
    wifiManager.connectToDevice(config);
        
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

