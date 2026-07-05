# NdefMessage

Provides methods for Message of NDEF.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getNdefRecords

```TypeScript
getNdefRecords(): tag.NdefRecord[]
```

Obtains all records of an NDEF message.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| tag.NdefRecord[] | Records the list of NDEF records. |

