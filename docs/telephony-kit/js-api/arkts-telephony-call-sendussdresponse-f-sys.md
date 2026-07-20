# sendUssdResponse (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## sendUssdResponse

```TypeScript
function sendUssdResponse(slotId: number, content: string): void
```

Send ussd response.

**Since:** 26.0.0

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function sendUssdResponse(slotId: int, content: string): void--><!--Device-call-function sendUssdResponse(slotId: int, content: string): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the slotId to send response. |
| content | string | Yes | Indicates the response content. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error, system database write fail. |

**Example**

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

