# NfcBTag

Provides interfaces to create an {@code NfcBTag} and perform I/O operations on the tag. <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an {@code NfcBTag} and obtain the tag information.

**继承实现关系：** NfcBTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getRespAppData

```TypeScript
getRespAppData(): int[]
```

Obtains the application data of a tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the application data of the tag. |

## getRespProtocol

```TypeScript
getRespProtocol(): int[]
```

Obtains the protocol information of a tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the protocol information of the tag. |

