# createGattServer

## createGattServer

```TypeScript
function createGattServer(): GattServer
```

create a JavaScript Gatt server instance.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble#createGattServer

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GattServer | Returns a JavaScript Gatt server instance {@code GattServer}. |

**示例：**

```TypeScript
let gattServer: bluetoothManager.GattServer  = bluetoothManager.BLE.createGattServer();

```

