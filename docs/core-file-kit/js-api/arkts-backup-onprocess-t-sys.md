# OnProcess

```TypeScript
type OnProcess = (bundleName: string, process: string) => void
```

function that returns backup datasize by bundleName. Callback called when the backup_sa service return result information. The first return string parameter indicates the result of the bundle.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | the bundleName that triggers the callback. |
| process | string | Yes | the process info of the bundle. |

