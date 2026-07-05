# TagSession

Controls tag read and write. <p>Classes for different types of tags inherit from this abstract class to control connections to tags, read data from tags, and write data to tags.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## connect

```TypeScript
connect(): void
```

Connects to a tag. Must be called before data is read from or written to the tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## connectTag

```TypeScript
connectTag(): boolean
```

Connects to a tag. <p>This method must be called before data is read from or written to the tag.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#connect

**Required permissions:** 

 ohos.permission.NFC_TAG

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

**Substitute:** tagSession.TagSession#getMaxTransmitSize

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the maximum length of the data to be sent to the tag. |

## getMaxTransmitSize

```TypeScript
getMaxTransmitSize(): int
```

Obtains the maximum length of data that can be sent to a tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the maximum length of the data to be sent to the tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## getSendDataTimeout

```TypeScript
getSendDataTimeout(): number
```

Queries the timeout duration (ms) for sending data to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#getTimeout

**Required permissions:** 

 ohos.permission.NFC_TAG

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

**Substitute:** ohos.nfc.tag/tag#getTagInfo

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| tag.TagInfo | Returns the tag information, which is a {@link TagInfo} object. |

## getTimeout

```TypeScript
getTimeout(): int
```

Obtains the timeout duration (ms) for sending data to a tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the timeout duration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## isConnected

```TypeScript
isConnected(): boolean
```

Checks whether a connection has been set up with a tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if tag connected, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |

## isTagConnected

```TypeScript
isTagConnected(): boolean
```

Checks whether a connection has been set up with a tag.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#isConnected

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if a connection has been set up with the tag;  returns {@code false} otherwise. |

## reset

```TypeScript
reset(): void
```

Resets a connection with a tag and restores the default timeout duration for writing data to the tag.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#resetConnection

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

## resetConnection

```TypeScript
resetConnection(): void
```

Resets a connection with a tag and restores the default timeout duration for writing data to the tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## sendData

```TypeScript
sendData(data: number[]): Promise<number[]>
```

Writes data to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#transmit

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the data to be written to the tag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]> | Returns bytes received in response. Or bytes with a length of 0 if the  data fails to be written to the tag. |

## sendData

```TypeScript
sendData(data: number[], callback: AsyncCallback<number[]>): void
```

Writes data to a tag.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#transmit

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | Indicates the data to be written to the tag. |
| callback | AsyncCallback&lt;number[]> | Yes | The callback.  data fails to be written to the tag. |

## setSendDataTimeout

```TypeScript
setSendDataTimeout(timeout: number): boolean
```

Sets the timeout duration (ms) for sending data to a tag. <p>If data is not sent to the tag within the duration, data sending fails.

**Since:** 7

**Deprecated since:** 9

**Substitute:** tagSession.TagSession#setTimeout

**Required permissions:** 

 ohos.permission.NFC_TAG

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
setTimeout(timeout: int): void
```

Sets the timeout duration (ms) for sending data to a tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | int | Yes | Indicates the timeout duration to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## transmit

```TypeScript
transmit(data: int[]): Promise<int[]>
```

Writes data to a tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | int[] | Yes | Indicates the data to be written to the tag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int[]> | Returns bytes received in response. Or bytes with a length of 0 if the  data fails to be written to the tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## transmit

```TypeScript
transmit(data: int[], callback: AsyncCallback<int[]>): void
```

Writes data to a tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | int[] | Yes | Indicates the data to be written to the tag. |
| callback | AsyncCallback&lt;int[]> | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

