# isValidRandomDeviceId

## isValidRandomDeviceId

```TypeScript
function isValidRandomDeviceId(deviceId: string): boolean
```

Determine whether the randomized device address application can still be used.

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | the randomized address of remote device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns whether the randomized device address is valid. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Check persistent device address failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let deviceId = '11:22:33:44:55:66'  // 该地址可通过BLE扫描获取
    let isValid = access.isValidRandomDeviceId(deviceId);
    console.info("isValid: " + isValid);
} catch (err) {
    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

