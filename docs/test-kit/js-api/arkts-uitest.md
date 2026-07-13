# @ohos.UiTest

The **UiTest** module provides APIs that you can use to simulate UI actions during testing, such as clicks, double-
 clicks, long-clicks, and swipes.
 This module provides the following functions:
 - [On<sup>9+</sup>](arkts-test-on-c.md): provides UI component feature description APIs for component filtering and matching.
 - [Component<sup>9+</sup>](arkts-test-component-c.md): represents a component on the UI and provides APIs for obtaining
 component attributes, clicking a component, scrolling to search for a component, and text injection.
 - [Driver<sup>9+</sup>](arkts-test-driver-c.md): works as the entry class and provides APIs for features such as component
 matching/search, key injection, coordinate clicking/sliding, and screenshot.
 - [UiWindow<sup>9+</sup>](arkts-test-uiwindow-c.md): works as the entry class and provides APIs for obtaining window attributes,
 dragging windows, and adjusting window sizes.
 - [By<sup>(deprecated)</sup>](BY): provides UI component feature description APIs for component filtering and
 matching. This API is supported since API version 8 and deprecated since API version 9.
 You are advised to use {@link On} instead.
 - [UiComponent<sup>(deprecated)</sup>](arkts-test-uicomponent-c.md): represents a component on the UI and provides APIs for
 obtaining component attributes, clicking a component, scrolling to search for a component, and text injection.
 This API is supported since API version 8 and deprecated since API version 9.
 You are advised to use [Component<sup>9+</sup>](arkts-test-component-c.md) instead.
 - [UiDriver<sup>(deprecated)</sup>](arkts-test-uidriver-c.md): works as the entry class and provides APIs for features such as
 component matching/search, key injection, coordinate clicking/sliding, and screenshot.
 This API is supported since API version 8 and deprecated since API version 9.
 You are advised to use [Driver<sup>9+</sup>](arkts-test-driver-c.md) instead.
 > **NOTE**
 >
 > - The APIs of this module can be used only in <!--RP1-->[UITest](../../../../application-test/uitest-guidelines.md)<!--RP1End-->.
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
| [By](arkts-test-by-c.md) | The UiTest framework provides a wide range of UI component feature description APIs in the **By** class to filter andmatch components.The APIs provided by the **By** class exhibit the following features:1. Allow one or more attributes as the match conditions. For example, you can specify both the **text** and **id** attributes to find the target component.2. Provide multiple match patterns for component attributes.3. Support absolute positioning and relative positioning for components. APIs such as [By.isBefore&lt;sup&gt;(deprecated)&lt;/sup&gt;](arkts-test-by-c.md#isbefore-1) and [By.isAfter&lt;sup&gt;(deprecated)&lt;/sup&gt;](arkts-test-by-c.md#isafter-1) can be used to specify the features of adjacent components to assist positioning.All APIs provided in the **By** class are synchronous. You are advised to use the static constructor **BY** to createa **By** object in chain mode. |
| [Component](arkts-test-component-c.md) | Represents a component on the UI and provides APIs for obtaining component attributes, clicking a component,scrolling to search for a component, and text injection.All APIs provided in this class use a promise to return the result and must be invoked using **await**. |
| [Driver](arkts-test-driver-c.md) | The **Driver** class is the main entry to the UiTest framework. It provides APIs for features such as componentmatching/search, key injection, coordinate clicking/sliding, and screenshot.All APIs provided by this class, except **Driver.create()**, use a promise to return the result and must be invokedusing **await**. |
| [On](arkts-test-on-c.md) | Since API version 9, the UiTest framework provides a wide range of UI component feature description APIs in the**On** class to filter and match components.The APIs provided by the **On** class exhibit the following features:1. Allow one or more attributes as the match conditions. For example, you can specify both the **text** and **id** attributes to find the target component.2. Provide multiple match patterns for component attributes.3. Support absolute positioning and relative positioning for components. APIs such as [ON.isBefore](arkts-test-on-c.md#isbefore-1) and [ON.isAfter](arkts-test-on-c.md#isafter-1) can be used to specify the features of adjacent components to assist positioning.All APIs provided in the **On** class are synchronous. You are advised to use the static constructor **ON** to createan **On** object in chain mode. |
| [PointerMatrix](arkts-test-pointermatrix-c.md) | Represents a two-dimensional array of pointers on the device display, it's used to build amulti-finger trace which can be injected with UiDriver. |
| [UiComponent](arkts-test-uicomponent-c.md) | In **UiTest**, the **UiComponent** class represents a component on the UI and provides APIs for obtaining componentattributes, clicking a component, scrolling to search for a component, and text injection.All APIs provided in this class use a promise to return the result and must be invoked using **await**. |
| [UiDriver](arkts-test-uidriver-c.md) | The **UiDriver** class is the main entry to the UiTest framework. It provides APIs for features such as componentmatching/search, key injection, coordinate clicking/sliding, and screenshot.All APIs provided by this class, except **UiDriver.create()**, use a promise to return the result and must be invokedusing **await**. |
| [UiWindow](arkts-test-uiwindow-c.md) | The **UiWindow** class represents a window on the UI and provides APIs for obtaining window attributes, dragging awindow, and adjusting the window size.All APIs provided in this class use a promise to return the result and must be invoked using **await**. |

### Interfaces

| Name | Description |
| --- | --- |
| [ComponentEventOptions](arkts-test-componenteventoptions-i.md) | Describes the extended configuration of component operation event listening,which is used to specify the listening process configuration and event filtering conditions. |
| [InputTextMode](arkts-test-inputtextmode-i.md) | Describes the text input mode. |
| [KeyOptions](arkts-test-keyoptions-i.md) | Represents the options for key operations. |
| [PenKeyOperationOptions](arkts-test-penkeyoperationoptions-i.md) | Pen key operation options. |
| [Point](arkts-test-point-i.md) | Represents the point on the device screen. |
| [Rect](arkts-test-rect-i.md) | Represents the rectangle area on the device screen. |
| [TouchOptions](arkts-test-touchoptions-i.md) | Common options for touch operations. |
| [TouchPadSwipeOptions](arkts-test-touchpadswipeoptions-i.md) | Describes information about the touchpad swipe gesture option. |
| [UIElementInfo](arkts-test-uielementinfo-i.md) | Provides information about the UI event. |
| [UIEventObserver](arkts-test-uieventobserver-i.md) | Observer to monitor UI events. |
| [WindowChangeOptions](arkts-test-windowchangeoptions-i.md) | Describes the extended configuration of window change event listening,which is used to specify the listening process configuration and event filtering conditions. |
| [WindowFilter](arkts-test-windowfilter-i.md) | Provides the flag attributes of this window. |

### Enums

| Name | Description |
| --- | --- |
| [ComponentEventType](arkts-test-componenteventtype-e.md) | Enumerates the component operation event types that can be listened for. |
| [DisplayRotation](arkts-test-displayrotation-e.md) | Describes the display rotation of the device. |
| [MatchPattern](arkts-test-matchpattern-e.md) | Enumerates the match patterns supported for component attributes. |
| [MouseButton](arkts-test-mousebutton-e.md) | Describes the injected simulated mouse button. |
| [PenKey](arkts-test-penkey-e.md) | Pen key type enum. |
| [PenKeyOperation](arkts-test-penkeyoperation-e.md) | Pen key operation type enum. |
| [PenMode](arkts-test-penmode-e.md) | Pen mode enum. |
| [ResizeDirection](arkts-test-resizedirection-e.md) | Enumerates the directions in which a window can be resized. |
| [UiDirection](arkts-test-uidirection-e.md) | Describes the direction of a UI operation such as fling. |
| [WindowChangeType](arkts-test-windowchangetype-e.md) | Enumerates the window change event types that can be listened for. |
| [WindowMode](arkts-test-windowmode-e.md) | Enumerates the window modes. |

