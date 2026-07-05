# getRemoteDeviceTransport

## getRemoteDeviceTransport

```TypeScript
function getRemoteDeviceTransport(deviceId: string): BluetoothTransport
```

Get the transport of the bluetooth device.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BluetoothTransport | The transport of bluetooth device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Get transport failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let transport: connection.BluetoothTransport = connection.getRemoteDeviceTransport('XX:XX:XX:XX:XX:XX');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

