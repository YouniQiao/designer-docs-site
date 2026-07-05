# opendir

## opendir

```TypeScript
declare function opendir(path: string): Promise<Dir>
```

打开文件目录，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件目录的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Dir> | Promise对象。返回Dir对象。 |

## opendir

```TypeScript
declare function opendir(path: string, callback: AsyncCallback<Dir>): void
```

打开文件目录，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件目录的应用沙箱路径。 |
| callback | AsyncCallback&lt;Dir> | Yes |  |

