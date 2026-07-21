# on

## Modules to Import

```TypeScript
import { wallpaper } from '@kit.BasicServicesKit';
```

<a id="on"></a>
## on('colorChange')

```TypeScript
function on(type: 'colorChange', callback: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void
```

Registers a listener for wallpaper color changes to receive notifications about the changes.

**Since:** 7

**Deprecated since:** 9

<!--Device-wallpaper-function on(type: 'colorChange', callback: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void--><!--Device-wallpaper-function on(type: 'colorChange', callback: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void-End-->

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'colorChange' | Yes | the incoming colorChange table open receiver pick a color change wallpaper wallpaper color changes. |
| callback | (colors: Array&lt;RgbaColor&gt;, wallpaperType: WallpaperType) =&gt; void | Yes | provides dominant colors of the wallpaper. |

**Example**

```TypeScript
try {
    let listener = (colors: Array<wallpaper.RgbaColor>, wallpaperType: wallpaper.WallpaperType): void => {
        console.info(`wallpaper color changed.`);
    };
    wallpaper.on('colorChange', listener);
} catch (error) {
    console.error(`failed to on because: ${JSON.stringify(error)}`);
}

```

