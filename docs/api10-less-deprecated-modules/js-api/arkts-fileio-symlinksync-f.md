# symlinkSync

## symlinkSync

```TypeScript
declare function symlinkSync(target: string, srcPath: string): void
```

以同步的方法基于文件路径创建符号链接。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:symlinkSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | string | Yes | 目标文件的应用沙箱路径。 |
| srcPath | string | Yes | 符号链接文件的应用沙箱路径。 |

