# truncateSync

## truncateSync

```TypeScript
declare function truncateSync(path: string, len?: number): void
```

Truncates a file based on the file path. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:truncateSync](arkts-corefile-file-fs-truncatesync-f.md#truncatesync-1)

<!--Device-unnamed-declare function truncateSync(path: string, len?: number): void--><!--Device-unnamed-declare function truncateSync(path: string, len?: number): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file to truncate. |
| len | number | No | File length after truncation, in bytes. The default value is **0**. |

