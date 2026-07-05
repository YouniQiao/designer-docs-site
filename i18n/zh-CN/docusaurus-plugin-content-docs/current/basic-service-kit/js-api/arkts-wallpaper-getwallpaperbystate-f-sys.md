# getWallpaperByState

## getWallpaperByState

```TypeScript
function getWallpaperByState(wallpaperType: WallpaperType, foldState: FoldState, rotateState: RotateState): Promise<image.PixelMap>
```

Obtains the default pixel map of a wallpaper of the specified device type. Returns the default pixel map. Only the static wallpaper set by using setAllWallpapers can be obtained.

**起始版本：** 14

**需要权限：** 

 ohos.permission.GET_WALLPAPER

**系统能力：** SystemCapability.MiscServices.Wallpaper

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | 是 | indicates the wallpaper type. |
| foldState | FoldState | 是 | indicates the folding status for wallpaper. |
| rotateState | RotateState | 是 | indicates the rotation status for wallpaper. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified.  2.The type must be WallpaperType, parameter range must be WALLPAPER_LOCKSCREEN or WALLPAPER_SYSTEM.  3.The type must be FoldState, parameter range must be NORMAL or UNFOLD_ONCE_STATE or UNFOLD_TWICE_STATE.  4.The type must be RotateState, parameter range must be PORTRAIT or LANDSCAPE. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { wallpaper } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

wallpaper.getWallpaperByState(wallpaper.WallpaperType.WALLPAPER_SYSTEM,wallpaper.FoldState.NORMAL,wallpaper.RotateState.PORTRAIT).then((data:image.PixelMap) => {
  console.info(`success to getWallpaperByState: ${JSON.stringify(data.getImageInfoSync())}`);
}).catch((error: BusinessError) => {
  console.error(`failed to getWallpaperByState. Code: ${error.code}, Message: ${error.message}`);
});

```

