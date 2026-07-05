# MultiNavigation

**MultiNavigation** is a component designed for multi-column display and routing navigation on large-screen devices. > **NOTE** > Due to the nested stack structure of **MultiNavigation**, calling APIs explicitly stated as unsupported in this > document or APIs not listed in the supported API list (such as **getParent**, **setInterception**, and > **pushDestination**) may lead to unpredictable issues. > In scenarios with deep nesting, **MultiNavigation** may encounter routing animation issues.

**Since:** 14

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MultiNavPathStack, MultiNavigation, SplitPolicy } from '@ohos.arkui.advanced.MultiNavigation';
```

## multiStack

```TypeScript
multiStack: MultiNavPathStack
```

Navigation stack.

**Type:** MultiNavPathStack

**Since:** 14

**Decorator:** @State

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navDestination

```TypeScript
navDestination: NavDestinationBuildFunction
```

Routing rules for loading the target page.

**Type:** NavDestinationBuildFunction

**Since:** 14

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHomeShowOnTop

```TypeScript
onHomeShowOnTop?: OnHomeShowOnTopCallback
```

Callback invoked when the home page is on the top of the navigation stack.

**Type:** OnHomeShowOnTopCallback

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onNavigationModeChange

```TypeScript
onNavigationModeChange?: OnNavigationModeChangeCallback
```

Callback invoked when the mode of the **MultiNavigation** component changes.

**Type:** OnNavigationModeChangeCallback

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

