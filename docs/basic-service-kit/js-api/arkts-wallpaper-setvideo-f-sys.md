# setVideo

## setVideo

```TypeScript
function setVideo(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void
```

Sets live wallpaper of the specified type based on the uri path of the MP4 file.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | string | Yes | indicates the uri path of the MP4 file. |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| callback | AsyncCallback&lt;void> | Yes | the callback of setVideo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wallpaperPath = "/data/storage/el2/base/haps/entry/files/test.mp4";
try {
    wallpaper.setVideo(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
        if (error) {
            console.error(`failed to setVideo. Code: ${error.code}, Message: ${error.message}`);
            return;
        }
        console.info(`success to setVideo.`);
    });
} catch (error) {
    console.error(`failed to setVideo. Code: ${error.code}, Message: ${error.message}`);
}


```

## setVideo

```TypeScript
function setVideo(source: string, wallpaperType: WallpaperType): Promise<void>
```

Sets live wallpaper of the specified type based on the uri path of the MP4 file.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | string | Yes | indicates the uri path of the MP4 file. |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wallpaperPath = "/data/storage/el2/base/haps/entry/files/test.mp4";
try {
    wallpaper.setVideo(wallpaperPath, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
        console.info(`success to setVideo.`);
    }).catch((error: BusinessError) => {
        console.error(`failed to setVideo. Code: ${error.code}, Message: ${error.message}`);
    });
} catch (error) {
    console.error(`failed to setVideo. Code: ${error.code}, Message: ${error.message}`);
}

```

