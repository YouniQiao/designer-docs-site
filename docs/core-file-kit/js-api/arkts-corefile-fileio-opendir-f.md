# opendir

## opendir

```TypeScript
declare function opendir(path: string): Promise<Dir>
```

Opens a directory. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory to open. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Dir&gt; | Promise that returns the **Dir** object opened. |


## opendir

```TypeScript
declare function opendir(path: string, callback: AsyncCallback<Dir>): void
```

Opens a file directory. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory to open. |
| callback | AsyncCallback&lt;Dir&gt; | Yes | Callback invoked when the directory is opened asynchronously. |

