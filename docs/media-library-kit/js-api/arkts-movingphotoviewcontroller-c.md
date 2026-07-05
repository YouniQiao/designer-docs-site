# MovingPhotoViewController

Defines the MovingPhotoView controller.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { PixelMapFormat,MovingPhotoViewAttribute,MovingPhotoView,MovingPhotoViewController,DynamicRangeMode } from '@kit.MediaLibraryKit';
```

## constructor

```TypeScript
constructor()
```

constructor.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## enableAutoPlay

```TypeScript
enableAutoPlay(enabled: boolean)
```

Dynamically refresh the autoplay property, which will force to play after moving photo is initialized

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to auto play |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## enableTransition

```TypeScript
enableTransition(enabled: boolean)
```

Enable or disable the zoom transition effect and can be set during initialization

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the transition effect |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## notifyMovingPhotoTransition

```TypeScript
notifyMovingPhotoTransition(): void
```

Notify the component to execute the picture transition animation.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## pausePlayback

```TypeScript
pausePlayback()
```

Pause moving photo and show current frame, start playing from the current frame when playing again

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## refreshMovingPhoto

```TypeScript
refreshMovingPhoto()
```

refresh moving photo data

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## reset

```TypeScript
reset()
```

Reset moving photo playback options as default.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## restart

```TypeScript
restart()
```

Restart to play the video with current options.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## setPlaybackPeriod

```TypeScript
setPlaybackPeriod(startTime: double, endTime: double)
```

Set moving photo playback period

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | double | Yes | video playback start time |
| endTime | double | Yes | video playback end time |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## startPlayback

```TypeScript
startPlayback()
```

Start play moving photo.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## stopPlayback

```TypeScript
stopPlayback()
```

Stop play moving photo.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

