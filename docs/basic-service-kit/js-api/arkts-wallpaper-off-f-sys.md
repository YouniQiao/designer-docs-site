# off

## off('wallpaperChange')

```TypeScript
function off(
    type: 'wallpaperChange',
    callback?: (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
  ): void
```

Unregisters a listener for wallpaper changes.

**Since:** 10

**System capability:** SystemCapability.MiscServices.Wallpaper

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wallpaperChange' | Yes | the incoming wallpaperChange table delete receiver when the user modifies the wallpaper settings. |
| callback | (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void | No | wallpaperType indicates the wallpaper type.  resourceType indicates the resource type of the wallpaper.  uri indicates the wallpaper resource address. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 202 | permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
let listener = (wallpaperType: wallpaper.WallpaperType, resourceType: wallpaper.WallpaperResourceType): void => {
    console.info(`wallpaper color changed.`);
};
try {
    wallpaper.on('wallpaperChange', listener);
} catch (error) {
    console.error(`failed to on. Code: ${error.code}, Message: ${error.message}`);
}

try {
    // Unsubscribe from the listener.
    wallpaper.off('wallpaperChange', listener);
} catch (error) {
    console.error(`failed to off. Code: ${error.code}, Message: ${error.message}`);
}

try {
    // Unsubscribe from all callbacks of the 'wallpaperChange' event type.
    wallpaper.off('wallpaperChange');
} catch (error) {
    console.error(`failed to off. Code: ${error.code}, Message: ${error.message}`);
}

```

