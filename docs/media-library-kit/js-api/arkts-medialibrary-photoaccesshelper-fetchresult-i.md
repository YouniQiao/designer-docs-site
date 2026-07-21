# FetchResult

FetchResult provides APIs to manage the file retrieval result.

**Since:** 10

<!--Device-photoAccessHelper-interface FetchResult<T>--><!--Device-photoAccessHelper-interface FetchResult<T>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-close(): void--><!--Device-FetchResult-close(): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="contains"></a>
## contains

```TypeScript
contains(object: T): Promise<boolean>
```

Checks whether the specified file asset is contained in the result set. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FetchResult-contains(object: T): Promise<boolean>--><!--Device-FetchResult-contains(object: T): Promise<boolean>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | T | Yes | Specified file asset. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. **true** indicates that the specified file asset is contained in the result set, and **false** indicates the opposite. |

<a id="getallobjects"></a>
## getAllObjects

```TypeScript
getAllObjects(callback: AsyncCallback<Array<T>>): void
```

Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getAllObjects(callback: AsyncCallback<Array<T>>): void--><!--Device-FetchResult-getAllObjects(callback: AsyncCallback<Array<T>>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;T&gt;&gt; | Yes | Callback function. If all file assets in the result set are successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getallobjects-1"></a>
## getAllObjects

```TypeScript
getAllObjects(): Promise<Array<T>>
```

Obtains all the file assets in the result set. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getAllObjects(): Promise<Array<T>>--><!--Device-FetchResult-getAllObjects(): Promise<Array<T>>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T&gt;&gt; | Promise used to return an array of all file assets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getcount"></a>
## getCount

```TypeScript
getCount(): number
```

Obtains the total number of files in the result set.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getCount(): int--><!--Device-FetchResult-getCount(): int-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of files obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getfirstobject"></a>
## getFirstObject

```TypeScript
getFirstObject(callback: AsyncCallback<T>): void
```

Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getFirstObject(callback: AsyncCallback<T>): void--><!--Device-FetchResult-getFirstObject(callback: AsyncCallback<T>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;T&gt; | Yes | Callback function. If the first file asset in the result set is successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getfirstobject-1"></a>
## getFirstObject

```TypeScript
getFirstObject(): Promise<T>
```

Obtains the first file asset in the result set. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getFirstObject(): Promise<T>--><!--Device-FetchResult-getFirstObject(): Promise<T>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | Promise used to return the first object in the result set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getindex"></a>
## getIndex

```TypeScript
getIndex(object: T): Promise<number>
```

Obtains the index of a specified file asset in the result set. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FetchResult-getIndex(object: T): Promise<int>--><!--Device-FetchResult-getIndex(object: T): Promise<int>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | T | Yes | Specified file asset. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result. If the object exists in the result set, the corresponding index is returned. Otherwise, **-1** is returned. |

<a id="getlastobject"></a>
## getLastObject

```TypeScript
getLastObject(callback: AsyncCallback<T>): void
```

Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getLastObject(callback: AsyncCallback<T>): void--><!--Device-FetchResult-getLastObject(callback: AsyncCallback<T>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;T&gt; | Yes | Callback function. If the last file asset in the result set is successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getlastobject-1"></a>
## getLastObject

```TypeScript
getLastObject(): Promise<T>
```

Obtains the last file asset in the result set. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getLastObject(): Promise<T>--><!--Device-FetchResult-getLastObject(): Promise<T>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | Promise used to return the last object in the result set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getnextobject"></a>
## getNextObject

```TypeScript
getNextObject(callback: AsyncCallback<T>): void
```

Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.

Before using this API, you must use [isAfterLast()](arkts-medialibrary-photoaccesshelper-fetchresult-i.md#isafterlast-1) to check whether the current position is the end of the result set.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getNextObject(callback: AsyncCallback<T>): void--><!--Device-FetchResult-getNextObject(callback: AsyncCallback<T>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;T&gt; | Yes | Callback function. If the next file asset in the result set is successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getnextobject-1"></a>
## getNextObject

```TypeScript
getNextObject(): Promise<T>
```

Obtains the next file asset in the result set. This API uses a promise to return the result.

Before using this API, you must use [isAfterLast()](arkts-medialibrary-photoaccesshelper-fetchresult-i.md#isafterlast-1) to check whether the current position is the end of the result set.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getNextObject(): Promise<T>--><!--Device-FetchResult-getNextObject(): Promise<T>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | Promise used to return the next object in the result set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getobjectbyposition"></a>
## getObjectByPosition

```TypeScript
getObjectByPosition(index: number, callback: AsyncCallback<T>): void
```

Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getObjectByPosition(index: int, callback: AsyncCallback<T>): void--><!--Device-FetchResult-getObjectByPosition(index: int, callback: AsyncCallback<T>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the file asset to obtain. The value starts from **0**. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;T&gt; | Yes | Callback function. If the file asset with the specified index in the result set is successfully obtained, **err** is **undefined**, and **data** is the specific search result.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getobjectbyposition-1"></a>
## getObjectByPosition

```TypeScript
getObjectByPosition(index: number): Promise<T>
```

Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-getObjectByPosition(index: int): Promise<T>--><!--Device-FetchResult-getObjectByPosition(index: int): Promise<T>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the file asset to obtain. The value starts from **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | Promise used to return the file asset obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getobjectsbyindexset"></a>
## getObjectsByIndexSet

```TypeScript
getObjectsByIndexSet(indexSet: number[]): Promise<T[]>
```

Obtains the file asset array corresponding to the specified index set in the result set. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-FetchResult-getObjectsByIndexSet(indexSet: int[]): Promise<T[]>--><!--Device-FetchResult-getObjectsByIndexSet(indexSet: int[]): Promise<T[]>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indexSet | number[] | Yes | Specified index set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T[]&gt; | Promise object, which returns the file asset array corresponding to the specified index set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails. Possible causes:<br>1.The indexSet is null, undefined or empty.<br>2.The indexSet length is bigger than 500.<br>3.The max value of indexSet is equal or bigger than the fetch result length.<br>4.The min value of indexSet is less than 0. |

<a id="isafterlast"></a>
## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the cursor is in the last row of the result set.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FetchResult-isAfterLast(): boolean--><!--Device-FetchResult-isAfterLast(): boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** is returned if the cursor is in the last row of the result set; **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

