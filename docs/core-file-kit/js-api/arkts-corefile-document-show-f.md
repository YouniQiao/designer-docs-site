# show

## show

```TypeScript
declare function show(uri: string, type: string): Promise<void>
```

Opens a file. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

<!--Device-unnamed-declare function show(uri: string, type: string): Promise<void>--><!--Device-unnamed-declare function show(uri: string, type: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file to open. |
| type | string | Yes | Type of the file to open. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise used to return the result. An error code is returned. |


## show

```TypeScript
declare function show(uri: string, type: string, callback: AsyncCallback<void>): void
```

Opens a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

<!--Device-unnamed-declare function show(uri: string, type: string, callback: AsyncCallback<void>): void--><!--Device-unnamed-declare function show(uri: string, type: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file to open. |
| type | string | Yes | Type of the file to open. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. An error code is returned. |

