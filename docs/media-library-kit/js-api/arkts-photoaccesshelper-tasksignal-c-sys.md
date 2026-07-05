# TaskSignal

for interrupting batch operations.

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## cancel

```TypeScript
cancel(): void
```

cancel batch operation.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 23800151 | The scenarioparameter verification fails. Possible causes:  1. No task can be canceled. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. Thefile system is abnormal; 3. The IPC request timedout. |

**Example**

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';

let taskSignal = new photoAccessHelper.TaskSignal();

try {
  taskSignal.cancel();
  console.info('cancel batch operation success');
} catch (err) {
  console.error(`cancel batch operation failed with error: ${err.code}, ${err.message}`);
}

```

