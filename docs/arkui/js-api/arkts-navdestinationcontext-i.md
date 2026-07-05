# NavDestinationContext

NavDestination上下文信息。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getConfigInRouteMap

```TypeScript
getConfigInRouteMap(): RouteMapConfig | undefined
```

获取当前NavDestination的路由配置信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RouteMapConfig | Routing configuration of the current page.  undefined is returned when the page is not configured through the route table. |

## mode

```TypeScript
mode?: NavDestinationMode
```

当前NavDestination的类型。 默认值：NavDestinationMode.Standard。

**Type:** NavDestinationMode

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navDestinationId

```TypeScript
navDestinationId?: string
```

当前NavDestination的唯一ID，由系统自动生成，和组件通用属性id无关。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pathStack

```TypeScript
pathStack: NavPathStack
```

当前NavDestination所处的导航控制器。

**Type:** NavPathStack

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pathInfo

```TypeScript
pathInfo: NavPathInfo
```

跳转NavDestination时指定的参数。

**Type:** NavPathInfo

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

