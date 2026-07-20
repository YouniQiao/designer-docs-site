# createMapMseProfile

## Modules to Import

```TypeScript
import { map } from '@kit.ConnectivityKit';
```

## createMapMseProfile

```TypeScript
function createMapMseProfile(): MapMseProfile
```

create the instance of MAP MSE profile.

**Since:** 11

<!--Device-map-function createMapMseProfile(): MapMseProfile--><!--Device-map-function createMapMseProfile(): MapMseProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MapMseProfile](arkts-connectivity-map-mapmseprofile-i-sys.md) | Returns the instance of map mse profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let mapMseProfile = map.createMapMseProfile();
    console.info('MapMse success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

