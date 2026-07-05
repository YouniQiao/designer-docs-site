# FileInfo

表示文件(夹)属性信息和接口能力。

**Since:** 9

**Deprecated since:** 23

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fileAccess } from '@kit.CoreFileKit';
```

## listFile

```TypeScript
listFile(filter?: Filter): FileIterator
```

以同步方法从某个目录，基于过滤器，获取下一级符合条件的文件(夹)信息的迭代器对象FileIterator，然后通过[next]fileAccess.FileIterator.next方法返回 [FileInfo]fileAccess.FileInfo。目前仅支持内置存储设备过滤，外置存储设备不支持过滤。

**Since:** 9

**Deprecated since:** 23

**Substitute:** @ohos.file.fs:fileIo.listFile

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Filter | No | Indicates the filter of file. |

**Return value:**

| Type | Description |
| --- | --- |
| FileIterator | Returns the FileIterator Object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900004 | Interrupted system call |
| 13900006 | No such device or address |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900014 | Device or resource busy |
| 13900015 | File exists |
| 13900017 | No such device |
| 13900018 | Not a directory |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900022 | Too many open files |
| 13900023 | Text file busy |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900029 | Resource deadlock would occur |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900034 | Operation would block |
| 13900038 | Value too large for defined data type |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |
| 14000001 | Invalid display name |
| 14000002 | Invalid uri |
| 14000003 | Invalid file extension |
| 14000004 | File has been put into trash bin |
| 14300001 | IPC error |
| 14300002 | Invalid uri |
| 14300003 | Fail to get fileextension info |
| 14300004 | Get wrong result |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// fileInfoDir indicates information about a directory.
// let filter = { suffix : [".txt", ".jpg", ".xlsx"] };
let fileInfoDir :Array<fileAccess.FileInfo> = [];
let subfileInfos: Array<fileAccess.FileInfo> = [];
let isDone: boolean = false;
try {
  for (let i = 0; i < fileInfoDir.length; ++i) {
    let fileIterator = fileInfoDir[i].listFile();
    // listFile() with the filter implementation.
    // let fileIterator = fileInfoDir.listFile(filter);
    if (!fileIterator) {
      console.error("listFile interface returns an undefined object");
    }
    while (!isDone) {
      let result = fileIterator.next();
      console.info("next result = " + JSON.stringify(result));
      isDone = result.done;
      if (!isDone) {
        subfileInfos.push(result.value);
      }
    }
  }
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("listFile failed, errCode:" + error.code + ", errMessage:" + error.message);
}

```

## scanFile

```TypeScript
scanFile(filter?: Filter): FileIterator
```

以同步方法从某个目录，基于过滤器，递归获取符合条件的文件信息的迭代器对象FileIterator，然后通过[next]fileAccess.FileIterator.next方法返回 [FileInfo]fileAccess.FileInfo。目前仅支持内置存储设备。

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Filter | No | Indicates the filter of file. |

**Return value:**

| Type | Description |
| --- | --- |
| FileIterator | Returns the FileIterator Object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900004 | Interrupted system call |
| 13900006 | No such device or address |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900013 | Bad address |
| 13900014 | Device or resource busy |
| 13900015 | File exists |
| 13900017 | No such device |
| 13900018 | Not a directory |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900022 | Too many open files |
| 13900023 | Text file busy |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900027 | Read-only file system |
| 13900029 | Resource deadlock would occur |
| 13900030 | File name too long |
| 13900033 | Too many symbolic links encountered |
| 13900034 | Operation would block |
| 13900038 | Value too large for defined data type |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |
| 14000001 | Invalid display name |
| 14000002 | Invalid uri |
| 14000003 | Invalid file extension |
| 14000004 | File has been put into trash bin |
| 14300001 | IPC error |
| 14300002 | Invalid uri |
| 14300003 | Fail to get fileextension info |
| 14300004 | Get wrong result |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// fileInfoDir indicates information about a directory.
// let filter = {suffix : [".txt", ".jpg", ".xlsx"]};
let fileInfoDir: Array<fileAccess.FileInfo> = [];
let subfileInfos: Array<fileAccess.FileInfo> = [];
let isDone: boolean = false;
try {
  for (let i = 0; i < fileInfoDir.length; ++i) {
    let fileIterator = fileInfoDir[i].scanFile();
    // scanFile() with the filter implementation.
    // let fileIterator = fileInfoDir.scanFile(filter);
    if (!fileIterator) {
      console.error("scanFile interface returns an undefined object");
    }
    while (!isDone) {
      let result = fileIterator.next();
      console.info("next result = " + JSON.stringify(result));
      isDone = result.done;
      if (!isDone) {
        subfileInfos.push(result.value);
      }
    }
  }
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("scanFile failed, errCode:" + error.code + ", errMessage:" + error.message);
}

```

## mode

```TypeScript
mode: number
```

文件(夹)的权限信息。

**Type:** number

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## fileName

```TypeScript
fileName: string
```

文件(夹)的名称。

**Type:** string

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## size

```TypeScript
size: number
```

文件(夹)的大小。（单位：字节）

**Type:** number

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## relativePath

```TypeScript
relativePath: string
```

文件(夹)的相对路径。

**Type:** string

**Since:** 10

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## mimeType

```TypeScript
mimeType: string
```

文件(夹)的媒体资源类型。

**Type:** string

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## mtime

```TypeScript
mtime: number
```

文件(夹)的修改时间。自1970年1月1日起至目标时间的毫秒数。

**Type:** number

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## uri

```TypeScript
uri: string
```

文件(夹)的uri。

**Type:** string

**Since:** 9

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

