# AtomicServiceTabs

Defines AtomicServiceTabs.

**Since:** 12

<!--Device-unnamed-export declare struct AtomicServiceTabs--><!--Device-unnamed-export declare struct AtomicServiceTabs-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TabBarPosition, TabBarOptions, AtomicServiceTabs, TabContentBuilder, OnContentWillChangeCallback } from '@kit.ArkUI';
```

## barBackgroundColor

```TypeScript
barBackgroundColor?: ResourceColor
```

Sets the barBackgroundColor of tabs.

**Type:** ResourceColor

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-barBackgroundColor?: ResourceColor--><!--Device-AtomicServiceTabs-barBackgroundColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barOverlap

```TypeScript
barOverlap?: boolean
```

set if need overlap, default value is true.

**Type:** boolean

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-barOverlap?: boolean--><!--Device-AtomicServiceTabs-barOverlap?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller?: TabsController
```

Provide methods for switching tabs.

**Type:** TabsController

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-controller?: TabsController--><!--Device-AtomicServiceTabs-controller?: TabsController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index?: number
```

Sets the index of tabs.

**Type:** number

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-index?: number--><!--Device-AtomicServiceTabs-index?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layoutMode

```TypeScript
layoutMode?: LayoutMode
```

Set the layout mode of the bottom tab bar

**Type:** LayoutMode

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AtomicServiceTabs-layoutMode?: LayoutMode--><!--Device-AtomicServiceTabs-layoutMode?: LayoutMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: Callback<number>
```

onChange callback of tabs when tabs changed.

**Type:** Callback<number>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-onChange?: Callback<number>--><!--Device-AtomicServiceTabs-onChange?: Callback<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onContentWillChange

```TypeScript
onContentWillChange?: OnContentWillChangeCallback
```

onContentWillChange callback of tabs when tabbar is clicked.

**Type:** OnContentWillChangeCallback

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-onContentWillChange?: OnContentWillChangeCallback--><!--Device-AtomicServiceTabs-onContentWillChange?: OnContentWillChangeCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTabBarClick

```TypeScript
onTabBarClick?: Callback<number>
```

onTabBarClick callback of tabs when tabbar is clicked.

**Type:** Callback<number>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-onTabBarClick?: Callback<number>--><!--Device-AtomicServiceTabs-onTabBarClick?: Callback<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tabBarOptionsArray

```TypeScript
tabBarOptionsArray: [
    TabBarOptions,
    TabBarOptions,
    TabBarOptions?,
    TabBarOptions?,
    TabBarOptions?
  ]
```

The tabBar array of tabs.

**Type:** [
    TabBarOptions,
    TabBarOptions,
    TabBarOptions?,
    TabBarOptions?,
    TabBarOptions?
  ]

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-tabBarOptionsArray: [
    TabBarOptions,
    TabBarOptions,
    TabBarOptions?,
    TabBarOptions?,
    TabBarOptions?
  ]--><!--Device-AtomicServiceTabs-tabBarOptionsArray: [
    TabBarOptions,
    TabBarOptions,
    TabBarOptions?,
    TabBarOptions?,
    TabBarOptions?
  ]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tabBarPosition

```TypeScript
tabBarPosition?: TabBarPosition
```

set the positions of tabbar.

**Type:** TabBarPosition

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-tabBarPosition?: TabBarPosition--><!--Device-AtomicServiceTabs-tabBarPosition?: TabBarPosition-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tabContents

```TypeScript
tabContents?: [ 
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?
  ]
```

The TabContent array of tabs.

**Type:** [ 
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?
  ]

**Since:** 12

**Decorator:** @BuilderParam

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AtomicServiceTabs-tabContents?: [ 
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?
  ]--><!--Device-AtomicServiceTabs-tabContents?: [ 
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?,
    TabContentBuilder?
  ]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

