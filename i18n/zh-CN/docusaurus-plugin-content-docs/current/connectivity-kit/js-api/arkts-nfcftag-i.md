# NfcFTag

Provides methods for creating an NFC-F tag, obtaining tag information, and controlling tag read and write. <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an {@code NfcFTag} and obtain the tag information.

**继承实现关系：** NfcFTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getPmm

```TypeScript
getPmm(): int[]
```

Obtains the PMm (consisting of the IC code and manufacturer parameters) from this {@code NfcFTag} instance.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the PMm. |

## getSystemCode

```TypeScript
getSystemCode(): int[]
```

Obtains the system code from this {@code NfcFTag} instance.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the system code. |

