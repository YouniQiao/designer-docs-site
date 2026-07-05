# setAllWallpapers

## setAllWallpapers

```TypeScript
function setAllWallpapers(wallpaperInfos: Array<WallpaperInfo>, wallpaperType: WallpaperType): Promise<void>
```

Set wallpapers for all forms of devices.

**Since:** 14

**Required permissions:** 

 ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperInfos | Array&lt;WallpaperInfo> | Yes | indicates the current device wallpaper type object.  among them, NORMAL and PORTRAIT are mandatory. |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified.  2.The first parameter type must be Array. The second type must be WallpaperType.  3.The first parameter type must be Array, must include wallpaper with FoldState NORMAL and RotateState PORTRAIT. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { wallpaper } from '@kit.BasicServicesKit';

let wallpaperInfos: Array<wallpaper.WallpaperInfo>
wallpaperInfos = [
  {
    foldState: wallpaper.FoldState.NORMAL,
    rotateState: wallpaper.RotateState.PORTRAIT,
    source: '/data/storage/el2/base/haps/entry/files/normal.jpeg'
  },
  {
    foldState: wallpaper.FoldState.UNFOLD_ONCE_STATE,
    rotateState: wallpaper.RotateState.LANDSCAPE,
    source: '/data/storage/el2/base/haps/entry/files/unfold_once_state.jpeg'
  },
  {
    foldState: wallpaper.FoldState.UNFOLD_TWICE_STATE,
    rotateState: wallpaper.RotateState.PORTRAIT,
    source: '/data/storage/el2/base/haps/entry/files/unfold_twice_state.jpeg'
  }
];
wallpaper.setAllWallpapers(wallpaperInfos, wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
  console.info(`success to setAllWallpapers.`);
}).catch((error: BusinessError) => {
  console.error(`failed to setAllWallpapers. Code: ${error.code}, Message: ${error.message}`);
});

```

