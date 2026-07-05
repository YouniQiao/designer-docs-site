# MifareUltralightTag

Provides methods for accessing MifareUltralight tag.

**继承实现关系：** MifareUltralightTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getType

```TypeScript
getType(): tag.MifareUltralightType
```

Gets the type of the MifareUltralight tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| tag.MifareUltralightType | Returns the type of MifareUltralight tag. |

## readMultiplePages

```TypeScript
readMultiplePages(pageIndex: int): Promise<int[]>
```

Reads 4 pages, total is 16 bytes. Page size is 4 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | int | 是 | The index of page to read. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int[]> | Returns 4 pages data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## readMultiplePages

```TypeScript
readMultiplePages(pageIndex: int, callback: AsyncCallback<int[]>): void
```

Reads 4 pages, total is 16 bytes. Page size is 4 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | int | 是 | The index of page to read. |
| callback | AsyncCallback&lt;int[]> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## writeSinglePage

```TypeScript
writeSinglePage(pageIndex: int, data: int[]): Promise<void>
```

Writes a page, total 4 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | int | 是 | The index of page to write. |
| data | int[] | 是 | The page data to write. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## writeSinglePage

```TypeScript
writeSinglePage(pageIndex: int, data: int[], callback: AsyncCallback<void>): void
```

Writes a page, total 4 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | int | 是 | The index of page to write. |
| data | int[] | 是 | The page data to write. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

