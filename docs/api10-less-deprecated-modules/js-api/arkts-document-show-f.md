# show

## show

```TypeScript
declare function show(uri: string, type: string): Promise<void>
```

异步打开URI对应的文件，使用promise形式返回结果。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待打开的文件URI |
| type | string | Yes | 待打开文件的类型 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise回调返回void表示成功打开文件（注：当前返回错误码） |

## show

```TypeScript
declare function show(uri: string, type: string, callback: AsyncCallback<void>): void
```

异步打开URI对应的文件，使用callback形式返回结果。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待打开的文件URI |
| type | string | Yes | 待打开文件的类型 |
| callback | AsyncCallback&lt;void> | Yes |  |

