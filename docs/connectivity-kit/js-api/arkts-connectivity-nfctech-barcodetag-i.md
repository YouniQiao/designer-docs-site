# BarcodeTag

Provides methods for accessing Barcode tag.

**Inheritance/Implementation:** BarcodeTag extends [TagSession](arkts-connectivity-tagsession-tagsession-i.md)

**Since:** 18

<!--Device-unnamed-export interface BarcodeTag extends TagSession--><!--Device-unnamed-export interface BarcodeTag extends TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

## getBarcode

```TypeScript
getBarcode(): Promise<ArrayBuffer>
```

Returns the barcode of a Barcode tag.

**Since:** 18

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BarcodeTag-getBarcode(): Promise<ArrayBuffer>--><!--Device-BarcodeTag-getBarcode(): Promise<ArrayBuffer>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ArrayBuffer> | The barcode of tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

