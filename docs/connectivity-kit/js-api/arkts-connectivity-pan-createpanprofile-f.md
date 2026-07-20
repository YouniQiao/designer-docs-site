# createPanProfile

## Modules to Import

```TypeScript
import { pan } from '@kit.ConnectivityKit';
```

## createPanProfile

```TypeScript
function createPanProfile(): PanProfile
```

create the instance of pan profile.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-pan-function createPanProfile(): PanProfile--><!--Device-pan-function createPanProfile(): PanProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [PanProfile](arkts-connectivity-pan-panprofile-i.md) | Returns the instance of pan profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let panProfile : pan.PanProfile= pan.createPanProfile();
    console.info('pan success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

