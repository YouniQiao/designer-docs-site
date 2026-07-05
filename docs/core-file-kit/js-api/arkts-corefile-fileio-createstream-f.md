# createStream

## createStream

```TypeScript
declare function createStream(path: string, mode: string): Promise<Stream>
```

Creates a stream based on the file path. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:createStream](arkts-corefile-file-fs-createstream-f.md#createstream-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| mode | string | Yes | - **r**: Open a file for reading. The file must exist.<br>- **r+**: Open a file for bothreading and writing. The file must exist.<br>- **w**: Open a file for writing. If the file exists, clear itscontent. If the file does not exist, create a file.<br>- **w+**: Open a file for both reading and writing. If thefile exists, clear its content. If the file does not exist, create a file.<br>- **a**: Open a file in append modefor writing at the end of the file. If the file does not exist, create a file. If the file exists, write data tothe end of the file (the original content of the file is reserved).<br>- **a+**: Open a file in append mode forreading or updating at the end of the file. If the file does not exist, create a file. If the file exists, writedata to the end of the file (the original content of the file is reserved). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Stream&gt; | Promise that returns the file stream. |


## createStream

```TypeScript
declare function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void
```

Creates a stream based on the file path. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:createStream](arkts-corefile-file-fs-createstream-f.md#createstream-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| mode | string | Yes | - **r**: Open a file for reading. The file must exist.<br>- **r+**: Open a file for bothreading and writing. The file must exist.<br>- **w**: Open a file for writing. If the file exists, clear itscontent. If the file does not exist, create a file.<br>- **w+**: Open a file for both reading and writing. If thefile exists, clear its content. If the file does not exist, create a file.<br>- **a**: Open a file in append modefor writing at the end of the file. If the file does not exist, create a file. If the file exists, write data tothe end of the file (the original content of the file is reserved).<br>- **a+**: Open a file in append mode forreading or updating at the end of the file. If the file does not exist, create a file. If the file exists, writedata to the end of the file (the original content of the file is reserved). |
| callback | AsyncCallback&lt;Stream&gt; | Yes | Callback invoked when the stream is opened asynchronously. |

