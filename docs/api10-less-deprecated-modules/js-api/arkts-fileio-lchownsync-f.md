# lchownSync

## lchownSync

```TypeScript
declare function lchownSync(path: string, uid: number, gid: number): void
```

以同步方法基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是更改符号链接所指向的实际文件。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件的应用沙箱路径。 |
| uid | number | Yes | 新的UID。 |
| gid | number | Yes | 新的GID。 |

