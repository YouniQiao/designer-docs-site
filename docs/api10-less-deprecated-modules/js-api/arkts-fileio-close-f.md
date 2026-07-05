# close

## close

```TypeScript
declare function close(fd: number): Promise<void>
```

关闭文件，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:close

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待关闭文件的文件描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## close

```TypeScript
declare function close(fd: number, callback: AsyncCallback<void>): void
```

关闭文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:close

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待关闭文件的文件描述符。 |
| callback | AsyncCallback&lt;void> | Yes |  |

