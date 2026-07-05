# createRecord

## createRecord

```TypeScript
function createRecord(mimeType: string, value: ValueType): PasteDataRecord
```

Creates a **PasteDataRecord** object of the specified type.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | The type of custom data. The value can be a predefined MIME type listed in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants), including HTML, WANT,  plain text, URI, and pixel map, or a custom type. The value of mimeType cannot exceed 1024 bytes. |
| value | ValueType | Yes | Data content of the specified type. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteDataRecord | A new paste data record of a specified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

