# disableBluetooth

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## disableBluetooth

```TypeScript
function disableBluetooth(): void
```

Disables Bluetooth on a device.
On API 10 and above, the permission required by this interface is changed from DISCOVER_BLUETOOTH to
ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** disableBluetooth

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.DISCOVER_BLUETOOTH

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
import { BusinessError } from '@ohos.base';
try {
    bluetoothManager.disableBluetooth();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ", errMessage:" + (err as BusinessError).message);
}

```

