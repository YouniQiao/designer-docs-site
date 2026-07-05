# PickerProfile

Defines the configuration information about the camera picker.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { cameraPicker } from '@kit.CameraKit';
```

## videoDuration

```TypeScript
videoDuration?: int
```

Maximum video duration, in seconds. The default value is **0**, indicating that the maximum video duration is not set.

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## cameraPosition

```TypeScript
cameraPosition: camera.CameraPosition
```

Camera position.

**类型：** camera.CameraPosition

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## saveUri

```TypeScript
saveUri?: string
```

URI for saving the configuration information. For details about the default value, see [File URI](../../apis-core-file-kit/arkts-apis/arkts-fileuri-fileuri-c.md#constructor). The **saveUri** parameter is optional. If it is not specified, images and videos are automatically saved to the media library. To prevent them from being saved to the media library, specify a valid file path within your application's sandbox. When you use your own resource path, ensure that the file exists and is writable; otherwise, the save operation fails.

**类型：** string

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

