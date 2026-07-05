# chown

## chown

```TypeScript
declare function chown(path: string, uid: number, gid: number): Promise<void>
```

基于文件路径改变文件所有者，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待改变文件的应用沙箱路径。 |
| uid | number | Yes | 新的UID（UserID）。 |
| gid | number | Yes | 新的GID（GroupID）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## chown

```TypeScript
declare function chown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void
```

基于文件路径改变文件所有者，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待改变文件的应用沙箱路径。 |
| uid | number | Yes | 新的UID。 |
| gid | number | Yes | 新的GID。 |
| callback | AsyncCallback&lt;void> | Yes |  |

