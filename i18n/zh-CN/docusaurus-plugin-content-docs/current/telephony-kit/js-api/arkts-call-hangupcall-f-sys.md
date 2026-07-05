# hangUpCall

## hangUpCall

```TypeScript
function hangUpCall(callId: int, callback: AsyncCallback<void>): void
```

Hang up the foreground call.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call to hangup. |
| callback | AsyncCallback&lt;void> | 是 | The callback of hangUpCall. |

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 否 | Indicates the identifier of the call to hangup. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the hangUpCall. |

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE or * ohos.permission.MANAGE_CALL_FOR_DEVICES

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The callback of hangUpCall. |

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

call.hangUpCall((err: BusinessError) => {
    if (err) {
        console.error(`hangUpCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`hangUpCall success.`);
    }
});

```

