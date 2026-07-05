# getUserDocumentDir

## getUserDocumentDir

```TypeScript
function getUserDocumentDir(): string
```

获取当前用户预授权文档目录的沙箱路径。

**Since:** 11

**Required permissions:** 

- API version11  to  11: ohos.permission.READ_WRITE_DOCUMENTS_DIRECTORY

**System capability:** SystemCapability.FileManagement.File.Environment.FolderObtain

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回当前用户预授权文档目录的沙箱路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken.  [since 11 - 11] |
| 801 | Capability not supported. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function getUserDocumentDirExample() {
  try {
    let path = Environment.getUserDocumentDir();
    console.info(`Succeeded in getUserDocumentDir, path is ${path}`);
  } catch (err) {
    console.error(`Failed to getUserDocumentDir. Code: ${err.code}, message: ${err.message}`);
  }
}

```

