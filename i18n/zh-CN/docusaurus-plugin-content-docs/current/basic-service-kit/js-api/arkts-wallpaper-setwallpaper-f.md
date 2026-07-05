# setWallpaper

## setWallpaper

```TypeScript
function setWallpaper(
    source: string | image.PixelMap,
    wallpaperType: WallpaperType,
    callback: AsyncCallback<void>
  ): void
```

Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.SET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | string \| image.PixelMap | 是 | indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file. |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;void> | 是 | the callback of setWallpaper. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

// source类型为string
let wallpaperPath = "/data/storage/el2/base/haps/entry/files/js.jpeg";
wallpaper.setWallpaper(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
    if (error) {
        console.error(`failed to setWallpaper because: ${JSON.stringify(error)}`);
       return;
       }
    console.info(`success to setWallpaper.`);
});

// source类型为image.PixelMap
let imageSource = image.createImageSource("file://" + wallpaperPath);
let opts: image.DecodingOptions = {
    desiredSize: {
        height: 3648,
        width: 2736
    }
};
imageSource.createPixelMap(opts).then((pixelMap: image.PixelMap) => {
    wallpaper.setWallpaper(pixelMap, wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
        if (error) {
            console.error(`failed to setWallpaper because: ${JSON.stringify(error)}`);
            return;
        }
        console.info(`success to setWallpaper.`);
    });
}).catch((error: BusinessError) => {
    console.error(`failed to createPixelMap because: ${JSON.stringify(error)}`);
});

```

## setWallpaper

```TypeScript
function setWallpaper(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>
```

Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.SET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | string \| image.PixelMap | 是 | indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file. |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

// source类型为string
let wallpaperPath = "/data/storage/el2/base/haps/entry/files/js.jpeg";
wallpaper.setWallpaper(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
    console.info(`success to setWallpaper.`);
  }).catch((error: BusinessError) => {
    console.error(`failed to setWallpaper because: ${JSON.stringify(error)}`);
});
  
// source类型为image.PixelMap
let imageSource = image.createImageSource("file://" + wallpaperPath);
let opts: image.DecodingOptions = {
    desiredSize: {
        height: 3648,
        width: 2736
    }
};
imageSource.createPixelMap(opts).then((pixelMap: image.PixelMap) => {
    wallpaper.setWallpaper(pixelMap, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
        console.info(`success to setWallpaper.`);
    }).catch((error: BusinessError) => {
        console.error(`failed to setWallpaper because: ${JSON.stringify(error)}`);
    });
  }).catch((error: BusinessError) => {
    console.error(`failed to createPixelMap because: ${JSON.stringify(error)}`);
});

```

