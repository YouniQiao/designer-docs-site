# createData

## createData

```TypeScript
function createData(mimeType: string, value: ValueType): PasteData
```

Creates a **PasteData** object of the specified type.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | Type of PasteData. The value can be a predefined MIME type listed in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants), including HTML, WANT,  plain text, URI, and pixel map, or a custom type. The value of mimeType cannot exceed 1024 bytes. |
| value | ValueType | Yes | Content of PasteData. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteData | PasteData object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

## createData

```TypeScript
function createData(data: Record<string, ValueType>): PasteData
```

Creates a **PasteData** object that contains multiple types of data.

**Since:** 14

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, ValueType> | Yes | The key of Record can be the MIME type corresponding to the  PasteData, including HTML, WANT, plain text, URI, and PixelMap defined in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants). Alternatively,  the key could be a custom type, whose parameter, the length of mimeType,  cannot exceed 1024 bytes. The value of Record is the data corresponding to the type specified  in the key. The first type specified by the key-value in Record is used as the default type  of the first PasteDataRecord in the PasteData object. Data of non-default types can be read only by  using the [getData]pasteboard.PasteDataRecord.getData(type: string) API. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteData | PasteData object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

