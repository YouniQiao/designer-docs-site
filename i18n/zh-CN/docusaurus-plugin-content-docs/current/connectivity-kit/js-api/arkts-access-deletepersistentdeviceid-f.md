# deletePersistentDeviceId

## deletePersistentDeviceId

```TypeScript
function deletePersistentDeviceId(deviceId: string): Promise<void>
```

Delete a persistent random device address.

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.PERSISTENT_BLUETOOTH_PEERS_MAC

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | the randomized address of remote device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | delete persistent device address failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let deviceId = '11:22:33:44:55:66'  // 该地址可通过BLE扫描获取
try {
    access.deletePersistentDeviceId(deviceId);
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

