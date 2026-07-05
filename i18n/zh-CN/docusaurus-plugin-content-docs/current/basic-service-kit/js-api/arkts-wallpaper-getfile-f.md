# getFile

## getFile

```TypeScript
function getFile(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void
```

Obtains a file of the wallpaper of the specified type. Returns the file descriptor. When usage is complete, the caller needs to close the file descriptor in time.

**起始版本：** 8

**废弃版本：** 9

**需要权限：** 

 ohos.permission.GET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| callback | AsyncCallback&lt;number> | 是 | the callback of getFile. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getFile(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError, data: number) => {
    if (error) {
        console.error(`failed to getFile because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to getFile: ${JSON.stringify(data)}`);
});

```

## getFile

```TypeScript
function getFile(wallpaperType: WallpaperType): Promise<number>
```

Obtains a file of the wallpaper of the specified type. Returns the file descriptor. When usage is complete, the caller needs to close the file descriptor in time.

**起始版本：** 8

**废弃版本：** 9

**需要权限：** 

 ohos.permission.GET_WALLPAPER

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

wallpaper.getFile(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: number) => {
    console.info(`success to getFile: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to getFile because: ${JSON.stringify(error)}`);
});

```

