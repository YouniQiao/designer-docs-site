# RefreshStatus

```TypeScript
declare enum RefreshStatus
```

RefreshStatus刷新状态枚举。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Inactive

```TypeScript
Inactive
```

默认未下拉状态。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Drag

```TypeScript
Drag
```

下拉中，下拉距离小于刷新距离。 若此时松手，组件进入Inactive状态；若此时继续下拉使下拉距离超过刷新距离，组件进入OverDrag状态。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## OverDrag

```TypeScript
OverDrag
```

下拉中，下拉距离超过刷新距离。 若此时松手，组件进入Refresh状态；若此时上滑使下拉距离小于刷新距离，组件进入Drag状态。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Refresh

```TypeScript
Refresh
```

After the pull-down, it rebounds to the refresh distance and enters the refresh state.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Done

```TypeScript
Done
```

刷新结束，返回初始状态（顶部）。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

