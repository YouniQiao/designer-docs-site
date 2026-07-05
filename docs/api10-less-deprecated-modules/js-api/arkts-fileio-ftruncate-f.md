# ftruncate

## ftruncate

```TypeScript
declare function ftruncate(fd: number, len?: number): Promise<void>
```

基于文件描述符截断文件，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncate

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待截断文件的文件描述符。 |
| len | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## ftruncate

```TypeScript
declare function ftruncate(fd: number, callback: AsyncCallback<void>): void
```

基于文件描述符截断文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncate

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待截断文件的文件描述符。 |
| callback | AsyncCallback&lt;void> | Yes |  |

## ftruncate

```TypeScript
declare function ftruncate(fd: number, len: number, callback: AsyncCallback<void>): void
```

基于文件描述符截断文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncate

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待截断文件的文件描述符。 |
| len | number | Yes |  |
| callback | AsyncCallback&lt;void> | Yes |  |

