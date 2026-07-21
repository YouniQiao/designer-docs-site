# IsoDepTag

Provides methods for accessing IsoDep tag.

**Inheritance/Implementation:** IsoDepTag extends [TagSession](arkts-connectivity-tagsession-tagsession-i.md)

**Since:** 12

<!--Device-unnamed-export interface IsoDepTag extends TagSession--><!--Device-unnamed-export interface IsoDepTag extends TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

<a id="gethilayerresponse"></a>
## getHiLayerResponse

```TypeScript
getHiLayerResponse(): number[]
```

Gets IsoDep HiLayer Response bytes of the tag, which is based on NfcB RF technology.It could be null if not based on NfcB.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IsoDepTag-getHiLayerResponse(): int[]--><!--Device-IsoDepTag-getHiLayerResponse(): int[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns HiLayer Response bytes, the length could be 0. |

<a id="gethistoricalbytes"></a>
## getHistoricalBytes

```TypeScript
getHistoricalBytes(): number[]
```

Gets IsoDep Historical bytes of the tag, which is based on NfcA RF technology.It could be null if not based on NfcA.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IsoDepTag-getHistoricalBytes(): int[]--><!--Device-IsoDepTag-getHistoricalBytes(): int[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the Historical bytes, the length could be 0. |

<a id="isextendedapdusupported"></a>
## isExtendedApduSupported

```TypeScript
isExtendedApduSupported(): Promise<boolean>
```

Checks if extended apdu length supported or not.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IsoDepTag-isExtendedApduSupported(): Promise<boolean>--><!--Device-IsoDepTag-isExtendedApduSupported(): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns true if extended apdu length supported, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

<a id="isextendedapdusupported-1"></a>
## isExtendedApduSupported

```TypeScript
isExtendedApduSupported(callback: AsyncCallback<boolean>): void
```

Checks if extended apdu length supported or not.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IsoDepTag-isExtendedApduSupported(callback: AsyncCallback<boolean>): void--><!--Device-IsoDepTag-isExtendedApduSupported(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

