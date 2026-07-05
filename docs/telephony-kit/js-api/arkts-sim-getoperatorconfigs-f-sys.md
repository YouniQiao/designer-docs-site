# getOperatorConfigs

## getOperatorConfigs

```TypeScript
function getOperatorConfigs(slotId: int, callback: AsyncCallback<Array<OperatorConfig>>): void
```

Obtains the operatorconfigs of the SIM card in a specified slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;Array&lt;OperatorConfig>> | Yes | Indicates the callback for  getting the operatorconfigs in a specified slot;  returns empty OperatorConfig if no SIM card is inserted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getOperatorConfigs(0, (err: BusinessError, data: Array<sim.OperatorConfig>) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getOperatorConfigs

```TypeScript
function getOperatorConfigs(slotId: int): Promise<Array<OperatorConfig>>
```

Obtains the operatorconfigs of the SIM card in a specified slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;OperatorConfig>> | Returns the operatorconfigs in a specified slot;  returns empty OperatorConfig if no SIM card is inserted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getOperatorConfigs(0).then((data: Array<sim.OperatorConfig>) => {
    console.info(`getOperatorConfigs success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getOperatorConfigs failed, promise: err->${JSON.stringify(err)}`);
});

```

