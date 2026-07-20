# stat

## stat

```TypeScript
declare function stat(path: string): Promise<Stat>
```

Obtains file information. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:stat](arkts-corefile-file-fs-stat-f.md#stat-1)

<!--Device-unnamed-declare function stat(path: string): Promise<Stat>--><!--Device-unnamed-declare function stat(path: string): Promise<Stat>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Stat> | Promise that returns the file information obtained. |


## stat

```TypeScript
declare function stat(path: string, callback: AsyncCallback<Stat>): void
```

Obtains file information. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:stat](arkts-corefile-file-fs-stat-f.md#stat-1)

<!--Device-unnamed-declare function stat(path: string, callback: AsyncCallback<Stat>): void--><!--Device-unnamed-declare function stat(path: string, callback: AsyncCallback<Stat>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Stat> | Yes | Callback used to return the file information obtained. |

