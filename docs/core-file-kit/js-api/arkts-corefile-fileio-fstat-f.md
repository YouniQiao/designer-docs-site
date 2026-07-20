# fstat

## fstat

```TypeScript
declare function fstat(fd: number): Promise<Stat>
```

Obtains file status based on the file descriptor. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:stat](arkts-corefile-file-fs-stat-f.md#stat-1)

<!--Device-unnamed-declare function fstat(fd: number): Promise<Stat>--><!--Device-unnamed-declare function fstat(fd: number): Promise<Stat>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file whose status is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Stat> | Promise that returns the detailed file status obtained. |


## fstat

```TypeScript
declare function fstat(fd: number, callback: AsyncCallback<Stat>): void
```

Obtains file status based on the file descriptor. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:stat](arkts-corefile-file-fs-stat-f.md#stat-1)

<!--Device-unnamed-declare function fstat(fd: number, callback: AsyncCallback<Stat>): void--><!--Device-unnamed-declare function fstat(fd: number, callback: AsyncCallback<Stat>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor of the file whose status is to be obtained. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Stat> | Yes | Callback used to return the file status obtained. |

