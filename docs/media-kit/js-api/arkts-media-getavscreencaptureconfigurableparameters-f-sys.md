# getAVScreenCaptureConfigurableParameters

## getAVScreenCaptureConfigurableParameters

```TypeScript
function getAVScreenCaptureConfigurableParameters(sessionId: int): Promise<string>
```

get Configurations which user can changes from AVScreenCapture server

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | The AVScreenCapture server session ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns a configurable configuration item string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 |  |
| 5400109 | Sessions not exist. Return by promise. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { media } from '@kit.MediaKit';

let sessionId: number = 0; // Use the ID of the session that starts the process.

try {
  let privacyResult: string = await media.getAVScreenCaptureConfigurableParameters(sessionId);
} catch (error: BusinessError) {
  console.error(`getAVScreenCaptureConfigurableParameters error, error message: ${error.message}`);
}

```

