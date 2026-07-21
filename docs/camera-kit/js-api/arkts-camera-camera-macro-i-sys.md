# Macro (System API)

Macro inherits from [MacroQuery](arkts-camera-camera-macroquery-i-sys.md).It provides the API to enable macro photography.

**Inheritance/Implementation:** Macro extends [MacroQuery](arkts-camera-camera-macroquery-i-sys.md)

**Since:** 19

<!--Device-camera-interface Macro extends MacroQuery--><!--Device-camera-interface Macro extends MacroQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="enablemacro"></a>
## enableMacro

```TypeScript
enableMacro(enabled: boolean): void
```

Enables or disables macro photography.

> **NOTE**  
>  
> Before calling this API, call  
> [isMacroSupported](arkts-camera-camera-macroquery-i-sys.md#ismacrosupported-1) to check whether the  
> current device supports macro photography.

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Macro-enableMacro(enabled: boolean): void--><!--Device-Macro-enableMacro(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable macro photography. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 11 - 18 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 and later |

