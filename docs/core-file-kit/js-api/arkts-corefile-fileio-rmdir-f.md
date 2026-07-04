# rmdir

## rmdir

```TypeScript
declare function rmdir(path: string): Promise<void>
```

Removes a directory. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:rmdir](arkts-corefile-file-fs-rmdir-f.md#rmdir-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |


## rmdir

```TypeScript
declare function rmdir(path: string, callback: AsyncCallback<void>): void
```

Removes a directory. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:rmdir](arkts-corefile-file-fs-rmdir-f.md#rmdir-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when a directory is removed asynchronously. |

