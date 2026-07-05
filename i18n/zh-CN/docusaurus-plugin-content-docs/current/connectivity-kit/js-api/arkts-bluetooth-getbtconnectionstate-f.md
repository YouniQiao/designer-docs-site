# getBtConnectionState

## getBtConnectionState

```TypeScript
function getBtConnectionState(): ProfileConnectionState
```

Get the local device connection state to any profile of any remote device.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getBtConnectionState

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ProfileConnectionState | One of {@link ProfileConnectionState#STATE_DISCONNECTED},  {@link ProfileConnectionState#STATE_CONNECTING}, {@link ProfileConnectionState#STATE_CONNECTED},  {@link ProfileConnectionState#STATE_DISCONNECTING}. |

**示例：**

```TypeScript
let connectionState : bluetooth.ProfileConnectionState = bluetooth.getBtConnectionState();

```

