# setImage (System API)

## Modules to Import

```TypeScript
import { wallpaper } from '@ohos.wallpaper';
```

## setImage

```TypeScript
function setImage(source: string | image.PixelMap, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void
```

Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.

**Since:** 9

**Required permissions:** ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | string \| image.PixelMap | Yes | indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file. |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of setImage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

// The source type is string.
let wallpaperPath = "/data/storage/el2/base/haps/entry/files/js.jpeg";
wallpaper.setImage(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
    if (error) {
        console.error(`failed to setImage. Code: ${error.code}, Message: ${error.message}`);
        return;
     }
    console.info(`success to setImage.`);
});
  
// The source type is image.PixelMap.
let imageSource = image.createImageSource("file://" + wallpaperPath);
let opts: image.DecodingOptions = {
    desiredSize: {
        height: 3648,
        width: 2736
    }
};
imageSource.createPixelMap(opts).then((pixelMap: image.PixelMap) => {
    wallpaper.setImage(pixelMap, wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
        if (error) {
            console.error(`failed to setImage. Code: ${error.code}, Message: ${error.message}`);
            return;
        }
        console.info(`success to setImage.`);
    });
}).catch((error: BusinessError) => {
    console.error(`failed to createPixelMap. Code: ${error.code}, Message: ${error.message}`);
});

```


## setImage

```TypeScript
function setImage(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>
```

Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.

**Since:** 9

**Required permissions:** ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | string \| image.PixelMap | Yes | indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file. |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

// The source type is string.
let wallpaperPath = "/data/storage/el2/base/haps/entry/files/js.jpeg";
wallpaper.setImage(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
    console.info(`success to setImage.`);
}).catch((error: BusinessError) => {
    console.error(`failed to setImage. Code: ${error.code}, Message: ${error.message}`);
});

// The source type is image.PixelMap.
let imageSource = image.createImageSource("file://" + wallpaperPath);
let opts: image.DecodingOptions = {
    desiredSize: {
        height: 3648,
        width: 2736
    }
};
imageSource.createPixelMap(opts).then((pixelMap: image.PixelMap) => {
    wallpaper.setImage(pixelMap, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
        console.info(`success to setImage.`);
    }).catch((error: BusinessError) => {
        console.error(`failed to setImage. Code: ${error.code}, Message: ${error.message}`);
    });
}).catch((error: BusinessError) => {
    console.error(`failed to createPixelMap. Code: ${error.code}, Message: ${error.message}`);
});

```

