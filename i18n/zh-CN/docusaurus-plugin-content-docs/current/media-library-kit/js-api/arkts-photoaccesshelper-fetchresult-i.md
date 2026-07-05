# FetchResult

Provides APIs to manage the file retrieval result.

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## close

```TypeScript
close(): void
```

Releases the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## contains

```TypeScript
contains(object: T): Promise<boolean>
```

Whether an object is in the fetch result.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| object | T | 是 | The object to be found. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns whether the object is in the fetch result |

## getAllObjects

```TypeScript
getAllObjects(callback: AsyncCallback<Array<T>>): void
```

Obtains all objects in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;T>> | 是 | Returns all the objects |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAllObjects

```TypeScript
getAllObjects(): Promise<Array<T>>
```

Obtains all objects in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;T>> | Returns all the objects |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getCount

```TypeScript
getCount(): int
```

Obtains the total number of objects in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Total number of objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getFirstObject

```TypeScript
getFirstObject(callback: AsyncCallback<T>): void
```

Obtains the first object in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T> | 是 | Returns the first object in the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getFirstObject

```TypeScript
getFirstObject(): Promise<T>
```

Obtains the first object in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the first object in the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getIndex

```TypeScript
getIndex(object: T): Promise<int>
```

Gets an object index in the fetch result, returns-1 when object is not in the fetch result.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| object | T | 是 | Whose index to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Returns the object index in the fetch result. |

## getLastObject

```TypeScript
getLastObject(callback: AsyncCallback<T>): void
```

Obtains the last object in the fetch result

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T> | 是 | Returns the last object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getLastObject

```TypeScript
getLastObject(): Promise<T>
```

Obtains the last object in the fetch result

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the last object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getNextObject

```TypeScript
getNextObject(callback: AsyncCallback<T>): void
```

Obtains the next object in the fetch result. Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set. in the fetch result. This method only works when the current position is not the last row.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T> | 是 | Returns the next object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getNextObject

```TypeScript
getNextObject(): Promise<T>
```

Obtains the next object in the fetch result. Before calling this method, you must use isAfterLast() to check whether the current position is the last row in the fetch result. This method only works when the current position is not the last row.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the next object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getObjectByPosition

```TypeScript
getObjectByPosition(index: int, callback: AsyncCallback<T>): void
```

Obtains the object with the specified index in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Index of the file asset to obtain. The value starts from 0. |
| callback | AsyncCallback&lt;T> | 是 | Callback used to return the file asset obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getObjectByPosition

```TypeScript
getObjectByPosition(index: int): Promise<T>
```

Obtains the object with the specified index in the fetch result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Index of the file asset to obtain. The value starts from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getObjectsByIndexSet

```TypeScript
getObjectsByIndexSet(indexSet: int[]): Promise<T[]>
```

Obtains the objects in the fetch result by index set.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| indexSet | int[] | 是 | Index set of the assets to obtain. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T[]> | Returns the objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23800151 | The scenario parameter verification fails. Possible causes:  1.The indexSet is null, undefined or empty.  2.The indexSet length is bigger than 500.  3.The max value of indexSet is equal or bigger than the fetch result length.  4.The min value of indexSet is less than 0. |

## getRangeObjects

```TypeScript
getRangeObjects(index: int, offset: int): Promise<T[]>
```

Obtains the objects in the fetch result in segments.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Index of the asset to obtain. |
| offset | int | 是 | Offset of the asset to obtain. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T[]> | Returns the objects in segments |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 23800151 | The scenario parameter verification fails.  Possible causes: index or offset validity check failed. |
| 23800301 | Internal system error. You are advised to retry and check the logs.  Possible causes: 1. The database is corrupted. 2. The file system is abnormal. |

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the result set points to the last row. You need to check whether the object is the last one before calling getNextObject.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the object is the last one in the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

