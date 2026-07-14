# getCfgDirList (System API)

## Modules to Import

```TypeScript
import { configPolicy } from '@kit.BasicServicesKit';
```

## getCfgDirList

```TypeScript
function getCfgDirList(callback: AsyncCallback<Array<string>>): void
```

Obtains a list of configuration level directories, in ascending order of priority. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result. If the list of configurationlevel directories is successfully obtained, <strong>err</strong> is <strong>undefined</strong>,and <strong>data</strong> is the obtained list. Otherwise, <strong>err</strong> is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |


## getCfgDirList

```TypeScript
function getCfgDirList(): Promise<Array<string>>
```

Obtains a list of configuration level directories, in ascending order of priority. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return the list of configuration level directories. |

