# disableNetwork

## disableNetwork

```TypeScript
function disableNetwork(netId: int): void
```

Disable the specified DeviceConfig by networkId. The disabled DeviceConfig will not be associated with again.

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netId | int | Yes | Identifies the network to disable. The value of networkId cannot be less than 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

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

**Since:** 23

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netId | int | Yes | Identifies the network to disable. The value of networkId cannot be less than 0. |
| blockDuration | int | Yes | Indicates the duration of network disablement(unit is secondes),  If the value is -1, means permanent disablement. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

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

