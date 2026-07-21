# NdefMessage

Provides methods for Message of NDEF.

**Since:** 12

<!--Device-unnamed-export interface NdefMessage--><!--Device-unnamed-export interface NdefMessage-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

<a id="getndefrecords"></a>
## getNdefRecords

```TypeScript
getNdefRecords(): tag.NdefRecord[]
```

Obtains all records of an NDEF message.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NdefMessage-getNdefRecords(): tag.NdefRecord[]--><!--Device-NdefMessage-getNdefRecords(): tag.NdefRecord[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| tag.NdefRecord[] | Records the list of NDEF records. |

