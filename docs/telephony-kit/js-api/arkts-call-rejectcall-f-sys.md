# rejectCall

## rejectCall

```TypeScript
function rejectCall(callId: int, options: RejectMessageOptions, callback: AsyncCallback<void>): void
```

Reject the incoming call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call to reject. |
| options | RejectMessageOptions | Yes | Indicates the text message to reject. |
| callback | AsyncCallback&lt;void> | Yes | The callback of rejectCall. |

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

let rejectMessageOptions : call.RejectMessageOptions = {
    messageContent: "Unknown number blocked"
}
call.rejectCall(1, rejectMessageOptions, (err: BusinessError) => {
    if (err) {
        console.error(`rejectCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`rejectCall success.`);
    }
});

```

## rejectCall

```TypeScript
function rejectCall(callId?: int, options?: RejectMessageOptions): Promise<void>
```

Reject the incoming call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | No | Indicates the identifier of the call to reject. |
| options | RejectMessageOptions | No | Indicates the text message to reject. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the rejectCall. |

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

let rejectMessageOptions: call.RejectMessageOptions = {
    messageContent: "Unknown number blocked"
}
call.rejectCall(1, rejectMessageOptions).then(() => {
    console.info(`rejectCall success.`);
}).catch((err: BusinessError) => {
    console.error(`rejectCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## rejectCall

```TypeScript
function rejectCall(callId: int, callback: AsyncCallback<void>): void
```

Reject the incoming call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call to reject. |
| callback | AsyncCallback&lt;void> | Yes | The callback of rejectCall. |

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

call.rejectCall(1, (err: BusinessError) => {
    if (err) {
        console.error(`rejectCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`rejectCall success.`);
    }
});

```

## rejectCall

```TypeScript
function rejectCall(callback: AsyncCallback<void>): void
```

Reject the incoming call without callId.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of rejectCall. |

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

call.rejectCall((err: BusinessError) => {
    if (err) {
        console.error(`rejectCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`rejectCall success.`);
    }
});

```

## rejectCall

```TypeScript
function rejectCall(options: RejectMessageOptions, callback: AsyncCallback<void>): void
```

Reject the incoming call without callId.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RejectMessageOptions | Yes | Indicates the text message to reject. |
| callback | AsyncCallback&lt;void> | Yes | The callback of rejectCall. |

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

let rejectMessageOptions: call.RejectMessageOptions = {
    messageContent: "Unknown number blocked"
}
call.rejectCall(rejectMessageOptions, (err: BusinessError) => {
    if (err) {
        console.error(`rejectCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`rejectCall success.`);
    }
});

```

