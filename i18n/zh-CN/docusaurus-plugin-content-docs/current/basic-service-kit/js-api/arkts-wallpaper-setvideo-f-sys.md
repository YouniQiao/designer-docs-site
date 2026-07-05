# setVideo

## setVideo

```TypeScript
function setVideo(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void
```

Sets live wallpaper of the specified type based on the uri path of the MP4 file.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | string | 是 | indicates the uri path of the MP4 file. |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;void> | 是 | the callback of setVideo. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**示例：**

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

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| source | string | 是 | indicates the uri path of the MP4 file. |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**示例：**

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

