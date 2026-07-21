# getProfile

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="getprofile"></a>
## getProfile

```TypeScript
function getProfile(profileId: ProfileId): A2dpSourceProfile | HandsFreeAudioGatewayProfile
```

Obtains the instance of profile.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getProfileInstance

<!--Device-bluetooth-function getProfile(profileId: ProfileId): A2dpSourceProfile | HandsFreeAudioGatewayProfile--><!--Device-bluetooth-function getProfile(profileId: ProfileId): A2dpSourceProfile | HandsFreeAudioGatewayProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profileId | [ProfileId](arkts-connectivity-constant-profileid-e.md) | Yes | The profile id.. |

**Return value:**

| Type | Description |
| --- | --- |
| [A2dpSourceProfile](arkts-connectivity-a2dp-a2dpsourceprofile-i.md) | Returns instance of profile. |

**Example**

```TypeScript
let a2dpSrc : bluetooth.A2dpSourceProfile = bluetooth.getProfile(bluetooth.ProfileId.PROFILE_A2DP_SOURCE) as bluetooth.A2dpSourceProfile;

```

