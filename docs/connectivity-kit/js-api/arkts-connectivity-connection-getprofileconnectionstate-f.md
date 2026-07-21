# getProfileConnectionState

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

<a id="getprofileconnectionstate"></a>
## getProfileConnectionState

```TypeScript
function getProfileConnectionState(profileId?: ProfileId): ProfileConnectionState
```

Get the profile connection state of the current device.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getProfileConnectionState(profileId?: ProfileId): ProfileConnectionState--><!--Device-connection-function getProfileConnectionState(profileId?: ProfileId): ProfileConnectionState-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profileId | [ProfileId](arkts-connectivity-constant-profileid-e.md) | No | Indicate the profile id. This is an optional parameter.With profileId, returns the current connection state of this profile, {@link ProfileConnectionState}.Without profileId, if any profile is connected, {@link ProfileConnectionState#STATE_CONNECTED} is returned.Otherwise, {@link ProfileConnectionState#STATE_DISCONNECTED} is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [ProfileConnectionState](arkts-connectivity-bluetooth-profileconnectionstate-e.md) | Returns the connection state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { constant } from '@kit.ConnectivityKit';
try {
    let result: connection.ProfileConnectionState = connection.getProfileConnectionState(constant.ProfileId.PROFILE_A2DP_SOURCE);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

