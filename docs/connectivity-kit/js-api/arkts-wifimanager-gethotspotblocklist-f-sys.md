# getHotspotBlockList

## getHotspotBlockList

```TypeScript
function getHotspotBlockList(): Array<StationInfo>
```

Get all the stations in the block list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;StationInfo> | stations in the block list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let data = wifiManager.getHotspotBlockList();
  console.info("result:" + JSON.stringify(data));
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

