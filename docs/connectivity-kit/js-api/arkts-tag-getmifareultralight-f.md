# getMifareUltralight

## getMifareUltralight

```TypeScript
function getMifareUltralight(tagInfo: TagInfo): MifareUltralightTag
```

Obtains an {@link MifareUltralightTag} object based on the tag information. During tag reading, if the tag supports the MIFARE Ultralight technology, an {@link MifareUltralightTag} object will be created based on the tag information.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | TagInfo | Yes | Indicates the dispatched tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| MifareUltralightTag | The {@link MifareUltralightTag} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

