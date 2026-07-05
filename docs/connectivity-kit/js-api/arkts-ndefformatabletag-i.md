# NdefFormatableTag

Provides methods for accessing NdefFormatable tag.

**Inheritance:** NdefFormatableTagextends: TagSession.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## format

```TypeScript
format(message: NdefMessage): Promise<void>
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | NdefMessage | Yes | NDEF message to write while format. It can be null, then only format the tag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## format

```TypeScript
format(message: NdefMessage, callback: AsyncCallback<void>): void
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | NdefMessage | Yes | NDEF message to write while format. It can be null, then only format the tag. |
| callback | AsyncCallback&lt;void> | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## formatReadOnly

```TypeScript
formatReadOnly(message: NdefMessage): Promise<void>
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag, then sets the tag readonly.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | NdefMessage | Yes | NDEF message to write while format. It can be null, then only format the tag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## formatReadOnly

```TypeScript
formatReadOnly(message: NdefMessage, callback: AsyncCallback<void>): void
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag, then sets the tag readonly.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | NdefMessage | Yes | NDEF message to write while format. It can be null, then only format the tag. |
| callback | AsyncCallback&lt;void> | Yes | The callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

