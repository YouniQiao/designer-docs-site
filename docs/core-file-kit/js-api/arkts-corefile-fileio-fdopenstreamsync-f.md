# fdopenStreamSync

## fdopenStreamSync

```TypeScript
declare function fdopenStreamSync(fd: number, mode: string): Stream
```

Opens a stream based on the file descriptor. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:fdopenStreamSync](arkts-corefile-file-fs-fdopenstreamsync-f.md#fdopenstreamsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the target file. |
| mode | string | Yes | - **r**: Open a file for reading. The file must exist.<br>- **r+**: Open a file for bothreading and writing. The file must exist.<br>- **w**: Open a file for writing. If the file exists, clear itscontent. If the file does not exist, create a file.<br>- **w+**: Open a file for both reading and writing. If thefile exists, clear its content. If the file does not exist, create a file.<br>- **a**: Open a file in append modefor writing at the end of the file. If the file does not exist, create a file. If the file exists, write data tothe end of the file (the original content of the file is reserved).<br>- **a+**: Open a file in append mode forreading or updating at the end of the file. If the file does not exist, create a file. If the file exists, writedata to the end of the file (the original content of the file is reserved). |

**Return value:**

| Type | Description |
| --- | --- |
| Stream | File stream. |

