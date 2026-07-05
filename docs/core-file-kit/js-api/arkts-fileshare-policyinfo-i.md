# PolicyInfo

Policy information to manager permissions on a URI.

**Since:** 11

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

## Modules to Import

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## operationMode

```TypeScript
operationMode: int
```

Indicates the mode of operation for the URI, example { OperationMode.READ_MODE } or { OperationMode.READ_MODE | OperationMode.WRITE_MODE }

**Type:** int

**Since:** 11

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

## uri

```TypeScript
uri: string
```

Indicates the uri of the policy information.

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

