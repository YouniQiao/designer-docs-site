# NotifyMessage

通知回调函数的值。

**Since:** 10

**Deprecated since:** 23

**Substitute:** @ohos.file.fs:fileIo.WatchEvent

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fileAccess } from '@kit.CoreFileKit';
```

## uris

```TypeScript
uris: Array<string>
```

所变更文件的uri集合，目前仅支持单条通知，后序支持多条通知。

**Type:** Array<string>

**Since:** 10

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## type

```TypeScript
type: NotifyType
```

变更的通知类型。

**Type:** NotifyType

**Since:** 10

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

