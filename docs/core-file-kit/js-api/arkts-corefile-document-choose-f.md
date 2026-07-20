# choose

## choose

```TypeScript
declare function choose(types?: string[]): Promise<string>
```

Chooses files of the specified types. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

<!--Device-unnamed-declare function choose(types?: string[]): Promise<string>--><!--Device-unnamed-declare function choose(types?: string[]): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | string[] | No | Types of the files to choose. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the result. An error code is returned. |


## choose

```TypeScript
declare function choose(callback: AsyncCallback<string>): void
```

Chooses a file. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

<!--Device-unnamed-declare function choose(callback: AsyncCallback<string>): void--><!--Device-unnamed-declare function choose(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. An error code is returned. |


## choose

```TypeScript
declare function choose(types: string[], callback: AsyncCallback<string>): void
```

Chooses files of the specified types. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

<!--Device-unnamed-declare function choose(types: string[], callback: AsyncCallback<string>): void--><!--Device-unnamed-declare function choose(types: string[], callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.FileManagement.UserFileService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | string[] | Yes | Types of the files to choose. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. An error code is returned. |

