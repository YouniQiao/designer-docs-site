# MovingPhotoViewAttribute

Defines the moving photo view attribute functions.

**继承实现关系：** MovingPhotoViewAttribute继承自：CommonMethod<MovingPhotoViewAttribute>。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { PixelMapFormat,MovingPhotoViewAttribute,MovingPhotoView,MovingPhotoViewController,DynamicRangeMode } from '@kit.MediaLibraryKit';
```

## autoPlay

```TypeScript
autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute
```

Sets whether to allow automatic play. If the value is true, the moving photo starts automatic after the resource is loaded.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAutoPlay | boolean | 是 | Whether to automatic play |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## autoPlayPeriod

```TypeScript
autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute
```

Sets automatic play period, If not set, the moving photo plays in the full video duration. If set, the moving photo plays in the automatic play period.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startTime | double | 是 | video plays start time |
| endTime | double | 是 | video plays end time |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## enableAnalyzer

```TypeScript
enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute
```

Sets whether to enable moving photo analyzer. If the value is true, the moving photo can be analyzed by AI.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | whether to enable moving photo analyzer |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## muted

```TypeScript
muted(isMuted: boolean): MovingPhotoViewAttribute
```

Called when judging whether the video is muted.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isMuted | boolean | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## objectFit

```TypeScript
objectFit(value: ImageFit): MovingPhotoViewAttribute
```

Called when determining the zoom type of the view.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ImageFit | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onComplete

```TypeScript
onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the image load completed.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onError

```TypeScript
onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when playback fails.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onFinish

```TypeScript
onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback ends.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onPause

```TypeScript
onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback paused.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onPrepared

```TypeScript
onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when playback prepared.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onStart

```TypeScript
onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video is played.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## onStop

```TypeScript
onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback stopped.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | MovingPhotoViewEventCallback | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## repeatPlay

```TypeScript
repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute
```

Sets whether to allow repeat play. If the value is true, the moving photo plays repeat after the resource is loaded.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isRepeatPlay | boolean | 是 | Whether to repeat play |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

## setPlaybackStrategy

```TypeScript
setPlaybackStrategy(strategy: media.PlaybackStrategy): MovingPhotoViewAttribute
```

Sets playback strategy.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategy | media.PlaybackStrategy | 是 | playback strategy |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MovingPhotoViewAttribute |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

**示例：**

```TypeScript
// 该示例只展示参数用法，具体可以执行用例参考动态照片公开接口文档。
// API version 21及之前版本导入方式：import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController, MovingPhotoViewAttribute } from '@kit.MediaLibraryKit';
// API version 22及之后版本导入方式如下：
import { photoAccessHelper, MovingPhotoView, MovingPhotoViewController, PixelMapFormat, DynamicRangeMode } from '@kit.MediaLibraryKit';
import { media } from '@kit.MediaKit';

let data: photoAccessHelper.MovingPhoto
async function loading(context: Context) {
  try {
    // 需要确保imageFileUri和videoFileUri对应的资源在应用沙箱存在。
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

