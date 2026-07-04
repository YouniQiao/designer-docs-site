# getVoNRState (System API)

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## getVoNRState

```TypeScript
function getVoNRState(slotId: number, callback: AsyncCallback<VoNRState>): void
```

Get switch state for voice over NR.

**Since:** 10

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;VoNRState&gt; | Yes | Indicates the callback for getVoNRState. |

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
function getVoNRState(slotId: number): Promise<VoNRState>
```

Get switch state for voice over NR.

**Since:** 10

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;VoNRState&gt; | Returns the VoNR state. |

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
call.getVoNRState(slotId).then((data: call.VoNRState) => {
    console.info(`getVoNRState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getVoNRState fail, promise: err->${JSON.stringify(err)}`);
});

```

