# isInEmergencyCall (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="isinemergencycall"></a>
## isInEmergencyCall

```TypeScript
function isInEmergencyCall(callback: AsyncCallback<boolean>): void
```

Judge whether the emergency call is in progress.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function isInEmergencyCall(callback: AsyncCallback<boolean>): void--><!--Device-call-function isInEmergencyCall(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | The callback of isInEmergencyCall.Returns {@code true} if the call is in emergency; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.isInEmergencyCall((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`isInEmergencyCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`isInEmergencyCall success, data->${JSON.stringify(data)}`);
    }
});

```


<a id="isinemergencycall-1"></a>
## isInEmergencyCall

```TypeScript
function isInEmergencyCall(): Promise<boolean>
```

Judge whether the emergency call is in progress.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function isInEmergencyCall(): Promise<boolean>--><!--Device-call-function isInEmergencyCall(): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if the call is in emergency; returns {@code false} otherwise. |

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

call.isInEmergencyCall().then((data: boolean) => {
    console.info(`isInEmergencyCall success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`isInEmergencyCall fail, promise: err->${JSON.stringify(err)}`);
});

```

