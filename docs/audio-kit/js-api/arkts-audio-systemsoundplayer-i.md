# SystemSoundPlayer

Implements a system sound player that provides functions for loading, unloading, playing system sounds.
Before using these functions, application must call
[createSystemSoundPlayer](#systemSoundManager.createSystemSoundPlayer) to create a
SystemSoundPlayer instance first.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

## load

```TypeScript
load(soundType: systemSoundManager.SystemSoundType): Promise<void>
```

Loads a system sound.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundType | systemSoundManager.SystemSoundType | Yes | type of sound to preload. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../../apis-media-kit/errorcode-media.md#5400103-io-error) | I/O error. |
| [5400105](../../apis-media-kit/errorcode-media.md#5400105-play-service-dead) | Crash or blocking occurs in system process. |
| [5400108](../../apis-media-kit/errorcode-media.md#5400108-parameter-value-out-of-range) | Parameter check failed. Returned by promise. |

## play

```TypeScript
play(soundType: systemSoundManager.SystemSoundType): Promise<void>
```

Plays a system sound.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundType | systemSoundManager.SystemSoundType | Yes | type of sound to play. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../../apis-media-kit/errorcode-media.md#5400103-io-error) | I/O error. |
| [5400105](../../apis-media-kit/errorcode-media.md#5400105-play-service-dead) | Crash or blocking occurs in system process. |
| [5400108](../../apis-media-kit/errorcode-media.md#5400108-parameter-value-out-of-range) | Parameter check failed. Returned by promise. |

## release

```TypeScript
release(): Promise<void>
```

Releases this system sound player instance.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400105](../../apis-media-kit/errorcode-media.md#5400105-play-service-dead) | Crash or blocking occurs in system process. |

## unload

```TypeScript
unload(soundType: systemSoundManager.SystemSoundType): Promise<void>
```

Unloads a system sound that has been loaded before.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundType | systemSoundManager.SystemSoundType | Yes | type of sound to unload. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400105](../../apis-media-kit/errorcode-media.md#5400105-play-service-dead) | Crash or blocking occurs in system process. |
| [5400108](../../apis-media-kit/errorcode-media.md#5400108-parameter-value-out-of-range) | Parameter check failed. Returned by promise. |

