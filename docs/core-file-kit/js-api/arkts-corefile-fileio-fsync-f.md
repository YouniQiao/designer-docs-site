# fsync

## fsync

```TypeScript
declare function fsync(fd: number): Promise<void>
```

Synchronizes a file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:fsync](arkts-corefile-file-fs-fsync-f.md#fsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to synchronize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |


## fsync

```TypeScript
declare function fsync(fd: number, callback: AsyncCallback<void>): void
```

Synchronizes a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:fsync](arkts-corefile-file-fs-fsync-f.md#fsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to synchronize. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file is synchronized in asynchronous mode. |

