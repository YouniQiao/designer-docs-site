# createHidHostProfile

## Modules to Import

```TypeScript
import { hid } from '@kit.ConnectivityKit';
```

## createHidHostProfile

```TypeScript
function createHidHostProfile(): HidHostProfile
```

create the instance of hid profile.

**Since:** 10

<!--Device-hid-function createHidHostProfile(): HidHostProfile--><!--Device-hid-function createHidHostProfile(): HidHostProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [HidHostProfile](arkts-connectivity-bluetoothmanager-hidhostprofile-i.md) | Returns the instance of hid profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
try {
    let hidHostProfile = hid.createHidHostProfile();
    console.info('hidHost success');
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

