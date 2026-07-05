# getLinkedInfoSync

## getLinkedInfoSync

```TypeScript
function getLinkedInfoSync(): WifiLinkedInfo
```

Obtain connection information about the Wi-Fi connection.this apireturns the result syncchronously. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.

**Since:** 18

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| WifiLinkedInfo | Returns Wi-Fi linked information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  try {
    let linkInfo = wifiManager.getLinkedInfoSync();
    console.info("get linked info:" + JSON.stringify(linkInfo));
  } catch(error) {
    console.error("get linked info failed:" + JSON.stringify(error));
  }

```

