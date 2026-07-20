# setCustomWallpaper (System API)

## Modules to Import

```TypeScript
import { wallpaper } from '@kit.BasicServicesKit';
```

## setCustomWallpaper

```TypeScript
function setCustomWallpaper(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void
```

Sets wallpaper of the specified type based on the uri path of the custom wallpaper.

**Since:** 10

**Required permissions:** ohos.permission.SET_WALLPAPER

<!--Device-wallpaper-function setCustomWallpaper(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void--><!--Device-wallpaper-function setCustomWallpaper(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | string | Yes | indicates the uri path of the custom wallpaper. |
| wallpaperType | [WallpaperType](arkts-basicservices-wallpaper-wallpapertype-e.md) | Yes | indicates the wallpaper type. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | the callback of setCustomWallpaper. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wallpaperPath = "/data/storage/el2/base/haps/entry/files/test.zip";
try {
    wallpaper.setCustomWallpaper(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
        if (error) {
            console.error(`failed to setCustomWallpaper. Code: ${error.code}, Message: ${error.message}`);
            return;
        }
        console.info(`success to setCustomWallpaper.`);
    });
} catch (error) {
    console.error(`failed to setCustomWallpaper. Code: ${error.code}, Message: ${error.message}`);
}


```


## setCustomWallpaper

```TypeScript
function setCustomWallpaper(source: string, wallpaperType: WallpaperType): Promise<void>
```

Sets wallpaper of the specified type based on the uri path of the custom wallpaper.

**Since:** 10

**Required permissions:** ohos.permission.SET_WALLPAPER

<!--Device-wallpaper-function setCustomWallpaper(source: string, wallpaperType: WallpaperType): Promise<void>--><!--Device-wallpaper-function setCustomWallpaper(source: string, wallpaperType: WallpaperType): Promise<void>-End-->

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | string | Yes | indicates the uri path of the custom wallpaper. |
| wallpaperType | [WallpaperType](arkts-basicservices-wallpaper-wallpapertype-e.md) | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wallpaperPath = "/data/storage/el2/base/haps/entry/files/test.zip";
try {
    wallpaper.setCustomWallpaper(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
        console.info(`success to setCustomWallpaper.`);
    }).catch((error: BusinessError) => {
        console.error(`failed to setCustomWallpaper. Code: ${error.code}, Message: ${error.message}`);
    });
} catch (error) {
    console.error(`failed to setCustomWallpaper. Code: ${error.code}, Message: ${error.message}`);
}

```

