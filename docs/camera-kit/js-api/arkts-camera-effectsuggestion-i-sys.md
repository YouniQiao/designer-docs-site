# EffectSuggestion

EffectSuggestion object.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableEffectSuggestion

```TypeScript
enableEffectSuggestion(enabled: boolean): void
```

Enable effect suggestion for session.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable effect suggestion for session if TRUE.. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

## getSupportedEffectSuggestionTypes

```TypeScript
getSupportedEffectSuggestionTypes(): Array<EffectSuggestionType>
```

Gets supported effect suggestion types.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;EffectSuggestionType> | The array of the effect suggestion types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

## isEffectSuggestionSupported

```TypeScript
isEffectSuggestionSupported(): boolean
```

Checks whether effect suggestion is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is the effect suggestion supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

## setEffectSuggestionStatus

```TypeScript
setEffectSuggestionStatus(status: Array<EffectSuggestionStatus>): void
```

Set the range of effect suggestion type and enable status. The application should fully set all data when it starts up.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | Array&lt;EffectSuggestionStatus> | Yes | The array of the effect suggestion status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

## updateEffectSuggestion

```TypeScript
updateEffectSuggestion(type: EffectSuggestionType, enabled: boolean): void
```

Update the enable status of the effect suggestion type.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | EffectSuggestionType | Yes | The type of effect suggestion. |
| enabled | boolean | Yes | The status of effect suggestion type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

