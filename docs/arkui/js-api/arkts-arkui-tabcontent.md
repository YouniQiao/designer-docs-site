# TabContent

The **TabContent** component is used only in the **Tabs** component. It corresponds to the content view of a switched
tab page.

> **NOTE**

> - By default, the [clip]{@link CommonMethod#clip(value: boolean)} attribute of this component is set to **true**.
> If you want to extend the content area to the outside of the component, disable the **clip** attribute first.

## Child Components

This component supports only one child component.

> **NOTE**  
>  
> Built-in system and custom components, and rendering control types (  
> [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),  
> [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and  
> [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)) are supported.

## TabContent

```TypeScript
TabContent()
```

Creates the **TabContent** component, which represents the content associated with a specific tab.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TabContentInterface-(): TabContentAttribute--><!--Device-TabContentInterface-(): TabContentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

- [BoardStyle](arkts-arkui-tabcontent-boardstyle-i.md)
- [DrawableTabBarIndicator](arkts-arkui-tabcontent-drawabletabbarindicator-i.md)
- [IndicatorStyle](arkts-arkui-tabcontent-indicatorstyle-i.md)
- [LabelStyle](arkts-arkui-tabcontent-labelstyle-i.md)
- [TabBarIconStyle](arkts-arkui-tabcontent-tabbariconstyle-i.md)
- [TabBarOptions](arkts-arkui-tabcontent-tabbaroptions-i.md)
- [DrawableDescriptor](arkts-arkui-tabcontent-drawabledescriptor-t.md)
- [LayoutMode](arkts-arkui-tabcontent-layoutmode-e.md)
- [SelectedMode](arkts-arkui-tabcontent-selectedmode-e.md)
