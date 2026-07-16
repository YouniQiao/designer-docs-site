# @ohos.arkui.observer

Provides APIs for listening for UI component behavior changes.

> **NOTE**
>
> - UIObserver can only listen for relevant information within the current process and does not support obtaining
> information in cross-process scenarios<!--Del--> such as [UIExtensionComponent](../arkts-components/arkts-arkui-uiextensioncomponent.md)<!--
> DelEnd-->.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiObserver } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-arkui-off-f.md#off-1) | Unsubscribes from status changes of the **NavDestination** component. Compared with[uiObserver.off](arkts-arkui-off-f.md#off-2), thisAPI supports the **options** parameter, which enables you to specify the ID of the target **Navigation** componentto observe. |
| [off](arkts-arkui-off-f.md#off-2) | Unsubscribes from status changes of the **NavDestination** component. |
| [off](arkts-arkui-off-f.md#off-3) | Removes a callback function that was previously registered with `on()`. |
| [off](arkts-arkui-off-f.md#off-4) | Removes a callback function that was previously registered with `on()`. |
| [off](arkts-arkui-off-f.md#off-5) | Unsubscribes from state changes of the page during routing. |
| [off](arkts-arkui-off-f.md#off-6) | Unregisters the listener for screen pixel density changes. |
| [off](arkts-arkui-off-f.md#off-7) | Unregisters the listener for drawing instruction dispatch in each frame. |
| [off](arkts-arkui-off-f.md#off-8) | Unregisters the listener for layout completion status in each frame. |
| [off](arkts-arkui-off-f.md#off-9) | Unsubscribes from **TabContent** page switching events for the specified **Tabs** component identified by its ID. |
| [off](arkts-arkui-off-f.md#off-10) | Unsubscribes from the **TabContent** switching event. |
| [off](arkts-arkui-off-f.md#off-11) | Unsubscribes from **Navigation** component page switching events. |
| [off](arkts-arkui-off-f.md#off-12) | Unsubscribes from **Navigation** component page switching events. Compared with[uiObserver.off](uiObserver.off( type: 'navDestinationSwitch', context: UIAbilityContext \| UIContext, callback?: Callback&lt;NavDestinationSwitchInfo&gt; )),this API supports the **observerOptions** parameter, which enables you to configure observation options. |
| [on](arkts-arkui-on-f.md#on-1) | Subscribes to status changes of the **NavDestination** component. Compared with[uiObserver.on](arkts-arkui-on-f.md#on-2), thisAPI supports the **options** parameter, which enables you to specify the ID of the target **Navigation** componentto observe. |
| [on](arkts-arkui-on-f.md#on-2) | Subscribes to status changes of the **NavDestination** component. |
| [on](arkts-arkui-on-f.md#on-3) | Registers a callback function to be called when the scroll event start or stop. |
| [on](arkts-arkui-on-f.md#on-4) | Registers a callback function to be called when the scroll event start or stop. |
| [on](arkts-arkui-on-f.md#on-5) | Subscribes to state changes of the page during routing. |
| [on](arkts-arkui-on-f.md#on-6) | Listens for screen pixel density changes. |
| [on](arkts-arkui-on-f.md#on-7) | Listens for drawing instruction dispatch in each frame. |
| [on](arkts-arkui-on-f.md#on-8) | Listens for layout completion status in each frame. |
| [on](arkts-arkui-on-f.md#on-9) | Subscribes to **TabContent** page switching events for the specified **Tabs** component identified by its ID.Unlike[on('tabChange')](arkts-arkui-uiobserver-c.md#on-23),this API does not support listening for the initial tab display event when the **Tabs** component is initialized. |
| [on](arkts-arkui-on-f.md#on-10) | Subscribes to **TabContent** switch events. Unlike[on('tabChange')](arkts-arkui-uiobserver-c.md#on-23),this API does not support listening for the initial tab display event when the **Tabs** component is initialized. |
| [on](arkts-arkui-on-f.md#on-11) | Subscribes to **Navigation** component page switching events. |
| [on](arkts-arkui-on-f.md#on-12) | Subscribes to **Navigation** component page switching events. Compared with[uiObserver.on](uiObserver.on( type: 'navDestinationSwitch', context: UIAbilityContext \| UIContext, callback: Callback&lt;NavDestinationSwitchInfo&gt; )),this API supports the **observerOptions** parameter, which enables you to configure observation options. |

### Classes

| Name | Description |
| --- | --- |
| [DensityInfo](arkts-arkui-densityinfo-c.md) | Provides the information contained in the callback when the screen pixel density changes. |
| [RouterPageInfo](arkts-arkui-routerpageinfo-c.md) | Provides the information contained in **RouterPageInfo**, returned by the system to developers. |
| [WindowSizeLayoutBreakpointInfo](arkts-arkui-windowsizelayoutbreakpointinfo-c.md) | Provides information about window size layout breakpoint changes. |

### Interfaces

| Name | Description |
| --- | --- |
| [NavDestinationInfo](arkts-arkui-navdestinationinfo-i.md) | Information about the **NavDestination** component, returned by the system to developers. |
| [NavDestinationSwitchInfo](arkts-arkui-navdestinationswitchinfo-i.md) | Provides the information about page switching of the **Navigation** component. |
| [NavDestinationSwitchObserverOptions](arkts-arkui-navdestinationswitchobserveroptions-i.md) | Provides the observer options for the page switching event of the **Navigation** component. |
| [NavigationInfo](arkts-arkui-navigationinfo-i.md) | Provides information about the **Navigation** component. |
| [ObserverOptions](arkts-arkui-observeroptions-i.md) | Describes the observer options. |
| [ScrollEventInfo](arkts-arkui-scrolleventinfo-i.md) | ScrollEvent info. |
| [TabContentInfo](arkts-arkui-tabcontentinfo-i.md) | Provides the **TabContent** switching information. |
| [TextChangeEventInfo](arkts-arkui-textchangeeventinfo-i.md) | Text change event info |

### Enums

| Name | Description |
| --- | --- |
| [NavDestinationState](arkts-arkui-navdestinationstate-e.md) | Describes the state of the **NavDestination** component. |
| [RouterPageState](arkts-arkui-routerpagestate-e.md) | Enumerates the states of a page during routing. **RouterPageState** is used in[RouterPageInfo](arkts-arkui-routerpageinfo-c.md) as the callback parameter for passive observation via[routerPageUpdate](uiObserver.on(type: 'routerPageUpdate', context: UIAbilityContext \| UIContext, callback: Callback&lt;RouterPageInfo&gt;)). |
| [ScrollEventType](arkts-arkui-scrolleventtype-e.md) | ScrollEvent type. |
| [TabContentState](arkts-arkui-tabcontentstate-e.md) | TabContent state. |

