# @ohos.UiTest

The **UiTest** module provides APIs that you can use to simulate UI actions during testing, such as clicks, double-
 clicks, long-clicks, and swipes.
 This module provides the following functions:
 - [On<sup>9+</sup>](arkts-test-uitest-on-c.md): provides UI component feature description APIs for component filtering and matching.
 - [Component<sup>9+</sup>](arkts-test-uitest-component-c.md): represents a component on the UI and provides APIs for obtaining
 component attributes, clicking a component, scrolling to search for a component, and text injection.
 - [Driver<sup>9+</sup>](arkts-test-uitest-driver-c.md): works as the entry class and provides APIs for features such as component
 matching/search, key injection, coordinate clicking/sliding, and screenshot.
 - [UiWindow<sup>9+</sup>](arkts-test-uitest-uiwindow-c.md): works as the entry class and provides APIs for obtaining window attributes,
 dragging windows, and adjusting window sizes.
 - [By<sup>(deprecated)</sup>](arkts-test-uitest-by-c.md): provides UI component feature description APIs for component filtering and
 matching. This API is supported since API version 8 and deprecated since API version 9.
 You are advised to use {@link On} instead.
 - [UiComponent<sup>(deprecated)</sup>](arkts-test-uitest-uicomponent-c.md): represents a component on the UI and provides APIs for
 obtaining component attributes, clicking a component, scrolling to search for a component, and text injection.
 This API is supported since API version 8 and deprecated since API version 9.
 You are advised to use [Component<sup>9+</sup>](arkts-test-uitest-component-c.md) instead.
 - [UiDriver<sup>(deprecated)</sup>](arkts-test-uitest-uidriver-c.md): works as the entry class and provides APIs for features such as
 component matching/search, key injection, coordinate clicking/sliding, and screenshot.
 This API is supported since API version 8 and deprecated since API version 9.
 You are advised to use [Driver<sup>9+</sup>](arkts-test-uitest-driver-c.md) instead.
 > **NOTE**
 >
 > - The APIs of this module can be used only in <!--RP1-->[UITest](docroot://application-test/uitest-guidelines.md)<!--RP1End-->.
 >
 > - The APIs of this module do not support concurrent calls.


## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [By](arkts-test-uitest-by-c.md) | The UiTest framework provides a wide range of UI component feature description APIs in the **By** class to filter and match components.  The APIs provided by the **By** class exhibit the following features:  1. Allow one or more attributes as the match conditions.For example, you can specify both the **text** and **id** attributes to find the target component.2. Provide multiple match patterns for component attributes.3. Support absolute positioning and relative positioning for components.APIs such as [By.isBefore<sup>(deprecated)</sup>](arkts-test-uitest-by-c.md#isbefore-1) and [By.isAfter<sup>(deprecated)</sup>](arkts-test-uitest-by-c.md#isafter-1)can be used to specify the features of adjacent components to assist positioning.  All APIs provided in the **By** class are synchronous. You are advised to use the static constructor **BY** to create a **By** object in chain mode. |
| [Component](arkts-test-uitest-component-c.md) | Represents a component on the UI and provides APIs for obtaining component attributes, clicking a component,scrolling to search for a component, and text injection.All APIs provided in this class use a promise to return the result and must be invoked using **await**. |
| [Driver](arkts-test-uitest-driver-c.md) | The **Driver** class is the main entry to the UiTest framework. It provides APIs for features such as component matching/search, key injection, coordinate clicking/sliding, and screenshot.All APIs provided by this class, except **Driver.create()**, use a promise to return the result and must be invoked using **await**. |
| [On](arkts-test-uitest-on-c.md) | Since API version 9, the UiTest framework provides a wide range of UI component feature description APIs in the **On** class to filter and match components.  The APIs provided by the **On** class exhibit the following features:  1. Allow one or more attributes as the match conditions.For example, you can specify both the **text** and **id** attributes to find the target component.2. Provide multiple match patterns for component attributes.3. Support absolute positioning and relative positioning for components.APIs such as [ON.isBefore](arkts-test-uitest-on-c.md#isbefore-1) and [ON.isAfter](arkts-test-uitest-on-c.md#isafter-1) can be used to specify the features of adjacent components to assist positioning.  All APIs provided in the **On** class are synchronous. You are advised to use the static constructor **ON** to create an **On** object in chain mode. |
| [PointerMatrix](arkts-test-uitest-pointermatrix-c.md) | Represents a two-dimensional array of pointers on the device display, it's used to build a multi-finger trace which can be injected with UiDriver. |
| [UiComponent](arkts-test-uitest-uicomponent-c.md) | In **UiTest**, the **UiComponent** class represents a component on the UI and provides APIs for obtaining component attributes, clicking a component, scrolling to search for a component, and text injection.All APIs provided in this class use a promise to return the result and must be invoked using **await**. |
| [UiDriver](arkts-test-uitest-uidriver-c.md) | The **UiDriver** class is the main entry to the UiTest framework. It provides APIs for features such as component matching/search, key injection, coordinate clicking/sliding, and screenshot.All APIs provided by this class, except **UiDriver.create()**, use a promise to return the result and must be invoked using **await**. |
| [UiWindow](arkts-test-uitest-uiwindow-c.md) | The **UiWindow** class represents a window on the UI and provides APIs for obtaining window attributes, dragging a window, and adjusting the window size.All APIs provided in this class use a promise to return the result and must be invoked using **await**. |

### Interfaces

| Name | Description |
| --- | --- |
| [ComponentEventOptions](arkts-test-uitest-componenteventoptions-i.md) | Describes the extended configuration of component operation event listening,which is used to specify the listening process configuration and event filtering conditions. |
| [InputTextMode](arkts-test-uitest-inputtextmode-i.md) | Describes the text input mode. |
| [KeyOptions](arkts-test-uitest-keyoptions-i.md) | Represents the options for key operations. |
| [PenKeyOperationOptions](arkts-test-uitest-penkeyoperationoptions-i.md) | Pen key operation options. |
| [Point](arkts-test-uitest-point-i.md) | Represents the point on the device screen. |
| [Rect](arkts-test-uitest-rect-i.md) | Represents the rectangle area on the device screen. |
| [TouchOptions](arkts-test-uitest-touchoptions-i.md) | Common options for touch operations. |
| [TouchPadSwipeOptions](arkts-test-uitest-touchpadswipeoptions-i.md) | Describes information about the touchpad swipe gesture option. |
| [UIElementInfo](arkts-test-uitest-uielementinfo-i.md) | Provides information about the UI event. |
| [UIEventObserver](arkts-test-uitest-uieventobserver-i.md) | Observer to monitor UI events. |
| [WindowChangeOptions](arkts-test-uitest-windowchangeoptions-i.md) | Describes the extended configuration of window change event listening,which is used to specify the listening process configuration and event filtering conditions. |
| [WindowFilter](arkts-test-uitest-windowfilter-i.md) | Provides the flag attributes of this window. |

### Enums

| Name | Description |
| --- | --- |
| [ComponentEventType](arkts-test-uitest-componenteventtype-e.md) | Enumerates the component operation event types that can be listened for. |
| [DisplayRotation](arkts-test-uitest-displayrotation-e.md) | Describes the display rotation of the device. |
| [MatchPattern](arkts-test-uitest-matchpattern-e.md) | Enumerates the match patterns supported for component attributes. |
| [MouseButton](arkts-test-uitest-mousebutton-e.md) | Describes the injected simulated mouse button. |
| [PenKey](arkts-test-uitest-penkey-e.md) | Pen key type enum. |
| [PenKeyOperation](arkts-test-uitest-penkeyoperation-e.md) | Pen key operation type enum. |
| [PenMode](arkts-test-uitest-penmode-e.md) | Pen mode enum. |
| [ResizeDirection](arkts-test-uitest-resizedirection-e.md) | Enumerates the directions in which a window can be resized. |
| [UiDirection](arkts-test-uitest-uidirection-e.md) | Describes the direction of a UI operation such as fling. |
| [WindowChangeType](arkts-test-uitest-windowchangetype-e.md) | Enumerates the window change event types that can be listened for. |
| [WindowMode](arkts-test-uitest-windowmode-e.md) | Enumerates the window modes. |

