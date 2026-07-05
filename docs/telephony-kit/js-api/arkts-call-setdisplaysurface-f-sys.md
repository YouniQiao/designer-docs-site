# setDisplaySurface

## setDisplaySurface

```TypeScript
function setDisplaySurface(callId: int, surfaceId: string): Promise<void>
```

Set display surface when video call.

**Since:** 11

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| surfaceId | string | Yes | Indicates the identifier of the display surface id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setDisplayWindow. |

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

call.setDisplaySurface(1, "surfaceId1").then(() => {
    console.info(`setDisplaySurface success.`);
}).catch((err: BusinessError) => {
    console.error(`setDisplaySurface fail, promise: err->${JSON.stringify(err)}`);
});

```

