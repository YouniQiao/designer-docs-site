# getPixelMap

## getPixelMap

```TypeScript
function getPixelMap(wallpaperType: WallpaperType, callback: AsyncCallback<image.PixelMap>): void
```

Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.GET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | the callback of getPixelMap. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

wallpaper.getPixelMap(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError, data: image.PixelMap) => {
  if (error) {
    console.error(`failed to getPixelMap. Code: ${error.code}, Message: ${error.message}`);
    return;
  }
  console.info(`success to getPixelMap : ${JSON.stringify(data.getImageInfoSync())}`);
});

```

## getPixelMap

```TypeScript
function getPixelMap(wallpaperType: WallpaperType): Promise<image.PixelMap>
```

Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.GET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

wallpaper.getPixelMap(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: image.PixelMap) => {
  console.info(`success to getPixelMap : ${JSON.stringify(data.getImageInfoSync())}`);
}).catch((error: BusinessError) => {
  console.error(`failed to getPixelMap. Code: ${error.code}, Message: ${error.message}`);
});

```

