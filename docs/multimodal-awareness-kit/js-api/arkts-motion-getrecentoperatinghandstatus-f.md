# getRecentOperatingHandStatus

## getRecentOperatingHandStatus

```TypeScript
function getRecentOperatingHandStatus(): OperatingHandStatus
```

Obtains the latest operating hand status.

**Since:** 15

**Required permissions:** 

- API version15  to  19: ohos.permission.ACTIVITY_MOTION

- API version20 and later: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Return value:**

| Type | Description |
| --- | --- |
| OperatingHandStatus | Status of the operating hand. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to get the recent operating hand  status forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let data:motion.OperatingHandStatus = motion.getRecentOperatingHandStatus();
    console.info('get succeeded' + data);
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed get and err code is " + error.code);
}

```

