# getUserDownloadDir

## Modules to Import

```TypeScript
import { Environment } from '@kit.CoreFileKit';
```

<a id="getuserdownloaddir"></a>
## getUserDownloadDir

```TypeScript
function getUserDownloadDir(): string
```

Obtains the sandbox path of the pre-authorized **Download** directory.

**Since:** 11

**Required permissions:** 
- API version 11: ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY

<!--Device-Environment-function getUserDownloadDir(): string--><!--Device-Environment-function getUserDownloadDir(): string-End-->

**System capability:** SystemCapability.FileManagement.File.Environment.FolderObtain

**Return value:**

| Type | Description |
| --- | --- |
| string | Sandbox path of the **Download** directory obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken.<br>**Applicable version:** 11 and later |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function getUserDownloadDirExample() {
  try {
    let path = Environment.getUserDownloadDir();
    console.info(`Succeeded in getUserDownloadDir, path is ${path}`);
  } catch (err) {
    console.error(`Failed to getUserDownloadDir. Code: ${err.code}, message: ${err.message}`);
  }
}

```

