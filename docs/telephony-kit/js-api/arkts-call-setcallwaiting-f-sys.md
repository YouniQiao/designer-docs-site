# setCallWaiting

## setCallWaiting

```TypeScript
function setCallWaiting(slotId: int, activate: boolean, callback: AsyncCallback<void>): void
```

Set call waiting.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| activate | boolean | Yes | Indicates whether to activate or call wait. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setCallWaiting. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setCallWaiting(0, true, (err: BusinessError) => {
    if (err) {
        console.error(`setCallWaiting fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setCallWaiting success.`);
    }
});

```

## setCallWaiting

```TypeScript
function setCallWaiting(slotId: int, activate: boolean): Promise<void>
```

Set call waiting.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| activate | boolean | Yes | Indicates whether to activate or call wait. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setCallWaiting. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setCallWaiting(0, true).then(() => {
    console.info(`setCallWaiting success.`);
}).catch((err: BusinessError) => {
    console.error(`setCallWaiting fail, promise: err->${JSON.stringify(err)}`);
});

```

