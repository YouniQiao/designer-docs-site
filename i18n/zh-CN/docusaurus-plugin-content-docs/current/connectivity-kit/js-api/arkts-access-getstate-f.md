# getState

## getState

```TypeScript
function getState(): BluetoothState
```

Obtains the Bluetooth status of a device.

**起始版本：** 10

**需要权限：** 

- API版本10 - 12： ohos.permission.ACCESS_BLUETOOTH

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BluetoothState | Returns the Bluetooth status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. [since 10 - 12] |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let state = access.getState();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

