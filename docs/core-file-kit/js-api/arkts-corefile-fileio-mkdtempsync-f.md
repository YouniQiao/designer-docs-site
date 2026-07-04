# mkdtempSync

## mkdtempSync

```TypeScript
declare function mkdtempSync(prefix: string): string
```

Creates a temporary directory. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:mkdtempSync](arkts-corefile-file-fs-mkdtempsync-f.md#mkdtempsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | String to be replaced with six randomly generated characters to create a unique temporarydirectory. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Unique directory generated. |

