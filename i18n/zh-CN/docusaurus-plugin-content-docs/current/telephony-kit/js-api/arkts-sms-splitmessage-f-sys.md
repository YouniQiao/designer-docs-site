# splitMessage

## splitMessage

```TypeScript
function splitMessage(content: string, callback: AsyncCallback<Array<string>>): void
```

Splits a long SMS message into multiple fragments. <p>If the length of an SMS message exceeds the maximum length allowed (140 bytes), the SMS message is split into multiple segments for processing.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SEND_MESSAGES

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string | 是 | Indicates the short message content, which cannot be {@code null}. |
| callback | AsyncCallback&lt;Array&lt;string>> | 是 | Indicates the callback for getting a list of split segments,  which can be combined into a complete SMS message;  Returns an empty string if no permission is granted or the short message content is {@code null}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let content: string = "long message";
sms.splitMessage(content, (err: BusinessError, data: string[]) => {
      console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## splitMessage

```TypeScript
function splitMessage(content: string): Promise<Array<string>>
```

Splits a long SMS message into multiple fragments. <p>If the length of an SMS message exceeds the maximum length allowed (140 bytes), the SMS message is split into multiple segments for processing.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SEND_MESSAGES

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string | 是 | Indicates the short message content, which cannot be {@code null}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Returns a list of split segments, which can be combined into a complete SMS  message; Returns an empty string if no permission is granted or the short message content is {@code null}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let content: string = "long message";
let promise = sms.splitMessage(content);
promise.then((data: string[]) => {
    console.info(`splitMessage success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`splitMessage failed, promise: err->${JSON.stringify(err)}`);
});

```

