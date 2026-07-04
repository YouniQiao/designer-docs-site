# TitleOptions

Indicates the options of Navigation's Titlebar.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { GradientBackground, TitleBarType, MixMode, AtomicServiceNavigation, SideBarOptions, TitleOptions, GradientAlpha, NavDestinationBuilder, BackgroundTheme } from '@ohos.atomicservice.AtomicServiceNavigation';
```

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

Background color.

**Type:** ResourceColor

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barStyle

```TypeScript
barStyle?: BarStyle
```

Set title bar style.

**Type:** BarStyle

**Default:** BarStyle.STANDARD

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isBlurEnabled

```TypeScript
isBlurEnabled?: boolean
```

Whether to enable the blur effect.

**Type:** boolean

**Default:** true

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleBarType

```TypeScript
titleBarType?: TitleBarType
```

Set title bar type.

**Type:** TitleBarType

**Default:** TitleBarType.ROUND_ICON

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleIcon

```TypeScript
titleIcon?: Resource | SymbolGlyphModifier
```

Set title bar icon.

**Type:** Resource | SymbolGlyphModifier

**Default:** atomicservice icon

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

