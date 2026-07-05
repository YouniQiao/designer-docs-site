# getPowerSaveMode

## Modules to Import

```TypeScript
import { backgroundProcessManager } from '@ohos.resourceschedule.backgroundProcessManager';
```

## getPowerSaveMode

```TypeScript
function getPowerSaveMode(pid: number): Promise<PowerSaveMode>
```

Obtains the power saving mode of a process. This API uses a promise to return the result.

**Since:** 23

**Required permissions:** ohos.permission.BACKGROUND_MANAGER_POWER_SAVE_MODE

**System capability:** SystemCapability.Resourceschedule.BackgroundProcessManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | number | Yes | Process ID.<br>Value range: any integer greater than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PowerSaveMode&gt; | Promise that returns the power saving mode of a process. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [31800002](../../apis-backgroundtasks-kit/errorcode-backgroundProcessManager.md#31800002-invalid-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundProcessManager } from '@kit.BackgroundTasksKit';
// Replace the process ID with the actual one.
let pid = 33333;
try {
    backgroundProcessManager.getPowerSaveMode(pid).then((result: backgroundProcessManager.PowerSaveMode) => {
        console.info("getPowerSaveMode: " + result.toString());
    });
} catch (error) {
    console.error(`getPowerSaveMode failed, errCode: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

