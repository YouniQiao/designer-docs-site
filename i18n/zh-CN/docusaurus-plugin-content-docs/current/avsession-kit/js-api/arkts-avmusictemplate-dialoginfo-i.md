# DialogInfo

The definition of dialog information.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## 导入模块

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## dialogType

```TypeScript
dialogType: DialogType
```

Type of the dialog.

**类型：** DialogType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## buttons

```TypeScript
buttons?: DialogButtonInfo[]
```

Buttons of the dialog.

**类型：** DialogButtonInfo[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## description

```TypeScript
description?: string
```

Other message of the dialog.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## qrCodes

```TypeScript
qrCodes?: QrCodeInfo[]
```

QR code of the dialog. Once the QR code information is set, this pop-up will be recognized as a QR code pop-up and will display the QR code information with priority. A maximum of two can be set.

**类型：** QrCodeInfo[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## text

```TypeScript
text?: string
```

Text content of the dialog.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## title

```TypeScript
title?: string
```

Title of the dialog.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## dialogId

```TypeScript
dialogId: string
```

Unique id of the dialog.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

