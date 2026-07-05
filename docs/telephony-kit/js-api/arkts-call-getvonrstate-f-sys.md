# getVoNRState

## getVoNRState

```TypeScript
function getVoNRState(slotId: int, callback: AsyncCallback<VoNRState>): void
```

Get switch state for voice over NR.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;VoNRState> | Yes | Indicates the callback for getVoNRState. |

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
call.getVoNRState(slotId, (err: BusinessError, data: call.VoNRState) => {
    if (err) {
        console.error(`getVoNRState fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getVoNRState success, data->${JSON.stringify(data)}`);
    }
});

```

## getVoNRState

```TypeScript
function getVoNRState(slotId: int): Promise<VoNRState>
```

Get switch state for voice over NR.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;VoNRState> | Returns the VoNR state. |

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
call.getVoNRState(slotId).then((data: call.VoNRState) => {
    console.info(`getVoNRState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getVoNRState fail, promise: err->${JSON.stringify(err)}`);
});

```

