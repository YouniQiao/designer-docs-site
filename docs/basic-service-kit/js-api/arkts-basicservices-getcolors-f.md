# getColors

## Modules to Import

```TypeScript
import { wallpaper } from '@ohos.wallpaper';
```

## getColors

```TypeScript
function getColors(wallpaperType: WallpaperType, callback: AsyncCallback<Array<RgbaColor>>): void
```

Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| callback | AsyncCallback&lt;Array&lt;RgbaColor&gt;&gt; | Yes | the callback of getColors. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getColors(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError, data: Array<wallpaper.RgbaColor>) => {
    if (error) {
        console.error(`failed to getColors because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to getColors: ${JSON.stringify(data)}`);
});

```


## getColors

```TypeScript
function getColors(wallpaperType: WallpaperType): Promise<Array<RgbaColor>>
```

Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;RgbaColor&gt;&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getColors(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: Array<wallpaper.RgbaColor>) => {
    console.info(`success to getColors: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to getColors because: ${JSON.stringify(error)}`);
});

```

