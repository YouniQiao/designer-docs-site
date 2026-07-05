# PickerResult

Defines the processing result of the camera picker.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { cameraPicker } from '@kit.CameraKit';
```

## resultUri

```TypeScript
resultUri: string
```

URI of the result. If **saveUri** is empty, **resultUri** is a public media path. If **saveUri** is not empty and the application has the write permission on the URI, the value of **resultUri** is the same as that of **saveUri**. If **saveUri** is not empty and the application does not have the write permission on the URI, **resultUri** cannot be obtained.

**类型：** string

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## resultCode

```TypeScript
resultCode: int
```

Result code. The value **0** means that the processing is successful, and **-1** means that the processing fails.

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## mediaType

```TypeScript
mediaType: PickerMediaType
```

Media type.

**类型：** PickerMediaType

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

