# getState

## Modules to Import

```TypeScript
import { access } from '@kit.ConnectivityKit';
```

<a id="getstate"></a>
## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device.

**Since:** 10

**Required permissions:** 
- API version 10 - 12: ohos.permission.ACCESS_BLUETOOTH

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-access-function getState(): BluetoothState--><!--Device-access-function getState(): BluetoothState-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [BluetoothState](arkts-connectivity-bluetoothmanager-bluetoothstate-e.md) | Returns the Bluetooth status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied.<br>**Applicable version:** 10 - 12 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let state = access.getState();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

