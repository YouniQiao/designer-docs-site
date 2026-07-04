# reset

## Modules to Import

```TypeScript
import { wallpaper } from '@ohos.wallpaper';
```

## reset

```TypeScript
function reset(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void
```

Removes a wallpaper of the specified type and restores the default one.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of reset. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.reset(wallpaper.WallpaperType.WALLPAPER_SYSTEM, (error: BusinessError) => {
    if (error) {
        console.error(`failed to reset because: ${JSON.stringify(error)}`);
        return;
    }
    console.info(`success to reset.`);
});

```


## reset

```TypeScript
function reset(wallpaperType: WallpaperType): Promise<void>
```

Removes a wallpaper of the specified type and restores the default one.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.SET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.reset(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then(() => {
    console.info(`success to reset.`);
}).catch((error: BusinessError) => {
    console.error(`failed to reset because: ${JSON.stringify(error)}`);
});

```

