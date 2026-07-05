# SettingItem

The definition of setting Information.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## 导入模块

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## settingValue

```TypeScript
settingValue?: string | boolean | SettingContent[] | WantAgent
```

Value of the setting item. SWITCH: bool, LIST: SettingContent, JUMP: string.

**类型：** string | boolean | SettingContent[] | WantAgent

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## id

```TypeScript
id: string
```

Unique ID of the setting item.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## mediaId

```TypeScript
mediaId: string
```

Media id associated with the current settings. If the settings are associated with the current media information, you need to set the mediaId; otherwise, it is not required to set the mediaId.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## title

```TypeScript
title: string
```

Title of the setting item.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## settingType

```TypeScript
settingType?: SettingType
```

Type of the setting item.

**类型：** SettingType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## desc

```TypeScript
desc: string
```

Description of the setting item.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

