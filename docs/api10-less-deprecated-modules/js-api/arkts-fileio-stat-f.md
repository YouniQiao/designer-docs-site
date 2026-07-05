# stat

## stat

```TypeScript
declare function stat(path: string): Promise<Stat>
```

获取文件信息，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:stat

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待获取文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Stat> | Promise对象。返回文件的具体信息。 |

## stat

```TypeScript
declare function stat(path: string, callback: AsyncCallback<Stat>): void
```

获取文件信息，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:stat

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待获取文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;Stat> | Yes |  |

