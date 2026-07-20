# setPowerSaveMode

## Modules to Import

```TypeScript
import { backgroundProcessManager } from '@kit.BackgroundTasksKit';
```

## setPowerSaveMode

```TypeScript
function setPowerSaveMode(pid: number, powerSaveMode: PowerSaveMode): Promise<void>
```

Sets the power saving mode for a process. This API uses a promise to return the result.

You can set to enter the power saving mode when:

- The application is not focused, and there are no audio operations or UI updates.  
- The application cannot obtain the power lock through the system framework.  
- The application needs to perform time-consuming computing tasks, such as compression, decompression, and compilation, which are significantly restricted by CPU resources. (In this case, the power saving mode will be enabled forcibly.)

**Since:** 20

**Required permissions:** ohos.permission.BACKGROUND_MANAGER_POWER_SAVE_MODE

<!--Device-backgroundProcessManager-function setPowerSaveMode(pid: int, powerSaveMode: PowerSaveMode): Promise<void>--><!--Device-backgroundProcessManager-function setPowerSaveMode(pid: int, powerSaveMode: PowerSaveMode): Promise<void>-End-->

**System capability:** SystemCapability.Resourceschedule.BackgroundProcessManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | number | Yes | Process ID. |
| powerSaveMode | [PowerSaveMode](arkts-backgroundtasks-backgroundprocessmanager-powersavemode-e.md) | Yes | Power saving mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [31800002](../../apis-backgroundtasks-kit/errorcode-backgroundProcessManager.md#31800002-invalid-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameter types; 3. PowerSaveMode status is out of range. |
| [31800003](../../apis-backgroundtasks-kit/errorcode-backgroundProcessManager.md#31800003-setting-overriden-by-task-manager) | Setup error, This setting is overridden by settings in Task Manager |
| [31800004](../../apis-backgroundtasks-kit/errorcode-backgroundProcessManager.md#31800004-setting-failure-due-to-system-scheduling) | The setting failed due to system scheduling reasons. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundProcessManager } from '@kit.BackgroundTasksKit';

let pid = 33333;
try {
    backgroundProcessManager.setPowerSaveMode(pid, backgroundProcessManager.PowerSaveMode.EFFICIENCY_MODE); 
} catch (error) {
    console.error(`setPowerSaveMode failed, errCode: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

