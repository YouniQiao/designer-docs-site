# removeMissedIncomingCallNotification

## removeMissedIncomingCallNotification

```TypeScript
function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void
```

Remove missed incoming call notification.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and * ohos.permission.WRITE_CALL_LOG

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The callback of removeMissedIncomingCallNotification. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.removeMissedIncomingCallNotification((err: BusinessError) => {
    if (err) {
        console.error(`removeMissedIncomingCallNotification failed, err->${JSON.stringify(err)}`);
    } else {
        console.info(`removeMissedIncomingCallNotification success`);
    }
});

```

## removeMissedIncomingCallNotification

```TypeScript
function removeMissedIncomingCallNotification(): Promise<void>
```

Remove missed incoming call notification.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and * ohos.permission.WRITE_CALL_LOG

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the removeMissedIncomingCallNotification. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.removeMissedIncomingCallNotification().then(() => {
    console.info(`removeMissedIncomingCallNotification success`);
}).catch((err: BusinessError) => {
    console.error(`removeMissedIncomingCallNotification failed, promise: err->${JSON.stringify(err)}`);
});

```

