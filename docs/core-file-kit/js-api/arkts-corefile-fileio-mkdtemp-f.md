# mkdtemp

## mkdtemp

```TypeScript
declare function mkdtemp(prefix: string): Promise<string>
```

Creates a temporary directory. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:mkdtemp](arkts-corefile-file-fs-mkdtemp-f.md#mkdtemp-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | String to be replaced with six randomly generated characters to create a unique temporarydirectory. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise that returns the directory created. |


## mkdtemp

```TypeScript
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void
```

Creates a temporary directory. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:mkdtemp](arkts-corefile-file-fs-mkdtemp-f.md#mkdtemp-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | String to be replaced with six randomly generated characters to create a unique temporarydirectory. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback invoked when a temporary directory is created asynchronously. |

