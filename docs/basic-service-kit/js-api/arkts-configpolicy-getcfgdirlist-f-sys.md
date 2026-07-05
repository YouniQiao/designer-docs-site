# getCfgDirList

## getCfgDirList

```TypeScript
function getCfgDirList(callback: AsyncCallback<Array<string>>): void
```

获取配置层级目录列表，按优先级从低到高。使用callback异步回调。

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数。当获取配置层级目录列表成功，err为undefined，  data为获取到的配置层级目录列表；否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## getCfgDirList

```TypeScript
function getCfgDirList(): Promise<Array<string>>
```

获取配置层级目录列表，按优先级从低到高。使用Promise异步回调。

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回配置层级目录列表。 |

