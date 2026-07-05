# connectSystemChannel

## connectSystemChannel

```TypeScript
function connectSystemChannel(): Promise<void>
```

Connect system channel for the panel and input method.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECT_IME_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible causes:  a system error, such as null pointer, IPC exception. |
| 12800026 | input method system panel error. Possible causes:  1. the system panel not connected. 2. ipc failed due to the large amount of data transferred or other reasons.  3. the caller is not system panel. |

