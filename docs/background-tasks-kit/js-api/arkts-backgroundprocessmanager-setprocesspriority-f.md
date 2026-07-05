# setProcessPriority

## setProcessPriority

```TypeScript
function setProcessPriority(pid: int, priority: ProcessPriority): Promise<void>
```

设置子进程的压制档位，子进程被压制后可获得的CPU资源将会受到限制。如果主进程调度策略发生变化，如从后台切至前台等，子进程会跟随主进程一同变化，子进程如需继续压制，需要重新调用本接口。使用Promise异步回调。

**Since:** 17

**System capability:** SystemCapability.Resourceschedule.BackgroundProcessManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | int | Yes | 需要被压制子进程的进程号，  [OH_Ability_StartNativeChildProcess](docroot://reference/apis-ability-kit/capi-native-child-process-h.md#oh_ability_startnativechildprocess)  接口创建子进程后的pid参数，即为子进程进程号。 |
| priority | ProcessPriority | Yes | 压制档位。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: priority is out of range. |

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

