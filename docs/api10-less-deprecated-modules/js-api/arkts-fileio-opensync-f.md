# openSync

## openSync

```TypeScript
declare function openSync(path: string, flags?: number, mode?: number): number
```

以同步方法打开文件。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:openSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件的应用沙箱路径。 |
| flags | number | No |  |
| mode | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 打开文件的文件描述符。 |

