# fdatasync

## fdatasync

```TypeScript
declare function fdatasync(fd: number): Promise<void>
```

Synchronizes the data of a file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:fdatasync](arkts-corefile-file-fs-fdatasync-f.md#fdatasync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to synchronize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |


## fdatasync

```TypeScript
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void
```

Synchronizes the data of a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:fdatasync](arkts-corefile-file-fs-fdatasync-f.md#fdatasync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to synchronize. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file data is synchronized in asynchronous mode. |

