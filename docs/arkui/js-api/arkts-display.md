# @ohos.display

The **Display** module provides APIs for managing displays, such as obtaining information about the default display, obtaining information about all displays, and listening for the addition and removal of displays.

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { display } from '@ohos.display';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [convertGlobalToRelativeCoordinate](arkts-arkui-convertglobaltorelativecoordinate-f.md#convertglobaltorelativecoordinate-1) | Converts global coordinates (based on the top-left corner of the primary screen) into relative coordinates (based on the top-left corner of the screen specified by **displayId**). If **displayId** is not passed, the coordinates are converted relative to the screen where the global coordinates are located. If the global coordinates are not on any screen, the coordinates are converted relative to the primary screen by default. |
| [convertRelativeToGlobalCoordinate](arkts-arkui-convertrelativetoglobalcoordinate-f.md#convertrelativetoglobalcoordinate-1) | Converts relative coordinates (based on the top-left corner of the screen) into global coordinates (based on the top-left corner of the primary screen). This API supports only coordinate conversion between the primary screen and extended screen. |
| [createVirtualScreen](arkts-arkui-createvirtualscreen-f.md#createvirtualscreen-1) | Creates a virtual screen. This API uses a promise to return the result. |
| [destroyVirtualScreen](arkts-arkui-destroyvirtualscreen-f.md#destroyvirtualscreen-1) | Destroys a virtual screen. This API uses a promise to return the result. |
| [getAllDisplay](arkts-arkui-getalldisplay-f.md#getalldisplay-1) | Obtains all Display objects. This API uses an asynchronous callback to return the result. |
| [getAllDisplay](arkts-arkui-getalldisplay-f.md#getalldisplay-2) | Obtains all Display objects. This API uses a promise to return the result. |
| [getAllDisplayPhysicalResolution](arkts-arkui-getalldisplayphysicalresolution-f.md#getalldisplayphysicalresolution-1) | Obtains all the display modes supported by the current device, along with the physical screen resolutions for each mode. This API uses a promise to return the result. |
| [getAllDisplays](arkts-arkui-getalldisplays-f.md#getalldisplays-1) | Obtains all Display objects. This API uses an asynchronous callback to return the result. |
| [getAllDisplays](arkts-arkui-getalldisplays-f.md#getalldisplays-2) | Obtains all Display objects. This API uses a promise to return the result. |
| [getBrightnessInfo](arkts-arkui-getbrightnessinfo-f.md#getbrightnessinfo-1) | Obtains the screen brightness information of a display. If the screen does not support HDR, the **currentHeadroom** and **maxHeadroom** fields in the returned [BrightnessInfo](arkts-arkui-brightnessinfo-i.md#brightnessinfo) object use the default values. For virtual screens, the **sdrNits** field in the BrightnessInfo object uses the default value. |
| [getCurrentFoldCreaseRegion](arkts-arkui-getcurrentfoldcreaseregion-f.md#getcurrentfoldcreaseregion-1) | Obtains the crease region of the foldable device in the current display mode. |
| [getDefaultDisplay](arkts-arkui-getdefaultdisplay-f.md#getdefaultdisplay-1) | Obtains the default Display object. This API uses an asynchronous callback to return the result. |
| [getDefaultDisplay](arkts-arkui-getdefaultdisplay-f.md#getdefaultdisplay-2) | Obtains the default Display object. This API uses a promise to return the result. |
| [getDefaultDisplaySync](arkts-arkui-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1) | Obtains the **Display** object of the screen where the application is located. If multiple abilities of an application are on different screens, the **Display** object of the main screen is returned. If multiple abilities of an application are on the same screen, the **Display** object of the screen is returned. |
| [getDisplayByIdSync](arkts-arkui-getdisplaybyidsync-f.md#getdisplaybyidsync-1) | Obtains a Display object based on the display ID. |
| [getFoldDisplayMode](arkts-arkui-getfolddisplaymode-f.md#getfolddisplaymode-1) | Obtains the display mode of this foldable device. |
| [getFoldStatus](arkts-arkui-getfoldstatus-f.md#getfoldstatus-1) | Obtains the fold status of this foldable device. |
| [getPrimaryDisplaySync](arkts-arkui-getprimarydisplaysync-f.md#getprimarydisplaysync-1) | Obtains the information about the primary display. For devices other than 2-in-1 devices, the Display object obtained is the built-in screen. For 2-in-1 devices with an external screen, the Display object obtained is the primary screen. For 2-in-1 devices without an external screen, the Display object obtained is the built-in screen. |
| [isCaptured](arkts-arkui-iscaptured-f.md#iscaptured-1) | Checks whether the device's screen content is being captured. |
| [isCaptured](arkts-arkui-iscaptured-f.md#iscaptured-2) | Check whether the device is captured, projected, or recorded by any app in the bundle name list. |
| [isFoldable](arkts-arkui-isfoldable-f.md#isfoldable-1) | Checks whether this device is foldable. |
| [makeUnique](arkts-arkui-makeunique-f.md#makeunique-1) | Sets the screen to independent display mode. This API uses a promise to return the result. |
| [off](arkts-arkui-off-f.md#off-1) | Unsubscribes from display changes. |
| [off](arkts-arkui-off-f.md#off-2) | Unsubscribes from display changes. |
| [off](arkts-arkui-off-f.md#off-3) | Unsubscribes from display changes. |
| [off](arkts-arkui-off-f.md#off-5) | Unsubscribes from fold status change events of the foldable device. |
| [off](arkts-arkui-off-f.md#off-6) | Unsubscribes from folding angle change events of the foldable device. |
| [off](arkts-arkui-off-f.md#off-7) | Unsubscribes from events indicating whether the device's screen content is being captured. |
| [off](arkts-arkui-off-f.md#off-8) | Unsubscribes from display mode change events of the foldable device. |
| [off](arkts-arkui-off-f.md#off-9) | Unsubscribes from events related to screen brightness information changes. |
| [on](arkts-arkui-on-f.md#on-1) | Subscribes to display changes. |
| [on](arkts-arkui-on-f.md#on-2) | Subscribes to display changes. |
| [on](arkts-arkui-on-f.md#on-3) | Subscribes to display changes. |
| [on](arkts-arkui-on-f.md#on-5) | Subscribes to fold status change events of the foldable device. To subscribe to display mode change events of foldable devices, use [display.on('foldDisplayModeChange')](arkts-arkui-on-f.md#on-8) . The two are different. In terms of timing, the fold status changes first, and the bottom layer matches the display mode status based on the fold status. To check whether the content is displayed on the inner or outer screen of the foldable device, use [display.on('foldDisplayModeChange')](arkts-arkui-on-f.md#on-8) . |
| [on](arkts-arkui-on-f.md#on-6) | Subscribes to folding angle change events of the foldable device. Note that there are two folding angles for dual- fold axis devices. When oriented with the charging port at the bottom, the hinges are identified from right to left as the first and second fold axes, respectively. |
| [on](arkts-arkui-on-f.md#on-7) | Subscribes to events indicating whether the device's screen content is being captured. |
| [on](arkts-arkui-on-f.md#on-8) | Subscribes to display mode change events of the foldable device. To subscribe to fold status change events of foldable devices, use [display.on('foldStatusChange')](arkts-arkui-on-f.md#on-5). The two are different. In terms of timing, the fold status changes first, and the bottom layer matches the display mode status based on the fold status. |
| [on](arkts-arkui-on-f.md#on-9) | Subscribes to events related to screen brightness information changes. If the screen does not support HDR, the **currentHeadroom** and **maxHeadroom** fields in the [BrightnessInfo](arkts-arkui-brightnessinfo-i.md#brightnessinfo) object use the default values. For virtual screens, the **sdrNits** field in the BrightnessInfo object uses the default value. |
| [onChangeWithAttribute](arkts-arkui-onchangewithattribute-f.md#onchangewithattribute-1) | Subscribes to changes of specified attributes of a display. |
| [setVirtualScreenSurface](arkts-arkui-setvirtualscreensurface-f.md#setvirtualscreensurface-1) | Sets a surface for a virtual screen. **surfaceId** identifies a surface, the content of which will be shown on this virtual screen. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addVirtualScreenBlocklist](arkts-arkui-addvirtualscreenblocklist-f-sys.md#addvirtualscreenblocklist-1) | Adds windows to the list of windows that are not allowed to be displayed during casting. This API takes effect only for the main window of an application or system windows. This API uses a promise to return the result. |
| [addVirtualScreenSurface](arkts-arkui-addvirtualscreensurface-f-sys.md#addvirtualscreensurface-1) | Add surface for the virtual screen. |
| [hasPrivateWindow](arkts-arkui-hasprivatewindow-f-sys.md#hasprivatewindow-1) | Checks whether there is a visible privacy window on a display. The privacy window can be set by calling [setWindowPrivacyMode()](@ohos.window:window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback&lt;void&gt;)). The content in the privacy window cannot be captured or recorded. |
| [off](arkts-arkui-off-f-sys.md#off-4) | Unsubscribes from privacy mode changes of this display. When there is a privacy window in the foreground of the display, the display is in privacy mode, and the content in the privacy window cannot be captured or recorded. |
| [on](arkts-arkui-on-f-sys.md#on-4) | Subscribes to privacy mode changes of this display. When there is a privacy window in the foreground of the display , the display is in privacy mode, and the content in the privacy window cannot be captured or recorded. |
| [removeVirtualScreenBlocklist](arkts-arkui-removevirtualscreenblocklist-f-sys.md#removevirtualscreenblocklist-1) | Removes windows from the list of windows that are not allowed to be displayed during casting. This API takes effect only for the main window of an application or system windows. This API uses a promise to return the result. |
| [removeVirtualScreenSurface](arkts-arkui-removevirtualscreensurface-f-sys.md#removevirtualscreensurface-1) | Remove surface for the virtual screen. |
| [setFoldDisplayMode](arkts-arkui-setfolddisplaymode-f-sys.md#setfolddisplaymode-1) | Sets the display mode of the foldable device. |
| [setFoldDisplayMode](arkts-arkui-setfolddisplaymode-f-sys.md#setfolddisplaymode-2) | Sets the display mode of the foldable device, with the reason for the change specified. |
| [setFoldStatusLocked](arkts-arkui-setfoldstatuslocked-f-sys.md#setfoldstatuslocked-1) | Sets whether to lock the current fold status of the foldable device. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BrightnessInfo](arkts-arkui-brightnessinfo-i.md) | Describes the screen brightness information. The information comes from the underlying screen data. |
| [CutoutInfo](arkts-arkui-cutoutinfo-i.md) | Describes the unusable area of a display, including punch hole, notch, and curved area of a waterfall display. |
| [Display](arkts-arkui-display-i.md) | Implements a Display instance, with attributes and APIs defined. Before calling any API in Display, you must use [getAllDisplays()](arkts-arkui-getalldisplays-f.md#getalldisplays-1) or [getDefaultDisplaySync()](arkts-arkui-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1) to obtain a Display instance. |
| [DisplayPhysicalResolution](arkts-arkui-displayphysicalresolution-i.md) | Describes the display mode of a device and the corresponding physical screen resolution information. |
| [FoldCreaseRegion](arkts-arkui-foldcreaseregion-i.md) | Describes the crease region of a foldable device. |
| [Position](arkts-arkui-position-i.md) | Describes a coordinate position. In the global coordinate system, the origin is the top-left corner of the primary screen. In the relative coordinate system, the origin is the top-left corner of the specified screen. |
| [Rect](arkts-arkui-rect-i.md) | Describes a rectangle on the display. |
| [RelativePosition](arkts-arkui-relativeposition-i.md) | Describes a coordinate position in the relative coordinate system, with the origin in the top-left corner of the screen specified by **displayId**. |
| [RoundedCorner](arkts-arkui-roundedcorner-i.md) | Describes a single rounded corner on the screen. |
| [VirtualScreenConfig](arkts-arkui-virtualscreenconfig-i.md) | Describes the virtual screen parameters. |
| [WaterfallDisplayAreaRects](arkts-arkui-waterfalldisplayarearects-i.md) | Describes the curved area on a waterfall display. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Display](arkts-arkui-display-i-sys.md) | Implements a Display instance, with attributes and APIs defined. Before calling any API in Display, you must use [getAllDisplays()](arkts-arkui-getalldisplays-f.md#getalldisplays-1) or [getDefaultDisplaySync()](arkts-arkui-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1) to obtain a Display instance. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CornerType](arkts-arkui-cornertype-e.md) | Enumerates the types of corners on the screen. |
| [DisplaySourceMode](arkts-arkui-displaysourcemode-e.md) | Enumerates the display modes for screen content. |
| [DisplayState](arkts-arkui-displaystate-e.md) | Enumerates the states of a display. |
| [FoldDisplayMode](arkts-arkui-folddisplaymode-e.md) | Enumerates the display modes of a foldable device. &gt; **NOTE** &gt; For foldable devices where both the inner and outer screens can serve as the primary screen �� like large or wide- &gt; folding models �� the inner screen's display mode is **FOLD_DISPLAY_MODE_FULL**, and the outer screen's display &gt; mode is **FOLD_DISPLAY_MODE_MAIN**. &gt; For foldable devices where the outer screen serves only as an auxiliary display �� like small-folding models �� the &gt; inner screen's display mode is **FOLD_DISPLAY_MODE_MAIN**, and the outer screen's display mode is &gt; **FOLD_DISPLAY_MODE_SUB**. |
| [FoldStatus](arkts-arkui-foldstatus-e.md) | Enumerates the fold statuses of a foldable device. For dual-fold axis devices, when oriented with the charging port at the bottom, the hinges are identified from right to left as the first and second fold axes, respectively. &gt; **NOTE** &gt; Devices with only one fold axis can be in the **FOLD_STATUS_EXPANDED**, **FOLD_STATUS_FOLDED**, or &gt; **FOLD_STATUS_HALF_FOLDED** state. &gt; Devices with two fold axes can be in any of the states provided in the table above, except for &gt; **FOLD_STATUS_UNKNOWN**, which indicates an unusable fold status. |
| [Orientation](arkts-arkui-orientation-e.md) | Enumerates the orientations of a display. |
| [ScreenShape](arkts-arkui-screenshape-e.md) | Enumerates the screen shapes of a display. |

### Types

| Name | Description |
| --- | --- |
| [BrightnessCallback](arkts-arkui-brightnesscallback-t.md) | Defines the callback function used to listen for screen brightness information. |

