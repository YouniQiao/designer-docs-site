# rmdir

## rmdir

```TypeScript
declare function rmdir(path: string): Promise<void>
```

Removes a directory. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:rmdir](arkts-corefile-file-fs-rmdir-f.md#rmdir-1)

<!--Device-unnamed-declare function rmdir(path: string): Promise<void>--><!--Device-unnamed-declare function rmdir(path: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## rmdir

```TypeScript
declare function rmdir(path: string, callback: AsyncCallback<void>): void
```

Removes a directory. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:rmdir](arkts-corefile-file-fs-rmdir-f.md#rmdir-1)

<!--Device-unnamed-declare function rmdir(path: string, callback: AsyncCallback<void>): void--><!--Device-unnamed-declare function rmdir(path: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the directory. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when a directory is removed asynchronously. |

