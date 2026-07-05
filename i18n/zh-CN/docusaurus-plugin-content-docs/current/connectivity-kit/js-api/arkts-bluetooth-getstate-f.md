# getState

## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getState

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BluetoothState | Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},  {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON},  {@link BluetoothState#STATE_TURNING_OFF}, {@link BluetoothState#STATE_BLE_TURNING_ON},  {@link BluetoothState#STATE_BLE_ON}, or {@link BluetoothState#STATE_BLE_TURNING_OFF}. |

**示例：**

```TypeScript
let state : bluetooth.BluetoothState = bluetooth.getState();

```

