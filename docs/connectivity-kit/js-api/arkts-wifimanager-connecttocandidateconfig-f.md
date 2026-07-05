# connectToCandidateConfig

## connectToCandidateConfig

```TypeScript
function connectToCandidateConfig(networkId: int): void
```

Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself is allowed to be connected. This method connect to a configuration at a time. The app must be in the foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | int | Yes | Network ID which will be connected. The value of networkId cannot be less than 0. |

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
    let networkId = 0; // Candidate network ID, which is generated when a candidate network is added.
    wifiManager.connectToCandidateConfig(networkId);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }
  

```

## connectToCandidateConfig

```TypeScript
function connectToCandidateConfig(settings: ConnectSettings): Promise<void>
```

Connect to the specified candidate hotspot using connect settings.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settings | ConnectSettings | Yes | Indicates the connection settings. |

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
    let setting:wifiManager.ConnectSettings = { networkId: 0 }; // Candidate network ID, which is generated when a candidate network is added.
    wifiManager.connectToCandidateConfig(setting);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }
  

```

