# connectToCandidateConfigWithUserAction

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## connectToCandidateConfigWithUserAction

```TypeScript
function connectToCandidateConfigWithUserAction(networkId: number): Promise<void>
```

Connect to a specified candidate hotspot by networkId, and wait for user respond result.Only the configuration which is added by ourself is allowed to be connected.This method connect to a configuration at a time.The app must be in the foreground.

**Since:** 20

**Required permissions:** ohos.permission.SET_WIFI_INFO

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-wifiManager-function connectToCandidateConfigWithUserAction(networkId: int): Promise<void>--><!--Device-wifiManager-function connectToCandidateConfigWithUserAction(networkId: int): Promise<void>-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | number | Yes | Network ID which will be connected. The value of networkId cannot be less than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Returns the promise object that used to return the operation result.If the operation fails, an error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |
| [2501005](../errorcode-wifi.md#2501005-no-user-response-to-the-connection-request) | The user does not respond. |
| [2501006](../errorcode-wifi.md#2501006-connection-request-rejected) | The user refused the action. |
| [2501007](../errorcode-wifi.md#2501007-parameter-verification-failed) | Parameter validation failed. |

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

