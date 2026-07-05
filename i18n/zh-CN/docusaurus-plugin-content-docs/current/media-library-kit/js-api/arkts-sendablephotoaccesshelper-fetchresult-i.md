# FetchResult

Provides APIs to manage the file retrieval result.

**继承实现关系：** FetchResult继承自：lang.ISendable。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## close

```TypeScript
close(): void
```

Closes this FetchFileResult instance to invalidate it. After this instance is closed, the APIs in this instance cannot be invoked.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

## getAllObjects

```TypeScript
getAllObjects(): Promise<Array<T>>
```

Obtains all the file assets in the result set. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;T>> | Returns all the objects |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

## getCount

```TypeScript
getCount(): number
```

Obtains the total number of files in the result set.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Total number of objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

## getFirstObject

```TypeScript
getFirstObject(): Promise<T>
```

Obtains the first asset in the result set. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the first object in the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

## getLastObject

```TypeScript
getLastObject(): Promise<T>
```

Obtains the last asset in the result set. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the last object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

## getNextObject

```TypeScript
getNextObject(): Promise<T>
```

Obtains the next asset in the result set. This API uses a promise to return the result. Before using this API, you must use isAfterLast() to check whether the current position is the end of <br>the result set.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the next object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

## getObjectByPosition

```TypeScript
getObjectByPosition(index: number): Promise<T>
```

Obtains the asset with the given index in the result set. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | Index of the asset to obtain. The value starts from 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Returns the object |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the cursor is in the last row of the result set.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the object is the last one in the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

