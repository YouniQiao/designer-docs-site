# getProfileInstance

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## getProfileInstance

```TypeScript
function getProfileInstance(
    profileId: ProfileId
  ): A2dpSourceProfile | HandsFreeAudioGatewayProfile | HidHostProfile | PanProfile
```

Obtains the instance of profile.

**Since:** 9

**Deprecated since:** 10

<!--Device-bluetoothManager-function getProfileInstance(
    profileId: ProfileId
  ): A2dpSourceProfile | HandsFreeAudioGatewayProfile | HidHostProfile | PanProfile--><!--Device-bluetoothManager-function getProfileInstance(
    profileId: ProfileId
  ): A2dpSourceProfile | HandsFreeAudioGatewayProfile | HidHostProfile | PanProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profileId | [ProfileId](arkts-connectivity-constant-profileid-e.md) | Yes | The profile id.. |

**Return value:**

| Type | Description |
| --- | --- |
| [A2dpSourceProfile](arkts-connectivity-a2dp-a2dpsourceprofile-i.md) | Returns the instance of profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let hidHost: bluetoothManager.HidHostProfile = bluetoothManager.getProfileInstance(bluetoothManager.ProfileId.PROFILE_HID_HOST);
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

