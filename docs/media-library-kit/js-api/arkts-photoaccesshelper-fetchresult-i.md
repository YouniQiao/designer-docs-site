# FetchResult

Provides APIs to manage the file retrieval result.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## close

```TypeScript
close(): void
```

Releases the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## contains

```TypeScript
contains(object: T): Promise<boolean>
```

Whether an object is in the fetch result.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | T | Yes | The object to be found. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns whether the object is in the fetch result |

## getAllObjects

```TypeScript
getAllObjects(callback: AsyncCallback<Array<T>>): void
```

Obtains all objects in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;T>> | Yes | Returns all the objects |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAllObjects

```TypeScript
getAllObjects(): Promise<Array<T>>
```

Obtains all objects in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T>> | Returns all the objects |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getCount

```TypeScript
getCount(): int
```

Obtains the total number of objects in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Total number of objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getFirstObject

```TypeScript
getFirstObject(callback: AsyncCallback<T>): void
```

Obtains the first object in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T> | Yes | Returns the first object in the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getFirstObject

```TypeScript
getFirstObject(): Promise<T>
```

Obtains the first object in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the first object in the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getIndex

```TypeScript
getIndex(object: T): Promise<int>
```

Gets an object index in the fetch result, returns-1 when object is not in the fetch result.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | T | Yes | Whose index to get. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the object index in the fetch result. |

## getLastObject

```TypeScript
getLastObject(callback: AsyncCallback<T>): void
```

Obtains the last object in the fetch result

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T> | Yes | Returns the last object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getLastObject

```TypeScript
getLastObject(): Promise<T>
```

Obtains the last object in the fetch result

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the last object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getNextObject

```TypeScript
getNextObject(callback: AsyncCallback<T>): void
```

Obtains the next object in the fetch result. Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set. in the fetch result. This method only works when the current position is not the last row.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T> | Yes | Returns the next object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getNextObject

```TypeScript
getNextObject(): Promise<T>
```

Obtains the next object in the fetch result. Before calling this method, you must use isAfterLast() to check whether the current position is the last row in the fetch result. This method only works when the current position is not the last row.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the next object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getObjectByPosition

```TypeScript
getObjectByPosition(index: int, callback: AsyncCallback<T>): void
```

Obtains the object with the specified index in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | Index of the file asset to obtain. The value starts from 0. |
| callback | AsyncCallback&lt;T> | Yes | Callback used to return the file asset obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getObjectByPosition

```TypeScript
getObjectByPosition(index: int): Promise<T>
```

Obtains the object with the specified index in the fetch result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | Index of the file asset to obtain. The value starts from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getObjectsByIndexSet

```TypeScript
getObjectsByIndexSet(indexSet: int[]): Promise<T[]>
```

Obtains the objects in the fetch result by index set.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indexSet | int[] | Yes | Index set of the assets to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T[]> | Returns the objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800151 | The scenario parameter verification fails. Possible causes:  1.The indexSet is null, undefined or empty.  2.The indexSet length is bigger than 500.  3.The max value of indexSet is equal or bigger than the fetch result length.  4.The min value of indexSet is less than 0. |

## getRangeObjects

```TypeScript
getRangeObjects(index: int, offset: int): Promise<T[]>
```

Obtains the objects in the fetch result in segments.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | Index of the asset to obtain. |
| offset | int | Yes | Offset of the asset to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T[]> | Returns the objects in segments |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 23800151 | The scenario parameter verification fails.  Possible causes: index or offset validity check failed. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. |

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the result set points to the last row. You need to check whether the object is the last one before calling getNextObject.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the object is the last one in the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

