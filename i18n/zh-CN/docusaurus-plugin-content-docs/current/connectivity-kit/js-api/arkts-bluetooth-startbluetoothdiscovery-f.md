# startBluetoothDiscovery

## startBluetoothDiscovery

```TypeScript
function startBluetoothDiscovery(): boolean
```

Starts scanning Bluetooth devices.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.startBluetoothDiscovery

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the scan is started successfully; returns {@code false} otherwise. |

**示例：**

```TypeScript
let deviceId : Array<string>;
function onReceiveEvent(data : Array<string>) {
    deviceId = data;
}
bluetooth.on('bluetoothDeviceFind', onReceiveEvent);
let result : boolean = bluetooth.startBluetoothDiscovery();

```

