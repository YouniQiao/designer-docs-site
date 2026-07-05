# getPersistentDeviceIds

## getPersistentDeviceIds

```TypeScript
function getPersistentDeviceIds(): string[]
```

Obtains the persistent randomized device address of the application.

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] | Returns the list of persistent random device addresses. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Get persistent device address failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let deviceIds = access.getPersistentDeviceIds();
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

