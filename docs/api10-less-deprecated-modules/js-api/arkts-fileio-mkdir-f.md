# mkdir

## mkdir

```TypeScript
declare function mkdir(path: string, mode?: number): Promise<void>
```

创建目录，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:mkdir

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待创建目录的应用沙箱路径。 |
| mode | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## mkdir

```TypeScript
declare function mkdir(path: string, callback: AsyncCallback<void>): void
```

创建目录，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:mkdir

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待创建目录的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

## mkdir

```TypeScript
declare function mkdir(path: string, mode: number, callback: AsyncCallback<void>): void
```

创建目录，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:mkdir

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待创建目录的应用沙箱路径。 |
| mode | number | Yes |  |
| callback | AsyncCallback&lt;void> | Yes |  |

