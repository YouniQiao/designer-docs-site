# TaskSignal (System API)

for interrupting batch operations.

**Since:** 26.0.0

<!--Device-photoAccessHelper-export class TaskSignal--><!--Device-photoAccessHelper-export class TaskSignal-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="cancel"></a>
## cancel

```TypeScript
cancel(): void
```

cancel batch operation.

**Since:** 26.0.0

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**Model restriction:** This API can be used only in the stage model.

<!--Device-TaskSignal-cancel(): void--><!--Device-TaskSignal-cancel(): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenarioparameter verification fails. Possible causes:<br>1. No task can be canceled. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.<br>Possible causes: 1. Database corrupted; 2. Thefile system is abnormal; 3. The IPC request timedout. |

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

