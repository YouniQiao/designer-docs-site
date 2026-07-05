# MoveResult

表示移动操作失败时的返回信息，移动成功时则没有返回信息。

**Since:** 11

**Deprecated since:** 23

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fileAccess } from '@kit.CoreFileKit';
```

## sourceUri

```TypeScript
sourceUri: string
```

源文件(夹) uri。

**Type:** string

**Since:** 11

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## errCode

```TypeScript
errCode: number
```

错误码。接口抛出错误码的详细介绍请参见[文件管理错误码](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md)。

**Type:** number

**Since:** 11

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## errMsg

```TypeScript
errMsg: string
```

错误信息。

**Type:** string

**Since:** 11

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## destUri

```TypeScript
destUri: string
```

产生冲突的目标文件的 uri。如果非冲突导致的错误，则为空。

**Type:** string

**Since:** 11

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

