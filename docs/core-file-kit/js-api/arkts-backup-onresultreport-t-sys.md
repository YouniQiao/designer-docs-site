# OnResultReport

```TypeScript
type OnResultReport = (bundleName: string, result: string) => void
```

Callback called when the backup service return result information. The first return string parameter indicates the bundleName that triggers the callback. The second return string parameter indicates the result of the bundle.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | the bundleName that triggers the callback. |
| result | string | Yes | the result of the bundle. |

