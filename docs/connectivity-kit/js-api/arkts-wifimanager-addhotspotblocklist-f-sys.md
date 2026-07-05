# addHotspotBlockList

## addHotspotBlockList

```TypeScript
function addHotspotBlockList(stationInfo: StationInfo): void
```

Add the station into the block list, the station can NOT access the hotspot.

**Since:** 11

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stationInfo | StationInfo | Yes | station which will be added in the block list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1.Incorrect parameter types.  2.Parameter verification failed. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.StationInfo = {
    name : "testSsid",
    macAddress : "11:22:33:44:55:66",
    ipAddress : "192.168.1.111"
  }
  // The device can be added to the block list only after the hotspot is enabled.
  wifiManager.addHotspotBlockList(config);
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

