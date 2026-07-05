# sendUssdResponse

## sendUssdResponse

```TypeScript
function sendUssdResponse(slotId: int, content: string): void
```

Send ussd response.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the slotId to send response. |
| content | string | 是 | Indicates the response content. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error, system database write fail. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { call } from '@kit.TelephonyKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

function testSendUssdResponse() {
    const slotId: number = 0;
    const content: string = "OK";

    try {
        call.sendUssdResponse(slotId, content);
    } catch (error) {
        const err = error as BusinessError;
        hilog.error(0x0000, 'testTag', `Failed to send USSD response. Code: ${err.code}, Message: ${err.message}`);
    }
}

```

