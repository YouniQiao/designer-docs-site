# IsoDepTag

Provides methods for accessing IsoDep tag.

**Inheritance:** IsoDepTagextends: TagSession.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## getHiLayerResponse

```TypeScript
getHiLayerResponse(): int[]
```

Gets IsoDep HiLayer Response bytes of the tag, which is based on NfcB RF technology. It could be null if not based on NfcB.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| int[] | Returns HiLayer Response bytes, the length could be 0. |

## getHistoricalBytes

```TypeScript
getHistoricalBytes(): int[]
```

Gets IsoDep Historical bytes of the tag, which is based on NfcA RF technology. It could be null if not based on NfcA.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| int[] | Returns the Historical bytes, the length could be 0. |

## isExtendedApduSupported

```TypeScript
isExtendedApduSupported(): Promise<boolean>
```

Checks if extended apdu length supported or not.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns true if extended apdu length supported, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## isExtendedApduSupported

```TypeScript
isExtendedApduSupported(callback: AsyncCallback<boolean>): void
```

Checks if extended apdu length supported or not.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

