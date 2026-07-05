# removeCandidateConfig

## removeCandidateConfig

```TypeScript
function removeCandidateConfig(networkId: int): Promise<void>
```

Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed to be removed. The app must be in the foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | int | Yes | Network ID which will be removed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Return results. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let networkId = 0;
    wifiManager.removeCandidateConfig(networkId).then(result => {
      console.info("result:" + JSON.stringify(result));
    }).catch((err:number) => {
      console.error("failed:" + JSON.stringify(err));
    });
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

## removeCandidateConfig

```TypeScript
function removeCandidateConfig(networkId: int, callback: AsyncCallback<void>): void
```

Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed to be removed. The app must be in the foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | int | Yes | Network ID which will be removed. |
| callback | AsyncCallback&lt;void> | Yes | Indicates call back of removeCandidateConfig. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let networkId = 0;
    wifiManager.removeCandidateConfig(networkId,(error,result) => {
    console.info("result:" + JSON.stringify(result));
    });  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

