# createData

## createData

```TypeScript
function createData(mimeType: string, value: ValueType): PasteData
```

Creates a **PasteData** object of the specified type.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | Type of PasteData. The value can be a predefined MIME type listed in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants), including HTML, WANT,  plain text, URI, and pixel map, or a custom type. The value of mimeType cannot exceed 1024 bytes. |
| value | ValueType | 是 | Content of PasteData. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | PasteData object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

## createData

```TypeScript
function createData(data: Record<string, ValueType>): PasteData
```

Creates a **PasteData** object that contains multiple types of data.

**起始版本：** 14

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, ValueType> | 是 | The key of Record can be the MIME type corresponding to the  PasteData, including HTML, WANT, plain text, URI, and PixelMap defined in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants). Alternatively,  the key could be a custom type, whose parameter, the length of mimeType,  cannot exceed 1024 bytes. The value of Record is the data corresponding to the type specified  in the key. The first type specified by the key-value in Record is used as the default type  of the first PasteDataRecord in the PasteData object. Data of non-default types can be read only by  using the [getData]pasteboard.PasteDataRecord.getData(type: string) API. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | PasteData object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

