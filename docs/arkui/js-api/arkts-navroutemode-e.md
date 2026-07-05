# NavRouteMode

```TypeScript
declare enum NavRouteMode
```

路由模式。

**Since:** 10

**Deprecated since:** 13

**Substitute:** Navigation#NavPathStack

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PUSH_WITH_RECREATE

```TypeScript
PUSH_WITH_RECREATE = 0
```

跳转到新的NavDestination页面时，替换当前显示的NavDestination页面，页面销毁，但该页面信息仍保留在路由栈中。

**Since:** 10

**Deprecated since:** 13

**Substitute:** Navigation#LaunchMode

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PUSH

```TypeScript
PUSH = 1
```

**Since:** 10

**Deprecated since:** 13

**Substitute:** Navigation#LaunchMode

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## REPLACE

```TypeScript
REPLACE = 2
```

**Since:** 10

**Deprecated since:** 13

**Substitute:** Navigation#LaunchMode

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

