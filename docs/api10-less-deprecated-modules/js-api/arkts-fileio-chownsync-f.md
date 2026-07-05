# chownSync

## chownSync

```TypeScript
declare function chownSync(path: string, uid: number, gid: number): void
```

以同步的方法基于文件路径改变文件所有者。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待改变文件的应用沙箱路径。 |
| uid | number | Yes | 新的UID。 |
| gid | number | Yes | 新的GID。 |

