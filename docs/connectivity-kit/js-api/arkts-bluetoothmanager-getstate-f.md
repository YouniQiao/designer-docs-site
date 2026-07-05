# getState

## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.access/access#getState

**Required permissions:** 

- API version9  to  9: ohos.permission.USE_BLUETOOTH

- API version10 and later: ohos.permission.ACCESS_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| BluetoothState | Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},  {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON},  {@link BluetoothState#STATE_TURNING_OFF}, {@link BluetoothState#STATE_BLE_TURNING_ON},  {@link BluetoothState#STATE_BLE_ON}, or {@link BluetoothState#STATE_BLE_TURNING_OFF}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let state: bluetoothManager.BluetoothState = bluetoothManager.getState();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

