# setVoNRState (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## setVoNRState

```TypeScript
function setVoNRState(slotId: number, state: VoNRState, callback: AsyncCallback<void>): void
```

Set switch state for voice over NR.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function setVoNRState(slotId: int, state: VoNRState, callback: AsyncCallback<void>): void--><!--Device-call-function setVoNRState(slotId: int, state: VoNRState, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| state | [VoNRState](arkts-telephony-call-vonrstate-e-sys.md) | Yes | Indicates the VoNR state. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The callback of setVoNRState. |

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

let slotId: number = 0;
let state: call.VoNRState = call.VoNRState.VONR_STATE_ON;
call.setVoNRState(slotId, state, (err: BusinessError) => {
    if (err) {
        console.error(`setVoNRState fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setVoNRState success`);
    }
});

```


## setVoNRState

```TypeScript
function setVoNRState(slotId: number, state: VoNRState): Promise<void>
```

Set switch state for voice over NR.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function setVoNRState(slotId: int, state: VoNRState): Promise<void>--><!--Device-call-function setVoNRState(slotId: int, state: VoNRState): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| state | [VoNRState](arkts-telephony-call-vonrstate-e-sys.md) | Yes | Indicates the VoNR state. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the setVoNRState. |

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

let slotId: number = 0;
let state: call.VoNRState = call.VoNRState.VONR_STATE_ON;
call.setVoNRState(slotId, state).then(() => {
    console.info(`setVoNRState success`);
}).catch((err: BusinessError) => {
    console.error(`setVoNRState fail, promise: err->${JSON.stringify(err)}`);
});

```

