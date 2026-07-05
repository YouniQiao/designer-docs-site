# getExternalStorageDir

## getExternalStorageDir

```TypeScript
function getExternalStorageDir(): string
```

获取外卡根目录的沙箱路径，该接口仅对具有该系统能力的设备开放。

**Since:** 11

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**System capability:** SystemCapability.FileManagement.File.Environment.FolderObtain

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回外卡根目录的沙箱路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses  system API. |
| 801 | Capability not supported. |
| 13900042 | Unknown error. |

