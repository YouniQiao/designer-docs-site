# @ohos.screen

The module implements basic screen management. You can use the APIs of this module to obtain a Screen object, listen for screen changes, and create and destroy virtual screens.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { screen } from '@ohos.screen';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createVirtualScreen](arkts-arkui-createvirtualscreen-f-sys.md#createvirtualscreen-1) | Creates a virtual screen. This API uses an asynchronous callback to return the result. |
| [createVirtualScreen](arkts-arkui-createvirtualscreen-f-sys.md#createvirtualscreen-2) | Creates a virtual screen. This API uses a promise to return the result. |
| [destroyVirtualScreen](arkts-arkui-destroyvirtualscreen-f-sys.md#destroyvirtualscreen-1) | Destroys a virtual screen. This API uses an asynchronous callback to return the result. |
| [destroyVirtualScreen](arkts-arkui-destroyvirtualscreen-f-sys.md#destroyvirtualscreen-2) | Destroys a virtual screen. This API uses a promise to return the result. |
| [getAllScreens](arkts-arkui-getallscreens-f-sys.md#getallscreens-1) | Obtains all screens. This API uses an asynchronous callback to return the result. |
| [getAllScreens](arkts-arkui-getallscreens-f-sys.md#getallscreens-2) | Obtains all screens. This API uses an asynchronous callback to return the result. |
| [getAllScreens](arkts-arkui-getallscreens-f-sys.md#getallscreens-3) | Obtains all screens. This API uses a promise to return the result. |
| [getAllScreens](arkts-arkui-getallscreens-f-sys.md#getallscreens-4) | Obtains all screens. This API uses a promise to return the result. |
| [isScreenRotationLocked](arkts-arkui-isscreenrotationlocked-f-sys.md#isscreenrotationlocked-1) | Checks whether auto rotate is locked. This API uses an asynchronous callback to return the result. |
| [isScreenRotationLocked](arkts-arkui-isscreenrotationlocked-f-sys.md#isscreenrotationlocked-2) | Checks whether auto rotate is locked. This API uses a promise to return the result. |
| [makeExpand](arkts-arkui-makeexpand-f-sys.md#makeexpand-1) | Sets the screen to extended mode. This API uses an asynchronous callback to return the result. |
| [makeExpand](arkts-arkui-makeexpand-f-sys.md#makeexpand-2) | Sets the screen to extended mode. This API uses a promise to return the result. |
| [makeMirror](arkts-arkui-makemirror-f-sys.md#makemirror-1) | Sets the screen to mirror mode. This API uses an asynchronous callback to return the result. |
| [makeMirror](arkts-arkui-makemirror-f-sys.md#makemirror-2) | Sets the screen to mirror mode. This API uses a promise to return the result. |
| [makeMirrorWithRegion](arkts-arkui-makemirrorwithregion-f-sys.md#makemirrorwithregion-1) | Sets a rectangle on the screen to mirror mode. This API uses a promise to return the result. After this API is called, you are advised not to rotate or fold the screen further. Otherwise, the mirrored content may be abnormal. |
| [makeUnique](arkts-arkui-makeunique-f-sys.md#makeunique-1) | Sets the screen to independent display mode. This API uses a promise to return the result. |
| [off](arkts-arkui-off-f-sys.md#off-1) | Unsubscribes from events related to the screen state. |
| [off](arkts-arkui-off-f-sys.md#off-2) | Unsubscribes from events related to the screen state. |
| [off](arkts-arkui-off-f-sys.md#off-3) | Unsubscribes from events related to the screen state. |
| [on](arkts-arkui-on-f-sys.md#on-1) | Subscribes to events related to the screen state. |
| [on](arkts-arkui-on-f-sys.md#on-2) | Subscribes to events related to the screen state. |
| [on](arkts-arkui-on-f-sys.md#on-3) | Subscribes to events related to the screen state. |
| [resizeVirtualScreen](arkts-arkui-resizevirtualscreen-f-sys.md#resizevirtualscreen-1) | Resizes the virtual screen. This API uses a promise to return the result. |
| [setMultiScreenMode](arkts-arkui-setmultiscreenmode-f-sys.md#setmultiscreenmode-1) | Sets the display mode (mirror or extend) of the secondary screen. This API uses a promise to return the result. If both **primaryScreenId** and **secondaryScreenId** are set to **0**, the content is displayed only on the secondary screen. |
| [setMultiScreenRelativePosition](arkts-arkui-setmultiscreenrelativeposition-f-sys.md#setmultiscreenrelativeposition-1) | Sets the positions of the primary and secondary screens in extend mode. This API uses a promise to return the result. |
| [setScreenPrivacyMaskImage](arkts-arkui-setscreenprivacymaskimage-f-sys.md#setscreenprivacymaskimage-1) | Sets a privacy mask image for the screen. This API uses a promise to return the result. |
| [setScreenRotationLocked](arkts-arkui-setscreenrotationlocked-f-sys.md#setscreenrotationlocked-1) | Sets whether to lock auto rotate. This API uses an asynchronous callback to return the result. |
| [setScreenRotationLocked](arkts-arkui-setscreenrotationlocked-f-sys.md#setscreenrotationlocked-2) | Sets whether to lock auto rotate. This API uses a promise to return the result. |
| [setVirtualScreenSurface](arkts-arkui-setvirtualscreensurface-f-sys.md#setvirtualscreensurface-1) | Sets a surface for a virtual screen. The virtual screen displays the content of the surface. This API uses an asynchronous callback to return the result. |
| [setVirtualScreenSurface](arkts-arkui-setvirtualscreensurface-f-sys.md#setvirtualscreensurface-2) | Sets a surface for a virtual screen. The virtual screen displays the content of the surface. This API uses a promise to return the result. |
| [stopExpand](arkts-arkui-stopexpand-f-sys.md#stopexpand-1) | Stops extended mode. This API uses an asynchronous callback to return the result. |
| [stopExpand](arkts-arkui-stopexpand-f-sys.md#stopexpand-2) | Stops extended mode. This API uses a promise to return the result. |
| [stopMirror](arkts-arkui-stopmirror-f-sys.md#stopmirror-1) | Stops mirror mode. This API uses an asynchronous callback to return the result. |
| [stopMirror](arkts-arkui-stopmirror-f-sys.md#stopmirror-2) | Stops mirror mode. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ExpandOption](arkts-arkui-expandoption-i-sys.md) | Defines the parameters for expanding a screen. |
| [MultiScreenPositionOptions](arkts-arkui-multiscreenpositionoptions-i-sys.md) | Describes the screen position information. |
| [OrientationOptions](arkts-arkui-orientationoptions-i-sys.md) | The parameter of setting orientation |
| [Rect](arkts-arkui-rect-i-sys.md) | Describes the rectangle information. |
| [Screen](arkts-arkui-screen-i-sys.md) | Defines the [physical screen](../../../../displaymanager/display-terminology.md#physical-screen) instance. Before calling any API in Screen, you must use [getAllScreens()](arkts-arkui-getallscreens-f-sys.md#getallscreens-1) or [createVirtualScreen()](arkts-arkui-createvirtualscreen-f-sys.md#createvirtualscreen-1) to obtain a Screen instance. |
| [ScreenModeInfo](arkts-arkui-screenmodeinfo-i-sys.md) | Defines the screen mode information. |
| [VirtualScreenOption](arkts-arkui-virtualscreenoption-i-sys.md) | Defines virtual screen parameters. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [MultiScreenMode](arkts-arkui-multiscreenmode-e-sys.md) | Enumerates the display modes of secondary screens. |
| [Orientation](arkts-arkui-orientation-e-sys.md) | Enumerates the screen orientations. |
| [ScreenSourceMode](arkts-arkui-screensourcemode-e-sys.md) | Enumerates the sources of the content displayed on the screen. |
<!--DelEnd-->

