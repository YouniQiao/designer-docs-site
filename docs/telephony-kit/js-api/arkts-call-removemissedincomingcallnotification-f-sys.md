# removeMissedIncomingCallNotification

## removeMissedIncomingCallNotification

```TypeScript
function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void
```

Remove missed incoming call notification.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and * ohos.permission.WRITE_CALL_LOG

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of removeMissedIncomingCallNotification. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.removeMissedIncomingCallNotification((err: BusinessError) => {
    if (err) {
        console.error(`removeMissedIncomingCallNotification failed, err->${JSON.stringify(err)}`);
    } else {
        console.info(`removeMissedIncomingCallNotification success`);
    }
});

```

## removeMissedIncomingCallNotification

```TypeScript
function removeMissedIncomingCallNotification(): Promise<void>
```

Remove missed incoming call notification.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and * ohos.permission.WRITE_CALL_LOG

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the removeMissedIncomingCallNotification. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.removeMissedIncomingCallNotification().then(() => {
    console.info(`removeMissedIncomingCallNotification success`);
}).catch((err: BusinessError) => {
    console.error(`removeMissedIncomingCallNotification failed, promise: err->${JSON.stringify(err)}`);
});

```

