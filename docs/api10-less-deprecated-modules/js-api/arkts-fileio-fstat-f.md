# fstat

## fstat

```TypeScript
declare function fstat(fd: number): Promise<Stat>
```

基于文件描述符获取文件状态信息，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:stat

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待获取文件状态的文件描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Stat> | Promise对象。返回表示文件状态的具体信息。 |

## fstat

```TypeScript
declare function fstat(fd: number, callback: AsyncCallback<Stat>): void
```

基于文件描述符获取文件状态信息，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:stat

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待获取文件状态的文件描述符。 |
| callback | AsyncCallback&lt;Stat> | Yes | 异步获取文件状态信息之后的回调。 |

