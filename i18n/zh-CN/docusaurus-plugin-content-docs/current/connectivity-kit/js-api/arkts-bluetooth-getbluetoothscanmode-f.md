# getBluetoothScanMode

## getBluetoothScanMode

```TypeScript
function getBluetoothScanMode(): ScanMode
```

Obtains the Bluetooth scanning mode of a device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getBluetoothScanMode

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ScanMode | Returns the Bluetooth scanning mode, {@link ScanMode}. |

**示例：**

```TypeScript
let scanMode : bluetooth.ScanMode = bluetooth.getBluetoothScanMode();

```

