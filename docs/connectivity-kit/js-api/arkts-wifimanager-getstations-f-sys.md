# getStations

## getStations

```TypeScript
function getStations(): Array<StationInfo>
```

Obtain the list of stations that are connected to the Wi-Fi hotspot. This method can only be used on a device that serves as a Wi-Fi hotspot.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;StationInfo> | the list of clients that are connected to the Wi-Fi hotspot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let stations = wifiManager.getStations();
  console.info("result:" + JSON.stringify(stations));    
}catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

