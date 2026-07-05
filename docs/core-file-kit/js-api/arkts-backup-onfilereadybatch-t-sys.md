# OnFileReadyBatch

```TypeScript
type OnFileReadyBatch = (error: BusinessError<void>, files: Array<File>) => void
```

Function that returns array of file handle.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| error | BusinessError&lt;void> | Yes | the error that triggers the callback. |
| files | Array&lt;File> | Yes | file handle. |

