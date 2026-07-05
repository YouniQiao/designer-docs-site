# cancelSession

## cancelSession

```TypeScript
function cancelSession(slotId: int, transactionId: string, cancelReason: CancelReason): Promise<ResultCode>
```

Cancel session can be used in the 1.after the response to "ES9+.AuthenticateClient" 2.after the response to "ES9+.GetBoundProfilePackage"

**Since:** 18

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |
| transactionId | string | Yes | The transaction ID returned by SM-DP+ server. |
| cancelReason | CancelReason | Yes | The cancel reason. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultCode> | Returns the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

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

