# controlDeviceAction

## controlDeviceAction

```TypeScript
function controlDeviceAction(controlDeviceActionParams: ControlDeviceActionParams): Promise<void>
```

Controls the actions of Bluetooth peripherals.

**起始版本：** 15

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controlDeviceActionParams | ControlDeviceActionParams | 是 | Indicates the action for Bluetooth peripherals. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let controlDeviceActionParams: connection.ControlDeviceActionParams = {
        deviceId: '40:DC:A5:E5:75:C3',
        type: connection.ControlType.PLAY,
        typeValue: connection.ControlTypeValue.ENABLE,
        controlObject: connection.ControlObject.LEFT_EAR
    };
    connection.controlDeviceAction(controlDeviceActionParams).then(() => {
        console.info('controlDeviceAction success');
    }, (err: BusinessError) => {
        console.error('controlDeviceAction: errCode' + err.code + ', errMessage: ' + err.message);
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

