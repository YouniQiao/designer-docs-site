# open

## open

```TypeScript
declare function open(path: string, flags?: number, mode?: number): Promise<number>
```

Opens a file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:open](arkts-corefile-file-fs-open-f.md#open-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| flags | number | No | Option for opening the file. You must specify one of the following options. By default,the file is opened in read-only mode.<br>- **0o0**: Open the file in read-only mode.<br>- **0o1**: Open the filein write-only mode.<br>- **0o2**: Open the file in read/write mode.<br>In addition, you can specify the followingoptions, separated using a bitwise OR operator (\|). By default, no additional option is specified.<br>- **0o100**: If the file does not exist, create it. If you use this option, you must also specify **mode**.<br>- **0o200**:If **0o100** is added and the file already exists, throw an exception.<br>- **0o1000**: If the file exists and isopened in write mode, truncate the file length to 0.<br>- **0o2000**: Open the file in append mode. New data willbe appended to the file (added to the end of the file).<br>- **0o4000**: If **path** points to a named pipe (alsoknown as a FIFO), block special file, or character special file, perform non-blocking operations on the open fileand in subsequent I/Os.<br>- **0o200000**: If **path** does not point to a directory, throw an exception.<br>-**0o400000**: If **path** points to a symbolic link, throw an exception.<br>- **0o4010000**: Open the file insynchronous I/O mode. |
| mode | number | No | Permissions on the file. You can specify multiple permissions, separated using a bitwiseOR operator (\|). The default value is **0o660**.<br>- **0o660**: The owner and user group have the read and writepermissions.<br>- **0o700**: The owner has the read, write, and execute permissions.<br>- **0o400**: The ownerhas the read permission.<br>- **0o200**: The owner has the write permission.<br>- **0o100**: The owner has theexecute permission.<br>- **0o070**: The user group has the read, write, and execute permissions.<br>- **0o040**:The user group has the read permission.<br>- **0o020**: The user group has the write permission.<br>- **0o010**:The user group has the execute permission.<br>- **0o007**: Other users have the read, write, and executepermissions.<br>- **0o004**: Other users have the read permission.<br>- **0o002**: Other users have the writepermission.<br>- **0o001**: Other users have the execute permission. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise that returns the file descriptor of the file opened. |


## open

```TypeScript
declare function open(path: string, callback: AsyncCallback<number>): void
```

Opens a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:open](arkts-corefile-file-fs-open-f.md#open-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the file is opened asynchronously, which is usedto return the file descriptor. |


## open

```TypeScript
declare function open(path: string, flags: number, callback: AsyncCallback<number>): void
```

Opens a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:open](arkts-corefile-file-fs-open-f.md#open-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| flags | number | Yes | Option for opening the file. You must specify one of the following options. By default,the file is opened in read-only mode.<br>- **0o0**: Open the file in read-only mode.<br>- **0o1**: Open the filein write-only mode.<br>- **0o2**: Open the file in read/write mode.<br>In addition, you can specify the followingoptions, separated using a bitwise OR operator (\|). By default, no additional option is specified.<br>- **0o100**: If the file does not exist, create it. If you use this option, you must also specify **mode**.<br>- **0o200**:If **0o100** is added and the file already exists, throw an exception.<br>- **0o1000**: If the file exists and isopened in write mode, truncate the file length to 0.<br>- **0o2000**: Open the file in append mode. New data willbe appended to the file (added to the end of the file).<br>- **0o4000**: If **path** points to a named pipe (alsoknown as a FIFO), block special file, or character special file, perform non-blocking operations on the open fileand in subsequent I/Os.<br>- **0o200000**: If **path** does not point to a directory, throw an exception.<br>-**0o400000**: If **path** points to a symbolic link, throw an exception.<br>- **0o4010000**: Open the file insynchronous I/O mode. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the file is opened asynchronously, which is usedto return the file descriptor. |


## open

```TypeScript
declare function open(path: string, flags: number, mode: number, callback: AsyncCallback<number>): void
```

Opens a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:open](arkts-corefile-file-fs-open-f.md#open-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| flags | number | Yes | Option for opening the file. You must specify one of the following options. By default,the file is opened in read-only mode.<br>- **0o0**: Open the file in read-only mode.<br>- **0o1**: Open the filein write-only mode.<br>- **0o2**: Open the file in read/write mode.<br>In addition, you can specify the followingoptions, separated using a bitwise OR operator (\|). By default, no additional option is specified.<br>- **0o100**: If the file does not exist, create it. If you use this option, you must also specify **mode**.<br>- **0o200**:If **0o100** is added and the file already exists, throw an exception.<br>- **0o1000**: If the file exists and isopened in write mode, truncate the file length to 0.<br>- **0o2000**: Open the file in append mode. New data willbe appended to the file (added to the end of the file).<br>- **0o4000**: If **path** points to a named pipe (alsoknown as a FIFO), block special file, or character special file, perform non-blocking operations on the open fileand in subsequent I/Os.<br>- **0o200000**: If **path** does not point to a directory, throw an exception.<br>-**0o400000**: If **path** points to a symbolic link, throw an exception.<br>- **0o4010000**: Open the file insynchronous I/O mode. |
| mode | number | Yes | Permissions on the file. You can specify multiple permissions, separated using a bitwiseOR operator (\|). The default value is **0o660**.<br>- **0o660**: The owner and user group have the read and writepermissions.<br>- **0o700**: The owner has the read, write, and execute permissions.<br>- **0o400**: The ownerhas the read permission.<br>- **0o200**: The owner has the write permission.<br>- **0o100**: The owner has theexecute permission.<br>- **0o070**: The user group has the read, write, and execute permissions.<br>- **0o040**:The user group has the read permission.<br>- **0o020**: The user group has the write permission.<br>- **0o010**:The user group has the execute permission.<br>- **0o007**: Other users have the read, write, and executepermissions.<br>- **0o004**: Other users have the read permission.<br>- **0o002**: Other users have the writepermission.<br>- **0o001**: Other users have the execute permission. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the file is opened asynchronously, which is usedto return the file descriptor. |

