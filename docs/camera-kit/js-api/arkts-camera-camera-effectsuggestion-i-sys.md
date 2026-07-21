# EffectSuggestion (System API)

EffectSuggestion object.

**Since:** 12

<!--Device-camera-interface EffectSuggestion--><!--Device-camera-interface EffectSuggestion-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="enableeffectsuggestion"></a>
## enableEffectSuggestion

```TypeScript
enableEffectSuggestion(enabled: boolean): void
```

Enable effect suggestion for session.

**Since:** 12

<!--Device-EffectSuggestion-enableEffectSuggestion(enabled: boolean): void--><!--Device-EffectSuggestion-enableEffectSuggestion(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable effect suggestion for session if TRUE.. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

<a id="getsupportedeffectsuggestiontypes"></a>
## getSupportedEffectSuggestionTypes

```TypeScript
getSupportedEffectSuggestionTypes(): Array<EffectSuggestionType>
```

Gets supported effect suggestion types.

**Since:** 12

<!--Device-EffectSuggestion-getSupportedEffectSuggestionTypes(): Array<EffectSuggestionType>--><!--Device-EffectSuggestion-getSupportedEffectSuggestionTypes(): Array<EffectSuggestionType>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;EffectSuggestionType&gt; | The array of the effect suggestion types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

<a id="iseffectsuggestionsupported"></a>
## isEffectSuggestionSupported

```TypeScript
isEffectSuggestionSupported(): boolean
```

Checks whether effect suggestion is supported.

**Since:** 12

<!--Device-EffectSuggestion-isEffectSuggestionSupported(): boolean--><!--Device-EffectSuggestion-isEffectSuggestionSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is the effect suggestion supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

<a id="seteffectsuggestionstatus"></a>
## setEffectSuggestionStatus

```TypeScript
setEffectSuggestionStatus(status: Array<EffectSuggestionStatus>): void
```

Set the range of effect suggestion type and enable status.The application should fully set all data when it starts up.

**Since:** 12

<!--Device-EffectSuggestion-setEffectSuggestionStatus(status: Array<EffectSuggestionStatus>): void--><!--Device-EffectSuggestion-setEffectSuggestionStatus(status: Array<EffectSuggestionStatus>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | Array&lt;EffectSuggestionStatus&gt; | Yes | The array of the effect suggestion status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

<a id="updateeffectsuggestion"></a>
## updateEffectSuggestion

```TypeScript
updateEffectSuggestion(type: EffectSuggestionType, enabled: boolean): void
```

Update the enable status of the effect suggestion type.

**Since:** 12

<!--Device-EffectSuggestion-updateEffectSuggestion(type: EffectSuggestionType, enabled: boolean): void--><!--Device-EffectSuggestion-updateEffectSuggestion(type: EffectSuggestionType, enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [EffectSuggestionType](arkts-camera-camera-effectsuggestiontype-e-sys.md) | Yes | The type of effect suggestion. |
| enabled | boolean | Yes | The status of effect suggestion type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

