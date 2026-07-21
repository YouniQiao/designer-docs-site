# MifareUltralightTag

Provides methods for accessing MifareUltralight tag.

**Inheritance/Implementation:** MifareUltralightTag extends [TagSession](arkts-connectivity-tagsession-tagsession-i.md)

**Since:** 12

<!--Device-unnamed-export interface MifareUltralightTag extends TagSession--><!--Device-unnamed-export interface MifareUltralightTag extends TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

<a id="gettype"></a>
## getType

```TypeScript
getType(): tag.MifareUltralightType
```

Gets the type of the MifareUltralight tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MifareUltralightTag-getType(): tag.MifareUltralightType--><!--Device-MifareUltralightTag-getType(): tag.MifareUltralightType-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| tag.MifareUltralightType | Returns the type of MifareUltralight tag. |

<a id="readmultiplepages"></a>
## readMultiplePages

```TypeScript
readMultiplePages(pageIndex: number): Promise<number[]>
```

Reads 4 pages, total is 16 bytes. Page size is 4 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MifareUltralightTag-readMultiplePages(pageIndex: int): Promise<int[]>--><!--Device-MifareUltralightTag-readMultiplePages(pageIndex: int): Promise<int[]>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageIndex | number | Yes | The index of page to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]&gt; | Returns 4 pages data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

<a id="readmultiplepages-1"></a>
## readMultiplePages

```TypeScript
readMultiplePages(pageIndex: number, callback: AsyncCallback<number[]>): void
```

Reads 4 pages, total is 16 bytes. Page size is 4 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MifareUltralightTag-readMultiplePages(pageIndex: int, callback: AsyncCallback<int[]>): void--><!--Device-MifareUltralightTag-readMultiplePages(pageIndex: int, callback: AsyncCallback<int[]>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageIndex | number | Yes | The index of page to read. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number[]&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

<a id="writesinglepage"></a>
## writeSinglePage

```TypeScript
writeSinglePage(pageIndex: number, data: number[]): Promise<void>
```

Writes a page, total 4 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MifareUltralightTag-writeSinglePage(pageIndex: int, data: int[]): Promise<void>--><!--Device-MifareUltralightTag-writeSinglePage(pageIndex: int, data: int[]): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageIndex | number | Yes | The index of page to write. |
| data | number[] | Yes | The page data to write. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

<a id="writesinglepage-1"></a>
## writeSinglePage

```TypeScript
writeSinglePage(pageIndex: number, data: number[], callback: AsyncCallback<void>): void
```

Writes a page, total 4 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MifareUltralightTag-writeSinglePage(pageIndex: int, data: int[], callback: AsyncCallback<void>): void--><!--Device-MifareUltralightTag-writeSinglePage(pageIndex: int, data: int[], callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageIndex | number | Yes | The index of page to write. |
| data | number[] | Yes | The page data to write. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

