# isArkChildProcessSupported

## Modules to Import

```TypeScript
import { childProcessManager } from '@ohos.app.ability.childProcessManager';
```

## isArkChildProcessSupported

```TypeScript
function isArkChildProcessSupported(): boolean
```

Checks whether the caller is allowed to create ark child processes on this device. Some devices may not support creating ark child processes, so it is recommended to use this interface to verify support beforehand.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - `true`: The caller is allowed to create ark child processes.- `false`: The caller is not allowed to create ark child processes. |

