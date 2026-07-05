# getColors

## getColors

```TypeScript
function getColors(wallpaperType: WallpaperType, callback: AsyncCallback<Array<RgbaColor>>): void
```

Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;Array&lt;RgbaColor>> | 是 | the callback of getColors. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getColors(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError, data: Array<wallpaper.RgbaColor>) => {
    if (error) {
        console.error(`failed to getColors because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to getColors: ${JSON.stringify(data)}`);
});

```

## getColors

```TypeScript
function getColors(wallpaperType: WallpaperType): Promise<Array<RgbaColor>>
```

Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;RgbaColor>> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getColors(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: Array<wallpaper.RgbaColor>) => {
    console.info(`success to getColors: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to getColors because: ${JSON.stringify(error)}`);
});

```

