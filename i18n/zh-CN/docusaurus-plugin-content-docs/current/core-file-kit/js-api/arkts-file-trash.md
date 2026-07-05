# @ohos.file.trash

The **file.trash** module provides APIs for querying, recovering, or permanently deleting the files or directories in Recently deleted (trash). Currently, only local files and directories are supported. You can use **delete()** of [@ohos.file.fileAccess]{@link @ohos.file.fileAccess:fileAccess} to move a file or directory to the trash. > **NOTE** > > - Currently, the APIs of this module can be called only by **FileManager**.

**起始版本：** 10

**废弃版本：** 23

**系统能力：** SystemCapability.FileManagement.UserFileService

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { trash } from '@kit.CoreFileKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[completelyDelete](arkts-trash-completelydelete-f-sys.md#completelyDelete-1) | Permanently deletes a file or directory from the **Recently deleted** list. |
| <!--DelRow-->[listFile](arkts-trash-listfile-f-sys.md#listFile-1) | Lists the files and directories in the **Recently deleted** list. |
| <!--DelRow-->[recover](arkts-trash-recover-f-sys.md#recover-1) | Recovers a file or directory from the trash. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[FileInfo](arkts-trash-fileinfo-i-sys.md) | Represents information about a file or directory in the **Recently deleted** list. |

