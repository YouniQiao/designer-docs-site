# kickOutFromConference

## kickOutFromConference

```TypeScript
function kickOutFromConference(callId: int, callback: AsyncCallback<void>): void
```

Kick out call from the conference call.

**起始版本：** 10

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call which kick out. |
| callback | AsyncCallback&lt;void> | 是 | The callback of kickOutFromConference. |

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

call.kickOutFromConference(1, (err: BusinessError) => {
    if (err) {
        console.error(`kickOutFromConference fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`kickOutFromConference success.`);
    }
});

```

## kickOutFromConference

```TypeScript
function kickOutFromConference(callId: int): Promise<void>
```

Kick out call from the conference call.

**起始版本：** 10

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call which kick out. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the kickOutFromConference. |

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

call.kickOutFromConference(1).then(() => {
    console.info(`kickOutFromConference success.`);
}).catch((err: BusinessError) => {
    console.error(`kickOutFromConference fail, promise: err->${JSON.stringify(err)}`);
});

```

