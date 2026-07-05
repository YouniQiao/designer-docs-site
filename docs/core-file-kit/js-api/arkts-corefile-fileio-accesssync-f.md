# accessSync

## accessSync

```TypeScript
declare function accessSync(path: string, mode?: number): void
```

Checks whether this process can access a file. This API returns the result synchronously.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:accessSync](arkts-corefile-file-fs-accesssync-f.md#accesssync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| mode | number | No | Options for accessing the file. You can specify multiple options, separated with a bitwiseOR operator (\|). The default value is **0**.<br>The options are as follows:<br>- **0**: Check whether the fileexists.<br>- **1**: Check whether the process has the execute permission on the file.<br>- **2**: Check whetherthe process has the write permission on the file.<br>- **4**: Check whether the process has the read permissionon the file. |

