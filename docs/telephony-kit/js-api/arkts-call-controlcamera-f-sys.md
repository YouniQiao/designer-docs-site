# controlCamera

## controlCamera

```TypeScript
function controlCamera(callId: int, cameraId: string): Promise<void>
```

Control camera to open/close/switch camera by cameraId when video call.

**Since:** 11

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| cameraId | string | Yes | Indicates the identifier of the camera id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the controlCamera. |

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

call.controlCamera(1, "1").then(() => {
    console.info(`controlCamera success.`);
}).catch((err: BusinessError) => {
    console.error(`controlCamera fail, promise: err->${JSON.stringify(err)}`);
});

```

