# TagSession

Controls tag read and write.<p>Classes for different types of tags inherit from this abstract class to control connections to tags, read data from tags, and write data to tags.

**Since:** 12

<!--Device-unnamed-export interface TagSession--><!--Device-unnamed-export interface TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

## connect

```TypeScript
connect(): void
```

Connects to a tag. Must be called before data is read from or written to the tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-connect(): void--><!--Device-TagSession-connect(): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

## connectTag

```TypeScript
connectTag(): boolean
```

Connects to a tag.<p>This method must be called before data is read from or written to the tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** connect

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-connectTag(): boolean--><!--Device-TagSession-connectTag(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the connection is set up; returns {@code false} otherwise. |

## getMaxSendLength

```TypeScript
getMaxSendLength(): number
```

Queries the maximum length of data that can be sent to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMaxTransmitSize

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-getMaxSendLength(): number--><!--Device-TagSession-getMaxSendLength(): number-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the maximum length of the data to be sent to the tag. |

## getMaxTransmitSize

```TypeScript
getMaxTransmitSize(): number
```

Obtains the maximum length of data that can be sent to a tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-getMaxTransmitSize(): int--><!--Device-TagSession-getMaxTransmitSize(): int-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the maximum length of the data to be sent to the tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

## getSendDataTimeout

```TypeScript
getSendDataTimeout(): number
```

Queries the timeout duration (ms) for sending data to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getTimeout

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-getSendDataTimeout(): number--><!--Device-TagSession-getSendDataTimeout(): number-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the timeout duration. |

## getTagInfo

```TypeScript
getTagInfo(): tag.TagInfo
```

Obtains the tag information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getTagInfo

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-getTagInfo(): tag.TagInfo--><!--Device-TagSession-getTagInfo(): tag.TagInfo-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| tag.TagInfo | Returns the tag information, which is a {@link TagInfo} object. |

## getTimeout

```TypeScript
getTimeout(): number
```

Obtains the timeout duration (ms) for sending data to a tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-getTimeout(): int--><!--Device-TagSession-getTimeout(): int-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the timeout duration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

## isConnected

```TypeScript
isConnected(): boolean
```

Checks whether a connection has been set up with a tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-isConnected(): boolean--><!--Device-TagSession-isConnected(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if tag connected, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## isTagConnected

```TypeScript
isTagConnected(): boolean
```

Checks whether a connection has been set up with a tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isConnected

<!--Device-TagSession-isTagConnected(): boolean--><!--Device-TagSession-isTagConnected(): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if a connection has been set up with the tag;returns {@code false} otherwise. |

## reset

```TypeScript
reset(): void
```

Resets a connection with a tag and restores the default timeout duration for writing data to the tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** resetConnection

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-reset(): void--><!--Device-TagSession-reset(): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

## resetConnection

```TypeScript
resetConnection(): void
```

Resets a connection with a tag and restores the default timeout duration for writing data to the tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-resetConnection(): void--><!--Device-TagSession-resetConnection(): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

## sendData

```TypeScript
sendData(data: number[]): Promise<number[]>
```

Writes data to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** transmit

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-sendData(data: number[]): Promise<number[]>--><!--Device-TagSession-sendData(data: number[]): Promise<number[]>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the data to be written to the tag. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number[]> | Returns bytes received in response. Or bytes with a length of 0 if the data fails to be written to the tag. |

## sendData

```TypeScript
sendData(data: number[], callback: AsyncCallback<number[]>): void
```

Writes data to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** transmit

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-sendData(data: number[], callback: AsyncCallback<number[]>): void--><!--Device-TagSession-sendData(data: number[], callback: AsyncCallback<number[]>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the data to be written to the tag. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number[]> | Yes | The callback. |

## setSendDataTimeout

```TypeScript
setSendDataTimeout(timeout: number): boolean
```

Sets the timeout duration (ms) for sending data to a tag.<p>If data is not sent to the tag within the duration, data sending fails.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setTimeout

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-TagSession-setSendDataTimeout(timeout: number): boolean--><!--Device-TagSession-setSendDataTimeout(timeout: number): boolean-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Indicates the timeout duration to be set. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the setting is successful; returns {@code false} otherwise. |

## setTimeout

```TypeScript
setTimeout(timeout: number): void
```

Sets the timeout duration (ms) for sending data to a tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-setTimeout(timeout: int): void--><!--Device-TagSession-setTimeout(timeout: int): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Indicates the timeout duration to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

## transmit

```TypeScript
transmit(data: number[]): Promise<number[]>
```

Writes data to a tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-transmit(data: int[]): Promise<int[]>--><!--Device-TagSession-transmit(data: int[]): Promise<int[]>-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the data to be written to the tag. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number[]> | Returns bytes received in response. Or bytes with a length of 0 if the data fails to be written to the tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

## transmit

```TypeScript
transmit(data: number[], callback: AsyncCallback<number[]>): void
```

Writes data to a tag.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TagSession-transmit(data: int[], callback: AsyncCallback<int[]>): void--><!--Device-TagSession-transmit(data: int[], callback: AsyncCallback<int[]>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the data to be written to the tag. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number[]> | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100204](../errorcode-nfc.md#3100204-nfc-chip-io-exception) | The tag I/O operation failed. |

