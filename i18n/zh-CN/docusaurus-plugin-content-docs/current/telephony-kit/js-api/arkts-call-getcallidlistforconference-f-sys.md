# getCallIdListForConference

## getCallIdListForConference

```TypeScript
function getCallIdListForConference(callId: int, callback: AsyncCallback<Array<string>>): void
```

Get the call Id list of the conference.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;Array&lt;string>> | 是 | Indicates the callback for getting  the call id list of conference calls. |

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

call.getCallIdListForConference(1, (err: BusinessError, data: Array<string>) => {
    if (err) {
        console.error(`getCallIdListForConference fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getCallIdListForConference success, data->${JSON.stringify(data)}`);
    }
});

```

## getCallIdListForConference

```TypeScript
function getCallIdListForConference(callId: int): Promise<Array<string>>
```

Get the call Id list of the conference.

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
| Promise&lt;Array&lt;string>> | Returns the call id list of conference calls. |

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

call.getCallIdListForConference(1).then((data: Array<string>) => {
    console.info(`getCallIdListForConference success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallIdListForConference fail, promise: err->${JSON.stringify(err)}`);
});

```

