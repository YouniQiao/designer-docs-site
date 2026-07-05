# getImage (System API)

## Modules to Import

```TypeScript
import { wallpaper } from '@ohos.wallpaper';
```

## getImage

```TypeScript
function getImage(wallpaperType: WallpaperType, callback: AsyncCallback<image.PixelMap>): void
```

Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. Only the static wallpaper set by using setImage can be obtained.

**Since:** 9

**Required permissions:** ohos.permission.GET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| callback | AsyncCallback&lt;image.PixelMap&gt; | Yes | the callback of getImage. |

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

wallpaper.getImage(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError, data: image.PixelMap) => {
  if (error) {
    console.error(`failed to getImage. Code: ${error.code}, Message: ${error.message}`);
    return;
  }
  console.info(`success to getImage: ${JSON.stringify(data.getImageInfoSync())}`);
});

```


## getImage

```TypeScript
function getImage(wallpaperType: WallpaperType): Promise<image.PixelMap>
```

Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. Only the static wallpaper set by using setImage can be obtained.

**Since:** 9

**Required permissions:** ohos.permission.GET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | the promise returned by the function. |

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

wallpaper.getImage(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: image.PixelMap) => {
  console.info(`success to getImage: ${JSON.stringify(data.getImageInfoSync())}`);
}).catch((error: BusinessError) => {
  console.error(`failed to getImage. Code: ${error.code}, Message: ${error.message}`);
});

```

