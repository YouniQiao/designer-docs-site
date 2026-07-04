# getProfileConnState

## Modules to Import

```TypeScript
import { bluetooth } from '@ohos.bluetooth';
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

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profileId | ProfileId | Yes | The profile id. |

**Return value:**

| Type | Description |
| --- | --- |
| ProfileConnectionState | Returns the connection state. |

**Example**

```TypeScript
let result : bluetooth.ProfileConnectionState = bluetooth.getProfileConnState(bluetooth.ProfileId.PROFILE_A2DP_SOURCE);

```

