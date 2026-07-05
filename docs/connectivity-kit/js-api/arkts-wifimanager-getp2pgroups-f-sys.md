# getP2pGroups

## getP2pGroups

```TypeScript
function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>
```

Obtain information about the groups.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WifiP2pGroupInfo>> | Returns the information about own device info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

**Example**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

wifiManager.getP2pGroups((err: BusinessError, data:wifiManager.WifiP2pGroupInfo[]) => {
if (err) {
    console.error("get P2P groups error");
    return;
}
  console.info("get P2P groups: " + JSON.stringify(data));
});

wifiManager.getP2pGroups().then(data => {
  console.info("get P2P groups: " + JSON.stringify(data));
});
  

```

## getP2pGroups

```TypeScript
function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void
```

Obtain information about the groups.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;WifiP2pGroupInfo>> | Yes | Indicates callback of function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

