# removeMissedIncomingCallNotification (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="removemissedincomingcallnotification"></a>
## removeMissedIncomingCallNotification

```TypeScript
function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void
```

Remove missed incoming call notification.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and ohos.permission.WRITE_CALL_LOG

<!--Device-call-function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void--><!--Device-call-function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of removeMissedIncomingCallNotification. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

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


<a id="removemissedincomingcallnotification-1"></a>
## removeMissedIncomingCallNotification

```TypeScript
function removeMissedIncomingCallNotification(): Promise<void>
```

Remove missed incoming call notification.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and ohos.permission.WRITE_CALL_LOG

<!--Device-call-function removeMissedIncomingCallNotification(): Promise<void>--><!--Device-call-function removeMissedIncomingCallNotification(): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the removeMissedIncomingCallNotification. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.removeMissedIncomingCallNotification().then(() => {
    console.info(`removeMissedIncomingCallNotification success`);
}).catch((err: BusinessError) => {
    console.error(`removeMissedIncomingCallNotification failed, promise: err->${JSON.stringify(err)}`);
});

```

