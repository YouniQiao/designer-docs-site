# MacroQuery

MacroQuery provides the API to check the support for macro photography.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isMacroSupported

```TypeScript
isMacroSupported(): boolean
```

Checks whether macro photography is supported in the current state. This API must be called after [commitConfig]camera.Session.commitConfig(callback: AsyncCallback<void>).

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of macro photography. true if supported, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 11 - 18] |

