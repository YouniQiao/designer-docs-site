# disableNetwork

## disableNetwork

```TypeScript
function disableNetwork(netId: int): void
```

Disable the specified DeviceConfig by networkId. The disabled DeviceConfig will not be associated with again.

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netId | int | 是 | Identifies the network to disable. The value of networkId cannot be less than 0. |

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
  let netId = 0;
  wifiManager.disableNetwork(netId);  
} catch (error) {
  console.error(`failed: ${JSON.stringify(error)}`);
}

```

## disableNetwork

```TypeScript
function disableNetwork(netId: int, blockDuration: int): void
```

Disable the specified DeviceConfig by networkId for a period of time. The disabled DeviceConfig will not be associated with again.

**起始版本：** 23

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netId | int | 是 | Identifies the network to disable. The value of networkId cannot be less than 0. |
| blockDuration | int | 是 | Indicates the duration of network disablement(unit is secondes),  If the value is -1, means permanent disablement. |

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
    let netId = 0;
    let blockDuration = 300;
    wifiManager.disableNetwork(netId, blockDuration);
  } catch (error) {
    console.error(`failed: ${JSON.stringify(error)}`);
  }

```

