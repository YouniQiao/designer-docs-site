# getRemoteDeviceName

## getRemoteDeviceName

```TypeScript
function getRemoteDeviceName(deviceId: string): string
```

Obtains the name of a peer Bluetooth device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getRemoteDeviceName

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
| string | Returns the device name in character string format. |

**示例：**

```TypeScript
let remoteDeviceName : string = bluetooth.getRemoteDeviceName("XX:XX:XX:XX:XX:XX");

```

