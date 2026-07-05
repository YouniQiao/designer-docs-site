# SharedDirectoryInfo

The directory information shared with the system by the application.

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## path

```TypeScript
path: string
```

Indicates the path of the application's shared directory.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

## permissionMode

```TypeScript
permissionMode: int
```

Indicates the permission for the application's shared directory, e.g., { OperationMode.READ_MODE } or { OperationMode.READ_MODE | OperationMode.WRITE_MODE }

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Indicates the bundle name of the application.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

