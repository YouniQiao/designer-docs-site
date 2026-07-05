# updateImsCallMode

## updateImsCallMode

```TypeScript
function updateImsCallMode(callId: int, mode: ImsCallMode, callback: AsyncCallback<void>): void
```

Update Ims call mode.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| mode | ImsCallMode | Yes | Indicates the mode of the ims call. |
| callback | AsyncCallback&lt;void> | Yes | The callback of updateImsCallMode. |

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

call.updateImsCallMode(1, 1, (err: BusinessError) => {
    if (err) {
        console.error(`updateImsCallMode fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`updateImsCallMode success.`);
    }
});

```

## updateImsCallMode

```TypeScript
function updateImsCallMode(callId: int, mode: ImsCallMode): Promise<void>
```

Update Ims call mode.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| mode | ImsCallMode | Yes | Indicates the mode of the ims call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the updateImsCallMode. |

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

call.updateImsCallMode(1, 1).then(() => {
    console.info(`updateImsCallMode success.`);
}).catch((err: BusinessError) => {
    console.error(`updateImsCallMode fail, promise: err->${JSON.stringify(err)}`);
});

```

