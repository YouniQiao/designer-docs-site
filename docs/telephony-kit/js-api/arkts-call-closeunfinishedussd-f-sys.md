# closeUnfinishedUssd

## closeUnfinishedUssd

```TypeScript
function closeUnfinishedUssd(slotId: int, callback: AsyncCallback<void>): void
```

Close unfinished ussd.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;void> | Yes | The callback of closeUnfinishedUssd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
call.closeUnfinishedUssd(slotId, (err: BusinessError) => {
    if (err) {
        console.error(`closeUnfinishedUssd fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`closeUnfinishedUssd success.`);
    }
});

```

## closeUnfinishedUssd

```TypeScript
function closeUnfinishedUssd(slotId: int): Promise<void>
```

Close unfinished ussd.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the closeUnfinishedUssd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
call.closeUnfinishedUssd(slotId).then(() => {
    console.info(`closeUnfinishedUssd success.`);
}).catch((err: BusinessError) => {
    console.error(`closeUnfinishedUssd fail, promise: err->${JSON.stringify(err)}`);
});

```

