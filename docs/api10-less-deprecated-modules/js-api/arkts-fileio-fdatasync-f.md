# fdatasync

## fdatasync

```TypeScript
declare function fdatasync(fd: number): Promise<void>
```

实现文件内容数据同步，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:fdatasync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待同步文件的文件描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## fdatasync

```TypeScript
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void
```

实现文件内容数据同步，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:fdatasync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待同步文件的文件描述符。 |
| callback | AsyncCallback&lt;void> | Yes |  |

