# controlDeviceAction

## controlDeviceAction

```TypeScript
function controlDeviceAction(controlDeviceActionParams: ControlDeviceActionParams): Promise<void>
```

Controls the actions of Bluetooth peripherals.

**Since:** 15

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controlDeviceActionParams | ControlDeviceActionParams | Yes | Indicates the action for Bluetooth peripherals. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

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

