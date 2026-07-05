# FetchResult

Provides APIs to manage the file retrieval result.

**Inheritance:** FetchResultextends: lang.ISendable.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## close

```TypeScript
close(): void
```

Closes this FetchFileResult instance to invalidate it. After this instance is closed, the APIs in this instance cannot be invoked.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

## getAllObjects

```TypeScript
getAllObjects(): Promise<Array<T>>
```

Obtains all the file assets in the result set. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T>> | Returns all the objects |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

## getCount

```TypeScript
getCount(): number
```

Obtains the total number of files in the result set.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

## getFirstObject

```TypeScript
getFirstObject(): Promise<T>
```

Obtains the first asset in the result set. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the first object in the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

## getLastObject

```TypeScript
getLastObject(): Promise<T>
```

Obtains the last asset in the result set. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the last object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

## getNextObject

```TypeScript
getNextObject(): Promise<T>
```

Obtains the next asset in the result set. This API uses a promise to return the result. Before using this API, you must use isAfterLast() to check whether the current position is the end of <br>the result set.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the next object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

## getObjectByPosition

```TypeScript
getObjectByPosition(index: number): Promise<T>
```

Obtains the asset with the given index in the result set. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the asset to obtain. The value starts from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | Returns the object |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the cursor is in the last row of the result set.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the object is the last one in the fetch result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14000011 | Internal system error |

