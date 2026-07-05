# chmodSync

## chmodSync

```TypeScript
declare function chmodSync(path: string, mode: number): void
```

以同步方法改变文件权限。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 所需变更权限的文件的应用沙箱路径。 |
| mode | number | Yes | 改变文件权限，可给定如下权限，以按位或的方式追加权限。 -?0o700：所有者具有读、写及可执行权限。 -?0o400：所有者具有读权限。 -?0o200：所有  者具有写权限。 -?0o100：所有者具有可执行权限。 -?0o070：所有用户组具有读、写及可执行权限。 -?0o040：所有用户组具有读权限。 -?0o020：所有用户组具有写权限。-?0o010：所有用户组具有可执行权限。 -?0o007：其余用户具有读、写及可执行权限。 -?0o004：其余用户具有读权限。 -?0o002：其余用户具有写权限。 -?0o001：其余用  户具有可执行权限。 |

