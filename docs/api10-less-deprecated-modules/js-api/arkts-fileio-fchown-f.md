# fchown

## fchown

```TypeScript
declare function fchown(fd: number, uid: number, gid: number): Promise<void>
```

基于文件描述符改变文件所有者，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待改变文件的文件描述符。 |
| uid | number | Yes | 文件所有者的UID。 |
| gid | number | Yes | 文件所有组的GID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## fchown

```TypeScript
declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void
```

基于文件描述符改变文件所有者，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待改变文件的文件描述符。 |
| uid | number | Yes | 文件所有者的UID。 |
| gid | number | Yes | 文件所有组的GID。 |
| callback | AsyncCallback&lt;void> | Yes |  |

