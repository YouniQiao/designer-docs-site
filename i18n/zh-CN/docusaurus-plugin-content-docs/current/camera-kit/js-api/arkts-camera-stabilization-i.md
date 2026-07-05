# Stabilization

Stabilization** inherits from [StabilizationQuery]camera.StabilizationQuery. It provides APIs to set video stabilization. Video stabilization can be set only when the session has a recording stream ( [VideoOutput]camera.VideoOutput). Among the enums of [VideoStabilizationMode]camera.VideoStabilizationMode, the **HIGH** mode only takes effect when the resolution set in [Profile]camera.Profile is 1920×1080.

**继承实现关系：** Stabilization继承自：StabilizationQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getActiveVideoStabilizationMode

```TypeScript
getActiveVideoStabilizationMode(): VideoStabilizationMode
```

Obtains the video stabilization mode in use.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VideoStabilizationMode | Video stabilization mode obtained. If the API call fails, undefined is  returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setVideoStabilizationMode

```TypeScript
setVideoStabilizationMode(mode: VideoStabilizationMode): void
```

Sets a video stabilization mode. Before the setting, call [isVideoStabilizationModeSupported]camera.StabilizationQuery.isVideoStabilizationModeSupported to check whether the target video stabilization mode is supported. It is recommended that you set the video stabilization mode between [commitConfig]camera.Session.commitConfig() and [Start]camera.Session.start().

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | VideoStabilizationMode | 是 | Video stabilization mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

