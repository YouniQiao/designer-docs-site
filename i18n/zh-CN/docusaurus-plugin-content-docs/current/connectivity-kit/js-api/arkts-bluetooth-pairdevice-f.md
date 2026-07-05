# pairDevice

## pairDevice

```TypeScript
function pairDevice(deviceId: string): boolean
```

Starts pairing with a remote Bluetooth device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.pairDevice

**需要权限：** 

 ohos.permission.DISCOVER_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | The address of the remote device to pair. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the pairing process is started; returns {@code false} otherwise. |

**示例：**

```TypeScript
// 实际的地址可由扫描流程获取
let result : boolean = bluetooth.pairDevice("XX:XX:XX:XX:XX:XX");

```

