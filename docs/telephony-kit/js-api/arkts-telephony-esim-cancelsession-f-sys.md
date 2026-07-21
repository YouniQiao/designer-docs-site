# cancelSession (System API)

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

<a id="cancelsession"></a>
## cancelSession

```TypeScript
function cancelSession(slotId: number, transactionId: string, cancelReason: CancelReason): Promise<ResultCode>
```

Cancel session can be used in the1.after the response to "ES9+.AuthenticateClient"2.after the response to "ES9+.GetBoundProfilePackage"

**Since:** 18

**Required permissions:** ohos.permission.SET_TELEPHONY_ESIM_STATE

<!--Device-eSIM-function cancelSession(slotId: int, transactionId: string, cancelReason: CancelReason): Promise<ResultCode>--><!--Device-eSIM-function cancelSession(slotId: int, transactionId: string, cancelReason: CancelReason): Promise<ResultCode>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |
| transactionId | string | Yes | The transaction ID returned by SM-DP+ server. |
| cancelReason | [CancelReason](arkts-telephony-esim-cancelreason-e-sys.md) | Yes | The cancel reason. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultCode&gt; | Returns the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3120001](../errorcode-telephony.md#3120001-service-connection-error) | Service connection failed. |
| [3120002](../errorcode-telephony.md#3120002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

let transactionId = '';
eSIM.cancelSession(1, transactionId, eSIM.CancelReason.CANCEL_REASON_END_USER_REJECTION)
  .then((data: eSIM.ResultCode) => {
    console.info(`cancelSession, result: data->${JSON.stringify(data)}`);
  })
  .catch((err: BusinessError<void>) => {
    console.error(`cancelSession execution failed: err->${JSON.stringify(err)}`);
  });

```

