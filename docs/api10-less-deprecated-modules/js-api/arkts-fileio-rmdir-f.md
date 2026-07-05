# rmdir

## rmdir

```TypeScript
declare function rmdir(path: string): Promise<void>
```

删除目录，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:rmdir

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待删除目录的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## rmdir

```TypeScript
declare function rmdir(path: string, callback: AsyncCallback<void>): void
```

删除目录，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:rmdir

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待删除目录的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

