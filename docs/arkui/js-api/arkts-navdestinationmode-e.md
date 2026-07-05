# NavDestinationMode

```TypeScript
declare enum NavDestinationMode
```

NavDestination类型。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## STANDARD

```TypeScript
STANDARD = 0
```

标准模式的NavDestination。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DIALOG

```TypeScript
DIALOG = 1
```

默认透明，进出路由栈不影响下层NavDestination的可见性（onShown、onHidden等生命周期），只会触发onActive、onInactive这两个生命周期。 API version 13之前，默认无系统转场动画。从API version 13开始，支持系统转场动画。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

