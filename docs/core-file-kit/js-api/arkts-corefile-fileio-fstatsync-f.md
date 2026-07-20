# fstatSync

## fstatSync

```TypeScript
declare function fstatSync(fd: number): Stat
```

Obtains file status based on the file descriptor. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:statSync](arkts-corefile-file-fs-statsync-f.md#statsync-1)

<!--Device-unnamed-declare function fstatSync(fd: number): Stat--><!--Device-unnamed-declare function fstatSync(fd: number): Stat-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file whose status is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| [Stat](arkts-corefile-file-fs-stat-i.md) | Detailed file status obtained. |

