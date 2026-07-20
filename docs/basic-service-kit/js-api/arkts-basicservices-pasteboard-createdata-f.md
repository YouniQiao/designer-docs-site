# createData

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## createData

```TypeScript
function createData(mimeType: string, value: ValueType): PasteData
```

Creates a **PasteData** object of the specified type.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-pasteboard-function createData(mimeType: string, value: ValueType): PasteData--><!--Device-pasteboard-function createData(mimeType: string, value: ValueType): PasteData-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | Type of PasteData. The value can be a predefined MIME type listed in [Constants](../../../../reference/apis-basic-services-kit/js-apis-pasteboard.md#constants), including HTML, WANT,plain text, URI, and pixel map, or a custom type. The value of **mimeType** cannot exceed 1024 bytes. |
| value | [ValueType](arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Content of PasteData. |

**Return value:**

| Type | Description |
| --- | --- |
| [PasteData](arkts-basicservices-pasteboard-pastedata-i.md) | **PasteData** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types;3. Parameter verification failed. |


## createData

```TypeScript
function createData(data: Record<string, ValueType>): PasteData
```

Creates a **PasteData** object that contains multiple types of data.

**Since:** 14

<!--Device-pasteboard-function createData(data: Record<string, ValueType>): PasteData--><!--Device-pasteboard-function createData(data: Record<string, ValueType>): PasteData-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, ValueType> | Yes | The key of **Record** can be the MIME type corresponding to the PasteData, including HTML, WANT, plain text, URI, and PixelMap defined in [Constants](../../../../reference/apis-basic-services-kit/js-apis-pasteboard.md#constants). Alternatively,the key could be a custom type, whose parameter, the length of **mimeType**,cannot exceed 1024 bytes. The value of **Record** is the data corresponding to the type specified in the key. The first type specified by the key-value in **Record** is used as the default type of the first **PasteDataRecord** in the **PasteData** object. Data of non-default types can be read only by using the [getData](arkts-basicservices-pasteboard-pastedatarecord-i.md#getdata-1) API. |

**Return value:**

| Type | Description |
| --- | --- |
| [PasteData](arkts-basicservices-pasteboard-pastedata-i.md) | **PasteData** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types;3. Parameter verification failed. |

