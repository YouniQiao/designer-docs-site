# setDeviceName

## setDeviceName

```TypeScript
function setDeviceName(devName: string): void
```

Set the name of the Wi-Fi P2P device.

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.P2P

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| devName | string | Yes | Indicate the name to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let name = "****";
  wifiManager.setDeviceName(name);  
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

