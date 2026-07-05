# lstat

## lstat

```TypeScript
declare function lstat(path: string): Promise<Stat>
```

获取链接信息，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:lstat

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目标文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Stat> | promise对象，返回文件对象，表示文件的具体信息，详情见stat。 |

## lstat

```TypeScript
declare function lstat(path: string, callback: AsyncCallback<Stat>): void
```

获取链接信息，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:lstat

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 目标文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;Stat> | Yes |  |

