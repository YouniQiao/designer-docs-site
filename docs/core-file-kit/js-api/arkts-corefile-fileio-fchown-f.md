# fchown

## fchown

```TypeScript
declare function fchown(fd: number, uid: number, gid: number): Promise<void>
```

Changes the file owner based on the file descriptor. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

<!--Device-unnamed-declare function fchown(fd: number, uid: number, gid: number): Promise<void>--><!--Device-unnamed-declare function fchown(fd: number, uid: number, gid: number): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the target file. |
| uid | number | Yes | New UID. |
| gid | number | Yes | New GID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## fchown

```TypeScript
declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void
```

Changes the file owner based on the file descriptor. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

<!--Device-unnamed-declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void--><!--Device-unnamed-declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the target file. |
| uid | number | Yes | New UID. |
| gid | number | Yes | New GID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the file owner is changed asynchronously. |

