# splitMessage

## splitMessage

```TypeScript
function splitMessage(content: string, callback: AsyncCallback<Array<string>>): void
```

Splits a long SMS message into multiple fragments. <p>If the length of an SMS message exceeds the maximum length allowed (140 bytes), the SMS message is split into multiple segments for processing.

**Since:** 8

**Required permissions:** 

 ohos.permission.SEND_MESSAGES

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | string | Yes | Indicates the short message content, which cannot be {@code null}. |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | Indicates the callback for getting a list of split segments,  which can be combined into a complete SMS message;  Returns an empty string if no permission is granted or the short message content is {@code null}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

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

**Since:** 8

**Required permissions:** 

 ohos.permission.SEND_MESSAGES

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | string | Yes | Indicates the short message content, which cannot be {@code null}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Returns a list of split segments, which can be combined into a complete SMS  message; Returns an empty string if no permission is granted or the short message content is {@code null}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

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

