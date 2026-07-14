# @ohos.file.trash

The **file.trash** module provides APIs for querying, recovering, or permanently deleting the files or directories in Recently deleted (trash). Currently, only local files and directories are supported. You can use **delete()** of [@ohos.file.fileAccess](arkts-file-fileaccess.md) to move a file or directory to the trash. > **NOTE** > > - Currently, the APIs of this module can be called only by **FileManager**.

**Since:** 10

**Deprecated since:** 23

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { trash } from '@kit.CoreFileKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [completelyDelete](arkts-corefile-completelydelete-f-sys.md#completelydelete-1) | Permanently deletes a file or directory from the **Recently deleted** list. |
| [listFile](arkts-corefile-listfile-f-sys.md#listfile-1) | Lists the files and directories in the **Recently deleted** list. |
| [recover](arkts-corefile-recover-f-sys.md#recover-1) | Recovers a file or directory from the trash. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [FileInfo](arkts-corefile-fileinfo-i-sys.md) | Represents information about a file or directory in the **Recently deleted** list. |
<!--DelEnd-->

