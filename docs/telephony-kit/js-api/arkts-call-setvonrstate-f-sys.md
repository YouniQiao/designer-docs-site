# setVoNRState

## setVoNRState

```TypeScript
function setVoNRState(slotId: int, state: VoNRState, callback: AsyncCallback<void>): void
```

Set switch state for voice over NR.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| state | VoNRState | Yes | Indicates the VoNR state. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setVoNRState. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

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
function setVoNRState(slotId: int, state: VoNRState): Promise<void>
```

Set switch state for voice over NR.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| state | VoNRState | Yes | Indicates the VoNR state. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setVoNRState. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

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

