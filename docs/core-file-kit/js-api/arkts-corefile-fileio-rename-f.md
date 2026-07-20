# rename

## rename

```TypeScript
declare function rename(oldPath: string, newPath: string): Promise<void>
```

Renames a file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:rename](arkts-corefile-file-fs-rename-f.md#rename-1)

<!--Device-unnamed-declare function rename(oldPath: string, newPath: string): Promise<void>--><!--Device-unnamed-declare function rename(oldPath: string, newPath: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldPath | string | Yes | Application sandbox path of the file to rename. |
| newPath | string | Yes | Application sandbox path of the file renamed. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## rename

```TypeScript
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void
```

Renames a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:rename](arkts-corefile-file-fs-rename-f.md#rename-1)

<!--Device-unnamed-declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void--><!--Device-unnamed-declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldPath | string | Yes | Application sandbox path of the file to rename. |
| newPath | string | Yes | Application sandbox path of the file renamed. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the file is asynchronously renamed. |

