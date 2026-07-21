# fsyncSync

<a id="fsyncsync"></a>
## fsyncSync

```TypeScript
declare function fsyncSync(fd: number): void
```

Synchronizes a file. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:fsyncSync](arkts-corefile-file-fs-fsyncsync-f.md#fsyncsync-1)

<!--Device-unnamed-declare function fsyncSync(fd: number): void--><!--Device-unnamed-declare function fsyncSync(fd: number): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to synchronize. |

