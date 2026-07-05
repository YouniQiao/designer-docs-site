# copyFileSync

## copyFileSync

```TypeScript
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void
```

以同步方法复制文件。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:copyFileSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | 待复制文件的路径或待复制文件的描述符。 |
| dest | string \| number | Yes | 目标文件路径或目标文件描述符。 |
| mode | number | No |  |

