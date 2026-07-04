# AtomicServiceNavigation

Defines AtomicServiceNavigation.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { GradientBackground, TitleBarType, MixMode, AtomicServiceNavigation, SideBarOptions, TitleOptions, GradientAlpha, NavDestinationBuilder, BackgroundTheme } from '@ohos.atomicservice.AtomicServiceNavigation';
```

## gradientBackground

```TypeScript
gradientBackground?: GradientBackground
```

The background with gradient colors of Navigation.

**Type:** GradientBackground

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hideTitleBar

```TypeScript
hideTitleBar?: boolean
```

Hide navigation title bar.

**Type:** boolean

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## menus

```TypeScript
menus?: CustomBuilder | Array<NavigationMenuItem>
```

The layout style users defined and inserted.

**Type:** CustomBuilder | Array<NavigationMenuItem>

**Since:** 18

**Decorator:** @Builder

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## minContentWidth

```TypeScript
minContentWidth?: Dimension
```

Sets the minimum width of content.

**Type:** Dimension

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode?: NavigationMode
```

Sets the mode of navigation.

**Type:** NavigationMode

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## modeChangeCallback

```TypeScript
modeChangeCallback?: Callback<NavigationMode>
```

Trigger callback when navigation mode changes.

**Type:** Callback<NavigationMode>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navBarWidth

```TypeScript
navBarWidth?: Length
```

Sets the width of navigation bar.

**Type:** Length

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navBarWidthRange

```TypeScript
navBarWidthRange?: [
    Dimension,
    Dimension
  ]
```

Sets the minimum width and the maximum width of navigation bar.

**Type:** [
    Dimension,
    Dimension
  ]

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navDestinationBuilder

```TypeScript
navDestinationBuilder?: NavDestinationBuilder
```

The builder of navDestination.

**Type:** NavDestinationBuilder

**Since:** 12

**Decorator:** @Builder

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navPathStack

```TypeScript
navPathStack?: NavPathStack
```

the information of route page.Providers methods for controlling destination page in the stack.

**Type:** NavPathStack

**Since:** 12

**Decorator:** @State

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navigationContent

```TypeScript
navigationContent?: Callback<void>
```

the content of Navigation.

**Type:** Callback<void>

**Since:** 12

**Decorator:** @Builder

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sideBarContent

```TypeScript
sideBarContent?: Callback<void>
```

Set side bar content.

**Type:** Callback<void>

**Since:** 18

**Decorator:** @Builder

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sideBarOptions

```TypeScript
sideBarOptions?: SideBarOptions
```

Set side bar options.

**Type:** SideBarOptions

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stateChangeCallback

```TypeScript
stateChangeCallback?: Callback<boolean>
```

Trigger callback when the visibility of navigation bar change.

**Type:** Callback<boolean>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: ResourceStr
```

Sets the Navigation title.

**Type:** ResourceStr

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleOptions

```TypeScript
titleOptions?: TitleOptions
```

The color of Navigation's TitleBar.

**Type:** TitleOptions

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

