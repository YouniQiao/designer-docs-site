# Tabs

The **Tabs** component is a container component that allows users to switch between content views through tabs. Each
tab page corresponds to a content view.

> **NOTE**
>
> -
>
> - Since API version 11, this component supports the safe area avoidance feature. The default value of the
> [expandSafeArea]{}
> **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])**. You can override the default behavior by
> rewriting this attribute. For versions earlier than API version 11, you need to manually implement safe area
> avoidance together with the **expandSafeArea** attribute.

## Child Components

Only the child component [TabContent]{@link tab_content} and rendering control types [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) and [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md) are supported. You are advised not to use custom components as child components. If **if/else** or **ForEach** is used, only **TabContent** can be used as the child component. You are advised not to use custom components as child components.

> **NOTE**  
>  
> If the child component has the **visibility** attribute set to **None** or **Hidden**, it is hidden but still takes  
> up space in the layout.  
>  
> When a displayed **Tabs** child component **TabContent** is hidden, it is not destroyed. For details about how to  
> implement lazy loading and release on the page, see  
> [Example 13](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#example-13-implementing-lazy-loading-and-resource-release-of-pages).  
>  
>  
> If [height]{@link CommonMethod#height(value: Length)} is set to **auto** for **Tabs**, the tab height can be  
> automatically adjusted based on that of the child component. When [width]{@link CommonMethod#width(value: Length)}  
> is set to **auto**, the tab width can be automatically adjusted based on that of the child component.

## Tabs

```TypeScript
Tabs(options?: TabsOptions)
```

Create a **Tabs** container.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TabsInterface-(options?: TabsOptions): TabsAttribute--><!--Device-TabsInterface-(options?: TabsOptions): TabsAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TabsOptions](arkts-arkui-tabsoptions-i.md) | No | Options of the **Tabs** component. |

## Summary

- [BarGridColumnOptions](arkts-arkui-tabs-bargridcolumnoptions-i.md)
- [DividerStyle](arkts-arkui-tabs-dividerstyle-i.md)
- [FloatingTabBarStyle](arkts-arkui-tabs-floatingtabbarstyle-i.md)
- [FloatingTabBarWidth](arkts-arkui-tabs-floatingtabbarwidth-i.md)
- [ScrollableBarModeOptions](arkts-arkui-tabs-scrollablebarmodeoptions-i.md)
- [TabContentAnimatedTransition](arkts-arkui-tabs-tabcontentanimatedtransition-i.md)
- [TabContentTransitionProxy](arkts-arkui-tabs-tabcontenttransitionproxy-i.md)
- [TabsAnimationEvent](arkts-arkui-tabs-tabsanimationevent-i.md)
- [TabsOptions](arkts-arkui-tabs-tabsoptions-i.md)
- [CommonModifier](arkts-arkui-tabs-commonmodifier-t.md)
- [OnTabsAnimationEndCallback](arkts-arkui-tabs-ontabsanimationendcallback-t.md)
- [OnTabsAnimationStartCallback](arkts-arkui-tabs-ontabsanimationstartcallback-t.md)
- [OnTabsContentDidScrollCallback](arkts-arkui-tabs-ontabscontentdidscrollcallback-t.md)
- [OnTabsContentWillChangeCallback](arkts-arkui-tabs-ontabscontentwillchangecallback-t.md)
- [OnTabsGestureSwipeCallback](arkts-arkui-tabs-ontabsgestureswipecallback-t.md)
- [TabsCustomContentTransitionCallback](arkts-arkui-tabs-tabscustomcontenttransitioncallback-t.md)
- [UIMaterial](arkts-arkui-tabs-uimaterial-t.md)
- [AnimationMode](arkts-arkui-tabs-animationmode-e.md)
- [BarMode](arkts-arkui-tabs-barmode-e.md)
- [BarPosition](arkts-arkui-tabs-barposition-e.md)
- [LayoutStyle](arkts-arkui-tabs-layoutstyle-e.md)
- [TabsCacheMode](arkts-arkui-tabs-tabscachemode-e.md)
- [TabsNestedScrollMode](arkts-arkui-tabs-tabsnestedscrollmode-e.md)
