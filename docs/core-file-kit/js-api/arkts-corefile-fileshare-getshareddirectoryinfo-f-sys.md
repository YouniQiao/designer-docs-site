# getSharedDirectoryInfo (System API)

## Modules to Import

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

<a id="getshareddirectoryinfo"></a>
## getSharedDirectoryInfo

```TypeScript
function getSharedDirectoryInfo(): Promise<Array<SharedDirectoryInfo>>
```

Gets the shared sandbox directories of applications

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_SHARED_FILE

**Model restriction:** This API can be used only in the stage model.

<!--Device-fileShare-function getSharedDirectoryInfo(): Promise<Array<SharedDirectoryInfo>>--><!--Device-fileShare-function getSharedDirectoryInfo(): Promise<Array<SharedDirectoryInfo>>-End-->

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SharedDirectoryInfo&gt;&gt; | Returns the shared sandbox directories on paths. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed, usually the result returned by VerifyAccessToken. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory. |

