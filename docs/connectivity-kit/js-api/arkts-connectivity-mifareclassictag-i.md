# MifareClassicTag

Provides methods for accessing MifareClassic tag.

**Inheritance/Implementation:** MifareClassicTag extends [TagSession](arkts-connectivity-tagsession-i.md#tagsession)

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## authenticateSector

```TypeScript
authenticateSector(sectorIndex: number, key: number[], isKeyA: boolean): Promise<void>
```

Authenticates a sector with the key. Only successful authentication sector can be operated.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sectorIndex | number | Yes | Index of sector to authenticate. |
| key | number[] | Yes | The key(6-bytes) to authenticate. |
| isKeyA | boolean | Yes | KeyA flag. true means KeyA, otherwise KeyB. |

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

## authenticateSector

```TypeScript
authenticateSector(sectorIndex: number, key: number[], isKeyA: boolean, callback: AsyncCallback<void>): void
```

Authenticates a sector with the key. Only successful authentication sector can be operated.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sectorIndex | number | Yes | Index of sector to authenticate. |
| key | number[] | Yes | The key(6-bytes) to authenticate. |
| isKeyA | boolean | Yes | KeyA flag. true means KeyA, otherwise KeyB. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

## decrementBlock

```TypeScript
decrementBlock(blockIndex: number, value: number): Promise<void>
```

Decreases the contents of a block, and stores the result in the internal transfer buffer.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to decrease. |
| value | number | Yes | The value to decrease, non-negative. |

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

## decrementBlock

```TypeScript
decrementBlock(blockIndex: number, value: number, callback: AsyncCallback<void>): void
```

Decreases the contents of a block, and stores the result in the internal transfer buffer.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to decrease. |
| value | number | Yes | The value to decrease, non-negative. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

## getBlockCountInSector

```TypeScript
getBlockCountInSector(sectorIndex: number): number
```

Gets the number of blocks in the sector.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sectorIndex | number | Yes | The index of sector. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the number of blocks. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

## getBlockIndex

```TypeScript
getBlockIndex(sectorIndex: number): number
```

Gets the first block of the specific sector.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sectorIndex | number | Yes | The index of sector. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns index of first block in the sector. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

## getSectorCount

```TypeScript
getSectorCount(): number
```

Gets the number of sectors in MifareClassic tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the number of sectors. |

## getSectorIndex

```TypeScript
getSectorIndex(blockIndex: number): number
```

Gets the sector index, that the sector contains the specific block.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the sector index. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

## getTagSize

```TypeScript
getTagSize(): number
```

Gets size of the tag in bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the size of the tag. |

## getType

```TypeScript
getType(): tag.MifareClassicType
```

Gets the type of the MifareClassic tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| tag.MifareClassicType | Returns type of MifareClassic tag. |

## incrementBlock

```TypeScript
incrementBlock(blockIndex: number, value: number): Promise<void>
```

Increments the contents of a block, and stores the result in the internal transfer buffer.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to increment. |
| value | number | Yes | The value to increment, non-negative. |

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

## incrementBlock

```TypeScript
incrementBlock(blockIndex: number, value: number, callback: AsyncCallback<void>): void
```

Increments the contents of a block, and stores the result in the internal transfer buffer.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to increment. |
| value | number | Yes | The value to increment, non-negative. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

## isEmulatedTag

```TypeScript
isEmulatedTag(): boolean
```

Checks if the tag is emulated or not.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if tag is emulated, otherwise false. |

## readSingleBlock

```TypeScript
readSingleBlock(blockIndex: number): Promise<number[]>
```

Reads a block, one block size is 16 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]&gt; | Returns the block data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

## readSingleBlock

```TypeScript
readSingleBlock(blockIndex: number, callback: AsyncCallback<number[]>): void
```

Reads a block, one block size is 16 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to read. |
| callback | AsyncCallback&lt;number[]&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

## restoreFromBlock

```TypeScript
restoreFromBlock(blockIndex: number): Promise<void>
```

Moves the contents of a block into the internal transfer buffer.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of value block to be moved from. |

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

## restoreFromBlock

```TypeScript
restoreFromBlock(blockIndex: number, callback: AsyncCallback<void>): void
```

Moves the contents of a block into the internal transfer buffer.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of value block to be moved from. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

## transferToBlock

```TypeScript
transferToBlock(blockIndex: number): Promise<void>
```

Writes the contents of the internal transfer buffer to a value block.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of value block to be written. |

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

## transferToBlock

```TypeScript
transferToBlock(blockIndex: number, callback: AsyncCallback<void>): void
```

Writes the contents of the internal transfer buffer to a value block.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of value block to be written. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

## writeSingleBlock

```TypeScript
writeSingleBlock(blockIndex: number, data: number[]): Promise<void>
```

Writes a block, one block size is 16 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to write. |
| data | number[] | Yes | The block data to write. |

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

## writeSingleBlock

```TypeScript
writeSingleBlock(blockIndex: number, data: number[], callback: AsyncCallback<void>): void
```

Writes a block, one block size is 16 bytes.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blockIndex | number | Yes | The index of block to write. |
| data | number[] | Yes | The block data to write. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The Tag I/O operation failed. |

