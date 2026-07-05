# getRemoteDeviceClass

## getRemoteDeviceClass

```TypeScript
function getRemoteDeviceClass(deviceId: string): DeviceClass
```

Obtains the class of a peer Bluetooth device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getRemoteDeviceClass

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | The address of the remote device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DeviceClass | The class of the remote device, {@link DeviceClass}. |

**示例：**

```TypeScript
let remoteDeviceClass : bluetooth.DeviceClass = bluetooth.getRemoteDeviceClass("XX:XX:XX:XX:XX:XX");

```

