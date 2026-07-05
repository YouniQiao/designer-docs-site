# getScreenCaptureMonitor

## getScreenCaptureMonitor

```TypeScript
function getScreenCaptureMonitor(): Promise<ScreenCaptureMonitor>
```

Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ScreenCaptureMonitor> | Promise used to return the result. The instance can be used to query  and monitor the status of the system screen recorder.  If the operation is successful,  a ScreenCaptureMonitor instance is returned; otherwise, null is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 5400101 | No memory. Return by promise. |

**Example**

```TypeScript
let screenCaptureMonitor: media.ScreenCaptureMonitor;
try {
  screenCaptureMonitor = await media.getScreenCaptureMonitor();
} catch (err) {
  console.error(`getScreenCaptureMonitor failed, error message:${err.message}`);
}

```

