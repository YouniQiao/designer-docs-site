# getDeviceConfig

## getDeviceConfig

```TypeScript
function getDeviceConfig(networkId: int): WifiDeviceConfig
```

Obtain the single Wi-Fi configuration with Network ID.

**起始版本：** 24

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | int | 是 | The network ID of the Wi-Fi configuration to retrieve. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WifiDeviceConfig | Returns the Wi-Fi configuration corresponding to the network ID. |

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
    let networkId = 0;
    let config = wifiManager.getDeviceConfig(networkId);
    console.info(`config: ${JSON.stringify(config)}`);    
  }catch(error){
    console.error(`failed: ${JSON.stringify(error)}`);
  }

```

