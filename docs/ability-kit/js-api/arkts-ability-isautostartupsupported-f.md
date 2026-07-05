# isAutoStartupSupported

## Modules to Import

```TypeScript
import { autoStartupManager } from '@ohos.app.ability.autoStartupManager';
```

## isAutoStartupSupported

```TypeScript
function isAutoStartupSupported(): boolean
```

Check whether the current device supports auto startup on this device.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - `true`: Device supports auto startup.- `false`: Device do not support auto startup. |

