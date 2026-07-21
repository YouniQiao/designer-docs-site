# AudioSpatializationManager

Implements audio spatialization management.

**Since:** 18

<!--Device-audio-interface AudioSpatializationManager--><!--Device-audio-interface AudioSpatializationManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

<a id="isspatializationenabledforcurrentdevice"></a>
## isSpatializationEnabledForCurrentDevice

```TypeScript
isSpatializationEnabledForCurrentDevice(): boolean
```

Checks whether spatial audio rendering is enabled for the current device. This API returns the result synchronously.

**Since:** 18

<!--Device-AudioSpatializationManager-isSpatializationEnabledForCurrentDevice(): boolean--><!--Device-AudioSpatializationManager-isSpatializationEnabledForCurrentDevice(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether spatial audio rendering is enabled. **true** if enabled, **false** otherwise. |

<a id="off"></a>
## off('spatializationEnabledChangeForCurrentDevice')

```TypeScript
off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void
```

Unsubscribes from the spatial audio rendering status change event of the current device. This API uses an asynchronous callback to return the result.

**Since:** 18

<!--Device-AudioSpatializationManager-off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void--><!--Device-AudioSpatializationManager-off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChangeForCurrentDevice' | Yes | Event type. The event **'spatializationEnabledChangeForCurrentDevice'** is triggered when the spatial audio rendering status is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | No | Callback used to return the result, indicating whether spatial audio rendering is enabled. **true** if enabled, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on"></a>
## on('spatializationEnabledChangeForCurrentDevice')

```TypeScript
on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void
```

Subscribes to the spatial audio rendering status change event of the current device. This API uses an asynchronous callback to return the result.

**Since:** 18

<!--Device-AudioSpatializationManager-on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void--><!--Device-AudioSpatializationManager-on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'spatializationEnabledChangeForCurrentDevice' | Yes | Event type. The event **'spatializationEnabledChangeForCurrentDevice'** is triggered when the spatial audio rendering status is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result, indicating whether spatial audio rendering is enabled. **true** if enabled, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

