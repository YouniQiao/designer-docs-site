# answerCall

## answerCall

```TypeScript
function answerCall(callId: int, callback: AsyncCallback<void>): void
```

Answers the incoming call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call to answer. |
| callback | AsyncCallback&lt;void> | Yes | The callback of answerCall. |

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

call.answerCall(1, (err: BusinessError) => {
    if (err) {
        console.error(`answerCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`answerCall success.`);
    }
});

```

## answerCall

```TypeScript
function answerCall(callId?: int): Promise<void>
```

Answers the incoming call.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | No | Indicates the identifier of the call to answer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the answerCall. |

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

call.answerCall(1).then(() => {
    console.info(`answerCall success.`);
}).catch((err: BusinessError) => {
    console.error(`answerCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## answerCall

```TypeScript
function answerCall(callback: AsyncCallback<void>): void
```

Answers the incoming call without callId.

**Since:** 9

**Required permissions:** 

 ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of answerCall. |

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

call.answerCall((err: BusinessError) => {
    if (err) {
        console.error(`answerCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`answerCall success.`);
    }
});

```

## answerCall

```TypeScript
function answerCall(videoState: VideoStateType, callId: int): Promise<void>
```

Answers the incoming video call

**Since:** 11

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| videoState | VideoStateType | Yes | Indicates the answer the call with video or voice. |
| callId | int | Yes | Indicates the identifier of the call to answer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the answerCall. |

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

call.answerCall(0, 1).then(() => {
    console.info(`answerCall success.`);
}).catch((err: BusinessError) => {
    console.error(`answerCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## answerCall

```TypeScript
function answerCall(videoState: VideoStateType, callId: int, isRtt: boolean): Promise<void>
```

Answers the incoming rtt

**Since:** 22

**Required permissions:** 

 ohos.permission.ANSWER_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| videoState | VideoStateType | Yes | Indicates the answer the call with video or voice. |
| callId | int | Yes | Indicates the identifier of the call to answer. |
| isRtt | boolean | Yes | Indicates the call is rtt or not. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the answerCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error. |
| 8400999 | Unknown error code. |

