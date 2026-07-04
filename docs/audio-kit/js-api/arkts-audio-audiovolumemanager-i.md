# AudioVolumeManager

This interface implements audio volume management. Before calling any API in AudioVolumeManager, you must use [getVolumeManager](arkts-audio-audiomanager-i.md#getvolumemanager-1) to obtain an AudioVolumeManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## getAppVolumePercentage

```TypeScript
getAppVolumePercentage(): Promise<number>
```

Obtains the volume of the application. (The volume range is 0 to 100.) This API uses a promise to return the result.

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the application volume. |

## getMaxVolumeByStream

```TypeScript
getMaxVolumeByStream(streamUsage: StreamUsage): number
```

Obtains the maximum volume of a specified audio stream.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream for which the maximum volume is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getMinVolumeByStream

```TypeScript
getMinVolumeByStream(streamUsage: StreamUsage): number
```

Obtains the minimum volume of a specified audio stream.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream for which the minimum volume is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getVolumeByStream

```TypeScript
getVolumeByStream(streamUsage: StreamUsage): number
```

Obtains the volume of a specified audio stream.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream for which the volume is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getVolumeGroupManager

```TypeScript
getVolumeGroupManager(groupId: number, callback: AsyncCallback<AudioVolumeGroupManager>): void
```

Obtains a VolumeGroupManager instance. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupId | number | Yes | Volume group ID. The default value is **DEFAULT_VOLUME_GROUP_ID**. |
| callback | AsyncCallback&lt;AudioVolumeGroupManager&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the VolumeGroupManager instance obtained; otherwise,**err** is an error object. |

## getVolumeGroupManager

```TypeScript
getVolumeGroupManager(groupId: number): Promise<AudioVolumeGroupManager>
```

Obtains a VolumeGroupManager instance. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupId | number | Yes | Volume group ID. The default value is **DEFAULT_VOLUME_GROUP_ID**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioVolumeGroupManager&gt; | Promise used to return the VolumeGroupManager instance. |

## getVolumeGroupManagerSync

```TypeScript
getVolumeGroupManagerSync(groupId: number): AudioVolumeGroupManager
```

Obtains a VolumeGroupManager instance. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupId | number | Yes | Volume group ID. The default value is **DEFAULT_VOLUME_GROUP_ID**. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioVolumeGroupManager | VolumeGroupManager instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getVolumeInUnitOfDbByStream

```TypeScript
getVolumeInUnitOfDbByStream(streamUsage: StreamUsage, volumeLevel: number, device: DeviceType): number
```

Obtains the volume (in dB) calculated by the system based on the audio stream, volume level, and device type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream. |
| volumeLevel | number | Yes | Volume level. |
| device | DeviceType | Yes | Device type. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Volume of the audio stream, in dB. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isSystemMutedForStream

```TypeScript
isSystemMutedForStream(streamUsage: StreamUsage): boolean
```

Checks whether a specified audio stream is muted.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream to check. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the audio stream is muted. **true** if muted, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('volumeChange')

```TypeScript
off(type: 'volumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the system volume change event. This API uses an asynchronous callback to return the result.

**Since:** 12

**Deprecated since:** 20

**Substitutes:** event:streamVolumeChange

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Event type. The event **'volumeChange'** is triggered when the system volume ischanged. |
| callback | Callback&lt;VolumeEvent&gt; | No | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters missing;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('appVolumeChange')

```TypeScript
off(type: 'appVolumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the application-level volume change event of the application. This API uses an asynchronous callback to return the result.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appVolumeChange' | Yes | Event type. The event **'appVolumeChange'** is triggered when the application-level volume is changed. |
| callback | Callback&lt;VolumeEvent&gt; | No | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('streamVolumeChange')

```TypeScript
off(type: 'streamVolumeChange', callback?: Callback<StreamVolumeEvent>): void
```

Unsubscribes from the system audio volume change event, which is triggered when the system audio volume is changed. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamVolumeChange' | Yes | Event type. The event **'volumeChange'** is triggered when the systemvolume is changed. |
| callback | Callback&lt;StreamVolumeEvent&gt; | No | Callback used to return the changed volume. |

## on('volumeChange')

```TypeScript
on(type: 'volumeChange', callback: Callback<VolumeEvent>): void
```

Subscribes to the system volume change event, which is triggered when the system volume is changed. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitutes:** event:streamVolumeChange

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Event type. The event **'volumeChange'** is triggered when the system volume ischanged. |
| callback | Callback&lt;VolumeEvent&gt; | Yes | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('appVolumeChange')

```TypeScript
on(type: 'appVolumeChange', callback: Callback<VolumeEvent>): void
```

Subscribes to the application-level volume change event of the application (triggered when the application-level volume is changed). This API uses an asynchronous callback to return the result.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appVolumeChange' | Yes | Event type. The event **'appVolumeChange'** is triggered when the application-level volume is changed. |
| callback | Callback&lt;VolumeEvent&gt; | Yes | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('streamVolumeChange')

```TypeScript
on(type: 'streamVolumeChange', streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void
```

Subscribes to the system audio volume change event, which is triggered when the system audio volume is changed. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamVolumeChange' | Yes | Event type. The event **'streamVolumeChange'** is triggered when thesystem audio volume is changed. |
| streamUsage | StreamUsage | Yes | Audio stream usage. |
| callback | Callback&lt;StreamVolumeEvent&gt; | Yes | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## setAppVolumePercentage

```TypeScript
setAppVolumePercentage(volume: number): Promise<void>
```

Sets the volume (within a range of 0 to 100) for the application. This API uses a promise to return the result.

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Volume to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800301](../errorcode-audio.md#6800301-system-error) | Crash or blocking occurs in system process. |

