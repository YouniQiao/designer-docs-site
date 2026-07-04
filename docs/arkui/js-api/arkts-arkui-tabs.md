# Tabs

The **Tabs** component is a container component that allows users to switch between content views through tabs. Each tab page corresponds to a content view. > **NOTE** > > - > > - Since API version 11, this component supports the safe area avoidance feature. The default value of the > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute is > **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])**. You can override the default behavior by > rewriting this attribute. For versions earlier than API version 11, you need to manually implement safe area > avoidance together with the **expandSafeArea** attribute.

## Tabs

```TypeScript
Tabs(options?: TabsOptions)
```

Create a **Tabs** container.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TabsOptions | No | Options of the **Tabs** component. |

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
