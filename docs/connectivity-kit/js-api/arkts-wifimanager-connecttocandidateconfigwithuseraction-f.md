# connectToCandidateConfigWithUserAction

## connectToCandidateConfigWithUserAction

```TypeScript
function connectToCandidateConfigWithUserAction(networkId: int): Promise<void>
```

Connect to a specified candidate hotspot by networkId, and wait for user respond result. Only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground.

**Since:** 20

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | int | Yes | Network ID which will be connected. The value of networkId cannot be less than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Returns the promise object that used to return the operation result.  If the operation fails, an error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |
| 2501005 | The user does not respond. |
| 2501006 | The user refused the action. |
| 2501007 | Parameter validation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  
  try {
    let networkId = 0; // Candidate network ID, which is generated when a candidate network is added.
    wifiManager.connectToCandidateConfigWithUserAction(networkId).then(result => {
      console.info("result:" + JSON.stringify(result));
    }).catch((err:number) => {
      console.error("failed:" + JSON.stringify(err));
    });
  }catch(error){  
    console.error("failed:" + JSON.stringify(error));
  }

```

