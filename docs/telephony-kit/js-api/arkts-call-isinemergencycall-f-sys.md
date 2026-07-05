# isInEmergencyCall

## isInEmergencyCall

```TypeScript
function isInEmergencyCall(callback: AsyncCallback<boolean>): void
```

Judge whether the emergency call is in progress.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | The callback of isInEmergencyCall.  Returns {@code true} if the call is in emergency; returns {@code false} otherwise. |

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

call.isInEmergencyCall((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`isInEmergencyCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`isInEmergencyCall success, data->${JSON.stringify(data)}`);
    }
});

```

## isInEmergencyCall

```TypeScript
function isInEmergencyCall(): Promise<boolean>
```

Judge whether the emergency call is in progress.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the call is in emergency; returns {@code false} otherwise. |

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

call.isInEmergencyCall().then((data: boolean) => {
    console.info(`isInEmergencyCall success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`isInEmergencyCall fail, promise: err->${JSON.stringify(err)}`);
});

```

