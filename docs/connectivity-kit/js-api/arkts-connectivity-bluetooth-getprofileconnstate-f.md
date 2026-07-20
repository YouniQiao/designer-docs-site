# getProfileConnState

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## getProfileConnState

```TypeScript
function getProfileConnState(profileId: ProfileId): ProfileConnectionState
```

Obtains the connection state of profile.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getProfileConnectionState

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function getProfileConnState(profileId: ProfileId): ProfileConnectionState--><!--Device-bluetooth-function getProfileConnState(profileId: ProfileId): ProfileConnectionState-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profileId | [ProfileId](arkts-connectivity-constant-profileid-e.md) | Yes | The profile id. |

**Return value:**

| Type | Description |
| --- | --- |
| [ProfileConnectionState](arkts-connectivity-bluetooth-profileconnectionstate-e.md) | Returns the connection state. |

**Example**

```TypeScript
let result : bluetooth.ProfileConnectionState = bluetooth.getProfileConnState(bluetooth.ProfileId.PROFILE_A2DP_SOURCE);

```

