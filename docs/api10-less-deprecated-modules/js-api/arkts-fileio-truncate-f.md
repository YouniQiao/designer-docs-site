# truncate

## truncate

```TypeScript
declare function truncate(path: string, len?: number): Promise<void>
```

基于文件路径截断文件，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncate

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待截断文件的应用沙箱路径。 |
| len | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## truncate

```TypeScript
declare function truncate(path: string, callback: AsyncCallback<void>): void
```

基于文件路径截断文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncate

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待截断文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

## truncate

```TypeScript
declare function truncate(path: string, len: number, callback: AsyncCallback<void>): void
```

基于文件路径截断文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:truncate

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待截断文件的应用沙箱路径。 |
| len | number | Yes |  |
| callback | AsyncCallback&lt;void> | Yes |  |

