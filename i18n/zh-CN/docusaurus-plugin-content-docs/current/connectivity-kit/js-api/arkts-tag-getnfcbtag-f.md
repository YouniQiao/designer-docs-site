# getNfcBTag

## getNfcBTag

```TypeScript
function getNfcBTag(tagInfo: TagInfo): NfcBTag
```

Obtains an {@link NfcBTag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object will be created based on the tag information.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.nfc.tag/tag#getNfcB

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tagInfo | TagInfo | 是 | Indicates the tag information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NfcBTag | The {@link NfcBTag} object. |

