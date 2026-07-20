# SideBarOptions

Side bar options.

**Since:** 18

<!--Device-unnamed-export interface SideBarOptions--><!--Device-unnamed-export interface SideBarOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { GradientBackground, TitleBarType, MixMode, AtomicServiceNavigation, SideBarOptions, TitleOptions, GradientAlpha, NavDestinationBuilder, BackgroundTheme } from '@kit.ArkUI';
```

## onChange

```TypeScript
onChange?: Callback<boolean>
```

Side bar status change callback.

**Type:** Callback<boolean>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SideBarOptions-onChange?: Callback<boolean>--><!--Device-SideBarOptions-onChange?: Callback<boolean>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sideBarBackground

```TypeScript
sideBarBackground?: ResourceColor
```

Side bar Background.

**Type:** ResourceColor

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SideBarOptions-sideBarBackground?: ResourceColor--><!--Device-SideBarOptions-sideBarBackground?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sideBarIcon

```TypeScript
sideBarIcon?: Resource | SymbolGlyphModifier
```

Side bar icon.

**Type:** Resource | SymbolGlyphModifier

**Default:** $r('sys.symbol.open_sidebar')

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SideBarOptions-sideBarIcon?: Resource | SymbolGlyphModifier--><!--Device-SideBarOptions-sideBarIcon?: Resource | SymbolGlyphModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

