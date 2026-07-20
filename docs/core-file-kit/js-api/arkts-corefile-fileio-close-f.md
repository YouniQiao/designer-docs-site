# close

## close

```TypeScript
declare function close(fd: number): Promise<void>
```

Closes a file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:close](arkts-corefile-file-fs-close-f.md#close-1)

<!--Device-unnamed-declare function close(fd: number): Promise<void>--><!--Device-unnamed-declare function close(fd: number): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to close. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## close

```TypeScript
declare function close(fd: number, callback: AsyncCallback<void>): void
```

Closes a file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:close](arkts-corefile-file-fs-close-f.md#close-1)

<!--Device-unnamed-declare function close(fd: number, callback: AsyncCallback<void>): void--><!--Device-unnamed-declare function close(fd: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file to close. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the file is closed asynchronously. |

