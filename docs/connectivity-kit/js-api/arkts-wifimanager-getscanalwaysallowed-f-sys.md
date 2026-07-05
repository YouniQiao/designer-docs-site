# getScanAlwaysAllowed

## getScanAlwaysAllowed

```TypeScript
function getScanAlwaysAllowed(): boolean
```

Get scan always allowed flag.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if scan running state is true, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let isScanAlwaysAllowed = wifiManager.getScanAlwaysAllowed();
    console.info("isScanAlwaysAllowed:" + isScanAlwaysAllowed);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

