# setProcessPriority

## Modules to Import

```TypeScript
import { backgroundProcessManager } from '@kit.BackgroundTasksKit';
```

## setProcessPriority

```TypeScript
function setProcessPriority(pid: number, priority: ProcessPriority): Promise<void>
```

Sets the child process priority. After a child process is suppressed, the CPU resources that can be obtained will
be limited. If the scheduling policy of the main process changes, for example, from the background to the
foreground, the child process changes with the main process. To suppress the child process, call this API again.

**Since:** 17

**System capability:** SystemCapability.Resourceschedule.BackgroundProcessManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | number | Yes | ID of the child process to be suppressed, which is the **pid** parameter after the childprocess is created through the[OH_Ability_StartNativeChildProcess](../../../../reference/apis-ability-kit/capi-native-child-process-h.md#oh_ability_startnativechildprocess)API. |
| priority | ProcessPriority | Yes | Suppression priority. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: priority is out of range. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundProcessManager } from '@kit.BackgroundTasksKit';

let childProcessPid = 33333;
try {
    backgroundProcessManager.setProcessPriority(childProcessPid,
        backgroundProcessManager.ProcessPriority.PROCESS_INACTIVE);
} catch (error) {
    console.error(`setProcessPriority failed, errCode: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

