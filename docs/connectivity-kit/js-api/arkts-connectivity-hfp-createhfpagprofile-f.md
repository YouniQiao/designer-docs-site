# createHfpAgProfile

## Modules to Import

```TypeScript
import { hfp } from '@kit.ConnectivityKit';
```

## createHfpAgProfile

```TypeScript
function createHfpAgProfile(): HandsFreeAudioGatewayProfile
```

create the instance of hfp profile.

**Since:** 10

<!--Device-hfp-function createHfpAgProfile(): HandsFreeAudioGatewayProfile--><!--Device-hfp-function createHfpAgProfile(): HandsFreeAudioGatewayProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [HandsFreeAudioGatewayProfile](arkts-connectivity-bluetoothmanager-handsfreeaudiogatewayprofile-i.md) | Returns the instance of profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let hfpAgProfile = hfp.createHfpAgProfile();
    console.info('hfpAg success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

