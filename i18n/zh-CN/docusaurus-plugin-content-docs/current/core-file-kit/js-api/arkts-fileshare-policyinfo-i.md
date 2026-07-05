# PolicyInfo

Policy information to manager permissions on a URI.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

## 导入模块

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## operationMode

```TypeScript
operationMode: int
```

Indicates the mode of operation for the URI, example { OperationMode.READ_MODE } or { OperationMode.READ_MODE | OperationMode.WRITE_MODE }

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

## uri

```TypeScript
uri: string
```

Indicates the uri of the policy information.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

