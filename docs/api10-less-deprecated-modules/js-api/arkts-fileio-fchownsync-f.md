# fchownSync

## fchownSync

```TypeScript
declare function fchownSync(fd: number, uid: number, gid: number): void
```

以同步方法基于文件描述符改变文件所有者。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待改变文件的文件描述符。 |
| uid | number | Yes | 文件所有者的UID。 |
| gid | number | Yes | 文件所有组的GID。 |

