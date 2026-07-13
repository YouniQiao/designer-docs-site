# tag

Provides methods to operate or manage NFC tag.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [ndef](arkts-connectivity-ndef-n.md) | Provides methods for accessing NDEF tag. |

### Functions

| Name | Description |
| --- | --- |
| [getNfcATag](arkts-connectivity-getnfcatag-f.md#getnfcatag-1) | Obtains an {@link NfcATag} object based on the tag information.&lt;p&gt;During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} objectwill be created based on the tag information. |
| [getNfcA](arkts-connectivity-getnfca-f.md#getnfca-1) | Obtains an {@link NfcATag} object based on the tag information.During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} objectwill be created based on the tag information. |
| [getNfcBTag](arkts-connectivity-getnfcbtag-f.md#getnfcbtag-1) | Obtains an {@link NfcBTag} object based on the tag information.&lt;p&gt;During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} objectwill be created based on the tag information. |
| [getNfcB](arkts-connectivity-getnfcb-f.md#getnfcb-1) | Obtains an {@link NfcBTag} object based on the tag information.During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} objectwill be created based on the tag information. |
| [getNfcFTag](arkts-connectivity-getnfcftag-f.md#getnfcftag-1) | Obtains an {@link NfcFTag} object based on the tag information.&lt;p&gt;During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} objectwill be created based on the tag information. |
| [getNfcF](arkts-connectivity-getnfcf-f.md#getnfcf-1) | Obtains an {@link NfcFTag} object based on the tag information.During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} objectwill be created based on the tag information. |
| [getNfcVTag](arkts-connectivity-getnfcvtag-f.md#getnfcvtag-1) | Obtains an {@link NfcVTag} object based on the tag information.&lt;p&gt;During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} objectwill be created based on the tag information. |
| [getNfcV](arkts-connectivity-getnfcv-f.md#getnfcv-1) | Obtains an {@link NfcVTag} object based on the tag information.During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} objectwill be created based on the tag information. |
| [getIsoDep](arkts-connectivity-getisodep-f.md#getisodep-1) | Obtains an {@link IsoDepTag} object based on the tag information.During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} objectwill be created based on the tag information. |
| [getNdef](arkts-connectivity-getndef-f.md#getndef-1) | Obtains an {@link NdefTag} object based on the tag information.During tag reading, if the tag supports the NDEF technology, an {@link NdefTag} objectwill be created based on the tag information. |
| [getMifareClassic](arkts-connectivity-getmifareclassic-f.md#getmifareclassic-1) | Obtains an {@link MifareClassicTag} object based on the tag information.During tag reading, if the tag supports the MIFARE Classic technology,an {@link MifareClassicTag} object will be created based on the tag information. |
| [getMifareUltralight](arkts-connectivity-getmifareultralight-f.md#getmifareultralight-1) | Obtains an {@link MifareUltralightTag} object based on the tag information.During tag reading, if the tag supports the MIFARE Ultralight technology,an {@link MifareUltralightTag} object will be created based on the tag information. |
| [getNdefFormatable](arkts-connectivity-getndefformatable-f.md#getndefformatable-1) | Obtains an {@link NdefFormatableTag} object based on the tag information.During tag reading, if the tag supports the NDEF Formatable technology,an {@link NdefFormatableTag} object will be created based on the tag information. |
| [getBarcodeTag](arkts-connectivity-getbarcodetag-f.md#getbarcodetag-1) | Obtains an {@link BarcodeTag} object based on the tag information.During tag reading, if the tag supports the NfcBarcode technology,an {@link BarcodeTag} object will be created. |
| [getTagInfo](arkts-connectivity-gettaginfo-f.md#gettaginfo-1) | Parse a {@link TagInfo} object from Want. |
| [registerForegroundDispatch](arkts-connectivity-registerforegrounddispatch-f.md#registerforegrounddispatch-1) | Register tag foreground dispatch. Dispatches to this application only if a tag discovered. |
| [unregisterForegroundDispatch](arkts-connectivity-unregisterforegrounddispatch-f.md#unregisterforegrounddispatch-1) | Unregister tag foreground dispatch. |
| [on](arkts-connectivity-on-f.md#on-1) | Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered. |
| [off](arkts-connectivity-off-f.md#off-1) | Disable foreground reader mode settings explicitly. |
| [on](arkts-connectivity-on-f.md#on-2) | Set reader mode enabled when the specific application is on foreground and set card presence interval.Tag infomation will be dispatched to the application only if a NFC tag is discovered. |
| [off](arkts-connectivity-off-f.md#off-2) | Disable foreground reader mode settings explicitly. |

### Interfaces

| Name | Description |
| --- | --- |
| [TagInfo](arkts-connectivity-taginfo-i.md) | Provides tag information.&lt;p&gt;This class provides the technology a tag supports, for example, NFC-A. Applications can createdifferent tags based on the supported technology. |
| [NdefRecord](arkts-connectivity-ndefrecord-i.md) | NDEF records definition, see NFCForum-TS-NDEF_1.0. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [TagInfo](arkts-connectivity-taginfo-i-sys.md) | Provides tag information.&lt;p&gt;This class provides the technology a tag supports, for example, NFC-A. Applications can createdifferent tags based on the supported technology. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [TnfType](arkts-connectivity-tnftype-e.md) | TNF types definitions, see NFCForum-TS-NDEF_1.0. |
| [NfcForumType](arkts-connectivity-nfcforumtype-e.md) | NfcForum Type definition. The NDEF tag may use one of them. |
| [MifareClassicType](arkts-connectivity-mifareclassictype-e.md) | MifareClassic Type definition |
| [MifareClassicSize](arkts-connectivity-mifareclassicsize-e.md) | MifareClassic Tag size. |
| [MifareUltralightType](arkts-connectivity-mifareultralighttype-e.md) | MifareUltralight Type definition |

### Types

| Name | Description |
| --- | --- |
| [NfcATag](arkts-connectivity-nfcatag-t.md) | Exports type NfcATag. |
| [NfcBTag](arkts-connectivity-nfcbtag-t.md) | Exports type NfcBTag. |
| [NfcFTag](arkts-connectivity-nfcftag-t.md) | Exports type NfcFTag. |
| [NfcVTag](arkts-connectivity-nfcvtag-t.md) | Exports type NfcVTag. |
| [IsoDepTag](arkts-connectivity-isodeptag-t.md) | Exports type IsoDepTag. |
| [NdefTag](arkts-connectivity-ndeftag-t.md) | Exports type NdefTag. |
| [MifareClassicTag](arkts-connectivity-mifareclassictag-t.md) | Exports type MifareClassicTag. |
| [MifareUltralightTag](arkts-connectivity-mifareultralighttag-t.md) | Exports type MifareUltralightTag. |
| [NdefFormatableTag](arkts-connectivity-ndefformatabletag-t.md) | Exports type NdefFormatableTag. |
| [BarcodeTag](arkts-connectivity-barcodetag-t.md) | Exports type BarcodeTag. |
| [NdefMessage](arkts-connectivity-ndefmessage-t.md) | Exports type NdefMessage. |
| [TagSession](arkts-connectivity-tagsession-t.md) | Exports type TagSession. |

### Constants

| Name | Description |
| --- | --- |
| [NFC_A](arkts-connectivity-tag-con.md#nfc_a) | Indicates an NFC-A tag. |
| [NFC_B](arkts-connectivity-tag-con.md#nfc_b) | Indicates an NFC-B tag. |
| [ISO_DEP](arkts-connectivity-tag-con.md#iso_dep) | Indicates an ISO_DEP tag. |
| [NFC_F](arkts-connectivity-tag-con.md#nfc_f) | Indicates an NFC-F tag. |
| [NFC_V](arkts-connectivity-tag-con.md#nfc_v) | Indicates an NFC-V tag. |
| [NDEF](arkts-connectivity-tag-con.md#ndef) | Indicates an NDEF tag. |
| [NDEF_FORMATABLE](arkts-connectivity-tag-con.md#ndef_formatable) | Indicates an NDEF Formatable tag. |
| [MIFARE_CLASSIC](arkts-connectivity-tag-con.md#mifare_classic) | Indicates an MIFARE CLASSIC tag. |
| [MIFARE_ULTRALIGHT](arkts-connectivity-tag-con.md#mifare_ultralight) | Indicates an MIFARE ULTRALIGHT tag. |
| [NFC_BARCODE](arkts-connectivity-tag-con.md#nfc_barcode) | Indicates an NfcBarcode tag. |
| [RTD_TEXT](arkts-connectivity-tag-con.md#rtd_text) | RTD type TEXT, see NFC Record Type Definition (RTD) Specification. |
| [RTD_URI](arkts-connectivity-tag-con.md#rtd_uri) | RTD type URI, see NFC Record Type Definition (RTD) Specification. |
| [SKIP_NDEF](arkts-connectivity-tag-con.md#skip_ndef) | Skip NDEF when app is reading a card in the foreground. |

