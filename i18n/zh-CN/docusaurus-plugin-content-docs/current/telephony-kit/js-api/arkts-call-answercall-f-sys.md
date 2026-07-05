# answerCall

## answerCall

```TypeScript
function answerCall(callId: int, callback: AsyncCallback<void>): void
```

Answers the incoming call.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ANSWER_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call to answer. |
| callback | AsyncCallback&lt;void> | 是 | The callback of answerCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.ANSWER_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 否 | Indicates the identifier of the call to answer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the answerCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The callback of answerCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.ANSWER_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| videoState | VideoStateType | 是 | Indicates the answer the call with video or voice. |
| callId | int | 是 | Indicates the identifier of the call to answer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the answerCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 22

**需要权限：** 

 ohos.permission.ANSWER_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| videoState | VideoStateType | 是 | Indicates the answer the call with video or voice. |
| callId | int | 是 | Indicates the identifier of the call to answer. |
| isRtt | boolean | 是 | Indicates the call is rtt or not. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the answerCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error. |
| 8400999 | Unknown error code. |

