# WallpaperChangeObserver

```TypeScript
type WallpaperChangeObserver = (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
```

Defines a callback used to return wallpaper change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Wallpaper

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wallpaperType | WallpaperType | Yes | indicates the wallpaper type. |
| resourceType | WallpaperResourceType | Yes | indicates the resource type of the wallpaper. |
| uri | string | no |  |

