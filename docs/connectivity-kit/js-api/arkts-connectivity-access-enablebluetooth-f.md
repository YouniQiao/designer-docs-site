# enableBluetooth

## Modules to Import

```TypeScript
import { access } from '@kit.ConnectivityKit';
```

<a id="enablebluetooth"></a>
## enableBluetooth

```TypeScript
function enableBluetooth(): void
```

Enables Bluetooth on a device.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-access-function enableBluetooth(): void--><!--Device-access-function enableBluetooth(): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    access.enableBluetooth();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

