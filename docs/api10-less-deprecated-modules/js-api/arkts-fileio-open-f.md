# open

## open

```TypeScript
declare function open(path: string, flags?: number, mode?: number): Promise<number>
```

打开文件，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:open

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件的应用沙箱路径。 |
| flags | number | No |  |
| mode | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象。返回打开文件的文件描述符。 |

## open

```TypeScript
declare function open(path: string, callback: AsyncCallback<number>): void
```

打开文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:open

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;number> | Yes |  |

## open

```TypeScript
declare function open(path: string, flags: number, callback: AsyncCallback<number>): void
```

打开文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:open

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件的应用沙箱路径。 |
| flags | number | Yes |  |
| callback | AsyncCallback&lt;number> | Yes |  |

## open

```TypeScript
declare function open(path: string, flags: number, mode: number, callback: AsyncCallback<number>): void
```

打开文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:open

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待打开文件的应用沙箱路径。 |
| flags | number | Yes |  |
| mode | number | Yes |  |
| callback | AsyncCallback&lt;number> | Yes |  |

