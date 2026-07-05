# choose

## choose

```TypeScript
declare function choose(types?: string[]): Promise<string>
```

通过文件管理器选择文件，异步返回文件URI，使用promise形式返回结果。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | string[] | No | 限定文件选择的类型 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | 异步返回文件URI（注：当前返回错误码） |

## choose

```TypeScript
declare function choose(callback: AsyncCallback<string>): void
```

通过文件管理器选择文件，异步返回文件URI，使用callback形式返回结果。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes |  |

## choose

```TypeScript
declare function choose(types: string[], callback: AsyncCallback<string>): void
```

通过文件管理器选择文件，异步返回文件URI，使用callback形式返回结果。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | string[] | Yes | 限定选择文件的类型 |
| callback | AsyncCallback&lt;string> | Yes |  |

