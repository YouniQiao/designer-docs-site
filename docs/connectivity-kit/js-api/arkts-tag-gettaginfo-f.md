# getTagInfo

## getTagInfo

```TypeScript
function getTagInfo(want: Want): TagInfo
```

Parse a {@link TagInfo} object from Want.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | The want object that contains the values of TagInfo. |

**Return value:**

| Type | Description |
| --- | --- |
| TagInfo | The {@link TagInfo} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

