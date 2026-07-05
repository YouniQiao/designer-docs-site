# combineConference

## combineConference

```TypeScript
function combineConference(callId: int, callback: AsyncCallback<void>): void
```

Merge calls, merge two calls into conference calls.

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;void> | 是 | The callback of combineConference. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300007 | The number of conference calls exceeds the limit. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.combineConference(1, (err: BusinessError) => {
    if (err) {
        console.error(`combineConference fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`combineConference success.`);
    }
});

```

## combineConference

```TypeScript
function combineConference(callId: int): Promise<void>
```

Merge calls, merge two calls into conference calls.

**起始版本：** 11

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the combineConference. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300007 | The number of conference calls exceeds the limit. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.combineConference(1).then(() => {
    console.info(`combineConference success.`);
}).catch((err: BusinessError) => {
    console.error(`combineConference fail, promise: err->${JSON.stringify(err)}`);
});

```

