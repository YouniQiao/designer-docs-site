# access

## access

```TypeScript
declare function access(path: string, mode?: number): Promise<void>
```

Checks whether this process can access a file. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:access](arkts-corefile-file-fs-access-f.md#access-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| mode | number | No | Options for accessing the file. You can specify multiple options, separated with a bitwiseOR operator (\|). The default value is **0**.<br>The options are as follows:<br>- **0**: Check whether the fileexists.<br>- **1**: Check whether the process has the execute permission on the file.<br>- **2**: Check whetherthe process has the write permission on the file.<br>- **4**: Check whether the process has the read permissionon the file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |


## access

```TypeScript
declare function access(path: string, callback: AsyncCallback<void>): void
```

Checks whether this process can access a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:access](arkts-corefile-file-fs-access-f.md#access-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file is asynchronously checked. |


## access

```TypeScript
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void
```

Checks whether this process can access a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:access](arkts-corefile-file-fs-access-f.md#access-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| mode | number | Yes | Options for accessing the file. You can specify multiple options, separated with a bitwiseOR operator (\|). The default value is **0**.<br>The options are as follows:<br>- **0**: Check whether the fileexists.<br>- **1**: Check whether the process has the execute permission on the file.<br>- **2**: Check whetherthe process has the write permission on the file.<br>- **4**: Check whether the process has the read permissionon the file. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file is asynchronously checked. |

