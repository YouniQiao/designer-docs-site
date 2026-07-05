# SettingItem

The definition of setting Information.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## desc

```TypeScript
desc: string
```

Description of the setting item.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## id

```TypeScript
id: string
```

Unique ID of the setting item.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## mediaId

```TypeScript
mediaId: string
```

Media id associated with the current settings. If the settings are associated with the current media information, you need to set the mediaId; otherwise, it is not required to set the mediaId.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## settingType

```TypeScript
settingType?: SettingType
```

Type of the setting item.

**Type:** SettingType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## settingValue

```TypeScript
settingValue?: string | boolean | SettingContent[] | WantAgent
```

Value of the setting item. SWITCH: bool, LIST: SettingContent, JUMP: string.

**Type:** string | boolean | SettingContent[] | WantAgent

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## title

```TypeScript
title: string
```

Title of the setting item.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

