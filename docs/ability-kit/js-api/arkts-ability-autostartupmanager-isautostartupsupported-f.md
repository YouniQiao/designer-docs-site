# isAutoStartupSupported

## Modules to Import

```TypeScript
import { autoStartupManager } from '@kit.AbilityKit';
```

<a id="isautostartupsupported"></a>
## isAutoStartupSupported

```TypeScript
function isAutoStartupSupported(): boolean
```

Check whether the current device supports auto startup on this device.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-autoStartupManager-function isAutoStartupSupported(): boolean--><!--Device-autoStartupManager-function isAutoStartupSupported(): boolean-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - `true`: Device supports auto startup.   - `false`: Device do not support auto startup. |

