# nav_router

Defines NavRouter Component instance.

## nav_router

```TypeScript
nav_router()
```

创建NavRouter。

**Since:** 9

**Deprecated since:** 13

**Substitute:** NavDestinationAttribute

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
nav_router(value: RouteInfo)
```

提供路由信息，指定点击NavRouter时，要跳转的NavDestination页面。

**Since:** 10

**Deprecated since:** 13

**Substitute:** Navigation#NavPathInfo

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RouteInfo | Yes | 路由信息。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [NavRouterAttribute](arkts-navrouterattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [NavRouterInterface](arkts-navrouterinterface-i.md) | 导航组件，默认提供点击响应处理，不需要开发者自定义点击事件逻辑。 |
| [RouteInfo](arkts-routeinfo-i.md) | 路由信息。 |

### Enums

| Name | Description |
| --- | --- |
| [NavRouteMode](arkts-navroutemode-e.md) | 路由模式。 |

### Constants

| Name | Description |
| --- | --- |
| [NavRouter](arkts-nav-router-con.md#NavRouter) | 导航组件，默认提供点击响应处理，不需要开发者自定义点击事件逻辑。 ###### 子组件 必须包含两个子组件，其中第二个子组件必须为[NavDestination]{@link nav_destination}。 > **说明：** > > 子组件个数异常时： > > 1. 有且仅有1个时，触发路由到NavDestination的能力失效。 > > 2. 有且仅有1个时，且使用NavDestination场景下，不进行路由。 > > 3. 大于2个时，后续的子组件不显示。 > > 4. 第二个子组件不为NavDestination时，触发路由功能失效。 |
| [NavRouterInstance](arkts-nav-router-con.md#NavRouterInstance) | Defines NavRouter Component instance. |

