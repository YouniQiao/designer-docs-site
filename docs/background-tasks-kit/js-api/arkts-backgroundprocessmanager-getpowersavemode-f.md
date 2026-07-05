# getPowerSaveMode

## getPowerSaveMode

```TypeScript
function getPowerSaveMode(pid: int): Promise<PowerSaveMode>
```

获取进程能效模式。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.BACKGROUND_MANAGER_POWER_SAVE_MODE

**System capability:** SystemCapability.Resourceschedule.BackgroundProcessManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | int | Yes | 进程号。 取值范围：大于0的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PowerSaveMode> | Promise对象。返回进程能效模式状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 31800002 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; |
| 801 | Capability not supported. |

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

