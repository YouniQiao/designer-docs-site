# hangUpCall

## hangUpCall

```TypeScript
function hangUpCall(callId: int, callback: AsyncCallback<void>): void
```

Hang up the foreground call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call to hangup. |
| callback | AsyncCallback&lt;void> | Yes | The callback of hangUpCall. |

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

call.hangUpCall(1, (err: BusinessError) => {
    if (err) {
        console.error(`hangUpCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`hangUpCall success.`);
    }
});

```

## hangUpCall

```TypeScript
function hangUpCall(callId?: int): Promise<void>
```

Hang up the foreground call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | No | Indicates the identifier of the call to hangup. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the hangUpCall. |

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

call.hangUpCall(1).then(() => {
    console.info(`hangUpCall success.`);
}).catch((err: BusinessError) => {
    console.error(`hangUpCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## hangUpCall

```TypeScript
function hangUpCall(callback: AsyncCallback<void>): void
```

Hang up the foreground call without callId.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE or * ohos.permission.MANAGE_CALL_FOR_DEVICES

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of hangUpCall. |

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

call.hangUpCall((err: BusinessError) => {
    if (err) {
        console.error(`hangUpCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`hangUpCall success.`);
    }
});

```

