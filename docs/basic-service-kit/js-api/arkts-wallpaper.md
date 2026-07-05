# @ohos.wallpaper

System wallpaper

**Since:** 7

**System capability:** SystemCapability.MiscServices.Wallpaper

## Modules to Import

```TypeScript
import { wallpaper } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getColors](arkts-wallpaper-getcolors-f.md#getColors-1) | Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function. |
| [getColors](arkts-wallpaper-getcolors-f.md#getColors-2) | Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function. |
| <!--DelRow-->[getColorsSync](arkts-wallpaper-getcolorssync-f-sys.md#getColorsSync-1) | Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function. |
| [getFile](arkts-wallpaper-getfile-f.md#getFile-1) | Obtains a file of the wallpaper of the specified type. Returns the file descriptor. When usage is complete, the caller needs to close the file descriptor in time. |
| [getFile](arkts-wallpaper-getfile-f.md#getFile-2) | Obtains a file of the wallpaper of the specified type. Returns the file descriptor. When usage is complete, the caller needs to close the file descriptor in time. |
| [getId](arkts-wallpaper-getid-f.md#getId-1) | Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID. if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1. |
| [getId](arkts-wallpaper-getid-f.md#getId-2) | Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID. if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1. |
| <!--DelRow-->[getImage](arkts-wallpaper-getimage-f-sys.md#getImage-1) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. Only the static wallpaper set by using setImage can be obtained. |
| <!--DelRow-->[getImage](arkts-wallpaper-getimage-f-sys.md#getImage-2) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. Only the static wallpaper set by using setImage can be obtained. |
| [getMinHeight](arkts-wallpaper-getminheight-f.md#getMinHeight-1) | Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinHeight](arkts-wallpaper-getminheight-f.md#getMinHeight-2) | Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| <!--DelRow-->[getMinHeightSync](arkts-wallpaper-getminheightsync-f-sys.md#getMinHeightSync-1) | Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinWidth](arkts-wallpaper-getminwidth-f.md#getMinWidth-1) | Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinWidth](arkts-wallpaper-getminwidth-f.md#getMinWidth-2) | Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| <!--DelRow-->[getMinWidthSync](arkts-wallpaper-getminwidthsync-f-sys.md#getMinWidthSync-1) | Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| <!--DelRow-->[getPixelMap](arkts-wallpaper-getpixelmap-f-sys.md#getPixelMap-1) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. |
| <!--DelRow-->[getPixelMap](arkts-wallpaper-getpixelmap-f-sys.md#getPixelMap-2) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. |
| <!--DelRow-->[getWallpaperByState](arkts-wallpaper-getwallpaperbystate-f-sys.md#getWallpaperByState-1) | Obtains the default pixel map of a wallpaper of the specified device type. Returns the default pixel map. Only the static wallpaper set by using setAllWallpapers can be obtained. |
| [isChangePermitted](arkts-wallpaper-ischangepermitted-f.md#isChangePermitted-1) | Checks whether to allow the application to change the wallpaper for the current user. Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise. |
| [isChangePermitted](arkts-wallpaper-ischangepermitted-f.md#isChangePermitted-2) | Checks whether to allow the application to change the wallpaper for the current user. Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise. |
| [isOperationAllowed](arkts-wallpaper-isoperationallowed-f.md#isOperationAllowed-1) | Checks whether a user is allowed to set wallpapers. Returns true if a user is allowed to set wallpapers. returns false otherwise. |
| [isOperationAllowed](arkts-wallpaper-isoperationallowed-f.md#isOperationAllowed-2) | Checks whether a user is allowed to set wallpapers. Returns true if a user is allowed to set wallpapers. returns false otherwise. |
| [off](arkts-wallpaper-off-f.md#off-1) | Unregisters a listener for wallpaper color changes. |
| <!--DelRow-->[off](arkts-wallpaper-off-f-sys.md#off-1) | Unregisters a listener for wallpaper changes. |
| <!--DelRow-->[offWallpaperChange](arkts-wallpaper-offwallpaperchange-f-sys.md#offWallpaperChange-1) | Unregisters a listener for wallpaper changes. |
| [on](arkts-wallpaper-on-f.md#on-1) | Registers a listener for wallpaper color changes to receive notifications about the changes. |
| <!--DelRow-->[on](arkts-wallpaper-on-f-sys.md#on-1) | Registers a listener for wallpaper changes to receive notifications about the changes. |
| <!--DelRow-->[onWallpaperChange](arkts-wallpaper-onwallpaperchange-f-sys.md#onWallpaperChange-1) | Registers a listener for wallpaper changes to receive notifications about the changes. |
| [reset](arkts-wallpaper-reset-f.md#reset-1) | Removes a wallpaper of the specified type and restores the default one. |
| [reset](arkts-wallpaper-reset-f.md#reset-2) | Removes a wallpaper of the specified type and restores the default one. |
| <!--DelRow-->[restore](arkts-wallpaper-restore-f-sys.md#restore-1) | Removes a wallpaper of the specified type and restores the default one. |
| <!--DelRow-->[restore](arkts-wallpaper-restore-f-sys.md#restore-2) | Removes a wallpaper of the specified type and restores the default one. |
| <!--DelRow-->[setAllWallpapers](arkts-wallpaper-setallwallpapers-f-sys.md#setAllWallpapers-1) | Set wallpapers for all forms of devices. |
| <!--DelRow-->[setCustomWallpaper](arkts-wallpaper-setcustomwallpaper-f-sys.md#setCustomWallpaper-1) | Sets wallpaper of the specified type based on the uri path of the custom wallpaper. |
| <!--DelRow-->[setCustomWallpaper](arkts-wallpaper-setcustomwallpaper-f-sys.md#setCustomWallpaper-2) | Sets wallpaper of the specified type based on the uri path of the custom wallpaper. |
| <!--DelRow-->[setImage](arkts-wallpaper-setimage-f-sys.md#setImage-1) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |
| <!--DelRow-->[setImage](arkts-wallpaper-setimage-f-sys.md#setImage-2) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |
| <!--DelRow-->[setVideo](arkts-wallpaper-setvideo-f-sys.md#setVideo-1) | Sets live wallpaper of the specified type based on the uri path of the MP4 file. |
| <!--DelRow-->[setVideo](arkts-wallpaper-setvideo-f-sys.md#setVideo-2) | Sets live wallpaper of the specified type based on the uri path of the MP4 file. |
| [setWallpaper](arkts-wallpaper-setwallpaper-f.md#setWallpaper-1) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |
| [setWallpaper](arkts-wallpaper-setwallpaper-f.md#setWallpaper-2) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |

### Interfaces

| Name | Description |
| --- | --- |
| [RgbaColor](arkts-wallpaper-rgbacolor-i.md) | RgbaColor definition |
| <!--DelRow-->[WallpaperInfo](arkts-wallpaper-wallpaperinfo-i-sys.md) | WallpaperInfo definition including folding status, rotation status, and resource path. |

### Types

| Name | Description |
| --- | --- |
| [WallpaperChangeObserver](arkts-wallpaper-wallpaperchangeobserver-t.md) | Defines a callback used to return wallpaper change. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[FoldState](arkts-wallpaper-foldstate-e-sys.md) | Define the folding state of wallpaper |
| <!--DelRow-->[RotateState](arkts-wallpaper-rotatestate-e-sys.md) | Define the rotation state of wallpaper |
| <!--DelRow-->[WallpaperResourceType](arkts-wallpaper-wallpaperresourcetype-e-sys.md) | Indicates the resource type of the wallpaper. |
| [WallpaperType](arkts-wallpaper-wallpapertype-e.md) | Indicates wallpaper type. |

