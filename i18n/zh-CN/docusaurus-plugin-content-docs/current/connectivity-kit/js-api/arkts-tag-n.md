# tag

Provides methods to operate or manage NFC tag.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## 导入模块

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [ndef](arkts-tag-ndef-n.md) | Provides methods for accessing NDEF tag. |

### 函数

| 名称 | 描述 |
| --- | --- |
| [getBarcodeTag](arkts-tag-getbarcodetag-f.md#getBarcodeTag-1) | Obtains an {@link BarcodeTag} object based on the tag information. During tag reading, if the tag supports the NfcBarcode technology, an {@link BarcodeTag} object will be created. |
| [getIsoDep](arkts-tag-getisodep-f.md#getIsoDep-1) | Obtains an {@link IsoDepTag} object based on the tag information. During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} object will be created based on the tag information. |
| [getMifareClassic](arkts-tag-getmifareclassic-f.md#getMifareClassic-1) | Obtains an {@link MifareClassicTag} object based on the tag information. During tag reading, if the tag supports the MIFARE Classic technology, an {@link MifareClassicTag} object will be created based on the tag information. |
| [getMifareUltralight](arkts-tag-getmifareultralight-f.md#getMifareUltralight-1) | Obtains an {@link MifareUltralightTag} object based on the tag information. During tag reading, if the tag supports the MIFARE Ultralight technology, an {@link MifareUltralightTag} object will be created based on the tag information. |
| [getNdef](arkts-tag-getndef-f.md#getNdef-1) | Obtains an {@link NdefTag} object based on the tag information. During tag reading, if the tag supports the NDEF technology, an {@link NdefTag} object will be created based on the tag information. |
| [getNdefFormatable](arkts-tag-getndefformatable-f.md#getNdefFormatable-1) | Obtains an {@link NdefFormatableTag} object based on the tag information. During tag reading, if the tag supports the NDEF Formatable technology, an {@link NdefFormatableTag} object will be created based on the tag information. |
| [getNfcA](arkts-tag-getnfca-f.md#getNfcA-1) | Obtains an {@link NfcATag} object based on the tag information. During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object will be created based on the tag information. |
| [getNfcATag](arkts-tag-getnfcatag-f.md#getNfcATag-1) | Obtains an {@link NfcATag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object will be created based on the tag information. |
| [getNfcB](arkts-tag-getnfcb-f.md#getNfcB-1) | Obtains an {@link NfcBTag} object based on the tag information. During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object will be created based on the tag information. |
| [getNfcBTag](arkts-tag-getnfcbtag-f.md#getNfcBTag-1) | Obtains an {@link NfcBTag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object will be created based on the tag information. |
| [getNfcF](arkts-tag-getnfcf-f.md#getNfcF-1) | Obtains an {@link NfcFTag} object based on the tag information. During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object will be created based on the tag information. |
| [getNfcFTag](arkts-tag-getnfcftag-f.md#getNfcFTag-1) | Obtains an {@link NfcFTag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object will be created based on the tag information. |
| [getNfcV](arkts-tag-getnfcv-f.md#getNfcV-1) | Obtains an {@link NfcVTag} object based on the tag information. During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object will be created based on the tag information. |
| [getNfcVTag](arkts-tag-getnfcvtag-f.md#getNfcVTag-1) | Obtains an {@link NfcVTag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object will be created based on the tag information. |
| [getTagInfo](arkts-tag-gettaginfo-f.md#getTagInfo-1) | Parse a {@link TagInfo} object from Want. |
| [off](arkts-tag-off-f.md#off-1) | Disable foreground reader mode settings explicitly. |
| [off](arkts-tag-off-f.md#off-2) | Disable foreground reader mode settings explicitly. |
| [offReaderMode](arkts-tag-offreadermode-f.md#offReaderMode-1) | Disable foreground reader mode settings explicitly. |
| [offReaderModeWithInterval](arkts-tag-offreadermodewithinterval-f.md#offReaderModeWithInterval-1) | Disable foreground reader mode settings explicitly. |
| [on](arkts-tag-on-f.md#on-1) | Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered. |
| [on](arkts-tag-on-f.md#on-2) | Set reader mode enabled when the specific application is on foreground and set card presence interval. Tag infomation will be dispatched to the application only if a NFC tag is discovered. |
| [onReaderMode](arkts-tag-onreadermode-f.md#onReaderMode-1) | Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered. |
| [onReaderModeWithInterval](arkts-tag-onreadermodewithinterval-f.md#onReaderModeWithInterval-1) | Set reader mode enabled when the specific application is on foreground and set card presence interval. Tag infomation will be dispatched to the application only if a NFC tag is discovered. |
| [registerForegroundDispatch](arkts-tag-registerforegrounddispatch-f.md#registerForegroundDispatch-1) | Register tag foreground dispatch. Dispatches to this application only if a tag discovered. |
| [unregisterForegroundDispatch](arkts-tag-unregisterforegrounddispatch-f.md#unregisterForegroundDispatch-1) | Unregister tag foreground dispatch. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [NdefRecord](arkts-tag-ndefrecord-i.md) | NDEF records definition, see NFCForum-TS-NDEF_1.0. |
| [TagInfo](arkts-tag-taginfo-i.md) | Provides tag information. <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create different tags based on the supported technology. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [BarcodeTag](arkts-tag-barcodetag-t.md) | Exports type BarcodeTag. |
| [IsoDepTag](arkts-tag-isodeptag-t.md) | Exports type IsoDepTag. |
| [MifareClassicTag](arkts-tag-mifareclassictag-t.md) | Exports type MifareClassicTag. |
| [MifareUltralightTag](arkts-tag-mifareultralighttag-t.md) | Exports type MifareUltralightTag. |
| [NdefFormatableTag](arkts-tag-ndefformatabletag-t.md) | Exports type NdefFormatableTag. |
| [NdefMessage](arkts-tag-ndefmessage-t.md) | Exports type NdefMessage. |
| [NdefTag](arkts-tag-ndeftag-t.md) | Exports type NdefTag. |
| [NfcATag](arkts-tag-nfcatag-t.md) | Exports type NfcATag. |
| [NfcBTag](arkts-tag-nfcbtag-t.md) | Exports type NfcBTag. |
| [NfcFTag](arkts-tag-nfcftag-t.md) | Exports type NfcFTag. |
| [NfcVTag](arkts-tag-nfcvtag-t.md) | Exports type NfcVTag. |
| [TagSession](arkts-tag-tagsession-t.md) | Exports type TagSession. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [MifareClassicSize](arkts-tag-mifareclassicsize-e.md) | MifareClassic Tag size. |
| [MifareClassicType](arkts-tag-mifareclassictype-e.md) | MifareClassic Type definition |
| [MifareUltralightType](arkts-tag-mifareultralighttype-e.md) | MifareUltralight Type definition |
| [NfcForumType](arkts-tag-nfcforumtype-e.md) | NfcForum Type definition. The NDEF tag may use one of them. |
| [TnfType](arkts-tag-tnftype-e.md) | TNF types definitions, see NFCForum-TS-NDEF_1.0. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [ISO_DEP](arkts-tag-con.md#ISO_DEP) | Indicates an ISO_DEP tag. |
| [ISO_DEP](arkts-tag-con.md#ISO_DEP) | Indicates an ISO_DEP tag. The value should be an integer. |
| [MIFARE_CLASSIC](arkts-tag-con.md#MIFARE_CLASSIC) | Indicates an MIFARE CLASSIC tag. |
| [MIFARE_CLASSIC](arkts-tag-con.md#MIFARE_CLASSIC) | Indicates an MIFARE CLASSIC tag. The value should be an integer. |
| [MIFARE_ULTRALIGHT](arkts-tag-con.md#MIFARE_ULTRALIGHT) | Indicates an MIFARE ULTRALIGHT tag. |
| [MIFARE_ULTRALIGHT](arkts-tag-con.md#MIFARE_ULTRALIGHT) | Indicates an MIFARE ULTRALIGHT tag. The value should be an integer. |
| [NDEF](arkts-tag-con.md#NDEF) | Indicates an NDEF tag. |
| [NDEF](arkts-tag-con.md#NDEF) | Indicates an NDEF tag. The value should be an integer. |
| [NDEF_FORMATABLE](arkts-tag-con.md#NDEF_FORMATABLE) | Indicates an NDEF Formatable tag. |
| [NDEF_FORMATABLE](arkts-tag-con.md#NDEF_FORMATABLE) | Indicates an NDEF Formatable tag. The value should be an integer. |
| [NFC_A](arkts-tag-con.md#NFC_A) | Indicates an NFC-A tag. |
| [NFC_A](arkts-tag-con.md#NFC_A) | Indicates an NFC-A tag. The value should be an integer. |
| [NFC_B](arkts-tag-con.md#NFC_B) | Indicates an NFC-B tag. |
| [NFC_B](arkts-tag-con.md#NFC_B) | Indicates an NFC-B tag. The value should be an integer. |
| [NFC_BARCODE](arkts-tag-con.md#NFC_BARCODE) | Indicates an NfcBarcode tag. |
| [NFC_BARCODE](arkts-tag-con.md#NFC_BARCODE) | Indicates an NfcBarcode tag. The value should be an integer. |
| [NFC_F](arkts-tag-con.md#NFC_F) | Indicates an NFC-F tag. |
| [NFC_F](arkts-tag-con.md#NFC_F) | Indicates an NFC-F tag. The value should be an integer. |
| [NFC_V](arkts-tag-con.md#NFC_V) | Indicates an NFC-V tag. |
| [NFC_V](arkts-tag-con.md#NFC_V) | Indicates an NFC-V tag. The value should be an integer. |
| [RTD_TEXT](arkts-tag-con.md#RTD_TEXT) | RTD type TEXT, see NFC Record Type Definition (RTD) Specification. |
| [RTD_URI](arkts-tag-con.md#RTD_URI) | RTD type URI, see NFC Record Type Definition (RTD) Specification. |
| [SKIP_NDEF](arkts-tag-con.md#SKIP_NDEF) | Skip NDEF when app is reading a card in the foreground. |
| [SKIP_NDEF](arkts-tag-con.md#SKIP_NDEF) | Skip NDEF when app is reading a card in the foreground. The value range is all integers. |

