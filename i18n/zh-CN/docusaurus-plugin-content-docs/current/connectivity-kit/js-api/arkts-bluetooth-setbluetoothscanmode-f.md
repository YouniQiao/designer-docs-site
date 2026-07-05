# setBluetoothScanMode

## setBluetoothScanMode

```TypeScript
function setBluetoothScanMode(mode: ScanMode, duration: number): boolean
```

Sets the Bluetooth scan mode for a device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.setBluetoothScanMode

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | ScanMode | 是 | Indicates the Bluetooth scan mode to set, {@link ScanMode}. |
| duration | number | 是 | Indicates the duration in seconds, in which the host is discoverable. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the Bluetooth scan mode is set; returns {@code false} otherwise. |

**示例：**

```TypeScript
// 设置为可连接可发现才可被远端设备扫描到，可以连接。
let result : boolean = bluetooth.setBluetoothScanMode(bluetooth.ScanMode
    .SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE, 100);

```

