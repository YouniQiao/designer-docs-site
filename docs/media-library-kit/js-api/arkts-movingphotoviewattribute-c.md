# MovingPhotoViewAttribute

Defines the moving photo view attribute functions.

**Inheritance:** MovingPhotoViewAttributeextends: CommonMethod<MovingPhotoViewAttribute>.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { PixelMapFormat,MovingPhotoViewAttribute,MovingPhotoView,MovingPhotoViewController,DynamicRangeMode } from '@kit.MediaLibraryKit';
```

## autoPlay

```TypeScript
autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute
```

Sets whether to allow automatic play. If the value is true, the moving photo starts automatic after the resource is loaded.

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAutoPlay | boolean | Yes | Whether to automatic play |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## autoPlayPeriod

```TypeScript
autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute
```

Sets automatic play period, If not set, the moving photo plays in the full video duration. If set, the moving photo plays in the automatic play period.

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | double | Yes | video plays start time |
| endTime | double | Yes | video plays end time |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## enableAnalyzer

```TypeScript
enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute
```

Sets whether to enable moving photo analyzer. If the value is true, the moving photo can be analyzed by AI.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | whether to enable moving photo analyzer |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## muted

```TypeScript
muted(isMuted: boolean): MovingPhotoViewAttribute
```

Called when judging whether the video is muted.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isMuted | boolean | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## objectFit

```TypeScript
objectFit(value: ImageFit): MovingPhotoViewAttribute
```

Called when determining the zoom type of the view.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageFit | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onComplete

```TypeScript
onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the image load completed.

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onError

```TypeScript
onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when playback fails.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onFinish

```TypeScript
onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback ends.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onPause

```TypeScript
onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback paused.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onPrepared

```TypeScript
onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when playback prepared.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onStart

```TypeScript
onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video is played.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onStop

```TypeScript
onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback stopped.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## repeatPlay

```TypeScript
repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute
```

Sets whether to allow repeat play. If the value is true, the moving photo plays repeat after the resource is loaded.

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isRepeatPlay | boolean | Yes | Whether to repeat play |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

## setPlaybackStrategy

```TypeScript
setPlaybackStrategy(strategy: media.PlaybackStrategy): MovingPhotoViewAttribute
```

Sets playback strategy.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | media.PlaybackStrategy | Yes | playback strategy |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

**Example**

```TypeScript
// This example illustrates how to use the parameters. For detailed implementation, check the public API documentation for moving photos.
// For API version 21 and earlier, use the following: import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';
// For API version 22 and later, use the following:
import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController, PixelMapFormat, DynamicRangeMode } from '@kit.MediaLibraryKit';
import { media } from '@kit.MediaKit';

let data: photoAccessHelper.MovingPhoto
async function loading(context: Context) {
  try {
    // Ensure that the media assets corresponding to imageFileUri and videoFileUri exist in the application sandbox directory.
    let imageFileUri = 'file://{bundleName}/data/storage/el2/base/haps/entry/files/xxx.jpg';
    let videoFileUri = 'file://{bundleName}/data/storage/el2/base/haps/entry/files/xxx.mp4';
    data = await photoAccessHelper.MediaAssetManager.loadMovingPhoto(context, imageFileUri, videoFileUri);
    console.info('load moving photo successfully');
  } catch (err) {
    console.error(`load moving photo failed with error: ${err.code}, ${err.message}`);
  }
}
@Entry
@Component
struct Index {
  controller: MovingPhotoViewController = new MovingPhotoViewController();
  format: undefined | PixelMapFormat = PixelMapFormat.YCBCR_P010;
  mode: undefined | DynamicRangeMode = DynamicRangeMode.HIGH;
  playbackstrategy: media.PlaybackStrategy = {enableCameraPostprocessing: true};
  private uiContext: UIContext = this.getUIContext()
  aboutToAppear(): void {
    loading(this.uiContext.getHostContext()!)
  }

  build() {
    NavDestination() {
      Column() {
        Stack({ alignContent: Alignment.BottomStart }) {
          MovingPhotoView({
            movingPhoto: data,
            controller: this.controller,
            movingPhotoFormat: this.format,
            dynamicRangeMode: this.mode,
            playWithMask: false
          })
          .setPlaybackStrategy(this.playbackstrategy)
        }
      }
    }
  }
}

```

