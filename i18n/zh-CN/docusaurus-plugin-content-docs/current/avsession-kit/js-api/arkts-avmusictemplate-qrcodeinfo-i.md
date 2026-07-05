# QrCodeInfo

The definition of QR code Information.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## 导入模块

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## titleName

```TypeScript
titleName: string
```

Title name.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## detailName

```TypeScript
detailName: string
```

Detail name.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## price

```TypeScript
price: string
```

Purchase price.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## icon

```TypeScript
icon?: image.PixelMap
```

The icon of the app associated with the QR code, such as a QR code for logging in via WeChat, should be the WeChat icon.

**类型：** image.PixelMap

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## codeData

```TypeScript
codeData?: image.PixelMap
```

QR code image.

**类型：** image.PixelMap

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## id

```TypeScript
id: string
```

A QR code session used to uniquely identify a user login. When the QR code expires, MediaUI will use this ID to query and update a new QR code from the third party.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## validPeriod

```TypeScript
validPeriod: int
```

QR code validity period (unit: seconds). When the QR code expires, the QR code ID will be used to query and obtain a new QR code again.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## content

```TypeScript
content: string
```

QR code content.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## tips

```TypeScript
tips: string
```

Tips message.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

