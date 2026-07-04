# copyFile

## copyFile

```TypeScript
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>
```

Copies a file. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:copyFile](arkts-corefile-file-fs-copyfile-f.md#copyfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | Path or file descriptor of the source file to copy. |
| dest | string \| number | Yes | Path or file descriptor of the destination file. |
| mode | number | No | Option for overwriting the destination file. The default value is **0**, which is the onlyvalue supported.<br>**0**: Overwrite the file with the same name completely and truncate the part that is notoverwritten. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |


## copyFile

```TypeScript
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void
```

Copies a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:copyFile](arkts-corefile-file-fs-copyfile-f.md#copyfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | Path or file descriptor of the source file to copy. |
| dest | string \| number | Yes | Path or file descriptor of the destination file. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file is copied asynchronously. |


## copyFile

```TypeScript
declare function copyFile(
  src: string | number,
  dest: string | number,
  mode: number,
  callback: AsyncCallback<void>
): void
```

Copies a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:copyFile](arkts-corefile-file-fs-copyfile-f.md#copyfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | Path or file descriptor of the source file to copy. |
| dest | string \| number | Yes | Path or file descriptor of the destination file. |
| mode | number | Yes | Option for overwriting the destination file. The default value is **0**, which is the onlyvalue supported.<br>**0**: Overwrite the file with the same name completely and truncate the part that is notoverwritten. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file is copied asynchronously. |

