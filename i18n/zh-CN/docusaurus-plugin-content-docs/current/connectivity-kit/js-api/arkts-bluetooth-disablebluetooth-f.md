# disableBluetooth

## disableBluetooth

```TypeScript
function disableBluetooth(): boolean
```

Disables Bluetooth on a device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.disableBluetooth

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if Bluetooth is being disabled; returns {@code false} if an error occurs. |

**示例：**

```TypeScript
let disable : boolean = bluetooth.disableBluetooth();

```

