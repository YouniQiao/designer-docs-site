# reset

## reset

```TypeScript
function reset(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void
```

Removes a wallpaper of the specified type and restores the default one.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.SET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;void> | 是 | the callback of reset. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.reset(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
    if (error) {
        console.error(`failed to reset because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to reset.`);
});

```

## reset

```TypeScript
function reset(wallpaperType: WallpaperType): Promise<void>
```

Removes a wallpaper of the specified type and restores the default one.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.SET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.reset(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
    console.info(`success to reset.`);
}).catch((error: BusinessError) => {
    console.error(`failed to reset because: ${JSON.stringify(error)}`);
});

```

