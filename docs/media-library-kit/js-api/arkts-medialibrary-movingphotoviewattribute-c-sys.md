# MovingPhotoViewAttribute

Defines the moving photo view attribute functions.

**Inheritance/Implementation:** MovingPhotoViewAttribute extends [CommonMethod<MovingPhotoViewAttribute>](CommonMethod<MovingPhotoViewAttribute>)

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { PixelMapFormat, MovingPhotoViewAttribute, MovingPhotoView, MovingPhotoViewController, DynamicRangeMode } from '@ohos.multimedia.movingphotoview';
```

## setPlaybackStrategy

```TypeScript
setPlaybackStrategy(strategy: media.PlaybackStrategy): MovingPhotoViewAttribute
```

Sets playback strategy.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | media.PlaybackStrategy | Yes | playback strategy |

**Return value:**

| Type | Description |
| --- | --- |
| MovingPhotoViewAttribute | @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |

**Example**

The system application can set the decoding format, HDR effect format, and strategy for processing a moving photo while playing it.

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

