# createPbapServerProfile

## Modules to Import

```TypeScript
import { pbap } from '@kit.ConnectivityKit';
```

## createPbapServerProfile

```TypeScript
function createPbapServerProfile(): PbapServerProfile
```

create the instance of PBAP server profile.

**Since:** 11

<!--Device-pbap-function createPbapServerProfile(): PbapServerProfile--><!--Device-pbap-function createPbapServerProfile(): PbapServerProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [PbapServerProfile](arkts-connectivity-pbap-pbapserverprofile-i-sys.md) | Returns the instance of pbap profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let pbapServerProfile = pbap.createPbapServerProfile();
    console.info('pbapServer success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

