# ManualFocus

ManualFocus object.

**Inheritance:** ManualFocusextends: ManualFocusQuery.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getFocusDistance

```TypeScript
getFocusDistance(): double
```

Gets current focus distance, ranging from 0.0 to 1.0, with 0.0 being shortest distance at which the lens can focus and 1.0 the furthest. The default value is 1.0.

**Since:** 12

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| double | The current focus distance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## setFocusDistance

```TypeScript
setFocusDistance(distance: double): void
```

Sets focus distance. Possible distance values range from 0.0 to 1.0, with 0.0 being shortest distance at which the lens can focus and 1.0 the furthest. The default value is 1.0.

**Since:** 12

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| distance | double | Yes | Focus distance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

