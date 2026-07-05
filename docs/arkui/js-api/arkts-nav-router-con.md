# Constants

## NavRouter

```TypeScript
declare const NavRouter: NavRouterInterface
```

导航组件，默认提供点击响应处理，不需要开发者自定义点击事件逻辑。 ###### 子组件 必须包含两个子组件，其中第二个子组件必须为[NavDestination]nav_destination。 > **说明：** > > 子组件个数异常时： > > 1. 有且仅有1个时，触发路由到NavDestination的能力失效。 > > 2. 有且仅有1个时，且使用NavDestination场景下，不进行路由。 > > 3. 大于2个时，后续的子组件不显示。 > > 4. 第二个子组件不为NavDestination时，触发路由功能失效。

**Since:** 9

**Deprecated since:** 13

**Substitute:** Navigation#NavPathStack

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## NavRouterInstance

```TypeScript
declare const NavRouterInstance: NavRouterAttribute
```

Defines NavRouter Component instance.

**Since:** 9

**Deprecated since:** 13

**Substitute:** Navigation#NavPathStack

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

