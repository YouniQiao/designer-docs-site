# video

Defines Video Component instance.

## video

```TypeScript
video(value: VideoOptions)
```

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | VideoOptions | Yes | 视频信息。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [VideoAttribute](arkts-videoattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |
| [VideoController](arkts-videocontroller-c.md) | 一个VideoController对象可以控制一个或多个Video。 ###### 导入对象 ```ts let controller: VideoController = new VideoController(); ``` |
| [VideoControllerAsync](arkts-videocontrollerasync-c.md) | Video playback controller class for asynchronous operations. Provides methods to control video playback, timing, and display mode. |

### Interfaces

| Name | Description |
| --- | --- |
| [FullscreenInfo](arkts-fullscreeninfo-i.md) | 用于描述当前视频是否进入全屏播放状态。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [PlaybackInfo](arkts-playbackinfo-i.md) | 用于描述当前视频播放的进度。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [PosterOptions](arkts-posteroptions-i.md) | 用于描述当前视频是否配置首帧送显。 |
| [PreparedInfo](arkts-preparedinfo-i.md) | 用于描述当前视频的时长。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [VideoInterface](arkts-videointerface-i.md) | 用于播放视频文件并控制其播放状态的组件。 > **说明：** <br/> > Video组件只提供简单的视频播放功能，无法支撑复杂的视频播控场景。复杂开发场景推荐使用[AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}播控API和[XComponent]{@link xcomponent}组件开发。<br/> > Video组件在使用expandSafeArea扩展安全区域时，组件视频显示内容区域不支持扩展。 |
| [VideoOptions](arkts-videooptions-i.md) | 定义Video的具体配置参数。 |

### Enums

| Name | Description |
| --- | --- |
| [PlaybackSpeed](arkts-playbackspeed-e.md) | 视频播放倍速选项。 |
| [SeekMode](arkts-seekmode-e.md) | 视频跳转模式选项。 |

### Constants

| Name | Description |
| --- | --- |
| [Video](arkts-video-con.md#Video) | 用于播放视频文件并控制其播放状态的组件。 > **说明：** <br/> > Video组件只提供简单的视频播放功能，无法支撑复杂的视频播控场景。复杂开发场景推荐使用[AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}播控API和[XComponent]{@link xcomponent}组件开发。<br/> > Video组件在使用expandSafeArea扩展安全区域时，组件视频显示内容区域不支持扩展。 ###### 权限列表 使用网络视频时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。 ###### 子组件 不支持子组件。 |
| [VideoInstance](arkts-video-con.md#VideoInstance) | Defines Video Component instance. |

