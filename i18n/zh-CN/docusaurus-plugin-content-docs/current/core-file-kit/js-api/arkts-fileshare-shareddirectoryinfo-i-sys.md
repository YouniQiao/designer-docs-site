# SharedDirectoryInfo

The directory information shared with the system by the application.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## path

```TypeScript
path: string
```

Indicates the path of the application's shared directory.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

## permissionMode

```TypeScript
permissionMode: int
```

Indicates the permission for the application's shared directory, e.g., { OperationMode.READ_MODE } or { OperationMode.READ_MODE | OperationMode.WRITE_MODE }

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

## bundleName

```TypeScript
bundleName: string
```

Indicates the bundle name of the application.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

