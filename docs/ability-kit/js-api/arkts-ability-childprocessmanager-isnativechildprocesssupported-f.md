# isNativeChildProcessSupported

## Modules to Import

```TypeScript
import { childProcessManager } from '@kit.AbilityKit';
```

<a id="isnativechildprocesssupported"></a>
## isNativeChildProcessSupported

```TypeScript
function isNativeChildProcessSupported(): boolean
```

Checks whether the caller is allowed to create native child processes on this device.Some devices may not support creating native child processes, so it is recommended to use this interface to verify support beforehand.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-childProcessManager-function isNativeChildProcessSupported(): boolean--><!--Device-childProcessManager-function isNativeChildProcessSupported(): boolean-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - `true`: The caller is allowed to create native child processes.   - `false`: The caller is not allowed to create native child processes. |

