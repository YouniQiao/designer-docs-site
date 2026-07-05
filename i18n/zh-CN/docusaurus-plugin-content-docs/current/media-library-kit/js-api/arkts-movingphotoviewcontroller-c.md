# MovingPhotoViewController

Defines the MovingPhotoView controller.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { PixelMapFormat,MovingPhotoViewAttribute,MovingPhotoView,MovingPhotoViewController,DynamicRangeMode } from '@kit.MediaLibraryKit';
```

## constructor

```TypeScript
constructor()
```

constructor.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## enableAutoPlay

```TypeScript
enableAutoPlay(enabled: boolean)
```

Dynamically refresh the autoplay property, which will force to play after moving photo is initialized

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to auto play |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## enableTransition

```TypeScript
enableTransition(enabled: boolean)
```

Enable or disable the zoom transition effect and can be set during initialization

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable the transition effect |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## notifyMovingPhotoTransition

```TypeScript
notifyMovingPhotoTransition(): void
```

Notify the component to execute the picture transition animation.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## pausePlayback

```TypeScript
pausePlayback()
```

Pause moving photo and show current frame, start playing from the current frame when playing again

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## refreshMovingPhoto

```TypeScript
refreshMovingPhoto()
```

refresh moving photo data

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## reset

```TypeScript
reset()
```

Reset moving photo playback options as default.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## restart

```TypeScript
restart()
```

Restart to play the video with current options.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## setPlaybackPeriod

```TypeScript
setPlaybackPeriod(startTime: double, endTime: double)
```

Set moving photo playback period

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startTime | double | 是 | video playback start time |
| endTime | double | 是 | video playback end time |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |

## startPlayback

```TypeScript
startPlayback()
```

Start play moving photo.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## stopPlayback

```TypeScript
stopPlayback()
```

Stop play moving photo.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

