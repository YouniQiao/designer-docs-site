# stopBluetoothDiscovery

## stopBluetoothDiscovery

```TypeScript
function stopBluetoothDiscovery(): boolean
```

Stops Bluetooth device scanning.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.stopBluetoothDiscovery

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if scanning is stopped successfully; returns {@code false} otherwise. |

**示例：**

```TypeScript
let result : boolean = bluetooth.stopBluetoothDiscovery();

```

