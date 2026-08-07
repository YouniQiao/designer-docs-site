# Window

Represents a window instance, which is the basic unit managed by the window manager.

In the following API examples, you must use  
[getLastWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_,  
[createWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_,or [findWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ to obtain a Window instance (named windowClass in this example) and then call a method in this instance.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn since version 6; ArkTS-Sta since version 23.

<!--Device-window-interface Window--><!--Device-window-interface Window-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## clearWindowMask

```TypeScript
clearWindowMask(): Promise<void>
```

Clear the window mask of window

**Since:** 24

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 24.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-clearWindowMask(): Promise<void>--><!--Device-Window-clearWindowMask(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. 3. The window has not set window mask yet. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows and float windows are supported. |

## clientToGlobalDisplay

ArkTS-Dyn:
```TypeScript
clientToGlobalDisplay(winX: number, winY: number): Position
```

ArkTS-Sta:
```TypeScript
clientToGlobalDisplay(winX: int, winY: int): Position
```

Converts relative coordinates (based on the top-left corner of the current window) into global coordinates (based on the top-left corner of the primary screen).

This API is not supported in windows that are subject to display scaling, such as floating windows on phones or tablets not in free windows mode.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-clientToGlobalDisplay(winX: int, winY: int): Position--><!--Device-Window-clientToGlobalDisplay(winX: int, winY: int): Position-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| winX | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Offset along the X-axis, in pixels, with the top-left corner of the current window as the origin. A positive value moves the window to the right; a negative value moves it to the left. The value must be an integer. Non-integer values are rounded down. |
| winY | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Offset along the Y-axis, in pixels, with the top-left corner of the current window as the origin. A positive value moves the window downward; a negative value moves it upward. The value must be an integer. Non-integer values are rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Coordinates after conversion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. |

## convertOrientationAndRotation

ArkTS-Dyn:
```TypeScript
convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: number): number
```

ArkTS-Sta:
```TypeScript
convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int
```

Enables conversion between window orientation, screen orientation, and screen angle.

Window orientation refers to the direction of the screen where the window resides, using the Window module's definitions for portrait and landscape modes. Window orientations are represented by the digits 0, 1, 2, and 3,corresponding to portrait, reverse landscape, reverse portrait, and landscape, respectively. These definitions match those in [RotationChangeInfo]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ and the  
[Orientation]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ enum. For example, setting **Orientation** to **LANDSCAPE**  
indicates a landscape window orientation.  
    **NOTE**  
    
    The following figure and table show the relationship between the window orientation, screen orientation, and  
    screen angle of a bar-type device.  
    
    !\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_  
    
| Screen Angle| Screen Orientation| Window Orientation|  
| ------- | ------- | ------- |  
| 0 | PORTRAIT | PORTRAIT |  
| 90 | LANDSCAPE | LANDSCAPE\_INVERTED |  
| 180 | PORTRAIT\_INVERTED | PORTRAIT\_INVERTED |  
| 270 | LANDSCAPE\_INVERTED | LANDSCAPE |

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

<!--Device-Window-convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int--><!--Device-Window-convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the value to convert. |
| to | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the target value. |
| value | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Value to convert. The value is an integer. If a floating-point number is entered, the value is rounded down. The value range is [0, 3]. If the value is out of the range, it is an invalid parameter (error code \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is thrown) . |

**Return value:**

| Type | Description |
| --- | --- |
| ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Converted value of the target type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>
```

Creates a child window under the main window, another child window, or floating window. This API uses a promise to return the result.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>--><!--Device-Window-createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the child window. |
| options | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Parameters used for creating the child window. If **decorEnabled** is set to true, the child window does not use an \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. If **decorEnabled** is set to **false**, the child window uses an immersive layout. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;\_\_\_MD\_LINK\_USD\_0\_\_\_&gt; | Promise used to used to return the child window created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error; 3. The subWindow has been created and can not be created again. 4. It is not allowed to create non-secure window when secure extension exists. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: 1. Invalid window type. Only main windows, subwindows, and floating windows are supported; 2. When SubWindowOptions.zLevelAboveParentLoosened is true, only main windows are supported. |

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroys this window. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.destroyWindow](arkts-arkui-window-window-i.md#destroywindow)(callback:

<!--Device-Window-destroy(callback: AsyncCallback<void>): void--><!--Device-Window-destroy(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroys this window. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.destroyWindow](arkts-arkui-window-window-i.md#destroywindow)()

<!--Device-Window-destroy(): Promise<void>--><!--Device-Window-destroy(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## destroyWindow

```TypeScript
destroyWindow(callback: AsyncCallback<void>): void
```

Destroys this window. This API uses an asynchronous callback to return the result. It takes effect for a system window, an application child window, a global floating window, or a modal window.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-destroyWindow(callback: AsyncCallback<void>): void--><!--Device-Window-destroyWindow(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## destroyWindow

```TypeScript
destroyWindow(): Promise<void>
```

Destroys this window. This API uses a promise to return the result. It takes effect for a system window, an application child window, a global floating window, or a modal window.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-destroyWindow(): Promise<void>--><!--Device-Window-destroyWindow(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## disableLandscapeMultiWindow

```TypeScript
disableLandscapeMultiWindow(): Promise<void>
```

Disables the landscape multi-window mode for the UI page that supports the horizontal layout.

This API takes effect only for the main window of the application. In addition, **preferMultiWindowOrientation**  
must be set to **landscape\_auto** in the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ tag in the **module.json5** file.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 26.0.0.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-disableLandscapeMultiWindow(): Promise<void>--><!--Device-Window-disableLandscapeMultiWindow(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Internal task error. |

## enableDrag

```TypeScript
enableDrag(enable: boolean): Promise<void>
```

Enables or disables window dragging. This API takes effect only for system windows, application child windows,global floating windows, and modal windows. This API uses a promise to return the result.

After window dragging is enabled, the window can be resized using the mouse or touch operations.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

<!--Device-Window-enableDrag(enable: boolean): Promise<void>--><!--Device-Window-enableDrag(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | The value true means to enable window dragging, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## enableLandscapeMultiWindow

```TypeScript
enableLandscapeMultiWindow(): Promise<void>
```

Enables the landscape multi-window mode for the UI page that supports the horizontal layout. You are not advised to call this API for the UI page that adopts the vertical layout.

This API takes effect only for the main window of the application. In addition, **preferMultiWindowOrientation**  
must be set to **landscape\_auto** in the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ tag in the **module.json5** file.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 26.0.0.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-enableLandscapeMultiWindow(): Promise<void>--><!--Device-Window-enableLandscapeMultiWindow(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Internal task error. |

## getAvoidArea

```TypeScript
getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void
```

Obtains the area where this window cannot be displayed, for example, the system bar area, notch, gesture area,and soft keyboard area. This API uses an asynchronous callback to return the result.

Main window/Child window:

- In the free-floating window mode under the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state (the window mode is  
**window.WindowStatusType.FLOATING**), only the avoidance area of the fixed soft keyboard type (  
[AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ is **TYPE\_KEYBOARD**) is available.  
- In the free-floating window mode of the main window in the non-freeform window state, only the avoidance area  
of the system bar type ([AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ is **TYPE\_SYSTEM**) is available.  
- In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is  
not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance area is empty.  
- For the child window in the non-freeform window state or non-free-floating window mode, this API can be called  
to obtain the calculated avoidance area only when the position and size of the child window are the same as those of the main window. Otherwise, the obtained avoidance area is empty.

Global floating window, modal window, or system window:

- This API can be called to obtain the avoidance area only after  
[setSystemAvoidAreaEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ is called. Otherwise, the obtained avoidance area is empty.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.getWindowAvoidArea](arkts-arkui-window-window-i.md#getwindowavoidarea)

<!--Device-Window-getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void--><!--Device-Window-getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the area. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidArea&gt; | Yes | Callback used to return the area. |

## getAvoidArea

```TypeScript
getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>
```

Obtains the area where this window cannot be displayed, for example, the system bar area, notch, gesture area,and soft keyboard area. This API uses an asynchronous callback to return the result.

Main window/Child window:

- In the free-floating window mode under the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state (the window mode is  
**window.WindowStatusType.FLOATING**), only the avoidance area of the fixed soft keyboard type (  
[AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ is **TYPE\_KEYBOARD**) is available.  
- In the free-floating window mode of the main window in the non-freeform window state, only the avoidance area  
of the system bar type ([AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ is **TYPE\_SYSTEM**) is available.  
- In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is  
not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance area is empty.  
- For the child window in the non-freeform window state or non-free-floating window mode, this API can be called  
to obtain the calculated avoidance area only when the position and size of the child window are the same as those of the main window. Otherwise, the obtained avoidance area is empty.

Global floating window, modal window, or system window:

- This API can be called to obtain the avoidance area only after  
[setSystemAvoidAreaEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ is called. Otherwise, the obtained avoidance area is empty.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.getWindowAvoidArea](arkts-arkui-window-window-i.md#getwindowavoidarea)

<!--Device-Window-getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>--><!--Device-Window-getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the area. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AvoidArea&gt; | Promise used to return the area. |

## getColorSpace

```TypeScript
getColorSpace(): Promise<ColorSpace>
```

Obtains the color space of this window. This API uses a promise to return the result.

**Since:** 8

**ArkTS mode:** ArkTS-Dyn only, since version 8.

**Deprecated since:** 9

**Substitutes:** [window.Window.getWindowColorSpace](arkts-arkui-window-window-i.md#getwindowcolorspace)

<!--Device-Window-getColorSpace(): Promise<ColorSpace>--><!--Device-Window-getColorSpace(): Promise<ColorSpace>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColorSpace&gt; | Promise used to return the current color space. |

## getColorSpace

```TypeScript
getColorSpace(callback: AsyncCallback<ColorSpace>): void
```

Obtains the color space of this window. This API uses an asynchronous callback to return the result.

**Since:** 8

**ArkTS mode:** ArkTS-Dyn only, since version 8.

**Deprecated since:** 9

**Substitutes:** [window.Window.getWindowColorSpace](arkts-arkui-window-window-i.md#getwindowcolorspace)

<!--Device-Window-getColorSpace(callback: AsyncCallback<ColorSpace>): void--><!--Device-Window-getColorSpace(callback: AsyncCallback<ColorSpace>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;ColorSpace&gt; | Yes | Callback used to return the result. When the color space is obtained successfully, **err** is **undefined**, and **data** is the current color space. |

## getDecorButtonStyle

```TypeScript
getDecorButtonStyle(): DecorButtonStyle
```

Obtains the button style of the decoration bar. The setting takes effect only for the main window and child windows.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-getDecorButtonStyle(): DecorButtonStyle--><!--Device-Window-getDecorButtonStyle(): DecorButtonStyle-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Button style on the decoration bar of the current window. The decoration button area is located in the top-right corner of the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## getGlobalRect

```TypeScript
getGlobalRect(): Rect
```

Obtains the actual display area of this window on the physical screen. This API returns the result synchronously.

This API can determine the actual on-screen location and size of a window that has been resized on certain devices.

**Since:** 13

**ArkTS mode:** ArkTS-Dyn since version 13; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-Window-getGlobalRect(): Rect--><!--Device-Window-getGlobalRect(): Rect-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | A set of four values, which indicates the horizontal distance from the screen's top-left corner to the window's left edge, the vertical distance from the screen's top-left corner to the window's top edge, the width of the window after scaling, and the height of the window after scaling. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Failed to convert result into JS value object. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## getImmersiveModeEnabledState

```TypeScript
getImmersiveModeEnabledState(): boolean
```

Checks whether the immersive layout is enabled for this window.

This API can be called only by the main window and child windows.

The return value is consistent with the settings applied via  
[setImmersiveModeEnabledState()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
[setWindowLayoutFullScreen()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_. If neither of these APIs has been called, the default return value is **false**.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getImmersiveModeEnabledState(): boolean--><!--Device-Window-getImmersiveModeEnabledState(): boolean-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  The value true means the immersive mode is enabled, and false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## getParentWindow

```TypeScript
getParentWindow(): Window
```

Obtains the parent window of this child window.

**Since:** 19

**ArkTS mode:** ArkTS-Dyn since version 19; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Window-getParentWindow(): Window--><!--Device-Window-getParentWindow(): Window-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Parent window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Not called from subWindow. |
| [1300009](../errorcode-window.md#1300009-invalid-parent-window) | The parent window is invalid. |

## getPreferredOrientation

```TypeScript
getPreferredOrientation(): Orientation
```

Obtains the orientation of the window. If no orientation is specified, **window.Orientation.UNSPECIFIED** is returned.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getPreferredOrientation(): Orientation--><!--Device-Window-getPreferredOrientation(): Orientation-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Display orientation. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## getProperties

```TypeScript
getProperties(callback: AsyncCallback<WindowProperties>): void
```

Obtains the properties of this window. This API uses an asynchronous callback to return the result.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.getWindowProperties](arkts-arkui-window-window-i.md#getwindowproperties)

<!--Device-Window-getProperties(callback: AsyncCallback<WindowProperties>): void--><!--Device-Window-getProperties(callback: AsyncCallback<WindowProperties>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowProperties&gt; | Yes | Callback used to return the window properties. |

## getProperties

```TypeScript
getProperties(): Promise<WindowProperties>
```

Obtains the properties of this window. This API uses a promise to return the result.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.getWindowProperties](arkts-arkui-window-window-i.md#getwindowproperties)

<!--Device-Window-getProperties(): Promise<WindowProperties>--><!--Device-Window-getProperties(): Promise<WindowProperties>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WindowProperties&gt; | Promise used to return the window properties. |

## getStatusBarProperty

```TypeScript
getStatusBarProperty(): StatusBarProperty
```

Obtains the properties (for example, text color) of the status bar in the main window.

Calling this API is not supported for child window and will cause error code 1300004.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-getStatusBarProperty(): StatusBarProperty--><!--Device-Window-getStatusBarProperty(): StatusBarProperty-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Status bar properties, such as its color. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## getSubWindowZLevel

ArkTS-Dyn:
```TypeScript
getSubWindowZLevel(): number
```

ArkTS-Sta:
```TypeScript
getSubWindowZLevel(): int
```

Obtains the z-level of the current child window. This API cannot be called by the main window or system window.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-getSubWindowZLevel(): int--><!--Device-Window-getSubWindowZLevel(): int-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Z-level of the child window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function getSubWindowZLevel can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## getTitleButtonRect

```TypeScript
getTitleButtonRect(): TitleButtonRect
```

Obtains the rectangle that holds the minimize, maximize, and close buttons on the title bar of the main window or the decorated child window.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getTitleButtonRect(): TitleButtonRect--><!--Device-Window-getTitleButtonRect(): TitleButtonRect-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Rectangle obtained, which is located in the top-right corner of the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## getUIContext

```TypeScript
getUIContext() : UIContext
```

Obtains a UIContext instance.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-getUIContext() : UIContext--><!--Device-Window-getUIContext() : UIContext-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | UIContext instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## getWindowAvoidArea

```TypeScript
getWindowAvoidArea(type: AvoidAreaType): AvoidArea
```

Obtains the avoid area of this window.

Main window/Child window:

- In the free-floating window mode under the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state (the window mode is  
**window.WindowStatusType.FLOATING**), only the avoidance area of the fixed soft keyboard type (  
[AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ is **TYPE\_KEYBOARD**) is available.  
- In the free-floating window mode of the main window in the non-freeform window state, only the avoidance area  
of the system bar type ([AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ is **TYPE\_SYSTEM**) is available.  
- In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is  
not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance area is empty.  
- For the child window in the non-freeform window state or non-free-floating window mode, this API can be called  
to obtain the calculated avoidance area only when the position and size of the child window are the same as those of the main window. Otherwise, the obtained avoidance area is empty.

Global floating window, modal window, or system window:

- This API can be called to obtain the avoidance area only after  
[setSystemAvoidAreaEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ is called. Otherwise, the obtained avoidance area is empty.

This API is generally applicable to the following scenarios:

- In the [onWindowStageCreate()]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_ callback, this  
API is used to obtain the initial layout avoid area when the application starts.  
- This API is used when a child window needs to temporarily display content and requires layout adjustments to  
avoid certain areas.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-getWindowAvoidArea(type: AvoidAreaType): AvoidArea--><!--Device-Window-getWindowAvoidArea(type: AvoidAreaType): AvoidArea-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the area |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Area where the window cannot be displayed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Convert avoid area failed. |

## getWindowAvoidAreaIgnoringVisibility

```TypeScript
getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea
```

Obtains the avoid area of this application window, even if the avoid area is invisible.

Main window/Child window:

- When the main window is in the free-floating window mode under a non-  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state (the window mode is  
**window.WindowStatusType.FLOATING**), only the avoidance area of the system bar type (  
[AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ is **TYPE\_SYSTEM**) is available.  
- In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is  
not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance area is empty.  
- For the child window in the non-freeform window state or non-free-floating window mode, this API can be called  
to obtain the calculated avoidance area only when the position and size of the child window are the same as those of the main window. Otherwise, the obtained avoidance area is empty.

Global floating window, modal window, or system window:

- This API can be called to obtain the avoidance area only after  
[setSystemAvoidAreaEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ is called. Otherwise, the obtained avoidance area is empty.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

<!--Device-Window-getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea--><!--Device-Window-getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Type of the area. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Area where the window cannot be displayed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Convert avoid area failed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## getWindowColorSpace

```TypeScript
getWindowColorSpace(): ColorSpace
```

Obtains the color space of this window.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getWindowColorSpace(): ColorSpace--><!--Device-Window-getWindowColorSpace(): ColorSpace-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Color space obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## getWindowCornerRadius

ArkTS-Dyn:
```TypeScript
getWindowCornerRadius(): number
```

ArkTS-Sta:
```TypeScript
getWindowCornerRadius(): double
```

Obtains the radius of rounded corners of a child window or floating window. If  
[setWindowCornerRadius()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ is not called to set the radius of rounded corners, this API returns the default radius of rounded corners.

**Since:** 17

**ArkTS mode:** ArkTS-Dyn since version 17; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-Window-getWindowCornerRadius(): double--><!--Device-Window-getWindowCornerRadius(): double-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Radius of the rounded corner of the child window or floating window, measured in vp. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows and float windows are supported. |

## getWindowDecorHeight

ArkTS-Dyn:
```TypeScript
getWindowDecorHeight(): number
```

ArkTS-Sta:
```TypeScript
getWindowDecorHeight(): int
```

Obtains the height of the title bar of this window. This API takes effect for the window that has a title bar and a three-button area. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getWindowDecorHeight(): int--><!--Device-Window-getWindowDecorHeight(): int-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Height of the title bar. The value is an integer in the range [37,112]. The unit is vp. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## getWindowDecorVisible

```TypeScript
getWindowDecorVisible(): boolean
```

Checks whether the title bar of this window is visible. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-getWindowDecorVisible(): boolean--><!--Device-Window-getWindowDecorVisible(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the title bar is visible. **true** if visible, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## getWindowDensityInfo

```TypeScript
getWindowDensityInfo(): WindowDensityInfo
```

Obtains the display density information of this window.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-getWindowDensityInfo(): WindowDensityInfo--><!--Device-Window-getWindowDensityInfo(): WindowDensityInfo-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Display density information of the window. If the return value is [-1, -1, -1], the current device does not support this API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## getWindowLimits

```TypeScript
getWindowLimits(): WindowLimits
```

Obtains the size limits of this application window, in px.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getWindowLimits(): WindowLimits--><!--Device-Window-getWindowLimits(): WindowLimits-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Window size limits. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## getWindowLimitsVP

```TypeScript
getWindowLimitsVP(): WindowLimits
```

Obtains the size limits of this application window, in vp.

For system windows and global floating windows, the default minimum width and height are set to 1 px. The 1 vp value obtained via this API represents the result after rounding calculations.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

<!--Device-Window-getWindowLimitsVP(): WindowLimits--><!--Device-Window-getWindowLimitsVP(): WindowLimits-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Window size limits. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## getWindowProperties

```TypeScript
getWindowProperties(): WindowProperties
```

Obtains the properties of this window.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-getWindowProperties(): WindowProperties--><!--Device-Window-getWindowProperties(): WindowProperties-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Window properties obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## getWindowStateSnapshot

```TypeScript
getWindowStateSnapshot(): Promise<string>
```

Get window state snapshot, including isPcMode information.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-Window-getWindowStateSnapshot(): Promise<string>--><!--Device-Window-getWindowStateSnapshot(): Promise<string>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the window state snapshot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the api due to limited device capabilities. Possible cause: The device does not support the api itself. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed; |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: The internal services of the window are not started normally. |

## getWindowStatus

```TypeScript
getWindowStatus(): WindowStatusType
```

Obtains the mode of this window.
    **NOTE**  
    
    In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, when the window is  
    maximized (covering the entire screen, with a dock bar and status bar on 2-in-1 devices, and a status bar on  
    tablets), the return value differs based on the  
    \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ setting. For  
    versions below 14, the return value is **WindowStatusType::FULL\_SCREEN**. For versions 14 and above, the return  
    value is **WindowStatusType::MAXIMIZE**.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getWindowStatus(): WindowStatusType--><!--Device-Window-getWindowStatus(): WindowStatusType-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Window mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## getWindowSystemBarProperties

```TypeScript
getWindowSystemBarProperties(): SystemBarProperties
```

Obtains the properties of the \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar and \_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_status bar in the main window.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-getWindowSystemBarProperties(): SystemBarProperties--><!--Device-Window-getWindowSystemBarProperties(): SystemBarProperties-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Properties of the \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_status bar. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Create js object failed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## getWindowTransitionAnimation

```TypeScript
getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined
```

Obtains the window transition animation configuration in a specific scenario.

Currently, this API can be used only on the main window of an application.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined--><!--Device-Window-getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transitionType | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Scene of the transition animation. Currently, only the destruction scene is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Transition animation configuration in the corresponding scene. If the [setWindowTransitionAnimation]{ |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. |

## globalDisplayToClient

ArkTS-Dyn:
```TypeScript
globalDisplayToClient(globalDisplayX: number, globalDisplayY: number): Position
```

ArkTS-Sta:
```TypeScript
globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position
```

Converts global coordinates (based on the top-left corner of the primary screen) into relative coordinates (based on the top-left corner of the current window).

This API is not supported in windows that are subject to display scaling, such as floating windows on phones or tablets not in free windows mode.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position--><!--Device-Window-globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| globalDisplayX | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Offset along the X-axis, in pixels, with the top-left corner of the current window as the origin. A positive value moves the window to the right; a negative value moves it to the left. The value must be an integer. Non-integer values are rounded down. |
| globalDisplayY | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Offset along the Y-axis, in pixels, with the top-left corner of the current window as the origin. A positive value moves the window downward; a negative value moves it upward. The value must be an integer. Non-integer values are rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Coordinates after conversion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. |

## isFloatNavigationAvoidAreaEnabled

```TypeScript
isFloatNavigationAvoidAreaEnabled(): boolean
```

Get whether the float navigation avoid area can be obtained.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Window-isFloatNavigationAvoidAreaEnabled(): boolean--><!--Device-Window-isFloatNavigationAvoidAreaEnabled(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | enable - If true, the float navigation avoid area can be obtained. If false, the float navigation avoid area can not be obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Create js value failed. |

## isFocused

```TypeScript
isFocused(): boolean
```

Checks whether this window is focused.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-isFocused(): boolean--><!--Device-Window-isFocused(): boolean-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the window is focused. **true** if focused, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## isGestureBackEnabled

```TypeScript
isGestureBackEnabled(): boolean
```

Obtains whether the back gesture is enabled for the current window. This API can be successfully called only for the main window, and error code 1300004 is returned on other windows.

**Since:** 13

**ArkTS mode:** ArkTS-Dyn since version 13; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-Window-isGestureBackEnabled(): boolean--><!--Device-Window-isGestureBackEnabled(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the back gesture feature is enabled. **true** if enabled, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## isImmersiveLayout

```TypeScript
isImmersiveLayout(): boolean
```

Checks whether this window is in immersive mode.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-isImmersiveLayout(): boolean--><!--Device-Window-isImmersiveLayout(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value true means that the layout is immersive, and false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## isInFreeWindowMode

```TypeScript
isInFreeWindowMode(): boolean
```

Checks whether this window is in \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_mode.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Window-isInFreeWindowMode(): boolean--><!--Device-Window-isInFreeWindowMode(): boolean-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the window is in freeform window mode. **true** if the window is in freeform window mode, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## isInWindowPostureMode

```TypeScript
isInWindowPostureMode(mode: WindowPostureMode): boolean
```

Checks whether this window is in the specified window posture mode.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-isInWindowPostureMode(mode: WindowPostureMode): boolean--><!--Device-Window-isInWindowPostureMode(mode: WindowPostureMode): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The window posture mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether this window is in the specified window posture mode. **true** if the window is in the specified window posture mode. **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: The internal services of the window are not started normally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## isReceiveDragEventEnabled

```TypeScript
isReceiveDragEventEnabled(): boolean
```

Obtains whether the current window can receive [drag events]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-isReceiveDragEventEnabled(): boolean--><!--Device-Window-isReceiveDragEventEnabled(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the current window can receive drag events. \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** if the current window can receive drag events; **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work because the current device does not support this ability. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## isSeparationTouchEnabled

```TypeScript
isSeparationTouchEnabled(): boolean
```

Obtains whether the current window supports the event separation state.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-isSeparationTouchEnabled(): boolean--><!--Device-Window-isSeparationTouchEnabled(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the current window supports the event separation state. \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** if support; **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work because the current device does not support this ability. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## isShowing

```TypeScript
isShowing(callback: AsyncCallback<boolean>): void
```

Checks whether this window is displayed. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.isWindowShowing](arkts-arkui-window-window-i.md#iswindowshowing)

<!--Device-Window-isShowing(callback: AsyncCallback<boolean>): void--><!--Device-Window-isShowing(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result. **true** if the window is displayed, **false** otherwise. |

## isShowing

```TypeScript
isShowing(): Promise<boolean>
```

Checks whether this window is displayed. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.isWindowShowing](arkts-arkui-window-window-i.md#iswindowshowing)

<!--Device-Window-isShowing(): Promise<boolean>--><!--Device-Window-isShowing(): Promise<boolean>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. **true** if the window is displayed, **false** otherwise. |

## isSupportWideGamut

```TypeScript
isSupportWideGamut(): Promise<boolean>
```

Checks whether this window supports the wide-gamut color space. This API uses a promise to return the result.

**Since:** 8

**ArkTS mode:** ArkTS-Dyn only, since version 8.

**Deprecated since:** 9

**Substitutes:** [window.Window.isWindowSupportWideGamut](arkts-arkui-window-window-i.md#iswindowsupportwidegamut)()

<!--Device-Window-isSupportWideGamut(): Promise<boolean>--><!--Device-Window-isSupportWideGamut(): Promise<boolean>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. **true** if the wide-gamut color space is supported, **false** otherwise. |

## isSupportWideGamut

```TypeScript
isSupportWideGamut(callback: AsyncCallback<boolean>): void
```

Checks whether this window supports the wide-gamut color space. This API uses an asynchronous callback to return the result.

**Since:** 8

**ArkTS mode:** ArkTS-Dyn only, since version 8.

**Deprecated since:** 9

**Substitutes:** [window.Window.isWindowSupportWideGamut](arkts-arkui-window-window-i.md#iswindowsupportwidegamut)(callback:

<!--Device-Window-isSupportWideGamut(callback: AsyncCallback<boolean>): void--><!--Device-Window-isSupportWideGamut(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result. **true** if the wide-gamut color space is supported, **false** otherwise. |

## isSystemAvoidAreaEnabled

```TypeScript
isSystemAvoidAreaEnabled(): boolean
```

Checks whether a floating window, modal window, or system window (**WindowType** is a system window) is enabled to access the [avoid area]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-isSystemAvoidAreaEnabled(): boolean--><!--Device-Window-isSystemAvoidAreaEnabled(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the window is enabled to access the avoid area. \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ **true** if enabled, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Create js value failed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. |

## isWindowHighlighted

```TypeScript
isWindowHighlighted(): boolean
```

Checks whether the window is active. To obtain the active state, call this API when the  
[WindowEventType]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ lifecycle is **WINDOW\_ACTIVE**.

You can use  
[on('windowHighlightChange')]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_to listen for status changes and then execute the corresponding service.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-isWindowHighlighted(): boolean--><!--Device-Window-isWindowHighlighted(): boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the window is active. **true** if active, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## isWindowShowing

```TypeScript
isWindowShowing(): boolean
```

Checks whether this window is displayed.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-isWindowShowing(): boolean--><!--Device-Window-isWindowShowing(): boolean-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the window is displayed. **true** if displayed, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## isWindowSupportWideGamut

```TypeScript
isWindowSupportWideGamut(): Promise<boolean>
```

Checks whether this window supports the wide-gamut color space. This API uses a promise to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-isWindowSupportWideGamut(): Promise<boolean>--><!--Device-Window-isWindowSupportWideGamut(): Promise<boolean>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. **true** if the wide-gamut color space is supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## isWindowSupportWideGamut

```TypeScript
isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void
```

Checks whether this window supports the wide-gamut color space. This API uses an asynchronous callback to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void--><!--Device-Window-isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## keepKeyboardOnFocus

```TypeScript
keepKeyboardOnFocus(keepKeyboardFlag: boolean): void
```

Determines whether to retain the soft keyboard created by another window when the current window gains focus.This API is only supported by system windows and application child windows.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-keepKeyboardOnFocus(keepKeyboardFlag: boolean): void--><!--Device-Window-keepKeyboardOnFocus(keepKeyboardFlag: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keepKeyboardFlag | boolean | Yes | Whether to keep the soft keyboard created by others. **true** to keep, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Only float windows, subwindows, dialog windows, or window type as system windows are supported. |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage. This API uses an asynchronous callback to return the result.You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void--><!--Device-Window-loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. The path is configured in the **main\_\_\_ESCAPED\_UNDERSCORE\_\_\_pages.json** file of the project. |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Page-level UI state storage unit, which is used to transfer the state attribute for the page. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage): Promise<void>
```

Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage. This API uses a promise to return the result. You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-loadContent(path: string, storage: LocalStorage): Promise<void>--><!--Device-Window-loadContent(path: string, storage: LocalStorage): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. The path is configured in the **main\_\_\_ESCAPED\_UNDERSCORE\_\_\_pages.json** file of the project. |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Page-level UI state storage unit, which is used to transfer the state attribute for the page. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContent

```TypeScript
loadContent(path: string, callback: AsyncCallback<void>): void
```

Loads content from a page to this window. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup. If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setUIContent](arkts-arkui-window-window-i.md#setuicontent)(path:

<!--Device-Window-loadContent(path: string, callback: AsyncCallback<void>): void--><!--Device-Window-loadContent(path: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. In the stage model, the path is configured in the **main\_\_\_ESCAPED\_UNDERSCORE\_\_\_pages.json** file of the project. In the FA model, the path is configured in the **config.json** file of the project. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## loadContent

```TypeScript
loadContent(path: string): Promise<void>
```

Loads content from a page to this window. This API uses a promise to return the result. You are advised to call this API during UIAbility startup. If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setUIContent](arkts-arkui-window-window-i.md#setuicontent)(path:

<!--Device-Window-loadContent(path: string): Promise<void>--><!--Device-Window-loadContent(path: string): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. In the stage model, the path is configured in the **main\_\_\_ESCAPED\_UNDERSCORE\_\_\_pages.json** file of the project. In the FA model, the path is configured in the **config.json** file of the project. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads the content of a \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ page to this window, and transfers the state attribute to the page through a local storage. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void--><!--Device-Window-loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the named route page. |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Page-level UI state storage unit, which is used to transfer the state attribute for the page. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## loadContentByName

```TypeScript
loadContentByName(name: string, callback: AsyncCallback<void>): void
```

Loads the content of a \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ page to this window. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content.Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-loadContentByName(name: string, callback: AsyncCallback<void>): void--><!--Device-Window-loadContentByName(name: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the named route page. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage?: LocalStorage): Promise<void>
```

Loads the content of a \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ page to this window, and transfers the state attribute to the page through a local storage. This API uses a promise to return the result.You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-loadContentByName(name: string, storage?: LocalStorage): Promise<void>--><!--Device-Window-loadContentByName(name: string, storage?: LocalStorage): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the named route page. |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | Page-level UI state storage unit, which is used to transfer the state attribute for the page. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## maximize

```TypeScript
maximize(presentation?: MaximizePresentation): Promise<void>
```

Maximizes the window. The main window can use this API to maximize. For child windows, you need to set  
**maximizeSupported** to **true** when creating the windows and then call this API to maximize. This API uses a promise to return the result.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-maximize(presentation?: MaximizePresentation): Promise<void>--><!--Device-Window-maximize(presentation?: MaximizePresentation): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| presentation | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | Layout when the window is maximized. The default value is window.MaximizePresentation.ENTER\_\_\_ESCAPED\_UNDERSCORE\_\_\_IMMERSIVE, indicating that the window enters the immersive layout when maximized.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 20 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function maximize can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported. |

## maximize

```TypeScript
maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>
```

Maximizes the window. The main window can use this API to maximize. For child windows, you need to set  
**maximizeSupported** to **true** when creating the windows and then call this API to maximize. On 2-in-1 devices with folding capabilities, you can use the **acrossDisplay** parameter to control the main window's behavior in waterfall mode when maximized in the hover state. (See  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_). This API uses a promise to return the result.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

<!--Device-Window-maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>--><!--Device-Window-maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| presentation | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | Layout when the window is maximized. The default value is window.MaximizePresentation.ENTER\_\_\_ESCAPED\_UNDERSCORE\_\_\_IMMERSIVE, indicating that the window enters the immersive layout when maximized. |
| acrossDisplay | boolean | No | Parameter controls the across-display mode policy of main windows in the half-folded state. The value true Indicates that the window could enter the across-display mode directly, and maintains the across-display mode when the device is half-folded. The default value is undefined. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function maximize can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported. |

## maximizeWithOptions

```TypeScript
maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>
```

Maximize the app window.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>--><!--Device-Window-maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maximizeOptions | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | The configuration of maximize. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; |  Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: 1. Invalid window type. Only main windows and maximizable subwindows are supported; 2. The acrossDisplay parameter only supports main windows. 3. The snapshotAnimationConfig parameter only supports main windows. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## minimize

```TypeScript
minimize(callback: AsyncCallback<void>): void
```

The behavior of this API varies based on the caller:

- Minimizes the main window if the caller is the main window. The main window can be restored in the dock bar.  
For 2-in-1 devices, it can be restored by calling [restore()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.  
- Hides the child window or global floating window if the caller is a child window. The child window or floating  
window cannot be restored in the dock bar. It can be made visible again by calling  
[showWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

This API can be called only by the main window, child window, or global floating window. If it is called by other windows, error code 1300002 is thrown. This API uses an asynchronous callback to return the result.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-minimize(callback: AsyncCallback<void>): void--><!--Device-Window-minimize(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error; 3. Invalid window type. Only main windows, subwindows, and float windows are supported. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## minimize

```TypeScript
minimize(): Promise<void>
```

The behavior of this API varies based on the caller:

- Minimizes the main window if the caller is the main window. The main window can be restored in the dock bar.  
For 2-in-1 devices, it can be restored by calling [restore()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.  
- Hides the child window or global floating window if the caller is a child window. The child window or floating  
window cannot be restored in the dock bar. It can be made visible again by calling  
[showWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

This API can be called only by the main window, child window, or global floating window. If it is called by other windows, error code 1300002 is thrown. This API uses a promise to return the result.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-minimize(): Promise<void>--><!--Device-Window-minimize(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error; 3. Invalid window type. Only main windows, subwindows, and float windows are supported. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## moveTo

```TypeScript
moveTo(x: number, y: number): Promise<void>
```

Moves this window. This API uses a promise to return the result.

This operation is not supported in a window in full-screen mode.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.moveWindowTo](arkts-arkui-window-window-i.md#movewindowto)(x:

<!--Device-Window-moveTo(x: number, y: number): Promise<void>--><!--Device-Window-moveTo(x: number, y: number): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Coordinate position along the x-axis to which the window is moved, measured in px. A positive value means the position is to the right of the x-axis origin; a negative value means it is to the left; the value **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are rounded down. |
| y | number | Yes | Coordinate position along the y-axis to which the window is moved, measured in px. A positive value means the position is below the y-axis origin; a negative value means it is above; the value **0** means it is at the y-axis origin. The value must be an integer. Non-integer values are rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## moveTo

```TypeScript
moveTo(x: number, y: number, callback: AsyncCallback<void>): void
```

Moves this window. This API uses an asynchronous callback to return the result.

This operation is not supported in a window in full-screen mode.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.moveWindowTo](arkts-arkui-window-window-i.md#movewindowto)(x:

<!--Device-Window-moveTo(x: number, y: number, callback: AsyncCallback<void>): void--><!--Device-Window-moveTo(x: number, y: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Coordinate position along the x-axis to which the window is moved, measured in px. A positive value means the position is to the right of the x-axis origin; a negative value means it is to the left; the value **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are rounded down. |
| y | number | Yes | Coordinate position along the y-axis to which the window is moved, measured in px. A positive value means the position is below the y-axis origin; a negative value means it is above; the value **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are rounded down. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## moveWindowTo

ArkTS-Dyn:
```TypeScript
moveWindowTo(x: number, y: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveWindowTo(x: int, y: int): Promise<void>
```

Moves this window. This API uses a promise to return the result. A value is returned once the API is called successfully. However, the final effect cannot be obtained immediately from the return value. To obtain the final effect immediately, call [moveWindowToAsync()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_.
    **NOTE**  
    
    - This API is best suited for the floating window mode (when the window mode is  
    **window.WindowStatusType.FLOATING**, which you can check using  
    [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_). You are not advised to use it in other window modes.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, the window moves  
    relative to the upper-left corner of the screen. In non-freeform window mode, the window moves relative to  
    the upper-left corner of its parent window.  
    
    - To move the window relative to the top-left corner of the screen while in non-freeform window mode, call  
    [moveWindowToGlobal()]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_  
    .  
    
    - This API does not work for the main window in non-freeform window mode.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-moveWindowTo(x: int, y: int): Promise<void>--><!--Device-Window-moveWindowTo(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | X-coordinate to which the window moves, in px. A positive value indicates a position to the right of the origin, and a negative value indicates a position to the left of the origin. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Y-coordinate to which the window moves, in pixels. A positive value indicates a position above the origin, and a negative value indicates a position below the origin. The value must be an integer. Non-integer values are rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## moveWindowTo

ArkTS-Dyn:
```TypeScript
moveWindowTo(x: number, y: number, callback: AsyncCallback<void>): void
```

ArkTS-Sta:
```TypeScript
moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void
```

Moves this window. This API uses an asynchronous callback to return the result. A value is returned once the API is called successfully. However, the final effect cannot be obtained immediately from the return value. To obtain the final effect immediately, call [moveWindowToAsync()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_.
    **NOTE**  
    
    - This API is best suited for the floating window mode (when the window mode is  
    **window.WindowStatusType.FLOATING**, which can obtained using  
    [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_). You are advised not to use it in other window modes.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, the window moves  
    relative to the upper-left corner of the screen. In non-freeform window mode, the window moves relative to  
    the upper-left corner of its parent window.  
    
    - To move the window relative to the top-left corner of the screen while in non-freeform window mode, call  
    [moveWindowToGlobal()]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_  
    .  
    
    - This API does not work for the main window in non-freeform window mode.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void--><!--Device-Window-moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | X-coordinate to which the window moves, in px. A positive value indicates a position to the right of the origin, and a negative value indicates a position to the left of the origin. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Y-coordinate to which the window moves, in pixels. A positive value indicates a position above the origin, and a negative value indicates a position below the origin. The value must be an integer. Non-integer values are rounded down. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## moveWindowToAsync

ArkTS-Dyn:
```TypeScript
moveWindowToAsync(x: number, y: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveWindowToAsync(x: int, y: int): Promise<void>
```

Moves this window. This API uses a promise to return the result. A value is returned once the call takes effect.You can use [getWindowProperties()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ in the callback (see the code snippet below) to obtain the final effect immediately.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).In other window modes, this API returns error code 1300010.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_).In floating window mode, the movement behavior of different types of windows is as follows.
    **NOTE**  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-moveWindowToAsync(x: int, y: int): Promise<void>--><!--Device-Window-moveWindowToAsync(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Coordinate position along the x-axis to which the window is moved, measured in px. A positive value means the position is to the right of the x-axis origin; a negative value means it is to the left; the value **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Coordinate position along the y-axis to which the window is moved, measured in px. A positive value means the position is below the y-axis origin; a negative value means it is above; the value **0** means it is at the y-axis origin. The value must be an integer. Non-integer values are rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. The window type is not supported for this operation. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. Possible cause: The window status is not FLOATING. |

## moveWindowToAsync

ArkTS-Dyn:
```TypeScript
moveWindowToAsync(x: number, y: number, moveConfiguration?: MoveConfiguration): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>
```

Moves this window to the specified position. This API uses a promise to return the result. You can use the  
**moveConfiguration** parameter to specify the target display ID for the window movement. A value is returned once the call takes effect. You can use [getWindowProperties()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ in the callback (see the code snippet below) to obtain the final effect immediately.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).In other window modes, this API returns error code 1300010.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_).In floating window mode, the movement behavior of different types of windows is as follows.

| Window Type| \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ State| Non-freeform Window State|  
|---------|---------------|-----------------|  
| Main window| Move relative to the screen.| API calls do not take effect or return an error.|  
| App subwindow/Modal window| Move relative to the screen.| Move relative to the main window.|  
| System window/Global floating window| Move relative to the screen.| Move relative to the screen.|
    **NOTE**  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>--><!--Device-Window-moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the x-axis, in px. A positive value indicates that the window moves to the right. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the y-axis, in px. A positive value indicates that the window moves downwards. The value must be an integer. Non-integer values are rounded down. |
| moveConfiguration | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | Window movement configuration. If this parameter is not set, the window will stay on the current display. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. The window type is not supported for this operation. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. Possible cause: The window status is not FLOATING. |

## moveWindowToGlobal

ArkTS-Dyn:
```TypeScript
moveWindowToGlobal(x: number, y: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveWindowToGlobal(x: int, y: int): Promise<void>
```

Moves this window based on the coordinates. This API uses a promise to return the result. A value is returned once the call takes effect. You can use [getWindowProperties()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ in the callback (see the code snippet below) to obtain the final effect immediately.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).In other window modes, this API returns error code 1300010.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_).
    **NOTE**  
    
    - When the main window is in floating window mode, this API does not take effect or return an error if called  
    in non-\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 13

**ArkTS mode:** ArkTS-Dyn since version 13; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-Window-moveWindowToGlobal(x: int, y: int): Promise<void>--><!--Device-Window-moveWindowToGlobal(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the x-axis, in px, with the top-left corner of the display used as the origin. A positive value indicates that the window moves to the right, and a negative value indicates that the window moves to the left. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the y-axis, in px, with the top-left corner of the display used as the origin. A positive value indicates that the window moves downwards, and a negative value indicates that the window moves upwards. The value must be an integer. Non-integer values are rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. The window type is not supported for this operation. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. Possible cause: The window status is not FLOATING. |

## moveWindowToGlobal

ArkTS-Dyn:
```TypeScript
moveWindowToGlobal(x: number, y: number, moveConfiguration?: MoveConfiguration): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>
```

Moves this window to the specified position based on the coordinates. This API uses a promise to return the result. You can use the **moveConfiguration** parameter to specify the target display ID for the window movement.A value is returned once the call takes effect. You can use  
[getWindowProperties()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ in the callback (see the code snippet below) to obtain the final effect immediately.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).In other window modes, this API returns error code 1300010.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_).
    **NOTE**  
    
    - When the main window is in floating window mode, this API does not take effect or return an error if called  
    in non-\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>--><!--Device-Window-moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the x-axis, in px, with the top-left corner of the display used as the origin. A positive value indicates that the window moves to the right, and a negative value indicates that the window moves to the left. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the y-axis, in px, with the top-left corner of the display used as the origin. A positive value indicates that the window moves downwards, and a negative value indicates that the window moves upwards. The value must be an integer. Non-integer values are rounded down. |
| moveConfiguration | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | Indicate the window move configuration. If not provided, the window stays on the current display. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. The window type is not supported for this operation. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. Possible cause: The window status is not FLOATING. |

## moveWindowToGlobalDisplay

ArkTS-Dyn:
```TypeScript
moveWindowToGlobalDisplay(x: number, y: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveWindowToGlobalDisplay(x: int, y: int): Promise<void>
```

Moves the window based on the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_. This API uses a promise to return the result asynchronously.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).In other window modes, this API returns error code 1300010.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_).
    **NOTE**  
    
    - When the main window is in floating window mode, this API does not take effect or return an error if called  
    in non-\_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ state.  
    
    - After a window is moved, if it spans multiple screens, the window will belong to the screen with which it  
    has the largest overlapping area.  
    
    - In \_\_\_MD\_LINK\_DESC\_USD\_2\_\_\_ mode,  
    if the title bar of the main window or a child window is moved out of the screen's visible area,  
    the system will automatically snap the window back to ensure the title bar is visible.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-moveWindowToGlobalDisplay(x: int, y: int): Promise<void>--><!--Device-Window-moveWindowToGlobalDisplay(x: int, y: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the x-axis, in px, with the top-left corner of the primary display used as the origin. A positive value indicates that the window moves to the right, and a negative value indicates that the window moves to the left. The value must be an integer. Non-integer values are rounded down. |
| y | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Distance that the window moves along the y-axis, in px, with the top-left corner of the primary display used as the origin. A positive value indicates that the window moves downwards, and a negative value indicates that the window moves upwards. The value must be an integer. Non-integer values are rounded down.ured in px. This parameter only accepts integer values; any floating-point input will be rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. Possible cause: The window status is not FLOATING. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. |

## off('rotationChange')

```TypeScript
off(type: 'rotationChange', 
       callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void
```

Unsubscribes from the window rotation change event.

**Since:** 19

**ArkTS mode:** ArkTS-Dyn only, since version 19.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Window-off(type: 'rotationChange',        callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void--><!--Device-Window-off(type: 'rotationChange',        callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rotationChange' | Yes | Event type. The value is fixed at **'rotationChange'**, indicating the window rotation change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RotationChangeInfo, RotationChangeResult \| void&gt; | No | Callback used to return the result. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off

```TypeScript
off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void
```

Unsubscribes from the event indicating changes in the security restrictions of the UIExtensionAbility within the window.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void--><!--Device-Window-off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'uiExtensionSecureLimitChange' | Yes | Event type. The value is fixed at **'uiExtensionSecureLimitChange'**, indicating that the UIExtensionAbility security restrictions in the window changes. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the result. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('frameMetricsMeasured')

```TypeScript
off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void
```

Unsubscribes from events indicating changes in window frame metrics. This API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn only, since version 22.

<!--Device-Window-off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void--><!--Device-Window-off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameMetricsMeasured' | Yes | Event type. The value is fixed at **'frameMetricsMeasured'**, indicating the window frame metrics change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;FrameMetrics&gt; | No | If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## off('occlusionStateChanged')

```TypeScript
off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void
```

Unsubscribes from the visibility status change event of the window.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn only, since version 22.

<!--Device-Window-off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void--><!--Device-Window-off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'occlusionStateChanged' | Yes | Event type. The value is fixed at **'occlusionStateChanged'**, indicating the window visibility status change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;OcclusionState&gt; | No | If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('windowSizeChange')

```TypeScript
off(type: 'windowSizeChange', callback?: Callback<Size>): void
```

Unsubscribes from the window size change event. This API can be called only by the main thread.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-off(type: 'windowSizeChange', callback?: Callback<Size>): void--><!--Device-Window-off(type: 'windowSizeChange', callback?: Callback<Size>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | Yes | Event type. The value is fixed at **'windowSizeChange'**, indicating the window size change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Size&gt; | No | Callback used to return the window size. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('systemAvoidAreaChange')

```TypeScript
off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void
```

Unsubscribes from the event indicating changes to the area where this window cannot be displayed.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** window.Window.off(type:

<!--Device-Window-off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void--><!--Device-Window-off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemAvoidAreaChange' | Yes | Event type. The value is fixed at **'systemAvoidAreaChange'**, indicating the event of changes to the area where the window cannot be displayed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidArea&gt; | No | Callback used to return the area. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

## off('avoidAreaChange')

```TypeScript
off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void
```

Unsubscribes from the event indicating changes to the area where this window cannot be displayed.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void--><!--Device-Window-off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | Yes | Event type. The value is fixed at **'avoidAreaChange'**, indicating the event of changes to the area where the window cannot be displayed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidAreaOptions&gt; | No | Callback used to return the area and area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('keyboardHeightChange')

```TypeScript
off(type: 'keyboardHeightChange', callback?: Callback<int>): void
```

Unsubscribes from the event indicating soft keyboard height changes in the fixed state so that the application does not receive notifications of soft keyboard height changes. Starting from API version 10, the soft keyboard can be set to the fixed or floating state. For details, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'keyboardHeightChange', callback?: Callback<int>): void--><!--Device-Window-off(type: 'keyboardHeightChange', callback?: Callback<int>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardHeightChange' | Yes | Event type. The value is fixed at **'keyboardHeightChange'**, indicating the keyboard height change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;int&gt; | No | Callback used to return the current keyboard height, which is an integer, in px. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('keyboardWillShow')

```TypeScript
off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void
```

Unsubscribes from the event indicating that the soft keyboard in the fixed state is about to show. For details about the APIs used to set the input method panel to the fixed or floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void--><!--Device-Window-off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardWillShow' | Yes | Event type. The value is fixed at **'keyboardWillShow'**, indicating the soft keyboard in the fixed state is about to show. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Callback used to return the information about the soft keyboard. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## off('keyboardDidShow')

```TypeScript
off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void
```

Unsubscribes from the event indicating that the show animation of the soft keyboard in the fixed state is completed, For details about the APIs used to set the input method panel to the fixed or floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn only, since version 18.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void--><!--Device-Window-off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardDidShow' | Yes | Event type. The value is fixed at **'keyboardDidShow'**, indicating the show animation of the soft keyboard in the fixed state is completed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Callback used to return the information about the soft keyboard. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## off('keyboardWillHide')

```TypeScript
off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void
```

Unsubscribes from the event indicating that the soft keyboard in the fixed state is about to hide. For details about the APIs used to transition the input method panel from the fixed state to the floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void--><!--Device-Window-off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardWillHide' | Yes | Event type. The value is fixed at **'keyboardWillHide'**, indicating the soft keyboard in the fixed state is about to hide. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Callback used to return the information about the soft keyboard. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## off('keyboardDidHide')

```TypeScript
off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void
```

Unsubscribes from the event indicating that the hide animation of the soft keyboard in the fixed state is completed, For details about the APIs used to transition the input method panel from the fixed state to the floating state, see [Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn only, since version 18.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void--><!--Device-Window-off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardDidHide' | Yes | Event type. The value is fixed at **'keyboardDidHide'**, indicating the hide animation of the soft keyboard in the fixed state is completed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Callback used to return the information about the soft keyboard. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## off('touchOutside')

```TypeScript
off(type: 'touchOutside', callback?: Callback<void>): void
```

Unsubscribes from the touch event outside this window.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-off(type: 'touchOutside', callback?: Callback<void>): void--><!--Device-Window-off(type: 'touchOutside', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchOutside' | Yes | Event type. The value is fixed at **'touchOutside'**, indicating the touch event outside this window. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback used to return the touch event outside this window. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('displayIdChange')

```TypeScript
off(type: 'displayIdChange', callback?: Callback<long>): void
```

Unsubscribes from the display change event of this window.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-off(type: 'displayIdChange', callback?: Callback<long>): void--><!--Device-Window-off(type: 'displayIdChange', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'displayIdChange' | Yes | Event type. The value is fixed at **'displayIdChange'**, indicating the display change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;long&gt; | No | Callback invoked when the display where the window is located changes. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## off('windowVisibilityChange')

```TypeScript
off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void
```

Unsubscribes from the visibility status change event of this window.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void--><!--Device-Window-off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowVisibilityChange' | Yes | Event type. The value is fixed at **'windowVisibilityChange'**, indicating the visibility status change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the visibility status of the window. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('systemDensityChange')

```TypeScript
off(type: 'systemDensityChange', callback?: Callback<double>): void
```

Unsubscribes from the system density change event.

In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to physical pixels (px). For example, if the return value is **density**, the calculation formula is vp * density =px.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-off(type: 'systemDensityChange', callback?: Callback<double>): void--><!--Device-Window-off(type: 'systemDensityChange', callback?: Callback<double>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemDensityChange' | Yes | Event type. The value is fixed at **'systemDensityChange'**, indicating the system density change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;double&gt; | No | Callback invoked when the system's display size scale factor changes. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## off('noInteractionDetected')

```TypeScript
off(type: 'noInteractionDetected', callback?: Callback<void>): void
```

Unsubscribes from non-interaction events in a window within the specified period. Interaction events include physical keyboard input events and screen touch/click events, but not soft keyboard input events.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'noInteractionDetected', callback?: Callback<void>): void--><!--Device-Window-off(type: 'noInteractionDetected', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'noInteractionDetected' | Yes | Event type. The value is fixed at **'noInteractionDetected'**, indicating that there is no interaction event in the window within the specified period. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback invoked when there is no interaction event in the current window within the specified period. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('screenshot')

```TypeScript
off(type: 'screenshot', callback?: Callback<void>): void
```

Unsubscribes from the screenshot event.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'screenshot', callback?: Callback<void>): void--><!--Device-Window-off(type: 'screenshot', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'screenshot' | Yes | Event type. The value is fixed at **'screenshot'**, indicating the screenshot event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback invoked when a screenshot event occurs. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('screenshotAppEvent')

```TypeScript
off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void
```

Unsubscribes from the screenshot event.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

<!--Device-Window-off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void--><!--Device-Window-off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'screenshotAppEvent' | Yes | Event type. The value is fixed at **'screenshotAppEvent'**, indicating the screenshot event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;ScreenshotEventType&gt; | No | Callback invoked when a screenshot event occurs. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('dialogTargetTouch')

```TypeScript
off(type: 'dialogTargetTouch', callback?: Callback<void>): void
```

Unsubscribes from the touch event of the target window in the modal window mode.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'dialogTargetTouch', callback?: Callback<void>): void--><!--Device-Window-off(type: 'dialogTargetTouch', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dialogTargetTouch' | Yes | Event type. The value is fixed at **'dialogTargetTouch'**, indicating the touch event of the target window in the modal window mode. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback invoked when the touch event occurs in the target window of the modal window mode. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('windowEvent')

```TypeScript
off(type: 'windowEvent', callback?: Callback<WindowEventType>): void
```

Unsubscribes from the window lifecycle change event.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-off(type: 'windowEvent', callback?: Callback<WindowEventType>): void--><!--Device-Window-off(type: 'windowEvent', callback?: Callback<WindowEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowEvent' | Yes | Event type. The value is fixed at **'windowEvent'**, indicating the window lifecycle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowEventType&gt; | No | Callback used to return the window lifecycle state. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |

## off('windowStatusChange')

```TypeScript
off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void
```

Disables the listening for window status changes.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void--><!--Device-Window-off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowStatusChange' | Yes | Event type. The value is fixed at **'windowStatusChange'**, indicating the window status change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | No | Callback used to return the window status. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

## off('windowStatusDidChange')

```TypeScript
off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void
```

Unsubscribes from the event indicating that the window status has changed.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

<!--Device-Window-off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void--><!--Device-Window-off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowStatusDidChange' | Yes | Event type. The value is fixed at **'windowStatusDidChange'**, indicating that the window status has changed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | No | Callback used to return the window status. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## off('subWindowClose')

```TypeScript
off(type: 'subWindowClose', callback?: Callback<void>): void
```

Unsubscribes from the event indicating that the child window is closed.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'subWindowClose', callback?: Callback<void>): void--><!--Device-Window-off(type: 'subWindowClose', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'subWindowClose' | Yes | Event type. The value is fixed at **'subWindowClose'**, indicating the child window close event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback invoked when the close button in the top-right corner of the child window is clicked. It does not return any parameter. The return value of the internal logic of the callback function determines whether to continue to close the child window. If **true** of the Boolean type is returned, the child window is not closed. If **false** or other non-Boolean types are returned, the child window is closed. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |

## off('windowWillClose')

```TypeScript
off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void
```

Unsubscribes from the event indicating that the main window or child window will be closed.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void--><!--Device-Window-off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowWillClose' | Yes | Event type. The value is fixed at **'windowWillClose'**, indicating the window close event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void, Promise&lt;boolean&gt;&gt; | No | Callback invoked when the close button in the top-right corner of the window is clicked. It does not return any parameter. The internal logic of the callback function requires a return value of the Promise\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ type. In the returned Promise function, **resolve(true)** means not to close the window, and **resolve(false)** or **reject** means to continue to close the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Not called from mainWindow or subWindow. |

## off('windowHighlightChange')

```TypeScript
off(type: 'windowHighlightChange', callback?: Callback<boolean>): void
```

Unsubscribes from the highlighted state change event of the window.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-off(type: 'windowHighlightChange', callback?: Callback<boolean>): void--><!--Device-Window-off(type: 'windowHighlightChange', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowHighlightChange' | Yes | Event type. The value is fixed at **'windowHighlightChange'**, indicating the window highlighted state change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the highlighted state of the window. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('windowTitleButtonRectChange')

```TypeScript
off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void
```

Unsubscribes from the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window. This API takes effect for the window that has a title bar or a three-button area. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void--><!--Device-Window-off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowTitleButtonRectChange' | Yes | Event type. The value is fixed at **'windowTitleButtonRectChange'**, indicating that the change event of the rectangle that holds the minimize, maximize, and close buttons. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;TitleButtonRect&gt; | No | Callback used to return the new rectangle. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## off('windowRectChange')

```TypeScript
off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void
```

Unsubscribes from window rectangle (position and size) change events.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void--><!--Device-Window-off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowRectChange' | Yes | Event type. The value is fixed at **'windowRectChange'**, indicating the window rectangle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | No | Callback used to return the value and reason of the window rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('rectChangeInGlobalDisplay')

```TypeScript
off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void
```

Disables the listening event for changes in the window rectangle (window position and size) in the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

<!--Device-Window-off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void--><!--Device-Window-off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rectChangeInGlobalDisplay' | Yes | Event type. The value is fixed at **'rectChangeInGlobalDisplay'**, indicating the window rectangle change event in the global coordinate system. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | No | Callback used to return the value and reason of the window rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## off('freeWindowModeChange')

```TypeScript
off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void
```

Unsubscribes from the freeform window mode change event.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn only, since version 22.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Window-off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void--><!--Device-Window-off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'freeWindowModeChange' | Yes | Event type. The value is fixed at **'freeWindowModeChange'**, indicating the freeform window mode change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the result, indicating whether the window is in freeform window mode. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offAvoidAreaChange

```TypeScript
offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void
```

Unsubscribes from the event indicating changes to the area where this window cannot be displayed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void--><!--Device-Window-offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidAreaOptions&gt; | No | Callback used to return the area and area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 20 |

## offDialogTargetTouch

```TypeScript
offDialogTargetTouch(callback?: Callback<void>): void
```

Unsubscribes from the touch event of the target window in the modal window mode.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offDialogTargetTouch(callback?: Callback<void>): void--><!--Device-Window-offDialogTargetTouch(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

## offDisplayIdChange

```TypeScript
offDisplayIdChange(callback?: Callback<long>): void
```

Unsubscribes from the display change event of this window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offDisplayIdChange(callback?: Callback<long>): void--><!--Device-Window-offDisplayIdChange(callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;long&gt; | No | Callback invoked when the display where the window is located changes. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offFrameMetricsMeasured

```TypeScript
offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void
```

Unsubscribes from events indicating changes in window frame metrics. This API must be used after the call of [loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void--><!--Device-Window-offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;FrameMetrics&gt; | No | If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offFreeWindowModeChange

```TypeScript
offFreeWindowModeChange(callback?: Callback<boolean>): void
```

free window mode change callback off.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-Window-offFreeWindowModeChange(callback?: Callback<boolean>): void--><!--Device-Window-offFreeWindowModeChange(callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the result if the current device is in free window mode. true - means in free window mode; false - means not in free window mode. Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offKeyboardDidHide

```TypeScript
offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard did hide

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void--><!--Device-Window-offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offKeyboardDidShow

```TypeScript
offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard did show

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void--><!--Device-Window-offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offKeyboardHeightChange

```TypeScript
offKeyboardHeightChange(callback?: Callback<int>): void
```

Unregister the callback of keyboard height change

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offKeyboardHeightChange(callback?: Callback<int>): void--><!--Device-Window-offKeyboardHeightChange(callback?: Callback<int>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;int&gt; | No | Callback used to return the current keyboard height, which is an integer, in px. If not provided, all callbacks for the given event type will be removed. |

## offKeyboardWillHide

```TypeScript
offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard will hide

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void--><!--Device-Window-offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offKeyboardWillShow

```TypeScript
offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard will show

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void--><!--Device-Window-offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offNoInteractionDetected

```TypeScript
offNoInteractionDetected(callback?: Callback<void>): void
```

Unsubscribes from non-interaction events in a window within the specified period.Interaction events include physical keyboard input events and screen touch/click events,but not soft keyboard input events.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offNoInteractionDetected(callback?: Callback<void>): void--><!--Device-Window-offNoInteractionDetected(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offOcclusionStateChanged

```TypeScript
offOcclusionStateChanged(callback?: Callback<OcclusionState>): void
```

Unregister the callback for occlusion state changed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offOcclusionStateChanged(callback?: Callback<OcclusionState>): void--><!--Device-Window-offOcclusionStateChanged(callback?: Callback<OcclusionState>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;OcclusionState&gt; | No | If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offRectChangeInGlobalDisplay

```TypeScript
offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void
```

Disables the listening event for changes in the window rectangle (window position and size) in the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void--><!--Device-Window-offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | No | Callback used to return the value and reason of the window rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offRotationChange

```TypeScript
offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):
      void
```

Unregister the callback of rotation change

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):      void--><!--Device-Window-offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):      void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RotationChangeInfo, RotationChangeResult \| undefined&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offScreenshot

```TypeScript
offScreenshot(callback?: Callback<void>): void
```

Unsubscribes from the screenshot event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offScreenshot(callback?: Callback<void>): void--><!--Device-Window-offScreenshot(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback invoked when a screenshot event occurs. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

## offScreenshotAppEvent

```TypeScript
offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void
```

Unsubscribes from the screenshot event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void--><!--Device-Window-offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;ScreenshotEventType&gt; | No | Callback invoked when a screenshot event occurs. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offSubWindowClose

```TypeScript
offSubWindowClose(callback?: Callback<void>): void
```

Unsubscribes from the event indicating that the child window is closed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offSubWindowClose(callback?: Callback<void>): void--><!--Device-Window-offSubWindowClose(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | ] - Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |

## offSystemDensityChange

```TypeScript
offSystemDensityChange(callback?: Callback<double>): void
```

Unsubscribes from the system density change event.

In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to physical pixels (px). For example, if the return value is **density**, the calculation formula is vp *  
density = px.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offSystemDensityChange(callback?: Callback<double>): void--><!--Device-Window-offSystemDensityChange(callback?: Callback<double>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;double&gt; | No | Callback invoked when the system's display size scale factor changes. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offTouchOutside

```TypeScript
offTouchOutside(callback?: Callback<void>): void
```

Unsubscribes from the touch event outside this window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offTouchOutside(callback?: Callback<void>): void--><!--Device-Window-offTouchOutside(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

## offUiExtensionSecureLimitChange

```TypeScript
offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void
```

UIExtension in window secure limit change callback off.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void--><!--Device-Window-offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offWindowEvent

```TypeScript
offWindowEvent(callback?: Callback<WindowEventType>): void
```

Unsubscribes from the window lifecycle change event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowEvent(callback?: Callback<WindowEventType>): void--><!--Device-Window-offWindowEvent(callback?: Callback<WindowEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowEventType&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

## offWindowHighlightChange

```TypeScript
offWindowHighlightChange(callback?: Callback<boolean>): void
```

Unregister the callback of window highlight state change

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowHighlightChange(callback?: Callback<boolean>): void--><!--Device-Window-offWindowHighlightChange(callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the highlight status of the window. if not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offWindowPostureModeChange

```TypeScript
offWindowPostureModeChange(mode: WindowPostureMode, callback?: Callback<boolean>): void
```

Unregisters a callback that is invoked when he window changes to the specified window posture mode.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-offWindowPostureModeChange(mode: WindowPostureMode, callback?: Callback<boolean>): void--><!--Device-Window-offWindowPostureModeChange(mode: WindowPostureMode, callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The window posture mode to monitor. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback function. Callback when the window changes to the specified window pose mode. If a parameter is transferred, the listener is disabled. If no parameter is specified, all callbacks for changing the current window to the specified window posture mode are closed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: The internal services of the window are not started normally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## offWindowRectChange

```TypeScript
offWindowRectChange(callback?: Callback<RectChangeOptions>): void
```

Unsubscribes from window rectangle (position and size) change events.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowRectChange(callback?: Callback<RectChangeOptions>): void--><!--Device-Window-offWindowRectChange(callback?: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | No | Callback used to return the value and reason of the window rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offWindowSizeChange

```TypeScript
offWindowSizeChange(callback?: Callback<Size>): void
```

Unsubscribes from the window size change event. This API can be called only by the main thread.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowSizeChange(callback?: Callback<Size>): void--><!--Device-Window-offWindowSizeChange(callback?: Callback<Size>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Size&gt; | No | Callback used to return the window size. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

## offWindowStatusChange

```TypeScript
offWindowStatusChange(callback?: Callback<WindowStatusType>): void
```

Disables the listening for window status changes.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowStatusChange(callback?: Callback<WindowStatusType>): void--><!--Device-Window-offWindowStatusChange(callback?: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | No | Callback used to return the window status. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

## offWindowStatusDidChange

```TypeScript
offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void
```

Unsubscribes from the event indicating that the window status has changed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void--><!--Device-Window-offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | No | Callback used to return the window status. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## offWindowTitleButtonRectChange

```TypeScript
offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void
```

Unsubscribes from the change event of the rectangle that holds the minimize,maximize, and close buttons on the title bar of the window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void--><!--Device-Window-offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;TitleButtonRect&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## offWindowVisibilityChange

```TypeScript
offWindowVisibilityChange(callback?: Callback<boolean>): void
```

Unsubscribes from the visibility status change event of this window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowVisibilityChange(callback?: Callback<boolean>): void--><!--Device-Window-offWindowVisibilityChange(callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | No | Callback used to return the visibility status of the window. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## offWindowWillClose

```TypeScript
offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void
```

Unsubscribes from the event indicating that the main window or child window will be closed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void--><!--Device-Window-offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void, Promise&lt;boolean&gt;&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Not called from mainWindow or subWindow. |

## on('rotationChange')

```TypeScript
on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void
```

Subscribes to the window rotation change event. If the window rotation event type in  
[RotationChangeInfo]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ is **WINDOW\_WILL\_ROTATE**,  
[RotationChangeResult]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ must be returned. If the window rotation event type is **WINDOW\_DID\_ROTATE**, [RotationChangeResult]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ does not take effect.

This API can be registered only on the main thread. If a window registers multiple callbacks of the same type,only the return value of the most recently registered callback will be effective. The system provides a timeout protection mechanism. If the window does not return  
[RotationChangeResult]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ within 20 ms, the system does not process the return value.

**Since:** 19

**ArkTS mode:** ArkTS-Dyn only, since version 19.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Window-on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void--><!--Device-Window-on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rotationChange' | Yes | Event type. The value is fixed at **'rotationChange'**, indicating the window rotation change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RotationChangeInfo, RotationChangeResult \| void&gt; | Yes | Callback used to return [RotationChangeInfo]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ and [RotationChangeResult]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on

```TypeScript
on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void
```

Subscribes to the event indicating changes in the security restrictions of the UIExtensionAbility within the window. You are advised to initiate the subscription right after the window is created.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void--><!--Device-Window-on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'uiExtensionSecureLimitChange' | Yes | Event type. The value is fixed at **'uiExtensionSecureLimitChange'**, indicating that the UIExtensionAbility security restrictions in the window changes. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** means that at least one UIExtensionAbility within the window has enabled the hiding of unsafe windows, and **false** means that all UIExtensionAbility components within the window have disabled the hiding of unsafe windows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('frameMetricsMeasured')

```TypeScript
on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void
```

Subscribes to events indicating changes in window frame metrics. This API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

The callback is triggered only when the client UI content is redrawn (for example, during page transitions,interactions with responsive components, setting background colors, or adjusting opacity).

**Since:** 22

**ArkTS mode:** ArkTS-Dyn only, since version 22.

<!--Device-Window-on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void--><!--Device-Window-on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameMetricsMeasured' | Yes | Event type. The value is fixed at **'frameMetricsMeasured'**, indicating the window frame metrics change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;FrameMetrics&gt; | Yes | Callback invoked when the window frame metrics change. For details, see [Frame Rate Metrics]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## on('occlusionStateChanged')

```TypeScript
on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void
```

Subscribes to the visibility status change event of the window. The visibility returned by this API may be different from that perceived by human eyes in the following scenarios:

- If the shadow area of a non-main window (  
[setWindowShadowEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
[setWindowShadowRadius]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ can be used to set whether the shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as partially visible even though it is completely visible to human eyes.  
- If the upper-layer window has a transparency effect (including all transparency degrees except the completely  
opaque degree), the lower-layer window will not be blocked and is visible.  
- Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating  
window on a mobile phone, the lower-layer window returned remains visible.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn only, since version 22.

<!--Device-Window-on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void--><!--Device-Window-on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'occlusionStateChanged' | Yes | Event type. The value is fixed at **'occlusionStateChanged'**, indicating the window visibility status change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;OcclusionState&gt; | Yes | Callback invoked when the window visibility status changes. For details, see [Window Visibility Status]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('windowSizeChange')

```TypeScript
on(type: 'windowSizeChange', callback: Callback<Size>): void
```

Subscribes to the window size change event. This API can be called only by the main thread.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-on(type: 'windowSizeChange', callback: Callback<Size>): void--><!--Device-Window-on(type: 'windowSizeChange', callback: Callback<Size>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | Yes | Event type. The value is fixed at **'windowSizeChange'**, indicating the window size change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Size&gt; | Yes | Callback used to return the window size. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('systemAvoidAreaChange')

```TypeScript
on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void
```

Subscribes to the event indicating changes to the area where this window cannot be displayed.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** window.Window.on(type:

<!--Device-Window-on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void--><!--Device-Window-on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemAvoidAreaChange' | Yes | Event type. The value is fixed at **'systemAvoidAreaChange'**, indicating the event of changes to the area where the window cannot be displayed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidArea&gt; | Yes | Callback used to return the area. |

## on('avoidAreaChange')

```TypeScript
on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void
```

Subscribes to the event indicating changes to the area where this window cannot be displayed.

Main window/Child window:

- When the callback is triggered in the free-floating window mode (the window mode is  
**window.WindowStatusType.FLOATING**) under the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state, only the avoidance area of the fixed soft keyboard type ([AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ is **TYPE\_KEYBOARD**)is available.  
- When the callback is triggered in the free-floating window mode of the main window in the non-freeform window  
state, only the avoidance area of the system bar type ([AvoidAreaType]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_is **TYPE\_SYSTEM**) is available.  
- When the callback is triggered in the other scenarios of the main window, the calculated avoidance area can be  
returned only when the window is not in the free-floating window mode or the device type is phone or tablet.Otherwise, an empty avoidance area is returned.  
- When the callback is triggered for the child window in the non-freeform window state or non-free-floating  
window mode, the calculated avoidance area of the child window is returned only when the position and size of the child window are the same as those of the main window. Otherwise, an empty avoidance area is returned.

Global floating window, modal window, or system window:

- The calculated avoidance area is returned only when the callback is triggered after  
[setSystemAvoidAreaEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ is called. Otherwise, an empty avoidance area is returned.

\_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_Common scenarios for triggering this event are as follows: transitions between full-screen mode, floating mode, and split-screen mode of the application window; rotation of the application window; transitions between folded and unfolded states of a foldable device; transfer of the application window between multiple devices.\_\_\_MD\_COMMENT\_DESC\_USD\_5\_\_\_

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void--><!--Device-Window-on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | Yes | Event type. The value is fixed at **'avoidAreaChange'**, indicating the event of changes to the area where the window cannot be displayed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidAreaOptions&gt; | Yes | Callback used to return the area and area type.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('keyboardHeightChange')

```TypeScript
on(type: 'keyboardHeightChange', callback: Callback<int>): void
```

Subscribes to the event indicating soft keyboard height changes in the fixed state. The system notifies the keyboard height change when the soft keyboard is invoked by the window and overlaps with the window. Starting from API version 10, the soft keyboard can be set to the fixed or floating state. For details, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'keyboardHeightChange', callback: Callback<int>): void--><!--Device-Window-on(type: 'keyboardHeightChange', callback: Callback<int>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardHeightChange' | Yes | Event type. The value is fixed at **'keyboardHeightChange'**, indicating the keyboard height change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;int&gt; | Yes | Callback used to return the current keyboard height, which is an integer, in px. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('keyboardWillShow')

```TypeScript
on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void
```

Subscribes to the event indicating that the soft keyboard in the fixed state is about to show, or the soft keyboard is transitioning from the floating state to the fixed state.

For details about the APIs used to set the soft keyboard to the fixed or floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void--><!--Device-Window-on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardWillShow' | Yes | Event type. The value is fixed at **'keyboardWillShow'**, indicating the soft keyboard in the fixed state is about to show. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback used to return the information about the soft keyboard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## on('keyboardDidShow')

```TypeScript
on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void
```

Subscribes to the event indicating that the show animation of the soft keyboard in the fixed state is completed,or when the soft keyboard finishes transitioning from the floating state to the fixed state.

For details about the APIs used to set the soft keyboard to the fixed or floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn only, since version 18.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void--><!--Device-Window-on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardDidShow' | Yes | Event type. The value is fixed at **'keyboardDidShow'**, indicating the show animation of the soft keyboard in the fixed state is completed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback used to return the information about the soft keyboard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## on('keyboardWillHide')

```TypeScript
on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void
```

Subscribes to the event indicating that the soft keyboard in the fixed state is about to hide, or the soft keyboard is transitioning from the fixed state to the floating state.

For details about the APIs used to set the soft keyboard to the fixed or floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void--><!--Device-Window-on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardWillHide' | Yes | Event type. The value is fixed at **'keyboardWillHide'**, indicating the soft keyboard in the fixed state is about to hide. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback used to return the information about the soft keyboard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## on('keyboardDidHide')

```TypeScript
on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void
```

Subscribes to the event indicating that the hide animation of the soft keyboard in the fixed state is completed,or when the soft keyboard finishes transitioning from the fixed state to the floating state.

For details about the APIs used to set the soft keyboard to the fixed or floating state, see  
[Input Method Service]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn only, since version 18.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void--><!--Device-Window-on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardDidHide' | Yes | Event type. The value is fixed at **'keyboardDidHide'**, indicating the hide animation of the soft keyboard in the fixed state is completed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback used to return the information about the soft keyboard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## on('touchOutside')

```TypeScript
on(type: 'touchOutside', callback: Callback<void>): void
```

Subscribes to the touch event outside this window.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-on(type: 'touchOutside', callback: Callback<void>): void--><!--Device-Window-on(type: 'touchOutside', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchOutside' | Yes | Event type. The value is fixed at **'touchOutside'**, indicating the touch event outside this window. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the touch event outside this window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('displayIdChange')

```TypeScript
on(type: 'displayIdChange', callback: Callback<long>): void
```

Subscribes to the display change event of this window. For example, this event is triggered when the window is moved to a different display.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-on(type: 'displayIdChange', callback: Callback<long>): void--><!--Device-Window-on(type: 'displayIdChange', callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'displayIdChange' | Yes | Event type. The value is fixed at **'displayIdChange'**, indicating the display change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;long&gt; | Yes | Callback invoked when the display where the window is located changes. The callback contains a parameter of the number type, indicating the new display ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## on('windowVisibilityChange')

```TypeScript
on(type: 'windowVisibilityChange', callback: Callback<boolean>): void
```

Subscribes to the visibility status change event of this window. The visibility returned by this API may be different from that perceived by human eyes in the following scenarios:

- If the shadow area of a non-main window (  
[setWindowShadowEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
[setWindowShadowRadius]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ can be used to set whether the shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as partially visible even though it is completely visible to human eyes.  
- If the upper-layer window has a transparency effect (including all transparency degrees except the completely  
opaque degree), the lower-layer window will not be blocked and is visible.  
- Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating  
window on a mobile phone, the lower-layer window returned remains visible.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'windowVisibilityChange', callback: Callback<boolean>): void--><!--Device-Window-on(type: 'windowVisibilityChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowVisibilityChange' | Yes | Event type. The value is fixed at **'windowVisibilityChange'**, indicating the visibility status change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the visibility status of the window, which is a Boolean value. **true** if visible, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('systemDensityChange')

```TypeScript
on(type: 'systemDensityChange', callback: Callback<double>): void
```

Subscribes to the system density change event, which is triggered when the system's display size scale factor changes for the screen where the window is located.

In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to physical pixels (px). For example, if the return value is **density**, the calculation formula is vp * density =px.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-on(type: 'systemDensityChange', callback: Callback<double>): void--><!--Device-Window-on(type: 'systemDensityChange', callback: Callback<double>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemDensityChange' | Yes | Event type. The value is fixed at **'systemDensityChange'**, indicating the system density change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;double&gt; | Yes | Callback invoked when the system's display size scale factor changes. The callback contains a parameter of the number type, indicating the new scale factor. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## on('noInteractionDetected')

```TypeScript
on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void
```

Register the callback function that has no interaction for a long time.Interaction events include physical keyboard input events and screen touch/click events,but not soft keyboard input events.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void--><!--Device-Window-on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'noInteractionDetected' | Yes | The value is fixed at 'noInteractionDetected', indicating the window has no interaction for a long time. |
| timeout | number | Yes | The timeout(in seconds) of no interaction detection. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to notify the window has no interaction for a long time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('screenshot')

```TypeScript
on(type: 'screenshot', callback: Callback<void>): void
```

Subscribes to the screenshot event.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'screenshot', callback: Callback<void>): void--><!--Device-Window-on(type: 'screenshot', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'screenshot' | Yes | Event type. The value is fixed at **'screenshot'**, covering screenshot events initiated from the Control Panel, by running hdc commands, or by calling the screenshot interfaces. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback invoked when a screenshot event occurs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('screenshotAppEvent')

```TypeScript
on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void
```

Subscribes to the screenshot event.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

<!--Device-Window-on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void--><!--Device-Window-on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'screenshotAppEvent' | Yes | Event type. The value is fixed at **'screenshotAppEvent'**, covering screenshot events from the Control Panel, shortcut keys, and scroll capture. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;ScreenshotEventType&gt; | Yes | Callback invoked when a screenshot event occurs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('dialogTargetTouch')

```TypeScript
on(type: 'dialogTargetTouch', callback: Callback<void>): void
```

Subscribes to click or touch events in a window covered by a modal window. This API takes effect only when it is called by a modal window.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'dialogTargetTouch', callback: Callback<void>): void--><!--Device-Window-on(type: 'dialogTargetTouch', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dialogTargetTouch' | Yes | Event type. The value is fixed at **'dialogTargetTouch'**, indicating the click or touch event in a window covered by a modal window. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback invoked when a click or touch event occurs in the window covered by the modal window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('windowEvent')

```TypeScript
on(type: 'windowEvent', callback: Callback<WindowEventType>): void
```

Subscribes to the window lifecycle change event.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-on(type: 'windowEvent', callback: Callback<WindowEventType>): void--><!--Device-Window-on(type: 'windowEvent', callback: Callback<WindowEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowEvent' | Yes | Event type. The value is fixed at **'windowEvent'**, indicating the window lifecycle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowEventType&gt; | Yes | Callback used to return the window lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

## on('windowStatusChange')

```TypeScript
on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void
```

Enables the listening for window status changes. When the window status changes, a notification is sent. (In this case, the window attributes may not be updated yet. If you need to obtain the changed window size and position immediately after receiving the window status change notification, you are advised to use  
[on('windowStatusDidChange')]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_.)

After the listening is enabled using this API, multiple callbacks will be received when the **maximize** or  
**recover** method is called. To obtain the deduplicated callback, you can use  
[on('windowStatusDidChange')]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_.
    **NOTE**  
    
    In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, when the window is  
    maximized (covering the entire screen, with a dock bar and status bar on 2-in-1 devices, and a status bar on  
    tablets), the return value differs based on the  
    \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ setting. For  
    versions below 14, the return value is **WindowStatusType::FULL\_SCREEN**. For versions 14 and above, the return  
    value is **WindowStatusType::MAXIMIZE**.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void--><!--Device-Window-on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowStatusChange' | Yes | Event type. The value is fixed at **'windowStatusChange'**, indicating the window status change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | Yes | Callback used to return the window status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

## on('windowStatusDidChange')

```TypeScript
on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void
```

Subscribes to the event indicating that the window status has changed (the [Rect]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_property of the window has been updated).

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

<!--Device-Window-on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void--><!--Device-Window-on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowStatusDidChange' | Yes | Event type. The value is fixed at **'windowStatusDidChange'**, indicating that the window status has changed. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | Yes | Callback used to return the window status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## on('subWindowClose')

```TypeScript
on(type: 'subWindowClose', callback: Callback<void>): void
```

Subscribes to the event indicating that the child window is closed. This event is triggered only when the user clicks the system-provided close button in the top-right corner to close the child window. It is not triggered when the child window is closed in other ways.

If the event is subscribed to multiple times, only the most recently subscribed-to event takes effect.

The callback function in this API is executed synchronously. For asynchronous close events of child windows,refer to  
[on('windowWillClose')]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

If there is an existing event subscribed to by calling  
[on('windowWillClose')]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_, only the  
[on('windowWillClose')]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_API will be responded to.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'subWindowClose', callback: Callback<void>): void--><!--Device-Window-on(type: 'subWindowClose', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'subWindowClose' | Yes | Event type. The value is fixed at **'subWindowClose'**, indicating the child window close event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback invoked when the close button in the top-right corner of the child window is clicked. It does not return any parameter. The return value of the internal logic of the callback function determines whether to continue to close the child window. If **true** of the Boolean type is returned, the child window is not closed. If **false** or other non-Boolean types are returned, the child window is closed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |

## on('windowWillClose')

```TypeScript
on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void
```

Subscribes to the event indicating that the main window or child window will be closed. This event is triggered only when the user clicks the close button in the system-provided title bar to close the window. It is not triggered when the window is closed in other ways.

The callback function in this API is executed asynchronously. For synchronous close events of child windows,refer to [on('subWindowClose')]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_. For synchronous close events of the main window, refer to  
[on('windowStageClose')]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void--><!--Device-Window-on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowWillClose' | Yes | Event type. The value is fixed at **'windowWillClose'**, indicating the window close event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void, Promise&lt;boolean&gt;&gt; | Yes | Callback invoked when the close button in the top-right corner of the window is clicked. It does not return any parameter. The internal logic of the callback function requires a return value of the Promise\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ type. In the returned Promise function, **resolve(true)** means not to close the window, and **resolve(false)** or **reject** means to continue to close the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Not called from mainWindow or subWindow. |

## on('windowHighlightChange')

```TypeScript
on(type: 'windowHighlightChange', callback: Callback<boolean>): void
```

Subscribes to the highlighted state change event of the window.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-on(type: 'windowHighlightChange', callback: Callback<boolean>): void--><!--Device-Window-on(type: 'windowHighlightChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowHighlightChange' | Yes | Event type. The value is fixed at **'windowHighlightChange'**, indicating the window highlighted state change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the highlighted state of the window, which is a Boolean value. **true** if highlighted, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('windowTitleButtonRectChange')

```TypeScript
on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void
```

Subscribes to the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window. This API takes effect for the window that has a title bar or a three-button area. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void--><!--Device-Window-on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowTitleButtonRectChange' | Yes | Event type. The value is fixed at **'windowTitleButtonRectChange'**, indicating that the change event of the rectangle that holds the minimize, maximize, and close buttons. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;TitleButtonRect&gt; | Yes | Callback used to return the new rectangle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## on('windowRectChange')

```TypeScript
on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void
```

Subscribes to window rectangle (position and size) change events.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void--><!--Device-Window-on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowRectChange' | Yes | Event type. The value is fixed at **'windowRectChange'**, indicating the window rectangle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | Yes | Callback used to return the value and reason of the window rectangle change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('rectChangeInGlobalDisplay')

```TypeScript
on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void
```

Enables the listening event for changes in the window rectangle (window position and size) in the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

<!--Device-Window-on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void--><!--Device-Window-on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rectChangeInGlobalDisplay' | Yes | Event type. The value is fixed at **'rectChangeInGlobalDisplay'**, indicating the window rectangle change event in the global coordinate system. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | Yes | Callback used to return the value and reason of the window rectangle change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## on('freeWindowModeChange')

```TypeScript
on(type: 'freeWindowModeChange', callback: Callback<boolean>): void
```

Subscribes to the freeform window mode change event.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn only, since version 22.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Window-on(type: 'freeWindowModeChange', callback: Callback<boolean>): void--><!--Device-Window-on(type: 'freeWindowModeChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'freeWindowModeChange' | Yes | Event type. The value is fixed at **'freeWindowModeChange'**, indicating the freeform window mode change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result, indicating whether the window is in freeform window mode. **true** if the window is in freeform window mode, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onAvoidAreaChange

```TypeScript
onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void
```

Register the callback of avoidAreaChange

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void--><!--Device-Window-onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;AvoidAreaOptions&gt; | Yes | Callback used to return the area. |

## onDialogTargetTouch

```TypeScript
onDialogTargetTouch(callback: Callback<void>): void
```

Subscribes to click or touch events in a window covered by a modal window.This API takes effect only when it is called by a modal window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onDialogTargetTouch(callback: Callback<void>): void--><!--Device-Window-onDialogTargetTouch(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback invoked when the click event occurs in the target window of the modal window mode. |

## onDisplayIdChange

```TypeScript
onDisplayIdChange(callback: Callback<long>): void
```

Subscribes to the display change event of this window. For example, this event is triggered when the window is moved to a different display.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onDisplayIdChange(callback: Callback<long>): void--><!--Device-Window-onDisplayIdChange(callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;long&gt; | Yes | Callback invoked when the display where the window is located changes. The callback contains a parameter of the number type, indicating the new display ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onFrameMetricsMeasured

```TypeScript
onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void
```

Subscribes to events indicating changes in window frame metrics. This API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

The callback is triggered only when the client UI content is redrawn (for example, during page transitions,interactions with responsive components, setting background colors, or adjusting opacity).

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void--><!--Device-Window-onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;FrameMetrics&gt; | Yes | Callback invoked when the window frame metrics change. For details, see [Frame Rate Metrics]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onFreeWindowModeChange

```TypeScript
onFreeWindowModeChange(callback: Callback<boolean>): void
```

free window mode change callback on.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-Window-onFreeWindowModeChange(callback: Callback<boolean>): void--><!--Device-Window-onFreeWindowModeChange(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result if the current device is in free window mode. true - means in free window mode; false - means not in free window mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onKeyboardDidHide

```TypeScript
onKeyboardDidHide(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard did hide

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onKeyboardDidHide(callback: Callback<KeyboardInfo>): void--><!--Device-Window-onKeyboardDidHide(callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback invoked when the keyboard hide animation is completed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onKeyboardDidShow

```TypeScript
onKeyboardDidShow(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard did show

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onKeyboardDidShow(callback: Callback<KeyboardInfo>): void--><!--Device-Window-onKeyboardDidShow(callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback invoked when the keyboard show animation is completed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onKeyboardHeightChange

```TypeScript
onKeyboardHeightChange(callback: Callback<int>): void
```

Register the callback of keyboard height change. This API only takes effect when the soft keyboard is invoked from this window and overlaps with it.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onKeyboardHeightChange(callback: Callback<int>): void--><!--Device-Window-onKeyboardHeightChange(callback: Callback<int>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;int&gt; | Yes | Callback used to return the current keyboard height, which is an integer, in px. |

## onKeyboardWillHide

```TypeScript
onKeyboardWillHide(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard will hide

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onKeyboardWillHide(callback: Callback<KeyboardInfo>): void--><!--Device-Window-onKeyboardWillHide(callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback invoked before the keyboard hide animation start. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillHide can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onKeyboardWillShow

```TypeScript
onKeyboardWillShow(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard will show

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onKeyboardWillShow(callback: Callback<KeyboardInfo>): void--><!--Device-Window-onKeyboardWillShow(callback: Callback<KeyboardInfo>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;KeyboardInfo&gt; | Yes | Callback invoked before the keyboard show animation start. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function keyboardWillShow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onNoInteractionDetected

```TypeScript
onNoInteractionDetected(timeout: long, callback: Callback<void>): void
```

Subscribes to non-interaction events in a window within the specified period.Interaction events include physical keyboard input events and screen touch/click events,but not soft keyboard input events.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onNoInteractionDetected(timeout: long, callback: Callback<void>): void--><!--Device-Window-onNoInteractionDetected(timeout: long, callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | long | Yes | The timeout(in seconds) of no interaction detection. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to notify the window has no interaction for a long time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onOcclusionStateChanged

```TypeScript
onOcclusionStateChanged(callback: Callback<OcclusionState>): void
```

Subscribes to the visibility status change event of the window. The visibility returned by this API may be different from that perceived by human eyes in the following scenarios:

- If the shadow area of a non-main window (  
[setWindowShadowEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
[setWindowShadowRadius]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ can be used to set whether the shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as partially visible even though it is completely visible to human eyes.  
- If the upper-layer window has a transparency effect (including all transparency degrees except the completely  
opaque degree), the lower-layer window will not be blocked and is visible.  
- Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating  
window on a mobile phone, the lower-layer window returned remains visible.

- If the shadow area of a non-main window (  
[setWindowShadowEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ and  
[setWindowShadowRadius]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ can be used to set whether the shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as partially visible even though it is completely visible to human eyes.  
- If the upper-layer window has a transparency effect (including all transparency degrees except the completely  
opaque degree), the lower-layer window will not be blocked and is visible.  
- Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating  
window on a mobile phone, the lower-layer window returned remains visible.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onOcclusionStateChanged(callback: Callback<OcclusionState>): void--><!--Device-Window-onOcclusionStateChanged(callback: Callback<OcclusionState>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;OcclusionState&gt; | Yes | Callback invoked when the window visibility status changes. For details, see [Window Visibility Status]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onRectChangeInGlobalDisplay

```TypeScript
onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void
```

Enables the listening event for changes in the window rectangle (window position and size) in the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void--><!--Device-Window-onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | Yes | Callback used to return the value and reason of the window rectangle change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onRotationChange

```TypeScript
onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void
```

Register the callback of rotation change

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void--><!--Device-Window-onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RotationChangeInfo, RotationChangeResult \| undefined&gt; | Yes | Register the callback function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onScreenshot

```TypeScript
onScreenshot(callback: Callback<void>): void
```

Subscribes to the screenshot event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onScreenshot(callback: Callback<void>): void--><!--Device-Window-onScreenshot(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback invoked when a screenshot event occurs. |

## onScreenshotAppEvent

```TypeScript
onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void
```

Subscribes to the screenshot event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void--><!--Device-Window-onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;ScreenshotEventType&gt; | Yes | Callback invoked when a screenshot event occurs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onSubWindowClose

```TypeScript
onSubWindowClose(callback: Callback<void>): void
```

Subscribes to the event indicating that the child window is closed.This event is triggered only when the user clicks the system-provided close button in the upper right corner to close the child window.It is not triggered when the child window is closed in other ways.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onSubWindowClose(callback: Callback<void>): void--><!--Device-Window-onSubWindowClose(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback invoked when the close button in the upper right corner of the child window is clicked. The internal logic of the callback function requires a return value of the Boolean type. The return value determines whether to continue to close the child window. The value true means not to close the child window, and false means to continue to close the child window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |

## onSystemDensityChange

```TypeScript
onSystemDensityChange(callback: Callback<double>): void
```

Subscribes to the system density change event, which is triggered when the system's display size scale factor changes for the screen where the window is located.

In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to physical pixels (px). For example, if the return value is **density**, the calculation formula is vp *  
density = px.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onSystemDensityChange(callback: Callback<double>): void--><!--Device-Window-onSystemDensityChange(callback: Callback<double>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;double&gt; | Yes | Callback used to notify the system density is current has changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onTouchOutside

```TypeScript
onTouchOutside(callback: Callback<void>): void
```

Subscribes to the touch event outside this window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onTouchOutside(callback: Callback<void>): void--><!--Device-Window-onTouchOutside(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the click event outside this window. |

## onUiExtensionSecureLimitChange

```TypeScript
onUiExtensionSecureLimitChange(callback: Callback<boolean>): void
```

UIExtension in window secure limit change callback on.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onUiExtensionSecureLimitChange(callback: Callback<boolean>): void--><!--Device-Window-onUiExtensionSecureLimitChange(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result whether the APP has uiextension secure limit. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onWindowEvent

```TypeScript
onWindowEvent(callback: Callback<WindowEventType>): void
```

Subscribes to the window lifecycle change event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowEvent(callback: Callback<WindowEventType>): void--><!--Device-Window-onWindowEvent(callback: Callback<WindowEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowEventType&gt; | Yes | Callback used to return the window lifecycle state. |

## onWindowHighlightChange

```TypeScript
onWindowHighlightChange(callback: Callback<boolean>): void
```

Register the callback of window highlight state change

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowHighlightChange(callback: Callback<boolean>): void--><!--Device-Window-onWindowHighlightChange(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the highlight status of the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onWindowPostureModeChange

```TypeScript
onWindowPostureModeChange(mode: WindowPostureMode, callback: Callback<boolean>): void
```

Registers a callback that is invoked when the window changes to the specified window posture mode.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-onWindowPostureModeChange(mode: WindowPostureMode, callback: Callback<boolean>): void--><!--Device-Window-onWindowPostureModeChange(mode: WindowPostureMode, callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The window posture mode to monitor. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback invoked when the window change into the specified window posture mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: The internal services of the window are not started normally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## onWindowRectChange

```TypeScript
onWindowRectChange(callback: Callback<RectChangeOptions>): void
```

Subscribes to window rectangle (position and size) change events.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowRectChange(callback: Callback<RectChangeOptions>): void--><!--Device-Window-onWindowRectChange(callback: Callback<RectChangeOptions>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;RectChangeOptions&gt; | Yes | Callback used to return the value and reason of the window rectangle change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onWindowSizeChange

```TypeScript
onWindowSizeChange(callback: Callback<Size>): void
```

Subscribes to the window size change event. This API can be called only by the main thread.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowSizeChange(callback: Callback<Size>): void--><!--Device-Window-onWindowSizeChange(callback: Callback<Size>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Size&gt; | Yes | Callback used to return the window size. |

## onWindowStatusChange

```TypeScript
onWindowStatusChange(callback: Callback<WindowStatusType>): void
```

Enables the listening for window status changes. When the window status changes, a notification is sent. (In this case, the window attributes may not be updated yet. If you need to obtain the changed window size and position immediately after receiving the window status change notification, you are advised to use  
[on('windowStatusDidChange')]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_.)

After the listening is enabled using this API, multiple callbacks will be received when the **maximize** or  
**recover** method is called. To obtain the deduplicated callback, you can use  
[on('windowStatusDidChange')]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_.
    **NOTE**  
    
    In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, when the window is  
    maximized (covering the entire screen, with a dock bar and status bar on 2-in-1 devices, and a status bar on  
    tablets), the return value differs based on the  
    \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_ setting. For  
    versions below 14, the return value is **WindowStatusType::FULL\_SCREEN**. For versions 14 and above, the return  
    value is **WindowStatusType::MAXIMIZE**.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowStatusChange(callback: Callback<WindowStatusType>): void--><!--Device-Window-onWindowStatusChange(callback: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | Yes | Callback used to return the window status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

## onWindowStatusDidChange

```TypeScript
onWindowStatusDidChange(callback: Callback<WindowStatusType>): void
```

Subscribes to the event indicating that the window status has changed (the [Rect]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_property of the window has been updated).

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowStatusDidChange(callback: Callback<WindowStatusType>): void--><!--Device-Window-onWindowStatusDidChange(callback: Callback<WindowStatusType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStatusType&gt; | Yes | Callback used to return the window status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## onWindowTitleButtonRectChange

```TypeScript
onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void
```

Subscribes to the change event of the rectangle that holds the minimize,maximize, and close buttons on the title bar of the window.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void--><!--Device-Window-onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;TitleButtonRect&gt; | Yes | Callback used to return the new rectangle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## onWindowVisibilityChange

```TypeScript
onWindowVisibilityChange(callback: Callback<boolean>): void
```

Subscribes to the visibility status change event of this window. The visibility returned by this API may be different from that perceived by human eyes in the following scenarios:

- If the shadow area of a non-main window (  
[setWindowShadowEnabled]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
[setWindowShadowRadius]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ can be used to set whether the shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as partially visible even though it is completely visible to human eyes.  
- If the upper-layer window has a transparency effect (including all transparency degrees except the completely  
opaque degree), the lower-layer window will not be blocked and is visible.  
- Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating  
window on a mobile phone, the lower-layer window returned remains visible.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowVisibilityChange(callback: Callback<boolean>): void--><!--Device-Window-onWindowVisibilityChange(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the visibility status of the window, which is a Boolean value. **true** if visible, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## onWindowWillClose

```TypeScript
onWindowWillClose(callback: Callback<void, Promise<boolean>>): void
```

Subscribes to the event indicating that the main window or child window will be closed.This event is triggered only when the user clicks the close button in the system-provided title bar to close the window.It is not triggered when the window is closed in other ways.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-Window-onWindowWillClose(callback: Callback<void, Promise<boolean>>): void--><!--Device-Window-onWindowWillClose(callback: Callback<void, Promise<boolean>>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void, Promise&lt;boolean&gt;&gt; | Yes | Callback used to when the close button in the upper right corner of the window is clicked. The internal logic of the callback function requires a return value of the Promise type. In the returned Promise function, resolve(true) means not to close the window, and resolve(false) or reject means to continue to close the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Not called from mainWindow or subWindow. |

## raiseToAppTop

```TypeScript
raiseToAppTop(): Promise<void>
```

Brings a child window to the top. This action is limited to child windows of the same type under the same parent window within the current application. For child windows with a custom zLevel property, it only applies to child windows with the same zLevel value under the same parent window within the current application. This API uses a promise to return the result.

Before calling this API, ensure that the child window has been created and  
[showWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ has been successfully executed.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

<!--Device-Window-raiseToAppTop(): Promise<void>--><!--Device-Window-raiseToAppTop(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |
| [1300009](../errorcode-window.md#1300009-invalid-parent-window) | The parent window is invalid. |

## recover

```TypeScript
recover(): Promise<void>
```

Restores the main window from the full-screen, maximized, or split-screen mode to a floating window (  
**window.WindowStatusType.FLOATING** mode), and restores the window size and position to those before the full-screen, maximized, or split-screen mode is entered. If the main window is already in the floating window mode,nothing will happen. This API uses a promise to return the result.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-recover(): Promise<void>--><!--Device-Window-recover(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300001](../errorcode-window.md#1300001-repeated-operation) | Repeated operation. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. 3. The window does not support floating mode. |

## recover

```TypeScript
recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>
```

Restores the main window from full-screen, maximized, or split-screen mode to a floating window,and resets its size and position to their previous values before full-screen,maximized, or split-screen mode was entered.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>--><!--Device-Window-recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| snapshotAnimationConfig | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The configuration of snapshot animation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; |  Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300001](../errorcode-window.md#1300001-repeated-operation) | Repeated operation. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error; 3. The window does not support floating mode. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: 1. The snapshotAnimationConfig parameter only supports main windows. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## resetAspectRatio

```TypeScript
resetAspectRatio(callback: AsyncCallback<void>): void
```

Resets the aspect ratio of the window content layout. This API uses an asynchronous callback to return the result.

This API is valid only for the main window. After it is called, the persistently saved aspect ratio is cleared.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-resetAspectRatio(callback: AsyncCallback<void>): void--><!--Device-Window-resetAspectRatio(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## resetAspectRatio

```TypeScript
resetAspectRatio(): Promise<void>
```

Resets the aspect ratio of the window content layout. This API uses a promise to return the result.

This API is valid only for the main window. After it is called, the persistently saved aspect ratio is cleared.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-resetAspectRatio(): Promise<void>--><!--Device-Window-resetAspectRatio(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## resetSize

```TypeScript
resetSize(width: number, height: number): Promise<void>
```

Changes the size of this window based on the top-left vertex of the window. This API uses a promise to return the result.

The main window and child window have the following default size limits: [320, 1920] in width and [240, 1920] in height, both in units of vp.

The minimum width and height of the main window and child window of the application depends on the configuration on the product side. You can call [getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to obtain size limits.

The system window has the following size limits: (0, 1920] in width and (0, 1920] in height, both in units of vp.

The new window width and height you set must meet the following limits:

If the window width or height is less than the minimum width or height limit, then the minimum width or height limit takes effect.

If the window width or height is greater than the maximum width or height limit, then the maximum width or height limit takes effect.

This operation is not supported in a window in full-screen mode.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.resize](arkts-arkui-window-window-i.md#resize)(width:

<!--Device-Window-resetSize(width: number, height: number): Promise<void>--><!--Device-Window-resetSize(width: number, height: number): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | New width of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is thrown. |
| height | number | Yes | New height of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## resetSize

```TypeScript
resetSize(width: number, height: number, callback: AsyncCallback<void>): void
```

Changes the size of this window based on the top-left vertex of the window. This API uses an asynchronous callback to return the result.

The main window and child window have the following default size limits: [320, 1920] in width and [240, 1920] in height, both in units of vp.

The minimum width and height of the main window and child window of the application depends on the configuration on the product side. You can call [getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to obtain size limits.

The system window has the following size limits: (0, 1920] in width and (0, 1920] in height, both in units of vp.

The new window width and height you set must meet the following limits:

If the window width or height is less than the minimum width or height limit, then the minimum width or height limit takes effect.

If the window width or height is greater than the maximum width or height limit, then the maximum width or height limit takes effect.

This operation is not supported in a window in full-screen mode.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.resize](arkts-arkui-window-window-i.md#resize)(width:

<!--Device-Window-resetSize(width: number, height: number, callback: AsyncCallback<void>): void--><!--Device-Window-resetSize(width: number, height: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | New width of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is thrown. |
| height | number | Yes | New height of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is thrown. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## resize

ArkTS-Dyn:
```TypeScript
resize(width: number, height: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
resize(width: int, height: int): Promise<void>
```

Changes the size of this window based on the top-left vertex of the window. This API uses a promise to return the result.

A value is returned once the API is called successfully. However, the final effect cannot be obtained immediately from the return value. To obtain the final effect immediately, call  
[resizeAsync()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

The window size is restricted by [WindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_. You can call  
[getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ to find out the exact limits.

The new window width and height you set must meet the following limits:

If the window width or height is less than the minimum width or height limit, then the minimum width or height limit takes effect. However, the system window and global floating window settings are not subject to these minimum width or height restrictions.

If the window width or height is greater than the maximum width or height limit, then the maximum width or height limit takes effect.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).If this API is called when the window is in other window modes, error code 1300002 is reported.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_).
    **NOTE**  
    
    - When the main window is in floating window mode, this API does not take effect or return an error if called  
    in non-\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-resize(width: int, height: int): Promise<void>--><!--Device-Window-resize(width: int, height: int): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | New width of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code 401 is thrown. |
| height | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | New height of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error; 3. Invalid window status type. Only supports windows in floating window mode. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## resize

ArkTS-Dyn:
```TypeScript
resize(width: number, height: number, callback: AsyncCallback<void>): void
```

ArkTS-Sta:
```TypeScript
resize(width: int, height: int, callback: AsyncCallback<void>): void
```

Changes the size of this window based on the top-left vertex of the window. This API uses an asynchronous callback to return the result.

A value is returned once the API is called successfully. However, the final effect cannot be obtained immediately from the return value. To obtain the final effect immediately, call  
[resizeAsync()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

The window size is restricted by [WindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_. You can call  
[getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ to find out the exact limits.

The new window width and height you set must meet the following limits:

If the window width or height is less than the minimum width or height limit, then the minimum width or height limit takes effect. However, the system window and global floating window settings are not subject to these minimum width or height restrictions.

If the window width or height is greater than the maximum width or height limit, then the maximum width or height limit takes effect.
    **NOTE**  
    
    - When the main window is in floating window mode, this API does not take effect or return an error if called  
    in non-\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ state.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-resize(width: int, height: int, callback: AsyncCallback<void>): void--><!--Device-Window-resize(width: int, height: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | New width of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code 401 is thrown. |
| height | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | New height of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code 401 is thrown. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error; 3. Invalid window status type. Only supports windows in floating window mode. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## resizeAsync

ArkTS-Dyn:
```TypeScript
resizeAsync(width: number, height: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
resizeAsync(width: int, height: int): Promise<void>
```

Changes the size of this window based on the top-left vertex of the window. This API uses a promise to return the result.

A value is returned once the call takes effect. You can use  
[getWindowProperties()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ in the callback (see the code snippet below) to obtain the final effect immediately.

The window size is restricted by [WindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_. You can call  
[getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ to find out the exact limits.

The new window width and height you set must meet the following limits:

If the window width or height is less than the minimum width or height limit, then the minimum width or height limit takes effect. However, the system window and global floating window settings are not subject to these minimum width or height restrictions.

If the window width or height is greater than the maximum width or height limit, then the maximum width or height limit takes effect.

This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).In other scenarios, this API returns error code 1300010.(The window mode can be obtained through [getWindowStatus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_).
    **NOTE**  
    
    - In non-\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode,  
    this API does not work for the main window.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-resizeAsync(width: int, height: int): Promise<void>--><!--Device-Window-resizeAsync(width: int, height: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | New width of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code 401 is thrown. |
| height | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | New height of the window, in px. The value must be an integer. If a floating-point number is passed in, the value is rounded down. A negative value is invalid, and error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Invalid parameter range. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300010](../errorcode-window.md#1300010-unsupported-operation-in-the-current-window-mode) | The operation in the current window status is invalid. Possible cause: The window status is not FLOATING. |

## restore

```TypeScript
restore(): Promise<void>
```

Restores the main window from minimization to the foreground, returning it to its size and position before it is minimized. This API takes effect only when the main window is minimized and the UIAbility is in the onForeground state. If the main window is already in the foreground, this API simply raises the window's layer. This API uses a promise to return the result.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-restore(): Promise<void>--><!--Device-Window-restore(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## restoreMainWindow

```TypeScript
restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>
```

Restores the main window of the current window to the foreground. If the main window is already in the foreground, the main window level is raised. This API is applicable only to  
[TYPE\_FLOAT]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ windows and can be called only after the  
[DOWN]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ event is triggered in the windows. This API uses a promise to return the result.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>--><!--Device-Window-restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParameters | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;string, Object&gt; | No | Want parameters. Custom want parameter delivered when restoring the main window. Want parameters are used for UIAbility onNewWant. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: 1. The window is not float window. 2. The window is not at foreground or has never been clicked. 3. The window cannot find main window. |
| [1300007](../errorcode-window.md#1300007-application-startup-failure-by-windowextensionability) | Restore parent main window failed. Possible cause: 1. The main window is in PAUSED lifecycle state. 2. The main window is in background during recent. |

## setAspectRatio

ArkTS-Dyn:
```TypeScript
setAspectRatio(ratio: number, callback: AsyncCallback<void>): void
```

ArkTS-Sta:
```TypeScript
setAspectRatio(ratio: double, callback: AsyncCallback<void>): void
```

Sets the aspect ratio of the window content layout (excluding decorations like borders and title bars). This API uses an asynchronous callback to return the result.
    **NOTE**  
    
    - When the window size is set by using other APIs such as  
    [resize]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
    [resizeAsync]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_, the window size is not restricted by **ratio**.  
    
    - This setting is available only for the main window and takes effect only in floating window mode (  
    **window.WindowStatusType.FLOATING** mode). The aspect ratio is saved persistently, which means that the  
    setting is valid in floating window mode even after the application is closed or the device is restarted.  
    
    - After the aspect ratio is set for a main window of an application, the aspect ratio is used for subsequent  
    main windows. If you need to set the aspect ratio for just one main window, use  
    [setContentAspectRatio]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ instead.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setAspectRatio(ratio: double, callback: AsyncCallback<void>): void--><!--Device-Window-setAspectRatio(ratio: double, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ratio | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Aspect ratio of the window content layout (excluding decorations like borders and title bars). The value is a floating-point number and is restricted by the maximum and minimum sizes of the window. The minimum ratio is the value of minimum width divided by the maximum height, and the maximum ratio is the maximum width divided by the minimum height. The maximum and minimum sizes of the window are determined by the intersection of the setting of [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ and the system limit. The system limit takes precedence over [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. The valid range of **ratio** varies with [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. If [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_3\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is set prior to **ratio**, any conflict will result in an error code when setting **ratio**. Conversely, if **ratio** is set before and then conflicts arise with the subsequently configured [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_4\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_, the window's aspect ratio may not adhere to the initially configured value of **ratio**. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Invalid parameter range. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setAspectRatio

ArkTS-Dyn:
```TypeScript
setAspectRatio(ratio: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setAspectRatio(ratio: double): Promise<void>
```

Sets the aspect ratio of the window content layout (excluding decorations like borders and title bars). This API uses a promise to return the result.
    **NOTE**  
    
    - When the window size is set by using other APIs such as  
    [resize]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ and  
    [resizeAsync]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_, the window size is not restricted by **ratio**.  
    
    - This setting is available only for the main window and takes effect only in floating window mode (  
    **window.WindowStatusType.FLOATING** mode). The aspect ratio is saved persistently, which means that the  
    setting is valid in floating window mode even after the application is closed or the device is restarted.  
    
    - After the aspect ratio is set for a main window of an application, the aspect ratio is used for subsequent  
    main windows. If you need to set the aspect ratio for just one main window, use  
    [setContentAspectRatio]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ instead.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn since version 10; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setAspectRatio(ratio: double): Promise<void>--><!--Device-Window-setAspectRatio(ratio: double): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ratio | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Aspect ratio of the window content layout (excluding decorations like borders and title bars). The value is a floating-point number and is restricted by the maximum and minimum sizes of the window. The minimum ratio is the value of minimum width divided by the maximum height, and the maximum ratio is the maximum width divided by the minimum height. The maximum and minimum sizes of the window are determined by the intersection of the setting of [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ and the system limit. The system limit takes precedence over [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. The valid range of **ratio** varies with [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. If [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_3\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is set prior to **ratio**, any conflict will result in an error code when setting **ratio**. Conversely, if **ratio** is set before and then conflicts arise with the subsequently configured [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_4\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_, the window's aspect ratio may not adhere to the initially configured value of **ratio**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Invalid parameter range. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setBackgroundColor

```TypeScript
setBackgroundColor(color: string): Promise<void>
```

Sets the background color for this window. This API uses a promise to return the result. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowBackgroundColor](arkts-arkui-window-window-i.md#setwindowbackgroundcolor)

<!--Device-Window-setBackgroundColor(color: string): Promise<void>--><!--Device-Window-setBackgroundColor(color: string): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | string | Yes | Background color to set. The value is a hexadecimal RGB or ARGB color code and is case insensitive, for example, **'#00FF00'** or **'#FF00FF00'**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setBackgroundColor

```TypeScript
setBackgroundColor(color: string, callback: AsyncCallback<void>): void
```

Sets the background color for this window. This API uses an asynchronous callback to return the result. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowBackgroundColor](arkts-arkui-window-window-i.md#setwindowbackgroundcolor)

<!--Device-Window-setBackgroundColor(color: string, callback: AsyncCallback<void>): void--><!--Device-Window-setBackgroundColor(color: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | string | Yes | Background color to set. The value is a hexadecimal RGB or ARGB color code and is case insensitive, for example, **'#00FF00'** or **'#FF00FF00'**. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setBrightness

```TypeScript
setBrightness(brightness: number): Promise<void>
```

Sets the screen brightness for this window. This API uses a promise to return the result.

When the screen brightness setting for the window takes effect, Control Panel cannot adjust the system screen brightness. It can do so only after the window screen brightness is restored to the default value.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowBrightness](arkts-arkui-window-window-i.md#setwindowbrightness)(brightness:

<!--Device-Window-setBrightness(brightness: number): Promise<void>--><!--Device-Window-setBrightness(brightness: number): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | number | Yes | Brightness to set. The value is a floating-point number in the range [0.0, 1.0] or is set to **-1.0**. The value **1.0** means the brightest, and **-1.0** means that the window brightness resets to the original brightness set through Control Panel. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setBrightness

```TypeScript
setBrightness(brightness: number, callback: AsyncCallback<void>): void
```

Sets the screen brightness for this window. This API uses an asynchronous callback to return the result.

When the screen brightness setting for the window takes effect, Control Panel cannot adjust the system screen brightness. It can do so only after the window screen brightness is restored to the default value.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowBrightness](arkts-arkui-window-window-i.md#setwindowbrightness)(brightness:

<!--Device-Window-setBrightness(brightness: number, callback: AsyncCallback<void>): void--><!--Device-Window-setBrightness(brightness: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | number | Yes | Brightness to set. The value is a floating-point number in the range [0.0, 1.0] or is set to **-1.0**. The value **1.0** means the brightest, and **-1.0** means that the window brightness resets to the original brightness set through Control Panel. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: ColorSpace): Promise<void>
```

Sets a color space for this window. This API uses a promise to return the result.

**Since:** 8

**ArkTS mode:** ArkTS-Dyn only, since version 8.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowColorSpace](arkts-arkui-window-window-i.md#setwindowcolorspace)(colorSpace:ColorSpace)

<!--Device-Window-setColorSpace(colorSpace: ColorSpace): Promise<void>--><!--Device-Window-setColorSpace(colorSpace: ColorSpace): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Color space to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void
```

Sets a color space for this window. This API uses an asynchronous callback to return the result.

**Since:** 8

**ArkTS mode:** ArkTS-Dyn only, since version 8.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowColorSpace](arkts-arkui-window-window-i.md#setwindowcolorspace)(colorSpace:ColorSpace,

<!--Device-Window-setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void--><!--Device-Window-setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Color space to set. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setContentAspectRatio

ArkTS-Dyn:
```TypeScript
setContentAspectRatio(ratio: number, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>
```

ArkTS-Sta:
```TypeScript
setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>
```

Sets the aspect ratio of the window content layout (excluding decorations like borders and title bars). This API uses a promise to return the result.
    **NOTE**  
    
    - When you adjust the window width and height using the same **ratio** parameter, the window size adapts to  
    changes in the border decoration size or visibility.  
    
    - When the window title bar is set to invisible by using  
    [setWindowDecorVisible]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_, the window content area takes over the  
    space that was previously used by the title bar.  
    
    - When the window size is set by using other APIs such as  
    [resize]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ and  
    [resizeAsync]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_, the window size is not restricted by **ratio**.  
    
    - This setting is available only for the main window and takes effect only in floating window mode (  
    **window.WindowStatusType.FLOATING** mode).

**Since:** 21

**ArkTS mode:** ArkTS-Dyn since version 21; ArkTS-Sta since version 23.

<!--Device-Window-setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>--><!--Device-Window-setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ratio | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Aspect ratio of the window content layout (excluding decorations like borders and title bars). The value is a floating-point number and is restricted by the maximum and minimum sizes of the window. The minimum ratio is the value of minimum width divided by the maximum height, and the maximum ratio is the maximum width divided by the minimum height. The maximum and minimum sizes of the window are determined by the intersection of the setting of [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ and the system limit. The system limit takes precedence over [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. The valid range of **ratio** varies with [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. If [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_3\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is set prior to **ratio**, any conflict will result in an error code when setting **ratio**. Conversely, if **ratio** is set before and then conflicts arise with the subsequently configured [WindowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_4\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_, the window's aspect ratio may not adhere to the initially configured value of **ratio**. |
| isPersistent | boolean | No | Whether the aspect ratio should be saved persistently.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_If this parameter is set to **true**, the aspect ratio is saved persistently. This means that the setting is valid in floating window mode even after the window is destroyed, the application is closed, or the device is restarted. You can call [resetAspectRatio]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ to clear the persistently saved aspect ratio.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_If this parameter is set to **false**, the aspect ratio applies only to the current window and is cleared once the window is destroyed.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_3\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_The default value is **true**. |
| needUpdateRect | boolean | No | Whether the window size should be immediately updated based on the current aspect ratio.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_If this parameter is set to **true**, the window size is updated immediately based on the current aspect ratio.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_3\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_If this parameter is set to **false**, the window size is updated based on the current aspect ratio when the window is dragged and resized. You can manually trigger an update by calling [resize]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ or [resizeAsync]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_4\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_The default value is **true**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. 2. Invalid parameter length. |

## setDecorButtonStyle

```TypeScript
setDecorButtonStyle(dectorStyle: DecorButtonStyle): void
```

Sets the button style of the decoration bar. The setting takes effect only for the main window and child windows.In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setDecorButtonStyle(dectorStyle: DecorButtonStyle): void--><!--Device-Window-setDecorButtonStyle(dectorStyle: DecorButtonStyle): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dectorStyle | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Button style of the decoration bar. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## setDialogBackGestureEnabled

```TypeScript
setDialogBackGestureEnabled(enabled: boolean): Promise<void>
```

Sets whether the modal window responds to the back gesture event. An error code is returned if this API is called for a non-modal window.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setDialogBackGestureEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setDialogBackGestureEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to respond to the back gesture event.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** means to respond to the back gesture event and trigger the **onBackPress** callback, **false** otherwise.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only dialog windows are supported. |

## setDimBehind

```TypeScript
setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void
```

Sets the dimness of the window that is not on top. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

<!--Device-Window-setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void--><!--Device-Window-setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dimBehindValue | number | Yes | Dimness of the window to set. The value range is [0.0, 1.0], and the value **1.0** means the dimmest. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setDimBehind

```TypeScript
setDimBehind(dimBehindValue: number): Promise<void>
```

Sets the dimness of the window that is not on top. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

<!--Device-Window-setDimBehind(dimBehindValue: number): Promise<void>--><!--Device-Window-setDimBehind(dimBehindValue: number): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dimBehindValue | number | Yes | Dimness of the window to set. The value ranges from 0 to 1. The value **1** indicates the dimmest. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setDragKeyFramePolicy

```TypeScript
setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>
```

Sets the keyframe policy for dragging the main window. This API uses a promise to return the result.

If this API is called by a non-main window, error code 1300004 is returned.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>--><!--Device-Window-setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyFramePolicy | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The policy of keyframe to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KeyFramePolicy&gt; | Promise used to return the keyframe policy that takes effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range; 2. The parameter format is incorrect. |

## setExclusivelyHighlighted

```TypeScript
setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>
```

Sets the exclusive highlight property for the window. When a window set to exclusive highlight gains focus, other windows in the current parent-child window chain that are in the highlighted state will lose their highlighted state. This API uses a promise to return the result.

This API does not take effect for the main window or modal window.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>--><!--Device-Window-setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exclusivelyHighlighted | boolean | Yes | Whether the window can become highlight exclusively when it gain focus. The value true means that the window can cause the window outside the current window link to lose its highlight state, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## setFloatNavigationAvoidAreaEnabled

```TypeScript
setFloatNavigationAvoidAreaEnabled(enabled: boolean): Promise<void>
```

Specifies whether to enable the avoid area for the float navigation type. When enabled, the actual value of the avoid area can be obtained by calling getWindowAvoidArea(AvoidAreaType.TYPE\_FLOAT\_NAVIGATION) or listening for AvoidAreaType of TYPE\_FLOAT\_NAVIGATION via on('avoidAreaChange') or declaring environment variables.When disabled, the float avoid area obtained through the above methods will always be 0.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Window-setFloatNavigationAvoidAreaEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setFloatNavigationAvoidAreaEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | The value true means to enable float navigation avoid area, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Create js value failed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setFocusable

```TypeScript
setFocusable(isFocusable: boolean): Promise<void>
```

Sets whether this window is focusable, that is, whether the window can gain focus after it is being clicked or using other methods. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowFocusable](arkts-arkui-window-window-i.md#setwindowfocusable)(isFocusable:

<!--Device-Window-setFocusable(isFocusable: boolean): Promise<void>--><!--Device-Window-setFocusable(isFocusable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFocusable | boolean | Yes | Whether the window is focusable. **true** if focusable, **false** otherwise. If this parameter is set to **false**, the window does not support binding to an input method or receiving keyboard events. If input logic needs to be processed, follow the instructions provided in \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ . |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setFocusable

```TypeScript
setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void
```

Sets whether this window is focusable, that is, whether the window can gain focus after it is being operated or using other methods. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowFocusable](arkts-arkui-window-window-i.md#setwindowfocusable)(isFocusable:

<!--Device-Window-setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFocusable | boolean | Yes | Whether the window is focusable. **true** if focusable, **false** otherwise. If this parameter is set to **false**, the window does not support binding to an input method or receiving keyboard events. If input logic needs to be processed, follow the instructions provided in \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ . |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setFollowParentMultiScreenPolicy

```TypeScript
setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>
```

Sets whether a child window can span multiple screens and be simultaneously displayed while its parent window is being dragged or resized. This API uses a promise to return the result.

By default, when a child window follows its parent window's layout changes (by using  
[moveWindowTo()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_), it does not support spanning multiple screens and being simultaneously displayed.

However, calling this API on the child window enables it to span multiple screens and be simultaneously displayed during the layout adjustment process.

**Since:** 17

**ArkTS mode:** ArkTS-Dyn since version 17; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-Window-setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>--><!--Device-Window-setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | The value true means sub window supports simultaneous display on multiple screens when the parent window is dragged to move or dragged to zoom, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Function setFollowParentMultiScreenPolicy can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## setFollowParentWindowLayoutEnabled

```TypeScript
setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>
```

Sets whether the layout information (position and size) of a child window or modal window (a window with  
**WindowType** set to **TYPE\_DIALOG**) follows the main window. This API uses a promise to return the result.

1. This API applies only to first-level child windows or modal windows of the main window.2. Once this API is called on a child window or modal window, its layout information will immediately match the main window and remain synchronized. This effect will persist until this API is called again with **false**.3. If this API is called on a child window or modal window, subsequent calls to APIs like **moveTo** or **resize** to modify the layout information will not take effect.4. When a child window or modal window stops using this functionality, its layout information (position and size) may not be a specific value. The application needs to reset it.

Once this API is successfully called, the  
[setRelativePositionToParentWindowEnabled()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ API will no longer take effect.

**Since:** 17

**ArkTS mode:** ArkTS-Dyn since version 17; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-Window-setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to follow the layout of the main window. **true** to follow, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. 3. The subwindow level is more than one. 4. The subwindow is following its parent window's position. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows and dialog windows are supported. |

## setFullScreen

```TypeScript
setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void
```

Sets whether the main window or the child window is in full-screen mode. This API uses an asynchronous callback to return the result.

Full-screen mode means that the layout does not avoid the status bar or \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar&lt;!-  
-RP15End--&gt;, and components may overlap with them.

Non-full-screen mode means that the layout avoids the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_, and components do not overlap with them.
    **NOTE**  
    
    This API is supported since API version 6 and deprecated since API version 9. You are advised to use  
    [setWindowSystemBarEnable()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
    and [setWindowLayoutFullScreen()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_  
    to implement the full-screen mode.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowLayoutFullScreen](arkts-arkui-window-window-i.md#setwindowlayoutfullscreen)(isLayoutFullScreen:

<!--Device-Window-setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFullScreen | boolean | Yes | Whether to set full-screen mode (full-screen mode affects the display of the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_). **true** to set full-screen mode, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setFullScreen

```TypeScript
setFullScreen(isFullScreen: boolean): Promise<void>
```

Sets whether the main window or the child window is in full-screen mode. This API uses a promise to return the result.

Full-screen mode means that the layout does not avoid the status bar or \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar&lt;!-  
-RP15End--&gt;, and components may overlap with them.

Non-full-screen mode means that the layout avoids the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_, and components do not overlap with them.
    **NOTE**  
    
    This API is supported since API version 6 and deprecated since API version 9. You are advised to use  
    [setWindowSystemBarEnable()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
    and [setWindowLayoutFullScreen()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_  
    to implement the full-screen mode.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowLayoutFullScreen](arkts-arkui-window-window-i.md#setwindowlayoutfullscreen)(isLayoutFullScreen:

<!--Device-Window-setFullScreen(isFullScreen: boolean): Promise<void>--><!--Device-Window-setFullScreen(isFullScreen: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFullScreen | boolean | Yes | Whether to set full-screen mode (full-screen mode affects the display of the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_). **true** to set full-screen mode, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setGestureBackEnabled

```TypeScript
setGestureBackEnabled(enabled: boolean): Promise<void>
```

Sets whether to enable the side-swipe gesture for back redirection in the current window. This API can be successfully called only for the main window, and error code 1300004 is returned on other windows.

After being enabled, this function takes effect only when the window is in full-screen mode and in the foreground with the focus gained.

After this function is disabled, the gesture hot zone of the current application is disabled, and the side-swipe for back redirection becomes invalid. After the user switches to another application or returns to the home screen, the gesture hot zone is restored, and the side-swipe for back redirection becomes normal.

**Since:** 13

**ArkTS mode:** ArkTS-Dyn since version 13; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-Window-setGestureBackEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setGestureBackEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the back gesture feature. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setImmersiveModeEnabledState

```TypeScript
setImmersiveModeEnabledState(enabled: boolean): void
```

Sets whether to enable the immersive layout for the main window. This API does not change the window mode or size. It can be called only by the main window and child windows.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setImmersiveModeEnabledState(enabled: boolean): void--><!--Device-Window-setImmersiveModeEnabledState(enabled: boolean): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the immersive layout.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** to enable, **false** otherwise.&lt; br&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Internal IPC error. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## setKeepScreenOn

```TypeScript
setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>
```

Sets whether to keep the screen always on. This API uses a promise to return the result.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowKeepScreenOn](arkts-arkui-window-window-i.md#setwindowkeepscreenon)(isKeepScreenOn:

<!--Device-Window-setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>--><!--Device-Window-setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | Yes | Whether to keep the screen always on. **true** to keep the screen always on, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setKeepScreenOn

```TypeScript
setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void
```

Sets whether to keep the screen always on. This API uses an asynchronous callback to return the result.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowKeepScreenOn](arkts-arkui-window-window-i.md#setwindowkeepscreenon)(isKeepScreenOn:

<!--Device-Window-setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | Yes | Whether to keep the screen always on. **true** to keep the screen always on, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setLayoutFullScreen

```TypeScript
setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void
```

Sets whether the main window layout or the child window layout is immersive. This API uses an asynchronous callback to return the result.

An immersive layout means that the layout does not avoid the status bar or \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_, and components may overlap with them.

A non-immersive layout means that the layout avoids the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_, and components do not overlap with them.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowLayoutFullScreen](arkts-arkui-window-window-i.md#setwindowlayoutfullscreen)(isLayoutFullScreen:

<!--Device-Window-setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | Yes | Whether the layout of the window is immersive. (Immersive layout mode does not affect the display of the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_.) **true** if immersive, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setLayoutFullScreen

```TypeScript
setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>
```

Sets whether the main window layout or the child window layout is immersive. This API uses a promise to return the result.

An immersive layout means that the layout does not avoid the status bar or \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_, and components may overlap with them.

A non-immersive layout means that the layout avoids the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_, and components do not overlap with them.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowLayoutFullScreen](arkts-arkui-window-window-i.md#setwindowlayoutfullscreen)(isLayoutFullScreen:

<!--Device-Window-setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>--><!--Device-Window-setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | Yes | Whether the layout of the window is immersive. (Immersive layout mode does not affect the display of the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_.) **true** if immersive, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setOutsideTouchable

```TypeScript
setOutsideTouchable(touchable: boolean): Promise<void>
```

Sets whether the area outside the child window is touchable. This API uses a promise to return the result.
    Starting from API version 9, the area outside the child window is touchable by default. This API is no longer  
    supported and no substitute API is provided.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

<!--Device-Window-setOutsideTouchable(touchable: boolean): Promise<void>--><!--Device-Window-setOutsideTouchable(touchable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| touchable | boolean | Yes | Whether the area outside the child window is touchable. **true** if touchable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setOutsideTouchable

```TypeScript
setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void
```

Sets whether the area outside the child window is touchable. This API uses an asynchronous callback to return the result.
    Starting from API version 9, the area outside the child window is touchable by default. This API is no longer  
    supported and no substitute API is provided.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

<!--Device-Window-setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| touchable | boolean | Yes | Whether the area outside the child window is touchable. **true** if touchable, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setParentWindow

ArkTS-Dyn:
```TypeScript
setParentWindow(windowId: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setParentWindow(windowId: int): Promise<void>
```

Sets a new parent window for this child window. The new parent window can be a main window, another child window,or a floating window in the same process. This API uses a promise to return the result.

If the child window is focused and the new parent window is in the foreground, the new parent window will be raised.

If the child window is focused and the new parent window has a modal child window with a higher level, the focus will be transferred to that modal child window.

**Since:** 19

**ArkTS mode:** ArkTS-Dyn since version 19; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Window-setParentWindow(windowId: int): Promise<void>--><!--Device-Window-setParentWindow(windowId: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Parent window ID, which must be an integer. You are advised to call [getWindowProperties()]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ to obtain the parent window ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |
| [1300009](../errorcode-window.md#1300009-invalid-parent-window) | The parent window is invalid. Possible cause: The parent window does not exist or has been destroyed. |

## setPreferredOrientation

```TypeScript
setPreferredOrientation(orientation: Orientation): Promise<void>
```

Sets the preferred orientation for the main window. This API uses a promise to return the result. This API does not take effect when it is called by a child window.

Before \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_OpenHarmony 6.1\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_, this API can be called only by and takes effect for the main window. If it is called for other window types, it does not take effect.

Starting from \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_OpenHarmony 6.1\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_, this API can be called by the main window and the system window with **WindowType** set to **TYPE\_WALLET\_SWIPE\_CARD**. If it is called for other window types, it does not take effect. When the system window calls the **setPreferredOrientation** API, if there is a higher-level window for which the display orientation has been set, the call will not take effect immediately. In this case, the set display orientation will be recorded. When there is a no higher-level window with the display orientation set,the last orientation request will be restored. When the display orientation is set for the system window whose  
**WindowType** is **TYPE\_WALLET\_SWIPE\_CARD** and takes effect, the foreground application will transition to the background.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setPreferredOrientation(orientation: Orientation): Promise<void>--><!--Device-Window-setPreferredOrientation(orientation: Orientation): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Display orientation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Invalid parameter value range. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setPreferredOrientation

```TypeScript
setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void
```

Sets the preferred orientation for this window. This API uses an asynchronous callback to return the result. For details about the development practices of orientation, see  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_.

Before \_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_OpenHarmony 6.1\_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_, this API can be called only by and takes effect for the main window. If it is called for other window types, it does not take effect.

Starting from \_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_OpenHarmony 6.1\_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_, this API can be called by the main window and the system window with **WindowType** set to **TYPE\_WALLET\_SWIPE\_CARD**. If it is called for other window types, it does not take effect. When the system window calls the **setPreferredOrientation** API, if there is a higher-level window for which the display orientation has been set, the call will not take effect immediately. In this case, the set display orientation will be recorded. When there is a no higher-level window with the display orientation set,the last orientation request will be restored. When the display orientation is set for the system window whose  
**WindowType** is **TYPE\_WALLET\_SWIPE\_CARD** and takes effect, the foreground application will transition to the background.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void--><!--Device-Window-setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Display orientation. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. The callback indicates the API call result. It does not mean that the application rotation animation ends. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Invalid parameter value range. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setPreferredOrientationWithResult

```TypeScript
setPreferredOrientationWithResult(orientation: Orientation): Promise<OrientationResult>
```

Sets the preferred orientation for the main window.This API uses a promise to return the result.It does not take effect on devices that do not support rotation with the sensor,on 2-in-1 devices or for the child window.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Window-setPreferredOrientationWithResult(orientation: Orientation): Promise<OrientationResult>--><!--Device-Window-setPreferredOrientationWithResult(orientation: Orientation): Promise<OrientationResult>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The orientation config of the window |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OrientationResult&gt; | Promise used to return the OrientationResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setPrivacyMode

```TypeScript
setPrivacyMode(isPrivacyMode: boolean): Promise<void>
```

Sets whether this window is in privacy mode. This API uses a promise to return the result. A window in privacy mode cannot be captured or recorded. This API can be used in scenarios where screen capture or recording is disabled.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowPrivacyMode](arkts-arkui-window-window-i.md#setwindowprivacymode)(isPrivacyMode:

<!--Device-Window-setPrivacyMode(isPrivacyMode: boolean): Promise<void>--><!--Device-Window-setPrivacyMode(isPrivacyMode: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | Yes | Whether the window is in privacy mode. **true** if in privacy mode, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setPrivacyMode

```TypeScript
setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void
```

Sets whether this window is in privacy mode. This API uses an asynchronous callback to return the result. A window in privacy mode cannot be captured or recorded. This API can be used in scenarios where screen capture or recording is disabled.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowPrivacyMode](arkts-arkui-window-window-i.md#setwindowprivacymode)(isPrivacyMode:

<!--Device-Window-setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | Yes | Whether the window is in privacy mode. **true** if in privacy mode, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setRaiseByClickEnabled

```TypeScript
setRaiseByClickEnabled(enable: boolean): Promise<void>
```

Sets whether to enable a child window to raise itself by click. This API uses a promise to return the result.

Generally, when a child window is clicked, it is brought to the forefront among sibling child windows of the same type that share the same parent window within the application. If the **enable** parameter is set to **false**,when the child window is clicked, it still stays in its existing position.

Before calling this API, ensure that the child window has been created and  
[showWindow()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ has been successfully executed.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

<!--Device-Window-setRaiseByClickEnabled(enable: boolean): Promise<void>--><!--Device-Window-setRaiseByClickEnabled(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether a child window can be raised by clicking. **true** if the child window can be raised by clicking, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |
| [1300009](../errorcode-window.md#1300009-invalid-parent-window) | The parent window is invalid. |

## setReceiveDragEventEnabled

```TypeScript
setReceiveDragEventEnabled(enabled: boolean): Promise<void>
```

Sets whether the current window can receive [drag events]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_. This API uses a promise to return the result.

By default, the value of **enabled** is **true**, indicating that the window can receive drag events.

If the value of **enabled** is **false**, the current window cannot receive drag events.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-setReceiveDragEventEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setReceiveDragEventEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the window can receive drag events. **true** if the window can receive drag events; **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work because the current device does not support this ability. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Internal IPC error |

## setRelativePositionToParentWindowEnabled

ArkTS-Dyn:
```TypeScript
setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,
        offsetX?: number, offsetY?: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,
        offsetX?: int, offsetY?: int): Promise<void>
```

Sets whether a first-level child window can maintain a fixed relative position to the main window. This API works only in \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode. This API uses a promise to return the result.

The relative position is defined by the offset between the anchor points of the child window and the main window.Both the child window and the main window use the same type of anchor point.

1. This API applies only to level-1 child windows that are not maximized.2. Once this API is called on a child window, its display position will immediately follow the main window and maintain a fixed relative position. This effect will persist until this API is called again with **false**.3. If this API is called on a child window, subsequent calls to [moveWindowTo()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ or [maximize()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ to modify the window's position or size will not take effect.

Once this API is successfully called, the  
[setFollowParentWindowLayoutEnabled()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ API will no longer take effect.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,        offsetX?: int, offsetY?: int): Promise<void>--><!--Device-Window-setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,        offsetX?: int, offsetY?: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | The value true means the first level sub window supports maintaining the same relative position with the main window, and false means the opposite. |
| anchor | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | Window anchor point that setting when the relative position between the primary sub window and the main window remains unchanged. The default value is window.WindowAnchor.TopStart, meaning the default anchor point is the top-left corner of the window. |
| offsetX | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | No | The x-axis offset, measured in px. between the anchor point of the first level sub window and the anchor point of the main window. The default value is 0. |
| offsetY | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | No | The y-axis offset, measured in px. between the anchor point of the first level sub window and the anchor point of the main window. The default value is 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function setRelativePositionToParentWindowEnabled can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |

## setResizeByDragEnabled

```TypeScript
setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void
```

Sets whether to enable the main window or child window with decorations to resize itself by dragging. This API uses an asynchronous callback to return the result.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Disable window to resize by drag if false. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | The callback of setResizeByDragEnabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setResizeByDragEnabled

```TypeScript
setResizeByDragEnabled(enable: boolean): Promise<void>
```

Sets whether to enable the main window or child window with decorations to resize itself by dragging. This API uses a promise to return the result.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setResizeByDragEnabled(enable: boolean): Promise<void>--><!--Device-Window-setResizeByDragEnabled(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Disable window to resize by drag if false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setSeparationTouchEnabled

```TypeScript
setSeparationTouchEnabled(enabled: boolean): Promise<void>
```

Sets whether the current window supports the event separation state. This API uses a promise to return the result. In the default scenario, the value of **enabled** is **true**, indicating that the event separation state is supported.

When the event separation state is supported:

- All events generated by finger taps are sent to the window that the finger taps hit.

When the event separation state is not supported (the value of **enabled** is **false**):

- If the first finger taps the window, keeps hitting the window, and does not lift up, the events generated by  
subsequent taps of other fingers are distributed to the window, regardless of whether the taps of other fingers hit the window.  
- If the first finger taps the window and does not keep hitting the window, the events generated by subsequent  
taps of other fingers are not distributed to the window and are discarded by the system, even if the taps of other fingers hit the window.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-setSeparationTouchEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setSeparationTouchEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the window supports the event separation state. **true** if supported; **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work because the current device does not support this ability. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Internal IPC error |

## setSpecificSystemBarEnabled

```TypeScript
setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>
```

Sets whether to show or hide the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_ of the main window. This API uses a promise to return the result.

The return value does not indicate that the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_are shown or hidden. This API does not take effect when it is called by a child window. The setting does not take effect when the main window is in non-full-screen or non-maximized mode (such as floating windows or split-screen mode). It takes effect once the main window enters full-screen or maximized mode.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>--><!--Device-Window-setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | the set of system bar |
| enable | boolean | Yes | Show specific system bar if true, or hide specific system bar if false. |
| enableAnimation | boolean | No | Whether using animation during this setting, using animation if true or not using animation if false.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setStatusBarColor

```TypeScript
setStatusBarColor(color: ColorMetrics): Promise<void>
```

Sets the text color of the status bar in the main window. This API uses a promise to return the result.

Setting the status bar text color is not supported for child windows. Calling this API on a child window will have no effect. The setting does not take effect when the main window is in non-full-screen or non-maximized mode(such as floating windows or split-screen mode). It takes effect once the main window enters full-screen or maximized mode.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-setStatusBarColor(color: ColorMetrics): Promise<void>--><!--Device-Window-setStatusBarColor(color: ColorMetrics): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Text color of the status bar. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported on this device. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. Possible cause: Internal task error. |

## setSubWindowModal

```TypeScript
setSubWindowModal(isModal: boolean): Promise<void>
```

Enables the modal property of the child window. This API uses a promise to return the result.

This API must be called by a child window and the setting takes effect for the child window. After the modal property is enabled, the parent window does not respond to user interactions until the child window is closed or the child window's modal property is disabled.

If this API is called by a main window, an error is reported.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setSubWindowModal(isModal: boolean): Promise<void>--><!--Device-Window-setSubWindowModal(isModal: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isModal | boolean | Yes | Whether to enable the modal property of the child window. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 20 and later |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## setSubWindowModal

```TypeScript
setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>
```

Sets the modality type of the child window. This API uses a promise to return the result.

When the child window is of the window-modal type, its parent window does not respond to user interactions until the child window is closed or the child window's modal property is disabled.

When the child window is of the application-modal type, its parent window and the windows from other instances of the application do not respond to user interactions until the child window is closed or the child window's modal property is disabled.

This API is used to set the modality type. To disable the modal property, you are advised to use  
[setSubWindowModal\_\_\_HTML\_TAG\_DESC\_USD\_1\_\_\_12+\_\_\_HTML\_TAG\_DESC\_USD\_2\_\_\_]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

If this API is called by a window other than the child window, an error is reported.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>--><!--Device-Window-setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isModal | boolean | Yes | Whether to enable the modal property of the child window. **true** to enable, **false** otherwise. Currently, this parameter can only be set to **true**. |
| modalityType | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Modality type of the child window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 20 and later |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows are supported. |

## setSubWindowZLevel

ArkTS-Dyn:
```TypeScript
setSubWindowZLevel(zLevel: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setSubWindowZLevel(zLevel: int): Promise<void>
```

Sets the z-level of the current child window. Child windows with modal properties are not supported. This API uses a promise to return the result.

Changing the z-level of a child window using this API will not cause a focus switch. You are advised to use  
[shiftAppWindowFocus()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ for focus switching.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-setSubWindowZLevel(zLevel: int): Promise<void>--><!--Device-Window-setSubWindowZLevel(zLevel: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zLevel | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Z-level of the child window. The default value is **0**, and the value range is [-10000, 10000]. Only integers are supported, and floating-point numbers will be rounded down. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function setSubWindowZLevel can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only non-modal subwindows are supported. |
| [1300009](../errorcode-window.md#1300009-invalid-parent-window) | The parent window is invalid. |

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>
```

Sets the supported window modes of the app window.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>--><!--Device-Window-setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supportedWindowModes | Array&lt;bundleManager.SupportWindowMode&gt; | Yes | The supported modes of the window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: 1. Only main windows and subwindows are supported. 2. Not supported when subwindows are set to follow the main window. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. When called on a main window, the parameter should not only contain SPLIT. 2. When called on a sub window, the parameter should not contain SPLIT. |

## setSystemAvoidAreaEnabled

```TypeScript
setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>
```

Enables the capability to obtain the window avoidance area information using  
[getWindowAvoidArea()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ or listen for window avoidance area changes using  
[on('avoidAreaChange')]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_after a global floating window, modal window, or system window is created.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>--><!--Device-Window-setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | If true, the system window type can obtain avoid area. If false, the avoid area obtained by the system window type will always be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. Possible cause: The device does not support the API itself. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only global floating windows, dialog windows, or Window Type as system windows are supported. |

## setSystemBarEnable

```TypeScript
setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void
```

\_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_ This API uses an asynchronous callback to return the result.

From API version 12, \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_this API does not take effect on 2-in-1 devices.\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_

The return value does not indicate that the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_5\_\_\_are shown or hidden. This API does not take effect when it is called by a child window. The configuration does not take effect in non-full-screen mode (such as floating window or split-screen mode).

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowSystemBarEnable](arkts-arkui-window-window-i.md#setwindowsystembarenable)(names:

<!--Device-Window-setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void--><!--Device-Window-setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'&gt; | Yes | Whether to show the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ in full-screen mode.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_For example, to show all of them, set this parameter to **['status','navigation']**. If this parameter is set to [], they are hidden. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setSystemBarEnable

```TypeScript
setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>
```

\_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_ This API uses a promise to return the result.

From API version 12, \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_this API does not take effect on 2-in-1 devices.\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_

The return value does not indicate that the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_5\_\_\_are shown or hidden. This API does not take effect when it is called by a child window. The configuration does not take effect in non-full-screen mode (such as floating window or split-screen mode).

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowSystemBarEnable](arkts-arkui-window-window-i.md#setwindowsystembarenable)(names:

<!--Device-Window-setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>--><!--Device-Window-setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'&gt; | Yes | Whether to show the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ in full-screen mode.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_For example, to show all of them, set this parameter to **['status','navigation']**. If this parameter is set to [], they are hidden. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setSystemBarProperties

```TypeScript
setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void
```

Sets the properties of the \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar and \_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_status bar of the main window.This API uses an asynchronous callback to return the result. \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_This API does not take effect on 2-in-1devices.\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_

This API does not take effect when it is called by a child window. The configuration does not take effect in non-full-screen mode (such as floating window or split-screen mode).

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowSystemBarProperties](arkts-arkui-window-window-i.md#setwindowsystembarproperties)(systemBarProperties:

<!--Device-Window-setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void--><!--Device-Window-setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| systemBarProperties | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_Properties of the \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_status bar. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setSystemBarProperties

```TypeScript
setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>
```

Sets the properties of the \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar and \_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_status bar of the main window.This API uses a promise to return the result. \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_This API does not take effect on 2-in-1 devices.\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_

This API does not take effect when it is called by a child window.

**Since:** 6

**ArkTS mode:** ArkTS-Dyn only, since version 6.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowSystemBarProperties](arkts-arkui-window-window-i.md#setwindowsystembarproperties)(systemBarProperties:

<!--Device-Window-setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>--><!--Device-Window-setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| systemBarProperties | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_Properties of the \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_status bar. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setTitleAndDockHoverShown

```TypeScript
setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>
```

Sets whether to show the window title bar and dock bar when the cursor hovers over the hot zone while the main window is in full-screen mode. This API uses a promise to return the result.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>--><!--Device-Window-setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTitleHoverShown | boolean | No | Whether to show the window title bar.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** to show, **false** otherwise. The default value is **true**.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ |
| isDockHoverShown | boolean | No | Whether to show the dock bar.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** to show, **false** otherwise. The default value is **true**.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setTouchable

```TypeScript
setTouchable(isTouchable: boolean): Promise<void>
```

Sets whether this window is touchable. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowTouchable](arkts-arkui-window-window-i.md#setwindowtouchable)(isTouchable:

<!--Device-Window-setTouchable(isTouchable: boolean): Promise<void>--><!--Device-Window-setTouchable(isTouchable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTouchable | boolean | Yes | Whether the window is touchable. **true** if touchable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setTouchable

```TypeScript
setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void
```

Sets whether this window is touchable. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.setWindowTouchable](arkts-arkui-window-window-i.md#setwindowtouchable)(isTouchable:

<!--Device-Window-setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTouchable | boolean | Yes | Whether the window is touchable. **true** if touchable, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## setTouchableAreas

```TypeScript
setTouchableAreas(rects: Array<Rect>): Promise<void>
```

Sets the touchable areas for this window. By default, the entire window is touchable. If a touchable area is set,touch events outside this area are transparently transmitted. The setting becomes invalid after the window rectangle changes.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.SET_WINDOW_TOUCH_AREAS

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-setTouchableAreas(rects: Array<Rect>): Promise<void>--><!--Device-Window-setTouchableAreas(rects: Array<Rect>): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rects | Array&lt;Rect&gt; | Yes | Touchable areas. The maximum number of touchable areas cannot exceed 10, and each touchable area cannot exceed the window area. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required or a non-system application calls the API.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 26.0.0 and later |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: Invalid parameter range. |

## setUIContent

```TypeScript
setUIContent(path: string, callback: AsyncCallback<void>): void
```

Loads the content of a page, with its path in the current project specified, to this window. This API uses an asynchronous callback to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setUIContent(path: string, callback: AsyncCallback<void>): void--><!--Device-Window-setUIContent(path: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page to which the content will be loaded |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## setUIContent

```TypeScript
setUIContent(path: string): Promise<void>
```

Loads the content of a page, with its path in the current project specified, to this window. This API uses a promise to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setUIContent(path: string): Promise<void>--><!--Device-Window-setUIContent(path: string): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page to which the content will be loaded |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## setWindowBackgroundColor

```TypeScript
setWindowBackgroundColor(color: string | ColorMetrics): void
```

Sets the background color for this window.

If this API is not called, the default background color of the window is **'#FFF0F0F0'** in light mode and  
**'#FF1A1A1A'** in dark mode.

In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setWindowBackgroundColor(color: string | ColorMetrics): void--><!--Device-Window-setWindowBackgroundColor(color: string | ColorMetrics): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | string \| ColorMetrics | Yes | the specified color.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Since:** 18 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed; |

## setWindowBrightness

ArkTS-Dyn:
```TypeScript
setWindowBrightness(brightness: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setWindowBrightness(brightness: double): Promise<void>
```

Sets the window brightness for the main window. The window brightness takes effect only when the window is in the foreground and has focus. This API uses a promise to return the result.

When the setting is valid, it affects only the physical screen where the window is displayed. It does not apply to virtual displays (for example, casting/mirroring screens).

If the input parameter is **-1**, the window brightness reverts to the system brightness (which can be adjusted through Control Panel or shortcut keys).

When the window moves to the background, the setting becomes invalid, and brightness can be adjusted through Control Panel or shortcut keys. You are advised not to call this API consecutively or when the window transitions to the background. Otherwise, timing issues may occur.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setWindowBrightness(brightness: double): Promise<void>--><!--Device-Window-setWindowBrightness(brightness: double): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | the specified brightness value. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowBrightness

ArkTS-Dyn:
```TypeScript
setWindowBrightness(brightness: number, callback: AsyncCallback<void>): void
```

ArkTS-Sta:
```TypeScript
setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void
```

Sets the window brightness for the main window. The window brightness takes effect only when the window is in the foreground and has focus. This API uses an asynchronous callback to return the result.

When the setting is valid, it affects only the physical screen where the window is displayed. It does not apply to virtual displays (for example, casting/mirroring screens).

If the input parameter is **-1**, the window brightness reverts to the system brightness (which can be adjusted through Control Panel or shortcut keys).

When the window moves to the background, the setting becomes invalid, and brightness can be adjusted through Control Panel or shortcut keys. You are advised not to call this API consecutively or when the window transitions to the background. Otherwise, timing issues may occur.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | the specified brightness value. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowColorSpace

```TypeScript
setWindowColorSpace(colorSpace:ColorSpace): Promise<void>
```

Sets a color space for this window. This API uses a promise to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowColorSpace(colorSpace:ColorSpace): Promise<void>--><!--Device-Window-setWindowColorSpace(colorSpace:ColorSpace): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | the specified color space. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setWindowColorSpace

```TypeScript
setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>): void
```

Sets a color space for this window. This API uses an asynchronous callback to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | the specified color space. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setWindowContainerColor

```TypeScript
setWindowContainerColor(activeColor: string, inactiveColor: string): void
```

Sets the background color of the main window container for both when it has focus and when it does not. In the stage model, you need to call this API after  
[loadContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

The background color you set here covers the entire window, including both the title bar and the content area. If you also use [setWindowBackgroundColor()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_, the content area shows the window background color, whereas the title bar shows the container background color.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Required permissions:** ohos.permission.SET_WINDOW_TRANSPARENT

<!--Device-Window-setWindowContainerColor(activeColor: string, inactiveColor: string): void--><!--Device-Window-setWindowContainerColor(activeColor: string, inactiveColor: string): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| activeColor | string | Yes | window container color in active. |
| inactiveColor | string | Yes | window container color in inactive. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setWindowContainerModalColor

```TypeScript
setWindowContainerModalColor(activeColor: string, inactiveColor: string): void
```

Sets the background color of the main window container for both when it has focus and when it does not. In the stage model, you need to call this API after  
[loadContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_.

The background color you set here covers the entire window, including both the title bar and the content area. If you also use [setWindowBackgroundColor()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_, the content area shows the window background color, whereas the title bar shows the container background color.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.SET_WINDOW_ALPHA

<!--Device-Window-setWindowContainerModalColor(activeColor: string, inactiveColor: string): void--><!--Device-Window-setWindowContainerModalColor(activeColor: string, inactiveColor: string): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| activeColor | string | Yes | window container color in active. |
| inactiveColor | string | Yes | window container color in inactive. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required or a non-system application calls the API.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 26.0.0 and later |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    windowStage.loadContent("pages/page2", (err: BusinessError) => {
      let errCode: number = err.code;
      if (errCode) {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in loading the content.');
      // Obtain the main window.
      let windowClass: window.Window | undefined = undefined;
      windowStage.getMainWindow((err: BusinessError, data) => {
        let errCode: number = err.code;
        if (errCode) {
          console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
          return;
        }
        windowClass = data;
        let activeColor: string = '#00000000';
        let inactiveColor: string = '#FF000000';
        try {
          windowClass.setWindowContainerModalColor(activeColor, inactiveColor);
          console.info('Succeeded in setting window container color.');
        } catch (exception) {
          console.error(`Failed to set the window container color. Cause code: ${exception.code}, message: ${exception.message}`);
        };
      });
    });
  }
}
```

## setWindowCornerRadius

ArkTS-Dyn:
```TypeScript
setWindowCornerRadius(cornerRadius: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setWindowCornerRadius(cornerRadius: double): Promise<void>
```

Sets the radius of the rounded corners for a child window or floating window. This API uses a promise to return the result.

If the radius of the rounded corner is too large, it may cause the three buttons (maximize, minimize, and close)to be clipped and make their hotspots less recognizable. Set an appropriate radius based on the window size.

Before calling this API, you can call [getWindowCornerRadius()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to obtain the default radius of rounded corners of the window.

**Since:** 17

**ArkTS mode:** ArkTS-Dyn since version 17; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-Window-setWindowCornerRadius(cornerRadius: double): Promise<void>--><!--Device-Window-setWindowCornerRadius(cornerRadius: double): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cornerRadius | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Radius of the rounded corners, measured in vp. The value is a floating-point number greater than or equal to 0.0. The value **0.0** means that the window does not use rounded corners. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: The corner radius is less than zero. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## setWindowDecorHeight

ArkTS-Dyn:
```TypeScript
setWindowDecorHeight(height: number): void
```

ArkTS-Sta:
```TypeScript
setWindowDecorHeight(height: int): void
```

Sets the height of the title bar of this window. This API takes effect for the window that has a title bar and a three-button area. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ takes effect.

For tablets, if this API is called outside of  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, the change applies once the device switches to free windows mode. If this API is called in free windows mode, the change takes effect immediately.

When the main window transitions into full-screen mode, hovering the mouse over the hot zone of the window's title bar region will cause a floating title bar to appear, with a fixed height of 37 vp.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowDecorHeight(height: int): void--><!--Device-Window-setWindowDecorHeight(height: int): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Height of the title bar. It takes effect only for the window with the title bar. The value is an integer in the range [37,112]. The unit is vp. If a floating-point number is passed in, the value is rounded down. A value outside the range is invalid. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Invalid parameter range. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## setWindowDecorVisible

```TypeScript
setWindowDecorVisible(isVisible: boolean): void
```

Sets whether the title bar is visible in the window. This API takes effect for the window that has a title bar or a three-button area. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

When the window title bar is hidden and the main window transitions into full-screen mode, hovering the cursor over the hot zone of the top window's title bar will cause a floating title bar to appear. To prevent the floating title bar from appearing, call  
[setTitleAndDockHoverShown()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowDecorVisible(isVisible: boolean): void--><!--Device-Window-setWindowDecorVisible(isVisible: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isVisible | boolean | Yes | Whether the title bar is visible. **true** if visible, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## setWindowDelayRaiseOnDrag

```TypeScript
setWindowDelayRaiseOnDrag(isEnabled: boolean): void
```

Sets whether to enable delayed raising for the window. This API takes effect only for the main window and child windows.

If this API is not called or **false** is passed, the main window and child windows are raised immediately upon a left mouse button press by default.

When this API is called to enable delayed raising, in cross-window drag-and-drop situations, the window that contains the draggable component does not raise until the left mouse button is released, rather than raising immediately when the button is pressed.

**Since:** 19

**ArkTS mode:** ArkTS-Dyn since version 19; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Window-setWindowDelayRaiseOnDrag(isEnabled: boolean): void--><!--Device-Window-setWindowDelayRaiseOnDrag(isEnabled: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable delayed raising.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setWindowDelayRaiseOnDrag can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## setWindowFocusable

```TypeScript
setWindowFocusable(isFocusable: boolean): Promise<void>
```

Sets whether this window is focusable. This API uses a promise to return the result.

Starting from API version 22, if a virtual screen is created by calling  
[createVirtualScreen]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ with **supportsFocus** set to **false**,windows on that virtual screen cannot call the current API to change their focusability. Attempting to do so will result in error code 1300002.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowFocusable(isFocusable: boolean): Promise<void>--><!--Device-Window-setWindowFocusable(isFocusable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFocusable | boolean | Yes | can be focus if true, or can not be focus if false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowFocusable

```TypeScript
setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void
```

Sets whether this window is focusable. This API uses an asynchronous callback to return the result.

Starting from API version 22, if a virtual screen is created by calling  
[createVirtualScreen]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ with **supportsFocus** set to **false**,windows on that virtual screen cannot call the current API to change their focusability. Attempting to do so will result in error code 1300002.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFocusable | boolean | Yes | can be focus if true, or can not be focus if false. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowGrayScale

ArkTS-Dyn:
```TypeScript
setWindowGrayScale(grayScale: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setWindowGrayScale(grayScale: double): Promise<void>
```

Sets the grayscale effect for this window. This API uses a promise to return the result. This API can be called only after  
[loadContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ is called.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowGrayScale(grayScale: double): Promise<void>--><!--Device-Window-setWindowGrayScale(grayScale: double): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| grayScale | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | The value of gray scale. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowKeepScreenOn

```TypeScript
setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>
```

Sets whether to keep the screen always on. This API uses a promise to return the result.

Set **isKeepScreenOn** to **true** only in necessary scenarios (such as navigation, video playback, drawing, and gaming scenarios). After exiting these scenarios, set the parameter to **false**. Do not use this API in other scenarios (such as no screen interaction or audio playback). When the system detects that the API is used in a non-standard manner, automatic screen-off may be invoked.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>--><!--Device-Window-setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | Yes | keep screen on if true, or not if false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowKeepScreenOn

```TypeScript
setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void
```

Sets whether to keep the screen always on. This API uses an asynchronous callback to return the result.

Set **isKeepScreenOn** to **true** only in necessary scenarios (such as navigation, video playback, drawing, and gaming scenarios). After exiting these scenarios, set the parameter to **false**. Do not use this API in other scenarios (such as no screen interaction or audio playback). When the system detects that the API is used in a non-standard manner, automatic screen-off may be invoked.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | Yes | keep screen on if true, or not if false. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowLayoutFullScreen

```TypeScript
setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void
```

Sets whether the main window layout or the child window layout is immersive. This API uses an asynchronous callback to return the result. It does not work when called by a system window.

An immersive layout means that the layout does not avoid the status bar or \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_, and components may overlap with them.

A non-immersive layout means that the layout avoids the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_, and components do not overlap with them.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Deprecated since:** 12

**Substitutes:** [window.Window.setWindowLayoutFullScreen](arkts-arkui-window-window-i.md#setwindowlayoutfullscreen)(isLayoutFullScreen:

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | Yes | Whether the layout of the window is immersive. (In immersive layout mode, the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ remain visible.) **true** if immersive, **false** otherwise. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowLayoutFullScreen

```TypeScript
setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>
```

Sets whether the application main window layout or the application child window layout is immersive. This API uses a promise to return the result. It does not work when called by other windows, and no error is reported.

An immersive layout means that the layout does not avoid the status bar or \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_, and components may overlap with them.

A non-immersive layout means that the layout avoids the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_, and components do not overlap with them.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>--><!--Device-Window-setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | Yes | The window can layout in full screen |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowLimits

```TypeScript
setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>
```

Sets the size limits for this window. This API uses a promise to return the result.

By default, system size limits are provided. They are determined by the product configuration and cannot be modified.

If **setWindowLimits** has not been called, you can call [getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [getWindowLimitsVP]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ to obtain the system size limits.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>--><!--Device-Window-setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowLimits | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Target size limits, in px or vp. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WindowLimits&gt; | Promise used to return the final size limits, which are the intersection between the passed-in size limits and the system size limits. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## setWindowLimits

```TypeScript
setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>
```

Sets the size limits for this window. This API uses a promise to return the result.

By default, system size limits are provided. They are determined by the product configuration and cannot be modified.

If **setWindowLimits** has not been called, you can call [getWindowLimits]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [getWindowLimitsVP]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ to obtain the system size limits.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>--><!--Device-Window-setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowLimits | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Target size limits, in px or vp. |
| isForcible | boolean | Yes | Whether to forcibly set the window size limits.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_When the unit of the input parameter [windowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is vp, the process is performed based on value **false** regardless of whether **isForcible** is set to **true** or **false**. The minimum and maximum values of the window width and height depend on the system limit.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_3\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_When the unit of the input parameter [windowLimits]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ is px: If **isForcible** is set to **true**, the minimum width and height of the window are subject to the smaller value between the system limit and 40 vp, and the maximum width and height of the window are subject to the system limit. If **isForcible** is set to **false**, the minimum and maximum widths and heights of the window are subject to the system limit. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WindowLimits&gt; | Promise used to return the new window size limits. \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_If the unit of the input parameter [windowLimits]{ |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## setWindowMask

ArkTS-Dyn:
```TypeScript
setWindowMask(windowMask: Array<Array<number>>): Promise<void>
```

ArkTS-Sta:
```TypeScript
setWindowMask(windowMask: Array<Array<long>>): Promise<void>
```

Sets a mask for this window to get an irregularly shaped window. This API uses a promise to return the result.The mask is used to describe the shape of the irregularly shaped window. This API is available only for child windows and global floating windows.

When the size of an irregularly shaped window changes, the actual display content is the intersection of the mask size and the window size.

Error code 1300002 may be returned only when multiple threads operate the same window. Error code 401 is returned when the window is destroyed.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowMask(windowMask: Array<Array<long>>): Promise<void>--><!--Device-Window-setWindowMask(windowMask: Array<Array<long>>): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowMask | ArkTS-Dyn: Array&lt;Array&lt;number&gt;&gt;  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：Array&lt;Array&lt;long&gt;&gt; | Yes | Mask. The value can only be a two-dimensional array containing the window size in pixels, with each element in the array set to either **0** or **1**. The value **0** indicates that the pixel is transparent, and **1** indicates that the pixel is opaque. If the passed-in pixel array does not match the window size or the value of any element in the array is not **0** or **1**, the value is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows and float windows are supported. |

## setWindowMaskWithAlpha

ArkTS-Dyn:
```TypeScript
setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: number, maskHeight: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: int, maskHeight: int): Promise<void>
```

Set the window mask using a per-pixel alpha array

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Window-setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: int, maskHeight: int): Promise<void>--><!--Device-Window-setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: int, maskHeight: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowMask | Uint8Array | Yes | The windowMask contains only per-pixel alpha transparency values. Valid range: 0(full transparent) to 255(full opaque), size must equal (maskWidth maskHeight). |
| maskWidth | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Mask width in pixels. Must equal the target window width. |
| maskHeight | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Mask height in pixels. Must equal the target window height. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows and float windows are supported. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. The maskWidth is not equal to the window width or the maskHeight is not equal to the window height. 2. The length of windowMask is not equal to maskWidth multiplied by maskHeight. |

## setWindowPrivacyMode

```TypeScript
setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>
```

Sets whether this window is in privacy mode. This API uses a promise to return the result.

A window in privacy mode cannot be captured or recorded.

When a window in privacy mode is moved to the background, it displays as a white overlay or privacy mask in the multi-tasking view.

If this API is not called, the privacy mode is disabled by default, and the window can be captured or recorded.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Required permissions:** ohos.permission.PRIVACY_WINDOW

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>--><!--Device-Window-setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | Yes | in private mode if true, or not if false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. Possible cause: Need ohos.permission.PRIVACY\_\_\_ESCAPED\_UNDERSCORE\_\_\_WINDOW permission. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setWindowPrivacyMode

```TypeScript
setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void
```

Sets whether this window is in privacy mode. This API uses an asynchronous callback to return the result.

A window in privacy mode cannot be captured or recorded.

When a window in privacy mode is moved to the background, it displays as a white overlay or privacy mask in the multi-tasking view.

If this API is not called, the privacy mode is disabled by default, and the window can be captured or recorded.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Required permissions:** ohos.permission.PRIVACY_WINDOW

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | Yes | in private mode if true, or not if false. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. Possible cause: Need ohos.permission.PRIVACY\_\_\_ESCAPED\_UNDERSCORE\_\_\_WINDOW permission. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setWindowShadowEnabled

```TypeScript
setWindowShadowEnabled(enable: boolean): Promise<void>
```

Sets whether the main window displays a shadow. This API uses a promise to return the result. By default, the main window displays a shadow unless you explicitly change it with this API.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Required permissions:** ohos.permission.SET_WINDOW_TRANSPARENT

<!--Device-Window-setWindowShadowEnabled(enable: boolean): Promise<void>--><!--Device-Window-setWindowShadowEnabled(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Enable or disable window shadow. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setWindowShadowRadius

ArkTS-Dyn:
```TypeScript
setWindowShadowRadius(radius: number): void
```

ArkTS-Sta:
```TypeScript
setWindowShadowRadius(radius: double): void
```

Sets the blur radius of the shadow on the edges of a child window or floating window.

**Since:** 17

**ArkTS mode:** ArkTS-Dyn since version 17; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-Window-setWindowShadowRadius(radius: double): void--><!--Device-Window-setWindowShadowRadius(radius: double): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Radius of the shadow, measured in px. The value is a floating-point number greater than or equal to 0.0, and the value **0.0** means that the shadow is disabled for the window borders. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: The shadow radius is less than zero. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only subwindows and float windows are supported. |

## setWindowSystemBarEnable

```TypeScript
setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void
```

\_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_ This API uses an asynchronous callback to return the result.

From API version 12, \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_this API does not take effect on 2-in-1 devices.\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_

The return value does not indicate that the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_4\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_5\_\_\_are shown or hidden. This API does not take effect when it is called by a child window. The configuration does not take effect in non-full-screen mode (such as floating window or split-screen mode).

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Deprecated since:** 12

**Substitutes:** [window.Window.setWindowSystemBarEnable](arkts-arkui-window-window-i.md#setwindowsystembarenable)(names:

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'&gt; | Yes | Whether to show the status bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_ in full-screen mode.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_For example, to show all of them, set this parameter to **['status','navigation']**. If this parameter is set to [], they are hidden. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowSystemBarEnable

```TypeScript
setWindowSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>
```

\_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.\_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_ This API uses a promise to return the result.

The return value does not indicate that the status bar and \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_three-button navigation bar\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_are shown or hidden. The setting does not take effect when the main window is in non-full-screen or non-maximized mode (such as floating windows or split-screen mode). It takes effect once the main window enters full-screen or maximized mode.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>--><!--Device-Window-setWindowSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'&gt; | Yes | The set of system bar |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowSystemBarProperties

```TypeScript
setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void
```

Sets the properties of the \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar and \_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_status bar of the main window.This API uses an asynchronous callback to return the result. \_\_\_MD\_COMMENT\_DESC\_USD\_2\_\_\_This API does not take effect on 2-in-1devices.\_\_\_MD\_COMMENT\_DESC\_USD\_3\_\_\_

This API does not take effect when it is called by a child window.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Deprecated since:** 12

**Substitutes:** [window.Window.setWindowSystemBarProperties](arkts-arkui-window-window-i.md#setwindowsystembarproperties)(systemBarProperties:

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| systemBarProperties | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_Properties of the \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_status bar. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowSystemBarProperties

```TypeScript
setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>
```

Sets the properties of the \_\_\_MD\_COMMENT\_DESC\_USD\_0\_\_\_three-button navigation bar and \_\_\_MD\_COMMENT\_DESC\_USD\_1\_\_\_status bar of the main window.This API uses a promise to return the result.

This API does not take effect when it is called by a child window. The setting does not take effect when the main window is in non-full-screen or non-maximized mode (such as floating windows or split-screen mode). It takes effect once the main window enters full-screen or maximized mode.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>--><!--Device-Window-setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| systemBarProperties | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_Properties of the \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_three-button navigation bar and \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_COMMENT\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_status bar. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowTitle

```TypeScript
setWindowTitle(titleName: string): Promise<void>
```

Sets the window title. This API uses a promise to return the result. In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ takes effect.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-setWindowTitle(titleName: string): Promise<void>--><!--Device-Window-setWindowTitle(titleName: string): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| titleName | string | Yes | Window title. The title display area should not go past the left side of the three- button area of the system. Any part that goes beyond will show as an ellipsis. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |

## setWindowTitleButtonVisible

```TypeScript
setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void
```

Shows or hides the maximize, minimize, and close buttons on the title bar of the main window.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void--><!--Device-Window-setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isMaximizeButtonVisible | boolean | Yes | Whether to show the maximize button. **true** to show, **false** otherwise. If the maximize button is hidden, the corresponding restore button is also hidden in the maximize scenario. |
| isMinimizeButtonVisible | boolean | Yes | Whether to show the minimize button. **true** to show, **false** otherwise. |
| isCloseButtonVisible | boolean | No | Whether to show the close button. **true** to show, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Only main windows and subwindows with subwindowoptions.zlevelaboveparentloosened set to true are supported. |

## setWindowTitleMoveEnabled

```TypeScript
setWindowTitleMoveEnabled(enabled: boolean): void
```

Enables or disables the capability to move the window (either main window or child window) by dragging its title bar and to maximize the window with a double-click. When this capability is disabled, you can use  
[startMoving()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to move the window by dragging in the application's hot zone and use [maximize()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ to maximize the window.In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ takes effect.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setWindowTitleMoveEnabled(enabled: boolean): void--><!--Device-Window-setWindowTitleMoveEnabled(enabled: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the capability to move the window by dragging the title bar and to maximize the window with a double-click. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## setWindowTopmost

```TypeScript
setWindowTopmost(isWindowTopmost: boolean): Promise<void>
```

Places the main window above all the other windows of the application. This API uses a promise to return the result.

Applications use custom shortcut keys to pin or unpin the main window.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Required permissions:** ohos.permission.WINDOW_TOPMOST

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-setWindowTopmost(isWindowTopmost: boolean): Promise<void>--><!--Device-Window-setWindowTopmost(isWindowTopmost: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isWindowTopmost | boolean | Yes | Whether to pin the main window on top. **true** to pin, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Only main windows are supported. |

## setWindowTouchable

```TypeScript
setWindowTouchable(isTouchable: boolean): Promise<void>
```

Sets whether this window is touchable. This API uses a promise to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowTouchable(isTouchable: boolean): Promise<void>--><!--Device-Window-setWindowTouchable(isTouchable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTouchable | boolean | Yes | is touchable if true, or not if false. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowTouchable

```TypeScript
setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void
```

Sets whether this window is touchable. This API uses an asynchronous callback to return the result.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void--><!--Device-Window-setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTouchable | boolean | Yes | is touchable if true, or not if false. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowTransitionAnimation

```TypeScript
setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>
```

Adds a transition animation to windows in specific scenarios.

Currently, this API can be used only on the main window of an application.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>--><!--Device-Window-setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transitionType | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Scene of the transition animation. Currently, only the destruction scene is supported. |
| animation | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Configuration of the transition animation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range; 2. Invalid parameter length. |

## show

```TypeScript
show(callback: AsyncCallback<void>): void
```

Shows this window. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.showWindow](arkts-arkui-window-window-i.md#showwindow)(callback:

<!--Device-Window-show(callback: AsyncCallback<void>): void--><!--Device-Window-show(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

## show

```TypeScript
show(): Promise<void>
```

Shows this window. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [window.Window.showWindow](arkts-arkui-window-window-i.md#showwindow)()

<!--Device-Window-show(): Promise<void>--><!--Device-Window-show(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## showWindow

```TypeScript
showWindow(callback: AsyncCallback<void>): void
```

Shows this window. This API uses an asynchronous callback to return the result. This API takes effect only for a system window, application child window, modal window, or global floating window. For the main window of an application, this API moves it at the top when the main window is already displayed.
    **NOTE**  
    
    Before calling this API, you are advised to load the page by using  
    [loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ or  
    [setUIContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_. If the main window has not  
    finished loading and you call this API directly, the starting window keeps showing. Similarly, if the system  
    window, application child window, modal window, or global floating window has finished loading and you call  
    this API directly, the window is in the foreground but is not visible.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-showWindow(callback: AsyncCallback<void>): void--><!--Device-Window-showWindow(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## showWindow

```TypeScript
showWindow(): Promise<void>
```

Shows this window. This API uses a promise to return the result. This API takes effect only for a system window,application child window, modal window, or global floating window. For the main window of an application, this API moves it at the top when the main window is already displayed.
    **NOTE**  
    
    Before calling this API, you are advised to load the page by using  
    [loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ or  
    [setUIContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_. If the main window has not  
    finished loading and you call this API directly, the starting window keeps showing. Similarly, if the system  
    window, application child window, modal window, or global floating window has finished loading and you call  
    this API directly, the window is in the foreground but is not visible.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Window-showWindow(): Promise<void>--><!--Device-Window-showWindow(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## showWindow

```TypeScript
showWindow(options: ShowWindowOptions): Promise<void>
```

Shows this window or moves an already visible application main window to the top of the stack. You can pass options to control the window display behavior. This API uses a promise to return the result.

This API can be used only for application child windows, application main windows, global floating windows, and system windows, excluding windows of the TYPE\_DIALOG type and modal child windows (windows that have the modal property enabled via **setSubWindowModal**).
    **NOTE**  
    
    Before calling this API, you are advised to load the page by using  
    [loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ or  
    [setUIContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_. If the main window has not  
    finished loading and you call this API directly, the starting window keeps showing. Similarly, if the system  
    window, application child window, or global floating window has finished loading and you call this API directly  
    , the window is in the foreground but is not visible.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-Window-showWindow(options: ShowWindowOptions): Promise<void>--><!--Device-Window-showWindow(options: ShowWindowOptions): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | options of window shown |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function showWindow can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type. Modal subwindow and dialog window can not set focusOnShow. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter validation error. Possible cause: 1. The value of the parameter is out of the allowed range; 2. The length of the parameter exceeds the allowed length; 3. The parameter format is incorrect. |

## snapshot

```TypeScript
snapshot(callback: AsyncCallback<image.PixelMap>): void
```

Captures this window. This API uses an asynchronous callback to return the result. If privacy mode is enabled for the current window (using  
[setWindowPrivacyMode]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_), taking a screenshot will result in a blank screen.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-snapshot(callback: AsyncCallback<image.PixelMap>): void--><!--Device-Window-snapshot(callback: AsyncCallback<image.PixelMap>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;image.PixelMap&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Get pixelMap failed; 3. Internal task error. |

## snapshot

```TypeScript
snapshot(): Promise<image.PixelMap>
```

Captures this window. If privacy mode is enabled for the current window (using  
[setWindowPrivacyMode]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_), taking a screenshot will result in a blank screen.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Window-snapshot(): Promise<image.PixelMap>--><!--Device-Window-snapshot(): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | Promise used to return the window screenshot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Get pixelMap failed; 3. Internal task error. |

## snapshotIgnorePrivacy

```TypeScript
snapshotIgnorePrivacy(): Promise<image.PixelMap>
```

Captures this window. This API can be called to obtain the screenshot of the current window even if privacy mode is enabled for the current window (using  
[setWindowPrivacyMode]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_).

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Window-snapshotIgnorePrivacy(): Promise<image.PixelMap>--><!--Device-Window-snapshotIgnorePrivacy(): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | Promise used to return the window screenshot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function snapshotIgnorePrivacy can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Create pixelMap failed; 3. Internal task error. |

## snapshotSync

```TypeScript
snapshotSync(): image.PixelMap
```

Captures this window. This API returns the result synchronously. If privacy mode is enabled for the current window (using  
[setWindowPrivacyMode]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_), taking a screenshot will result in a blank screen.

In the stage model, this API must be used after the call of  
[loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_or [setUIContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ takes effect.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-Window-snapshotSync(): image.PixelMap--><!--Device-Window-snapshotSync(): image.PixelMap-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | Window screenshot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Create pixelMap failed. |
| [1300018](../errorcode-window.md#1300018-api-call-timeout) | Timeout. |

## startMoving

```TypeScript
startMoving(): Promise<void>
```

In \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ mode, this API takes effect for system windows, application main windows, application child windows, global floating windows, and modal windows. In non-freeform window mode, this API takes effect only for system windows, application child windows,global floating windows, and modal windows. Starts moving this window. This API uses a promise to return the result.

The window moves along with the cursor or touch point only when this API is called in the callback function of  
[onTouch]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_, where the event type is **TouchType.Down**.

In click-and-drag scenarios, if you do not want the drag to start as soon as you press down, you can call this API when the event type is [TouchType.Move]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ (as long as  
**TouchType.Down** has already been triggered) to start the moving effect.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Window-startMoving(): Promise<void>--><!--Device-Window-startMoving(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300001](../errorcode-window.md#1300001-repeated-operation) | Repeated operation. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: Invalid window type, main windows are not supported in non-free window mode. |

## startMoving

ArkTS-Dyn:
```TypeScript
startMoving(offsetX: number, offsetY: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
startMoving(offsetX: int, offsetY: int): Promise<void>
```

Specifies the cursor position within the window and moves the window. This API uses a promise to return the result.

When windows within the same application are split or merged, and the mouse is pressed down to move the new window directly, the cursor may move outside the window if it moves too quickly. This API allows you to set the cursor position within the window during movement. It first adjusts the window to the cursor position before starting to move the window.

The window moves along with the cursor only when this API is called in the callback function of  
[onTouch]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_, where the event type is **TouchType.Down**.

In click-and-drag scenarios, if you do not want the drag to start as soon as you press down, you can call this API when the event type is [TouchType.Move]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ (as long as  
**TouchType.Down** has already been triggered) to start the moving effect.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-startMoving(offsetX: int, offsetY: int): Promise<void>--><!--Device-Window-startMoving(offsetX: int, offsetY: int): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offsetX | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | X-axis offset of the cursor position relative to the top-left corner of the window during movement, measured in px. This parameter only accepts integer values; any floating-point input will be rounded down. Negative values or values exceeding the window width are invalid. The window width can be obtained from [WindowProperties]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |
| offsetY | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Y-axis offset of the cursor position relative to the top-left corner of the window during movement, measured in px. This parameter only accepts integer values; any floating-point input will be rounded down. Negative values or values exceeding the window height are invalid. The window height can be obtained from [WindowProperties]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300001](../errorcode-window.md#1300001-repeated-operation) | Repeated operation. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

## stopMoving

```TypeScript
stopMoving(): Promise<void>
```

Stops window movement when a window is being dragged. This API uses a promise to return the result.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-Window-stopMoving(): Promise<void>--><!--Device-Window-stopMoving(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. |

