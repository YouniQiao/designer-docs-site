# startDTMF

## startDTMF

```TypeScript
function startDTMF(callId: int, character: string, callback: AsyncCallback<void>): void
```

Start DTMF(Dual Tone Multi Frequency).

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |
| character | string | 是 | Indicates the characters sent. |
| callback | AsyncCallback&lt;void> | 是 | The callback of startDTMF. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.startDTMF(1, "0", (err: BusinessError) => {
    if (err) {
        console.error(`startDTMF fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`startDTMF success.`);
    }
});

```

## startDTMF

```TypeScript
function startDTMF(callId: int, character: string): Promise<void>
```

Start DTMF(Dual Tone Multi Frequency).

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |
| character | string | 是 | Indicates the characters sent. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the startDTMF. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.startDTMF(1, "0").then(() => {
    console.info(`startDTMF success.`);
}).catch((err: BusinessError) => {
    console.error(`startDTMF fail, promise: err->${JSON.stringify(err)}`);
});

```

