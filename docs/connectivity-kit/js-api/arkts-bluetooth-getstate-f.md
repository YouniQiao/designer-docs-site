# getState

## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.getState

**Required permissions:** 

 ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| BluetoothState | Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},  {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON},  {@link BluetoothState#STATE_TURNING_OFF}, {@link BluetoothState#STATE_BLE_TURNING_ON},  {@link BluetoothState#STATE_BLE_ON}, or {@link BluetoothState#STATE_BLE_TURNING_OFF}. |

**Example**

```TypeScript
let state : bluetooth.BluetoothState = bluetooth.getState();

```

