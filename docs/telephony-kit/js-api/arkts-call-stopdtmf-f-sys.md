# stopDTMF

## stopDTMF

```TypeScript
function stopDTMF(callId: int, callback: AsyncCallback<void>): void
```

Stop DTMF(Dual Tone Multi Frequency).

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;void> | Yes | The callback of stopDTMF. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.stopDTMF(1, (err: BusinessError) => {
    if (err) {
        console.error(`stopDTMF fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`stopDTMF success.`);
    }
});

```

## stopDTMF

```TypeScript
function stopDTMF(callId: int): Promise<void>
```

Stop DTMF(Dual Tone Multi Frequency).

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the stopDTMF. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.stopDTMF(1).then(() => {
    console.info(`stopDTMF success.`);
}).catch((err: BusinessError) => {
    console.error(`stopDTMF fail, promise: err->${JSON.stringify(err)}`);
});

```

