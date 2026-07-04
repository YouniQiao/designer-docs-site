# getUserDesktopDir

## Modules to Import

```TypeScript
import { Environment } from '@ohos.file.environment';
```

## getUserDesktopDir

```TypeScript
function getUserDesktopDir(): string
```

Obtains the sandbox path of the pre-authorized **Desktop** directory.

**Since:** 11

**Required permissions:** 
- API version 11 - 11: ohos.permission.READ_WRITE_DESKTOP_DIRECTORY

**System capability:** SystemCapability.FileManagement.File.Environment.FolderObtain

**Return value:**

| Type | Description |
| --- | --- |
| string | Sandbox path of the **Desktop** directory obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken.<br>**Applicable version:** 11 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function getUserDesktopDirExample() {
  try {
    let path = Environment.getUserDesktopDir();
    console.info(`Succeeded in getUserDesktopDir, path is ${path}`);
  } catch (err) {
    console.error(`Failed to getUserDesktopDir. Code: ${err.code}, message: ${err.message}`);
  }
}

```

