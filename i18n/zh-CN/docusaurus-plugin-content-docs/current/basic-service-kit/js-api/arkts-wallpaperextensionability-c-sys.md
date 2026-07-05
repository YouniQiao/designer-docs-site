# WallpaperExtensionAbility

class of wallpaper extension ability.

**起始版本：** 10

**废弃版本：** 23

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { WallpaperExtensionAbility } from '@kit.BasicServicesKit';
```

## onCreate

```TypeScript
onCreate(want: object): void
```

Called once to initialize the extension ability.

**起始版本：** 10

**废弃版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | object | 是 | Indicates connection information about the wallpaper extension ability. |

**示例：**

```TypeScript
import { WallpaperExtensionAbility } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

class WallpaperExt extends WallpaperExtensionAbility {
    onCreate(want: Want): void {
        console.info('onCreate, want:' + want.abilityName);
    }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called once to destroy the extension ability.

**起始版本：** 10

**废弃版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**示例：**

```TypeScript
import { WallpaperExtensionAbility } from '@kit.BasicServicesKit';

class WallpaperExt extends WallpaperExtensionAbility {
    onDestroy(): void {
        console.info('onDestroy');
    }
}

```

## onWallpaperChange

```TypeScript
onWallpaperChange(wallpaperType: number): void
```

The onWallpaperChange callback is triggered when the user modifies the wallpaper settings.

**起始版本：** 10

**废弃版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | number | 是 | Indicates the wallpaper type. |

**示例：**

```TypeScript
import { WallpaperExtensionAbility } from '@kit.BasicServicesKit';
import { wallpaper } from '@kit.BasicServicesKit';

class WallpaperExt extends WallpaperExtensionAbility {
    onWallpaperChange(wallpaperType: wallpaper.WallpaperType): void {
        console.info('onWallpaperChange, wallpaperType:' + wallpaperType);
    }
}

```

