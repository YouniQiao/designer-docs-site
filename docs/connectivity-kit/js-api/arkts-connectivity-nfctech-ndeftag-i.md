# NdefTag

Provides methods for accessing NDEF tag.

**Inheritance/Implementation:** NdefTag extends [TagSession](arkts-connectivity-tagsession-tagsession-i.md)

**Since:** 12

<!--Device-unnamed-export interface NdefTag extends TagSession--><!--Device-unnamed-export interface NdefTag extends TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

<a id="cansetreadonly"></a>
## canSetReadOnly

```TypeScript
canSetReadOnly(): boolean
```

Checks NDEF tag can be set read-only.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-canSetReadOnly(): boolean--><!--Device-NdefTag-canSetReadOnly(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the tag can be set readonly, otherwise returns false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

<a id="getndefmessage"></a>
## getNdefMessage

```TypeScript
getNdefMessage(): NdefMessage
```

Gets the NDEF message that was read from NDEF tag when tag discovery.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-getNdefMessage(): NdefMessage--><!--Device-NdefTag-getNdefMessage(): NdefMessage-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| [NdefMessage](arkts-connectivity-nfctech-ndefmessage-i.md) | The instance of NdefMessage. |

<a id="getndeftagtype"></a>
## getNdefTagType

```TypeScript
getNdefTagType(): tag.NfcForumType
```

Gets the type of NDEF tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-getNdefTagType(): tag.NfcForumType--><!--Device-NdefTag-getNdefTagType(): tag.NfcForumType-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| tag.NfcForumType | The type of NDEF tag. |

<a id="getndeftagtypestring"></a>
## getNdefTagTypeString

```TypeScript
getNdefTagTypeString(type: tag.NfcForumType): string
```

Converts the NFC forum type into string defined in NFC forum.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-getNdefTagTypeString(type: tag.NfcForumType): string--><!--Device-NdefTag-getNdefTagTypeString(type: tag.NfcForumType): string-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | tag.NfcForumType | Yes | NFC forum type of NDEF tag. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The NFC forum string type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

<a id="isndefwritable"></a>
## isNdefWritable

```TypeScript
isNdefWritable(): boolean
```

Checks if NDEF tag is writable.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-isNdefWritable(): boolean--><!--Device-NdefTag-isNdefWritable(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the tag is writable, otherwise returns false. |

<a id="readndef"></a>
## readNdef

```TypeScript
readNdef(): Promise<NdefMessage>
```

Reads NDEF message on this tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-readNdef(): Promise<NdefMessage>--><!--Device-NdefTag-readNdef(): Promise<NdefMessage>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NdefMessage&gt; | The NDEF message in tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

<a id="readndef-1"></a>
## readNdef

```TypeScript
readNdef(callback: AsyncCallback<NdefMessage>): void
```

Reads NDEF message on this tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-readNdef(callback: AsyncCallback<NdefMessage>): void--><!--Device-NdefTag-readNdef(callback: AsyncCallback<NdefMessage>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NdefMessage&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

<a id="setreadonly"></a>
## setReadOnly

```TypeScript
setReadOnly(): Promise<void>
```

Sets the NDEF tag read-only.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-setReadOnly(): Promise<void>--><!--Device-NdefTag-setReadOnly(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

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

<a id="setreadonly-1"></a>
## setReadOnly

```TypeScript
setReadOnly(callback: AsyncCallback<void>): void
```

Sets the NDEF tag read-only.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-setReadOnly(callback: AsyncCallback<void>): void--><!--Device-NdefTag-setReadOnly(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

<a id="writendef"></a>
## writeNdef

```TypeScript
writeNdef(msg: NdefMessage): Promise<void>
```

Writes NDEF message into this tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-writeNdef(msg: NdefMessage): Promise<void>--><!--Device-NdefTag-writeNdef(msg: NdefMessage): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | [NdefMessage](arkts-connectivity-nfctech-ndefmessage-i.md) | Yes | The NDEF message to be written. |

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

<a id="writendef-1"></a>
## writeNdef

```TypeScript
writeNdef(msg: NdefMessage, callback: AsyncCallback<void>): void
```

Writes NDEF message into this tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefTag-writeNdef(msg: NdefMessage, callback: AsyncCallback<void>): void--><!--Device-NdefTag-writeNdef(msg: NdefMessage, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | [NdefMessage](arkts-connectivity-nfctech-ndefmessage-i.md) | Yes | The NDEF message to be written. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

