# NavDestination

**NavDestination** is the root container of a destination page and represents the content area of the
[Navigation]{@link navigation} component.

> **NOTE**

> - Since API version 11, this component supports the safe area attribute by default, with the default attribute
> value being **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])**. You can override
> this attribute to change the default behavior. In earlier versions, you need to use the
> [expandSafeArea]{@link common} attribute to implement the safe area feature.
>
> - The **NavDestination** component must be used in conjunction with the **Navigation** component to act as the root
> node for the navigation destination page. When used alone, it can only function as a standard container component
> and does not possess any routing-related attributes or capabilities.
>
> - If the lifecycle of an intermediate page in the routing stack changes, the lifecycle callbacks (**onWillShow**,
> **onShown**, **onHidden**, **onWillDisappear**) of the top **NavDestination** in the stack both before and after
> the navigation will be triggered last in the sequence.
>
> - If no main title or subtitle is set for **NavDestination** and there is no back button, the title bar is not
> displayed.
>
> - Avoid setting layout-related attributes such as the position and size. They may result in display issues on the
> page. For example, do not apply the [zIndex]{@link CommonMethod#zIndex} attribute to a **NavDestination**
> component. This will override the system-defined stacking order and may cause display anomalies.


## NavDestination

```TypeScript
NavDestination()
```

Creates the root container for a subpage in [Navigation]{@link navigation}.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

- [NavDestinationCommonTitle](arkts-arkui-navdestination-navdestinationcommontitle-i.md)
- [NavDestinationContext](arkts-arkui-navdestination-navdestinationcontext-i.md)
- [NavDestinationCustomTitle](arkts-arkui-navdestination-navdestinationcustomtitle-i.md)
- [NavDestinationTransition](arkts-arkui-navdestination-navdestinationtransition-i.md)
- [NestedScrollInfo](arkts-arkui-navdestination-nestedscrollinfo-i.md)
- [RouteMapConfig](arkts-arkui-navdestination-routemapconfig-i.md)
- [NavDestinationTransitionDelegate](arkts-arkui-navdestination-navdestinationtransitiondelegate-t.md)
- [Orientation](arkts-arkui-navdestination-orientation-t.md)
- [RestoreStateCallback](arkts-arkui-navdestination-restorestatecallback-t.md)
- [SaveStateCallback](arkts-arkui-navdestination-savestatecallback-t.md)
- [NavDestinationActiveReason](arkts-arkui-navdestination-navdestinationactivereason-e.md)
- [NavDestinationMode](arkts-arkui-navdestination-navdestinationmode-e.md)
- [NavigationSystemTransitionType](arkts-arkui-navdestination-navigationsystemtransitiontype-e.md)
- [VisibilityChangeReason](arkts-arkui-navdestination-visibilitychangereason-e.md)
