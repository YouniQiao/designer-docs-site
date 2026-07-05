# NfcATag

Provides interfaces to control the read and write of tags that support the NFC-A technology. <p>This class is inherited from the {@link TagSession} abstract class, and provides methods to create {@code NfcATag} objects and obtain the ATQA and SAK.

**继承实现关系：** NfcATag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getAtqa

```TypeScript
getAtqa(): int[]
```

Obtains the ATQA of an NFC-A tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the ATQA of the NFC-A tag. |

## getSak

```TypeScript
getSak(): int
```

Obtains the SAK of an NFC-A tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the SAK of the NFC-A tag. |

