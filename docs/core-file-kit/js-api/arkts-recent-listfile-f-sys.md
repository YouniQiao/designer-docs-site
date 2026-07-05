# listFile

## listFile

```TypeScript
function listFile(): Array<FileInfo>
```

查询最近访问列表中文件信息。

**Since:** 10

**Deprecated since:** 23

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;FileInfo> | Returns the next level FileInfo Object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 | No such file or directory |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
let fileinfos = recent.listFile();
for(let i = 0; i < fileinfos.length; i++){
  console.info('uri: ' + fileinfos[i].uri);
  console.info('srcPath: ' + fileinfos[i].srcPath);
  console.info('fileName: ' + fileinfos[i].fileName);
  console.info('mode: ' + fileinfos[i].mode);
  console.info('size: ' + fileinfos[i].size);
  console.info('mtime: ' + fileinfos[i].mtime);
  console.info('ctime: ' + fileinfos[i].ctime);
}

```

