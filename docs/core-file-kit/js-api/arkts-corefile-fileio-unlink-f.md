# unlink

## unlink

```TypeScript
declare function unlink(path: string): Promise<void>
```

Removes a file. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:unlink](arkts-corefile-file-fs-unlink-f.md#unlink-1)

<!--Device-unnamed-declare function unlink(path: string): Promise<void>--><!--Device-unnamed-declare function unlink(path: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## unlink

```TypeScript
declare function unlink(path: string, callback: AsyncCallback<void>): void
```

Removes a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:unlink](arkts-corefile-file-fs-unlink-f.md#unlink-1)

<!--Device-unnamed-declare function unlink(path: string, callback: AsyncCallback<void>): void--><!--Device-unnamed-declare function unlink(path: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the file is removed asynchronously. |

