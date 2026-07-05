# get5GChannelList

## get5GChannelList

```TypeScript
function get5GChannelList(): Array<int>
```

Obtain the supported 5G channel list of the device.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | Returns 5G channel list. |

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
  let channelList = wifiManager.get5GChannelList();
  console.info("channelList:" + JSON.stringify(channelList));    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

