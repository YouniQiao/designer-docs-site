# RouterPageState

```TypeScript
export enum RouterPageState
```

routerPage生命周期触发时对应的状态。RouterPageState用于[RouterPageInfo]uiObserver.RouterPageInfo中，作为 [routerPageUpdate]uiObserver.on(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>)无感监听的返回值。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ABOUT_TO_APPEAR

```TypeScript
ABOUT_TO_APPEAR = 0
```

page即将显示。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ABOUT_TO_DISAPPEAR

```TypeScript
ABOUT_TO_DISAPPEAR = 1
```

page即将销毁。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ON_PAGE_SHOW

```TypeScript
ON_PAGE_SHOW = 2
```

page显示。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ON_PAGE_HIDE

```TypeScript
ON_PAGE_HIDE = 3
```

page隐藏。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ON_BACK_PRESS

```TypeScript
ON_BACK_PRESS = 4
```

page返回时。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

