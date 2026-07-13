# getFile

## Modules to Import

```TypeScript
import { wallpaper } from '@kit.BasicServicesKit';
```

## getFile

```TypeScript
function getFile(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void
```

Obtains a file of the wallpaper of the specified type. Returns the file descriptor.
When usage is complete, the caller needs to close the file descriptor in time.

**Since:** 8

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| callback | AsyncCallback&lt;number&gt; | Yes | the callback of getFile. |

**Example**

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

Obtains a file of the wallpaper of the specified type. Returns the file descriptor.
When usage is complete, the caller needs to close the file descriptor in time.

**Since:** 8

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_WALLPAPER

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

wallpaper.getFile(wallpaper.WallpaperType.WALLPAPER_SYSTEM).then((data: number) => {
    console.info(`success to getFile: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`failed to getFile because: ${JSON.stringify(error)}`);
});

```

