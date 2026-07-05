# unHoldCall

## unHoldCall

```TypeScript
function unHoldCall(callId: int, callback: AsyncCallback<void>): void
```

Cancel call hold status.

**Since:** 7

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;void> | Yes | The callback of unHoldCall. |

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

call.unHoldCall(1, (err: BusinessError) => {
    if (err) {
        console.error(`unHoldCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`unHoldCall success.`);
    }
});

```

## unHoldCall

```TypeScript
function unHoldCall(callId: int): Promise<void>
```

Keep a call on hold.

**Since:** 7

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the unHoldCall. |

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

call.unHoldCall(1).then(() => {
    console.info(`unHoldCall success.`);
}).catch((err: BusinessError) => {
    console.error(`unHoldCall fail, promise: err->${JSON.stringify(err)}`);
});

```

