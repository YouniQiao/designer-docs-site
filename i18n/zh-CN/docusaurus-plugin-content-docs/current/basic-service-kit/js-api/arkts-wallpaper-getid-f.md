# getId

## getId

```TypeScript
function getId(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void
```

Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID. if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;number> | 是 | the callback of getId. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getId(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError, data: Number) => {
    if (error) {
        console.error(`failed to getId because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to getId: ${JSON.stringify(data)}`);
});

```

## getId

```TypeScript
function getId(wallpaperType: WallpaperType): Promise<number>
```

Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID. if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1.

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
| Promise&lt;number> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getId(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: Number) => {
    console.info(`success to getId: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to getId because: ${JSON.stringify(error)}`);
});

```

