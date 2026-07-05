# Macro

Macro inherits from [MacroQuery]camera.MacroQuery. It provides the API to enable macro photography.

**Inheritance:** Macroextends: MacroQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableMacro

```TypeScript
enableMacro(enabled: boolean): void
```

Enables or disables macro photography. > **NOTE** > > Before calling this API, call > [isMacroSupported]camera.MacroQuery.isMacroSupported to check whether the > current device supports macro photography.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable macro photography. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 11 - 18] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |

