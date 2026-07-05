# ChangeData

the value of the monitor callback function

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## uris

```TypeScript
uris: Array<string>
```

all uris of the same NotifyType, could be FileAssets' or Albums'

**类型：** Array<string>

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData.uris

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## subUris

```TypeScript
subUris: Array<string>
```

change details of the Album's FileAssets when uris is the Album's uri type

**类型：** Array<string>

**起始版本：** 10

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: NotifyType
```

the NotifyType of ChangeData

**类型：** NotifyType

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData.type

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

