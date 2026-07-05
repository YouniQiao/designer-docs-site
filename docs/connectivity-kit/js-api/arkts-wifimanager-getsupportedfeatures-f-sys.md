# getSupportedFeatures

## getSupportedFeatures

```TypeScript
function getSupportedFeatures(): long
```

Obtain the features supported by the device. To check whether this device supports a specified feature.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| long | Returns the features supported by this device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2401000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
    let ret = wifiManager.getSupportedFeatures();
    console.info("supportedFeatures:" + ret);
} catch (error) {
    console.error("failed:" + JSON.stringify(error));
}


```

