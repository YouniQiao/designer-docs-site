# @ohos.display

The **Display** module provides APIs for managing displays, such as obtaining information about the default display,obtaining information about all displays, and listening for the addition and removal of displays.

**Since:** 7

<!--Device-unnamed-declare namespace display--><!--Device-unnamed-declare namespace display-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [convertGlobalToRelativeCoordinate](arkts-arkui-display-convertglobaltorelativecoordinate-f.md#convertglobaltorelativecoordinate) | Converts global coordinates (based on the top-left corner of the primary screen) into relative coordinates (based on the top-left corner of the screen specified by **displayId**). If **displayId** is not passed, the coordinates are converted relative to the screen where the global coordinates are located. If the global coordinates are not on any screen, the coordinates are converted relative to the primary screen by default. |
| [convertRelativeToGlobalCoordinate](arkts-arkui-display-convertrelativetoglobalcoordinate-f.md#convertrelativetoglobalcoordinate) | Converts relative coordinates (based on the top-left corner of the screen) into global coordinates (based on the top-left corner of the primary screen). This API supports only coordinate conversion between the primary screen and extended screen. |
| [createVirtualScreen](arkts-arkui-display-createvirtualscreen-f.md#createvirtualscreen) | Creates a virtual screen. This API uses a promise to return the result. |
| [destroyVirtualScreen](arkts-arkui-display-destroyvirtualscreen-f.md#destroyvirtualscreen) | Destroys a virtual screen. This API uses a promise to return the result. |
| [getAllDisplay](arkts-arkui-display-getalldisplay-f.md#getalldisplay) | Obtains all Display objects. This API uses an asynchronous callback to return the result. |
| [getAllDisplay](arkts-arkui-display-getalldisplay-f.md#getalldisplay-1) | Obtains all Display objects. This API uses a promise to return the result. |
| [getAllDisplayPhysicalResolution](arkts-arkui-display-getalldisplayphysicalresolution-f.md#getalldisplayphysicalresolution) | Obtains all the display modes supported by the current device, along with the physical screen resolutions for each mode. This API uses a promise to return the result. |
| [getAllDisplays](arkts-arkui-display-getalldisplays-f.md#getalldisplays) | Obtains all Display objects. This API uses an asynchronous callback to return the result. |
| [getAllDisplays](arkts-arkui-display-getalldisplays-f.md#getalldisplays-1) | Obtains all Display objects. This API uses a promise to return the result. |
| [getBrightnessInfo](arkts-arkui-display-getbrightnessinfo-f.md#getbrightnessinfo) | Obtains the screen brightness information of a display. If the screen does not support HDR, the **currentHeadroom** and **maxHeadroom** fields in the returned [BrightnessInfo](arkts-arkui-display-brightnessinfo-i.md)object use the default values. For virtual screens, the **sdrNits** field in the BrightnessInfo object uses the default value. |
| [getCurrentFoldCreaseRegion](arkts-arkui-display-getcurrentfoldcreaseregion-f.md#getcurrentfoldcreaseregion) | Obtains the crease region of the foldable device in the current display mode. |
| [getDefaultDisplay](arkts-arkui-display-getdefaultdisplay-f.md#getdefaultdisplay) | Obtains the default Display object. This API uses an asynchronous callback to return the result. |
| [getDefaultDisplay](arkts-arkui-display-getdefaultdisplay-f.md#getdefaultdisplay-1) | Obtains the default Display object. This API uses a promise to return the result. |
| [getDefaultDisplaySync](arkts-arkui-display-getdefaultdisplaysync-f.md#getdefaultdisplaysync) | Obtains the **Display** object of the screen where the application is located. If multiple abilities of an application are on different screens, the **Display** object of the main screen is returned. If multiple abilities of an application are on the same screen, the **Display** object of the screen is returned. |
| [getDisplayByIdSync](arkts-arkui-display-getdisplaybyidsync-f.md#getdisplaybyidsync) | Obtains a Display object based on the display ID. |
| [getFoldDisplayMode](arkts-arkui-display-getfolddisplaymode-f.md#getfolddisplaymode) | Obtains the display mode of this foldable device. |
| [getFoldStatus](arkts-arkui-display-getfoldstatus-f.md#getfoldstatus) | Obtains the fold status of this foldable device. |
| [getPrimaryDisplaySync](arkts-arkui-display-getprimarydisplaysync-f.md#getprimarydisplaysync) | Obtains the information about the primary display. For devices other than 2-in-1 devices, the Display object obtained is the built-in screen. For 2-in-1 devices with an external screen, the Display object obtained is the primary screen. For 2-in-1 devices without an external screen, the Display object obtained is the built-in screen. |
| [isCaptured](arkts-arkui-display-iscaptured-f.md#iscaptured) | Checks whether the device's screen content is being captured. |
| [isCaptured](arkts-arkui-display-iscaptured-f.md#iscaptured-1) | Check whether the device is captured, projected, or recorded by any app in the bundle name list. |
| [isFoldable](arkts-arkui-display-isfoldable-f.md#isfoldable) | Checks whether this device is foldable. |
| [makeUnique](arkts-arkui-display-makeunique-f.md#makeunique) | Sets the screen to independent display mode. This API uses a promise to return the result. |
| [off](arkts-arkui-display-off-f.md#off) | Unsubscribes from display changes. |
| [off](arkts-arkui-display-off-f.md#off-1) | Unsubscribes from display changes. |
| [off](arkts-arkui-display-off-f.md#off-2) | Unsubscribes from display changes. |
| [off](arkts-arkui-display-off-f.md#off-4) | Unsubscribes from fold status change events of the foldable device. |
| [off](arkts-arkui-display-off-f.md#off-5) | Unsubscribes from folding angle change events of the foldable device. |
| [off](arkts-arkui-display-off-f.md#off-6) | Unsubscribes from events indicating whether the device's screen content is being captured. |
| [off](arkts-arkui-display-off-f.md#off-7) | Unsubscribes from display mode change events of the foldable device. |
| [off](arkts-arkui-display-off-f.md#off-8) | Unsubscribes from events related to screen brightness information changes. |
| [on](arkts-arkui-display-on-f.md#on) | Subscribes to display changes. |
| [on](arkts-arkui-display-on-f.md#on-1) | Subscribes to display changes. |
| [on](arkts-arkui-display-on-f.md#on-2) | Subscribes to display changes. |
| [on](arkts-arkui-display-on-f.md#on-4) | Subscribes to fold status change events of the foldable device.  To subscribe to display mode change events of foldable devices, use [display.on('foldDisplayModeChange')](display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)).  The two are different. In terms of timing, the fold status changes first, and the bottom layer matches the display mode status based on the fold status.  To check whether the content is displayed on the inner or outer screen of the foldable device, use [display.on('foldDisplayModeChange')](display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)). |
| [on](arkts-arkui-display-on-f.md#on-5) | Subscribes to folding angle change events of the foldable device. Note that there are two folding angles for dual-fold axis devices. When oriented with the charging port at the bottom, the hinges are identified from right to left as the first and second fold axes, respectively. |
| [on](arkts-arkui-display-on-f.md#on-6) | Subscribes to events indicating whether the device's screen content is being captured. |
| [on](arkts-arkui-display-on-f.md#on-7) | Subscribes to display mode change events of the foldable device.  To subscribe to fold status change events of foldable devices, use [display.on('foldStatusChange')](display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>)).  The two are different. In terms of timing, the fold status changes first, and the bottom layer matches the display mode status based on the fold status. |
| [on](arkts-arkui-display-on-f.md#on-8) | Subscribes to events related to screen brightness information changes. If the screen does not support HDR, the **currentHeadroom** and **maxHeadroom** fields in the [BrightnessInfo](arkts-arkui-display-brightnessinfo-i.md) object use the default values. For virtual screens, the **sdrNits** field in the BrightnessInfo object uses the default value. |
| [onChangeWithAttribute](arkts-arkui-display-onchangewithattribute-f.md#onchangewithattribute) | Subscribes to changes of specified attributes of a display. |
| [setVirtualScreenSurface](arkts-arkui-display-setvirtualscreensurface-f.md#setvirtualscreensurface) | Sets a surface for a virtual screen. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addVirtualScreenBlocklist](arkts-arkui-display-addvirtualscreenblocklist-f-sys.md#addvirtualscreenblocklist) | Adds windows to the list of windows that are not allowed to be displayed during casting. This API takes effect only for the main window of an application or system windows. This API uses a promise to return the result. |
| [addVirtualScreenSurface](arkts-arkui-display-addvirtualscreensurface-f-sys.md#addvirtualscreensurface) | Add surface for the virtual screen. |
| [hasPrivateWindow](arkts-arkui-display-hasprivatewindow-f-sys.md#hasprivatewindow) | Checks whether there is a visible privacy window on a display. The privacy window can be set by calling [setWindowPrivacyMode()](@ohos.window:window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)). The content in the privacy window cannot be captured or recorded. |
| [off](arkts-arkui-display-off-f-sys.md#off-3) | Unsubscribes from privacy mode changes of this display. When there is a privacy window in the foreground of the display, the display is in privacy mode, and the content in the privacy window cannot be captured or recorded. |
| [on](arkts-arkui-display-on-f-sys.md#on-3) | Subscribes to privacy mode changes of this display. When there is a privacy window in the foreground of the display, the display is in privacy mode, and the content in the privacy window cannot be captured or recorded. |
| [removeVirtualScreenBlocklist](arkts-arkui-display-removevirtualscreenblocklist-f-sys.md#removevirtualscreenblocklist) | Removes windows from the list of windows that are not allowed to be displayed during casting. This API takes effect only for the main window of an application or system windows. This API uses a promise to return the result. |
| [removeVirtualScreenSurface](arkts-arkui-display-removevirtualscreensurface-f-sys.md#removevirtualscreensurface) | Remove surface for the virtual screen. |
| [setFoldDisplayMode](arkts-arkui-display-setfolddisplaymode-f-sys.md#setfolddisplaymode) | Sets the display mode of the foldable device. |
| [setFoldDisplayMode](arkts-arkui-display-setfolddisplaymode-f-sys.md#setfolddisplaymode-1) | Sets the display mode of the foldable device, with the reason for the change specified. |
| [setFoldStatusLocked](arkts-arkui-display-setfoldstatuslocked-f-sys.md#setfoldstatuslocked) | Sets whether to lock the current fold status of the foldable device. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BrightnessInfo](arkts-arkui-display-brightnessinfo-i.md) | Describes the screen brightness information. The information comes from the underlying screen data. |
| [CutoutInfo](arkts-arkui-display-cutoutinfo-i.md) | Describes the unusable area of a display, including punch hole, notch, and curved area of a waterfall display. |
| [Display](arkts-arkui-display-display-i.md) | Implements a Display instance, with attributes and APIs defined.  Before calling any API in Display, you must use [getAllDisplays()](arkts-arkui-display-getalldisplays-f.md#getalldisplays-1) or [getDefaultDisplaySync()](arkts-arkui-display-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1) to obtain a Display instance. |
| [DisplayPhysicalResolution](arkts-arkui-display-displayphysicalresolution-i.md) | Describes the display mode of a device and the corresponding physical screen resolution information. |
| [FoldCreaseRegion](arkts-arkui-display-foldcreaseregion-i.md) | Describes the crease region of a foldable device. |
| [Position](arkts-arkui-display-position-i.md) | Describes a coordinate position. In the global coordinate system, the origin is the top-left corner of the primary screen. In the relative coordinate system, the origin is the top-left corner of the specified screen. |
| [Rect](arkts-arkui-display-rect-i.md) | Describes a rectangle on the display. |
| [RelativePosition](arkts-arkui-display-relativeposition-i.md) | Describes a coordinate position in the relative coordinate system, with the origin in the top-left corner of the screen specified by **displayId**. |
| [RoundedCorner](arkts-arkui-display-roundedcorner-i.md) | Describes a single rounded corner on the screen. |
| [VirtualScreenConfig](arkts-arkui-display-virtualscreenconfig-i.md) | Describes the virtual screen parameters. |
| [WaterfallDisplayAreaRects](arkts-arkui-display-waterfalldisplayarearects-i.md) | Describes the curved area on a waterfall display. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Display](arkts-arkui-display-display-i-sys.md) | Implements a Display instance, with attributes and APIs defined.  Before calling any API in Display, you must use [getAllDisplays()](arkts-arkui-display-getalldisplays-f.md#getalldisplays-1) or [getDefaultDisplaySync()](arkts-arkui-display-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1) to obtain a Display instance. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CornerType](arkts-arkui-display-cornertype-e.md) | Enumerates the types of corners on the screen. |
| [DisplaySourceMode](arkts-arkui-display-displaysourcemode-e.md) | Enumerates the display modes for screen content. |
| [DisplayState](arkts-arkui-display-displaystate-e.md) | Enumerates the states of a display. |
| [FoldDisplayMode](arkts-arkui-display-folddisplaymode-e.md) | Enumerates the display modes of a foldable device. |
| [FoldStatus](arkts-arkui-display-foldstatus-e.md) | Enumerates the fold statuses of a foldable device. For dual-fold axis devices, when oriented with the charging port at the bottom, the hinges are identified from right to left as the first and second fold axes, respectively. |
| [Orientation](arkts-arkui-display-orientation-e.md) | Enumerates the orientations of a display. |
| [ScreenShape](arkts-arkui-display-screenshape-e.md) | Enumerates the screen shapes of a display. |

### Types

| Name | Description |
| --- | --- |
| [BrightnessCallback](arkts-arkui-display-brightnesscallback-t.md) | Defines the callback function used to listen for screen brightness information. |

