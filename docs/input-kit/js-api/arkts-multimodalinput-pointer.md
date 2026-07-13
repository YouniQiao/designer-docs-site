# @ohos.multimodalInput.pointer

The **pointer** module provides APIs related to pointer attribute management, such as querying and setting pointer
attributes.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Pointer

## Modules to Import

```TypeScript
import { pointer } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getPointerStyle](arkts-input-getpointerstyle-f.md#getpointerstyle-1) | Obtains the mouse pointer style type of a specified window. This API can obtain only the mouse pointer style typeof windows within the current application process. This API uses an asynchronous callback to return the result. |
| [getPointerStyle](arkts-input-getpointerstyle-f.md#getpointerstyle-2) | Obtains the mouse pointer style type. This API can obtain only the mouse pointer style type of windows within thecurrent application process. This API uses a promise to return the result. |
| [getPointerStyleSync](arkts-input-getpointerstylesync-f.md#getpointerstylesync-1) | Queries the mouse pointer style type of a specified window, such as east arrow, west arrow, south arrow, and northarrow. This API can obtain only the mouse pointer style type of windows within the current application process. |
| [isPointerVisible](arkts-input-ispointervisible-f.md#ispointervisible-1) | Obtains the visible status of the mouse pointer. This API uses an asynchronous callback to return the result. |
| [isPointerVisible](arkts-input-ispointervisible-f.md#ispointervisible-2) | Obtains the visible status of the mouse pointer. This API uses a promise to return the result. |
| [isPointerVisibleSync](arkts-input-ispointervisiblesync-f.md#ispointervisiblesync-1) | Checks whether the mouse pointer is visible in the current window. This API returns the result synchronously. |
| [setCustomCursor](arkts-input-setcustomcursor-f.md#setcustomcursor-1) | Sets a custom pointer style for a specified window. This API can set only the custom pointer style of windowswithin the current application process. For details about how to set the custom pointer style of the host windowthrough the **UIExtensionAbility** process, see[setCustomCursor](../../apis-arkui/arkts-apis/arkts-arkui-cursorcontroller-c.md#setcustomcursor-1). This API uses a promise to returnthe result. |
| [setCustomCursor](arkts-input-setcustomcursor-f.md#setcustomcursor-2) | Sets a custom pointer style for a specified window. This API can set only the custom pointer style of windowswithin the current application process. For details about how to set the custom pointer style of the host windowthrough the **UIExtensionAbility** process, see[setCustomCursor](../../apis-arkui/arkts-apis/arkts-arkui-cursorcontroller-c.md#setcustomcursor-1). This API uses a promise to returnthe result.The cursor may be switched back to the system style in the following cases: application window layout change, hotzone switching, page redirection, moving of the cursor out of the window and then back to the window, or moving ofthe cursor in different areas of the window. In this case, you need to reset the cursor style. |
| [setCustomCursorSync](arkts-input-setcustomcursorsync-f.md#setcustomcursorsync-1) | Sets a custom pointer style for a specified window synchronously. This API can set only the custom pointer style ofwindows within the current application process. For details about how to set the custom pointer style of the hostwindow through the **UIExtensionAbility** process, see[setCustomCursor](../../apis-arkui/arkts-apis/arkts-arkui-cursorcontroller-c.md#setcustomcursor-1). |
| [setPointerStyle](arkts-input-setpointerstyle-f.md#setpointerstyle-1) | Sets the mouse pointer style type for a specified window. This API can set only the mouse pointer style type ofwindows within the current application process. For details about how to set the mouse pointer style type of thehost window through the **UIExtensionAbility** process, see[setCursor](../../apis-arkui/arkts-apis/arkts-arkui-cursorcontroller-c.md#setcursor-1). This API uses an asynchronous callback toreturn the result. |
| [setPointerStyle](arkts-input-setpointerstyle-f.md#setpointerstyle-2) | Sets the mouse pointer style type for a specified window. This API can set only the mouse pointer style type ofwindows within the current application process. For details about how to set the mouse pointer style type of thehost window through the **UIExtensionAbility** process, see[setCursor](../../apis-arkui/arkts-apis/arkts-arkui-cursorcontroller-c.md#setcursor-1). This uses a promise to return the result. |
| [setPointerStyleSync](arkts-input-setpointerstylesync-f.md#setpointerstylesync-1) | Sets the mouse pointer style type for a specified window and returns the result synchronously. This API can setonly the mouse pointer style type of windows within the current application process. For details about how to setthe mouse pointer style type of the host window through the **UIExtensionAbility** process, see[setCursor](../../apis-arkui/arkts-apis/arkts-arkui-cursorcontroller-c.md#setcursor-1). |
| [setPointerVisible](arkts-input-setpointervisible-f.md#setpointervisible-1) | Sets whether the mouse pointer is visible in the current window. This API uses an asynchronous callback to returnthe result. |
| [setPointerVisible](arkts-input-setpointervisible-f.md#setpointervisible-2) | Sets whether the mouse pointer is visible in the current window. This API uses a promise to return the result. |
| [setPointerVisibleSync](arkts-input-setpointervisiblesync-f.md#setpointervisiblesync-1) | Sets whether the mouse pointer is visible in the current window. This API returns the result synchronously. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getHoverScrollState](arkts-input-gethoverscrollstate-f-sys.md#gethoverscrollstate-1) | Obtains the mouse hover scrolling switch state. This API uses an asynchronous callback to return the result. |
| [getHoverScrollState](arkts-input-gethoverscrollstate-f-sys.md#gethoverscrollstate-2) | Obtains the status of the mouse hover scroll switch. This API uses a promise to return the result. |
| [getMousePrimaryButton](arkts-input-getmouseprimarybutton-f-sys.md#getmouseprimarybutton-1) | Obtains the current primary mouse button. This API uses an asynchronous callback to return the result. |
| [getMousePrimaryButton](arkts-input-getmouseprimarybutton-f-sys.md#getmouseprimarybutton-2) | Obtains the current primary mouse button. This API uses a promise to return the result. |
| [getMouseScrollDirection](arkts-input-getmousescrolldirection-f-sys.md#getmousescrolldirection-1) | Obtains the scroll direction of the mouse wheel. This API uses a promise to return the result asynchronously. |
| [getMouseScrollRows](arkts-input-getmousescrollrows-f-sys.md#getmousescrollrows-1) | Obtains the number of mouse scroll lines. This API uses an asynchronous callback to return the result. |
| [getMouseScrollRows](arkts-input-getmousescrollrows-f-sys.md#getmousescrollrows-2) | Obtains the number of mouse scroll lines. This API uses a promise to return the result. |
| [getPointerColor](arkts-input-getpointercolor-f-sys.md#getpointercolor-1) | Obtains the mouse pointer color. This API uses an asynchronous callback to return the result. |
| [getPointerColor](arkts-input-getpointercolor-f-sys.md#getpointercolor-2) | Obtains the current mouse pointer color. This API uses a promise to return the result. |
| [getPointerColorSync](arkts-input-getpointercolorsync-f-sys.md#getpointercolorsync-1) | Obtains the pointer color. This API returns the result synchronously. |
| [getPointerSize](arkts-input-getpointersize-f-sys.md#getpointersize-1) | Obtains the current mouse pointer size. This API uses an asynchronous callback to return the result. |
| [getPointerSize](arkts-input-getpointersize-f-sys.md#getpointersize-2) | Obtains the current mouse pointer size. This API uses a promise to return the result. |
| [getPointerSizeSync](arkts-input-getpointersizesync-f-sys.md#getpointersizesync-1) | Obtains the pointer size. This API returns the result synchronously. |
| [getPointerSpeed](arkts-input-getpointerspeed-f-sys.md#getpointerspeed-1) | Obtains the mouse pointer speed. This API uses an asynchronous callback to return the result. |
| [getPointerSpeed](arkts-input-getpointerspeed-f-sys.md#getpointerspeed-2) | Obtains the mouse pointer speed. This API uses a promise to return the result. |
| [getPointerSpeedSync](arkts-input-getpointerspeedsync-f-sys.md#getpointerspeedsync-1) | Obtains the mouse pointer speed. This API returns the result synchronously. |
| [getTouchpadDoubleTapAndDragState](arkts-input-gettouchpaddoubletapanddragstate-f-sys.md#gettouchpaddoubletapanddragstate-1) | Obtains the touchpad double-tap and drag switch state. This API uses an asynchronous callback to return the result. |
| [getTouchpadDoubleTapAndDragState](arkts-input-gettouchpaddoubletapanddragstate-f-sys.md#gettouchpaddoubletapanddragstate-2) | Obtains the touchpad double-tap and drag switch state. This API uses a promise to return the result. |
| [getTouchpadPinchSwitch](arkts-input-gettouchpadpinchswitch-f-sys.md#gettouchpadpinchswitch-1) | Obtains the touchpad pinch switch state. This API uses an asynchronous callback to return the result. |
| [getTouchpadPinchSwitch](arkts-input-gettouchpadpinchswitch-f-sys.md#gettouchpadpinchswitch-2) | Obtains the touchpad pinch switch state. This API uses a promise to return the result. |
| [getTouchpadPointerSpeed](arkts-input-gettouchpadpointerspeed-f-sys.md#gettouchpadpointerspeed-1) | Obtains the touchpad pointer speed. This API uses an asynchronous callback to return the result. |
| [getTouchpadPointerSpeed](arkts-input-gettouchpadpointerspeed-f-sys.md#gettouchpadpointerspeed-2) | Obtains the touchpad pointer speed. This API uses a promise to return the result. |
| [getTouchpadRightClickType](arkts-input-gettouchpadrightclicktype-f-sys.md#gettouchpadrightclicktype-1) | Obtains the touchpad right-click menu type. This API uses an asynchronous callback to return the result. |
| [getTouchpadRightClickType](arkts-input-gettouchpadrightclicktype-f-sys.md#gettouchpadrightclicktype-2) | Obtains the touchpad right-click menu type. This API uses a promise to return the result. |
| [getTouchpadScrollDirection](arkts-input-gettouchpadscrolldirection-f-sys.md#gettouchpadscrolldirection-1) | Obtains the touchpad scroll direction. This API uses an asynchronous callback to return the result. |
| [getTouchpadScrollDirection](arkts-input-gettouchpadscrolldirection-f-sys.md#gettouchpadscrolldirection-2) | Obtains the scroll direction of the touchpad. This API uses a promise to return the result. |
| [getTouchpadScrollSwitch](arkts-input-gettouchpadscrollswitch-f-sys.md#gettouchpadscrollswitch-1) | Obtains the touchpad scroll switch state. This API uses an asynchronous callback to return the result. |
| [getTouchpadScrollSwitch](arkts-input-gettouchpadscrollswitch-f-sys.md#gettouchpadscrollswitch-2) | Obtains the touchpad scroll switch state. This API uses a promise to return the result. |
| [getTouchpadSwipeSwitch](arkts-input-gettouchpadswipeswitch-f-sys.md#gettouchpadswipeswitch-1) | Obtains the touchpad multi-finger swipe switch state. This API uses an asynchronous callback to return the result. |
| [getTouchpadSwipeSwitch](arkts-input-gettouchpadswipeswitch-f-sys.md#gettouchpadswipeswitch-2) | Obtains the touchpad multi-finger swipe switch state. This API uses a promise to return the result. |
| [getTouchpadTapSwitch](arkts-input-gettouchpadtapswitch-f-sys.md#gettouchpadtapswitch-1) | Obtains the touchpad tap switch state. This API uses an asynchronous callback to return the result. |
| [getTouchpadTapSwitch](arkts-input-gettouchpadtapswitch-f-sys.md#gettouchpadtapswitch-2) | Obtains the touchpad tap switch state. This API uses a promise to return the result. |
| [setHoverScrollState](arkts-input-sethoverscrollstate-f-sys.md#sethoverscrollstate-1) | Sets the mouse hover scrolling switch state. This API uses an asynchronous callback to return the result. |
| [setHoverScrollState](arkts-input-sethoverscrollstate-f-sys.md#sethoverscrollstate-2) | Sets the status of the mouse hover scroll switch. This API uses a promise to return the result. |
| [setMousePrimaryButton](arkts-input-setmouseprimarybutton-f-sys.md#setmouseprimarybutton-1) | Sets the primary mouse button. This API uses an asynchronous callback to return the result. |
| [setMousePrimaryButton](arkts-input-setmouseprimarybutton-f-sys.md#setmouseprimarybutton-2) | Sets the primary mouse button. This API uses a promise to return the result. |
| [setMouseScrollDirection](arkts-input-setmousescrolldirection-f-sys.md#setmousescrolldirection-1) | Sets the scroll direction of the mouse wheel. This API uses a promise to return the result asynchronously. |
| [setMouseScrollRows](arkts-input-setmousescrollrows-f-sys.md#setmousescrollrows-1) | Sets the number of mouse scroll lines. This API uses an asynchronous callback to return the result. |
| [setMouseScrollRows](arkts-input-setmousescrollrows-f-sys.md#setmousescrollrows-2) | Sets the number of mouse scroll lines. This API uses a promise to return the result. |
| [setPointerColor](arkts-input-setpointercolor-f-sys.md#setpointercolor-1) | Sets the mouse pointer color. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; When performing this operation, you need to connect an external device, such as a mouse or Bluetooth device. |
| [setPointerColor](arkts-input-setpointercolor-f-sys.md#setpointercolor-2) | Sets the mouse pointer color. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; When performing this operation, you need to connect an external device, such as a mouse or Bluetooth device. |
| [setPointerColorSync](arkts-input-setpointercolorsync-f-sys.md#setpointercolorsync-1) | Sets the pointer color. This API returns the result synchronously.&gt; **NOTE**&gt;&gt; When performing this operation, you need to connect an external device, such as a mouse or Bluetooth device. |
| [setPointerSize](arkts-input-setpointersize-f-sys.md#setpointersize-1) | Sets the mouse pointer size. This API uses an asynchronous callback to return the result. |
| [setPointerSize](arkts-input-setpointersize-f-sys.md#setpointersize-2) | Sets the mouse pointer size. This API uses a promise to return the result. |
| [setPointerSizeSync](arkts-input-setpointersizesync-f-sys.md#setpointersizesync-1) | Sets the pointer size. This API returns the result synchronously. |
| [setPointerSpeed](arkts-input-setpointerspeed-f-sys.md#setpointerspeed-1) | Sets the mouse pointer speed. This API uses an asynchronous callback to return the result. |
| [setPointerSpeed](arkts-input-setpointerspeed-f-sys.md#setpointerspeed-2) | Sets the mouse pointer speed. This API uses a promise to return the result. |
| [setPointerSpeedSync](arkts-input-setpointerspeedsync-f-sys.md#setpointerspeedsync-1) | Sets the mouse pointer speed. This API returns the result synchronously. |
| [setTouchpadDoubleTapAndDragState](arkts-input-settouchpaddoubletapanddragstate-f-sys.md#settouchpaddoubletapanddragstate-1) | Sets the touchpad double-tap and drag switch state. This API uses an asynchronous callback to return the result. |
| [setTouchpadDoubleTapAndDragState](arkts-input-settouchpaddoubletapanddragstate-f-sys.md#settouchpaddoubletapanddragstate-2) | Sets the touchpad double-tap and drag switch state. This API uses a promise to return the result. |
| [setTouchpadPinchSwitch](arkts-input-settouchpadpinchswitch-f-sys.md#settouchpadpinchswitch-1) | Sets the touchpad pinch switch. This API uses an asynchronous callback to return the result. |
| [setTouchpadPinchSwitch](arkts-input-settouchpadpinchswitch-f-sys.md#settouchpadpinchswitch-2) | Sets the touchpad pinch switch. This API uses a promise to return the result. |
| [setTouchpadPointerSpeed](arkts-input-settouchpadpointerspeed-f-sys.md#settouchpadpointerspeed-1) | Sets the touchpad pointer speed. This API uses an asynchronous callback to return the result. |
| [setTouchpadPointerSpeed](arkts-input-settouchpadpointerspeed-f-sys.md#settouchpadpointerspeed-2) | Sets the touchpad pointer speed. This API uses a promise to return the result. |
| [setTouchpadRightClickType](arkts-input-settouchpadrightclicktype-f-sys.md#settouchpadrightclicktype-1) | Sets the touchpad right-click menu type. This API uses an asynchronous callback to return the result. |
| [setTouchpadRightClickType](arkts-input-settouchpadrightclicktype-f-sys.md#settouchpadrightclicktype-2) | Sets the touchpad right-click menu type. This API uses a promise to return the result. |
| [setTouchpadScrollDirection](arkts-input-settouchpadscrolldirection-f-sys.md#settouchpadscrolldirection-1) | Sets the touchpad scroll direction. This API uses an asynchronous callback to return the result. |
| [setTouchpadScrollDirection](arkts-input-settouchpadscrolldirection-f-sys.md#settouchpadscrolldirection-2) | Sets the touchpad scroll direction. This API uses a promise to return the result. |
| [setTouchpadScrollSwitch](arkts-input-settouchpadscrollswitch-f-sys.md#settouchpadscrollswitch-1) | Sets the touchpad scroll switch. This API uses an asynchronous callback to return the result. |
| [setTouchpadScrollSwitch](arkts-input-settouchpadscrollswitch-f-sys.md#settouchpadscrollswitch-2) | Sets the touchpad scroll switch. This API uses a promise to return the result. |
| [setTouchpadSwipeSwitch](arkts-input-settouchpadswipeswitch-f-sys.md#settouchpadswipeswitch-1) | Sets the touchpad multi-finger swipe switch. This API uses an asynchronous callback to return the result. |
| [setTouchpadSwipeSwitch](arkts-input-settouchpadswipeswitch-f-sys.md#settouchpadswipeswitch-2) | Sets the touchpad multi-finger swipe switch. This API uses a promise to return the result. |
| [setTouchpadTapSwitch](arkts-input-settouchpadtapswitch-f-sys.md#settouchpadtapswitch-1) | Sets the touchpad tap switch. This API uses an asynchronous callback to return the result. |
| [setTouchpadTapSwitch](arkts-input-settouchpadtapswitch-f-sys.md#settouchpadtapswitch-2) | Sets the touchpad tap switch. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CursorConfig](arkts-input-cursorconfig-i.md) | Defines custom cursor configuration. |
| [CustomCursor](arkts-input-customcursor-i.md) | Defines custom cursor resources. |

### Enums

| Name | Description |
| --- | --- |
| [PointerStyle](arkts-input-pointerstyle-e.md) | Mouse pointer style types. |
| [PrimaryButton](arkts-input-primarybutton-e.md) | Type of the primary mouse button. |
| [RightClickType](arkts-input-rightclicktype-e.md) | Enumerates shortcut menu triggering modes. |

