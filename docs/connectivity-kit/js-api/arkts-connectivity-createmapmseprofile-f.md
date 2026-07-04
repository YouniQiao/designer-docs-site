# createMapMseProfile

## Modules to Import

```TypeScript
import { map } from '@ohos.bluetooth.map';
```

## createMapMseProfile

```TypeScript
function createMapMseProfile(): MapMseProfile
```

create the instance of MAP MSE profile.

**Since:** 11

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| MapMseProfile | Returns the instance of map mse profile. |

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

