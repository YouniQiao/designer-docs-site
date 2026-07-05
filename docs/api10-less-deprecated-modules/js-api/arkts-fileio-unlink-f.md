# unlink

## unlink

```TypeScript
declare function unlink(path: string): Promise<void>
```

删除文件，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:unlink

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待删除文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## unlink

```TypeScript
declare function unlink(path: string, callback: AsyncCallback<void>): void
```

删除文件，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:unlink

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待删除文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

