# getMainCallId

## getMainCallId

```TypeScript
function getMainCallId(callId: int, callback: AsyncCallback<int>): void
```

Get the main call Id.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;int> | 是 | Indicates the callback for getting the main call id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getMainCallId(1, (err: BusinessError, data: number) => {
    if (err) {
        console.error(`getMainCallId fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getMainCallId success, data->${JSON.stringify(data)}`);
    }
});

```

## getMainCallId

```TypeScript
function getMainCallId(callId: int): Promise<int>
```

Get the main call Id.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Returns the main call id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getMainCallId(1).then((data: number) => {
    console.info(`getMainCallId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getMainCallId fail, promise: err->${JSON.stringify(err)}`);
});

```

