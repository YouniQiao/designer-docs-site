# getState

## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device. On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.access/access#getState

**需要权限：** 

- API版本9 - 9： ohos.permission.USE_BLUETOOTH

- API版本10+： ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BluetoothState | Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},  {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON},  {@link BluetoothState#STATE_TURNING_OFF}, {@link BluetoothState#STATE_BLE_TURNING_ON},  {@link BluetoothState#STATE_BLE_ON}, or {@link BluetoothState#STATE_BLE_TURNING_OFF}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let state: bluetoothManager.BluetoothState = bluetoothManager.getState();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

