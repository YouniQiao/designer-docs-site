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
| [getColors](arkts-basicservices-getcolors-f.md#getcolors-1) | Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function. |
| [getColors](arkts-basicservices-getcolors-f.md#getcolors-2) | Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function. |
| [getFile](arkts-basicservices-getfile-f.md#getfile-1) | Obtains a file of the wallpaper of the specified type. Returns the file descriptor.When usage is complete, the caller needs to close the file descriptor in time. |
| [getFile](arkts-basicservices-getfile-f.md#getfile-2) | Obtains a file of the wallpaper of the specified type. Returns the file descriptor.When usage is complete, the caller needs to close the file descriptor in time. |
| [getId](arkts-basicservices-getid-f.md#getid-1) | Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID.if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1. |
| [getId](arkts-basicservices-getid-f.md#getid-2) | Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID.if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1. |
| [getMinHeight](arkts-basicservices-getminheight-f.md#getminheight-1) | Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinHeight](arkts-basicservices-getminheight-f.md#getminheight-2) | Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinWidth](arkts-basicservices-getminwidth-f.md#getminwidth-1) | Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinWidth](arkts-basicservices-getminwidth-f.md#getminwidth-2) | Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [isChangePermitted](arkts-basicservices-ischangepermitted-f.md#ischangepermitted-1) | Checks whether to allow the application to change the wallpaper for the current user.Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise. |
| [isChangePermitted](arkts-basicservices-ischangepermitted-f.md#ischangepermitted-2) | Checks whether to allow the application to change the wallpaper for the current user.Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise. |
| [isOperationAllowed](arkts-basicservices-isoperationallowed-f.md#isoperationallowed-1) | Checks whether a user is allowed to set wallpapers.Returns true if a user is allowed to set wallpapers. returns false otherwise. |
| [isOperationAllowed](arkts-basicservices-isoperationallowed-f.md#isoperationallowed-2) | Checks whether a user is allowed to set wallpapers.Returns true if a user is allowed to set wallpapers. returns false otherwise. |
| [off](arkts-basicservices-off-f.md#off-1) | Unregisters a listener for wallpaper color changes. |
| [on](arkts-basicservices-on-f.md#on-1) | Registers a listener for wallpaper color changes to receive notifications about the changes. |
| [reset](arkts-basicservices-reset-f.md#reset-1) | Removes a wallpaper of the specified type and restores the default one. |
| [reset](arkts-basicservices-reset-f.md#reset-2) | Removes a wallpaper of the specified type and restores the default one. |
| [setWallpaper](arkts-basicservices-setwallpaper-f.md#setwallpaper-1) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |
| [setWallpaper](arkts-basicservices-setwallpaper-f.md#setwallpaper-2) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getColorsSync](arkts-basicservices-getcolorssync-f-sys.md#getcolorssync-1) | Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function. |
| [getImage](arkts-basicservices-getimage-f-sys.md#getimage-1) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.Only the static wallpaper set by using setImage can be obtained. |
| [getImage](arkts-basicservices-getimage-f-sys.md#getimage-2) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.Only the static wallpaper set by using setImage can be obtained. |
| [getMinHeightSync](arkts-basicservices-getminheightsync-f-sys.md#getminheightsync-1) | Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getMinWidthSync](arkts-basicservices-getminwidthsync-f-sys.md#getminwidthsync-1) | Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set. |
| [getPixelMap](arkts-basicservices-getpixelmap-f-sys.md#getpixelmap-1) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. |
| [getPixelMap](arkts-basicservices-getpixelmap-f-sys.md#getpixelmap-2) | Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map. |
| [getWallpaperByState](arkts-basicservices-getwallpaperbystate-f-sys.md#getwallpaperbystate-1) | Obtains the default pixel map of a wallpaper of the specified device type. Returns the default pixel map.Only the static wallpaper set by using setAllWallpapers can be obtained. |
| [off](arkts-basicservices-off-f-sys.md#off-2) | Unregisters a listener for wallpaper changes. |
| [on](arkts-basicservices-on-f-sys.md#on-2) | Registers a listener for wallpaper changes to receive notifications about the changes. |
| [restore](arkts-basicservices-restore-f-sys.md#restore-1) | Removes a wallpaper of the specified type and restores the default one. |
| [restore](arkts-basicservices-restore-f-sys.md#restore-2) | Removes a wallpaper of the specified type and restores the default one. |
| [setAllWallpapers](arkts-basicservices-setallwallpapers-f-sys.md#setallwallpapers-1) | Set wallpapers for all forms of devices. |
| [setCustomWallpaper](arkts-basicservices-setcustomwallpaper-f-sys.md#setcustomwallpaper-1) | Sets wallpaper of the specified type based on the uri path of the custom wallpaper. |
| [setCustomWallpaper](arkts-basicservices-setcustomwallpaper-f-sys.md#setcustomwallpaper-2) | Sets wallpaper of the specified type based on the uri path of the custom wallpaper. |
| [setImage](arkts-basicservices-setimage-f-sys.md#setimage-1) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |
| [setImage](arkts-basicservices-setimage-f-sys.md#setimage-2) | Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file. |
| [setVideo](arkts-basicservices-setvideo-f-sys.md#setvideo-1) | Sets live wallpaper of the specified type based on the uri path of the MP4 file. |
| [setVideo](arkts-basicservices-setvideo-f-sys.md#setvideo-2) | Sets live wallpaper of the specified type based on the uri path of the MP4 file. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [RgbaColor](arkts-basicservices-rgbacolor-i.md) | RgbaColor definition |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [WallpaperInfo](arkts-basicservices-wallpaperinfo-i-sys.md) | WallpaperInfo definition including folding status, rotation status, and resource path. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [WallpaperType](arkts-basicservices-wallpapertype-e.md) | Indicates wallpaper type. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [FoldState](arkts-basicservices-foldstate-e-sys.md) | Define the folding state of wallpaper |
| [RotateState](arkts-basicservices-rotatestate-e-sys.md) | Define the rotation state of wallpaper |
| [WallpaperResourceType](arkts-basicservices-wallpaperresourcetype-e-sys.md) | Indicates the resource type of the wallpaper. |
<!--DelEnd-->

