# NfcVTag

Provides methods for creating an NFC-V tag, obtaining tag information, and controlling tag read and write. <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an {@code NfcVTag} and obtain the tag information.

**继承实现关系：** NfcVTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getDsfId

```TypeScript
getDsfId(): int
```

Obtains the response flags from this {@code NfcVTag} instance.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the response flags. |

## getResponseFlags

```TypeScript
getResponseFlags(): int
```

Obtains the response flags from this {@code NfcVTag} instance.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the response flags. |

