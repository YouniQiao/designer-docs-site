# startDTMF (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## startDTMF

```TypeScript
function startDTMF(callId: number, character: string, callback: AsyncCallback<void>): void
```

Start DTMF(Dual Tone Multi Frequency).

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function startDTMF(callId: int, character: string, callback: AsyncCallback<void>): void--><!--Device-call-function startDTMF(callId: int, character: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | number | Yes | Indicates the identifier of the call. |
| character | string | Yes | Indicates the characters sent. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The callback of startDTMF. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

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
function startDTMF(callId: number, character: string): Promise<void>
```

Start DTMF(Dual Tone Multi Frequency).

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function startDTMF(callId: int, character: string): Promise<void>--><!--Device-call-function startDTMF(callId: int, character: string): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | number | Yes | Indicates the identifier of the call. |
| character | string | Yes | Indicates the characters sent. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the startDTMF. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.startDTMF(1, "0").then(() => {
    console.info(`startDTMF success.`);
}).catch((err: BusinessError) => {
    console.error(`startDTMF fail, promise: err->${JSON.stringify(err)}`);
});

```

