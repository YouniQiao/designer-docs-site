# NavRouterAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** NavRouterAttributeextends: CommonMethod<NavRouterAttribute>.

**Since:** 9

**Deprecated since:** 13

**Substitute:** Navigation#NavPathStack

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode(mode: NavRouteMode)
```

设置指定点击NavRouter跳转到NavDestination页面时，使用的路由模式。

**Since:** 10

**Deprecated since:** 13

**Substitute:** Navigation#LaunchMode

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | NavRouteMode | Yes | 指定点击NavRouter跳转到NavDestination页面时，使用的路由模式。 默认值：NavRouteMode.PUSH_WITH_RECREATE |

## onStateChange

```TypeScript
onStateChange(callback: (isActivated: boolean) => void)
```

组件激活状态切换时触发该回调。开发者点击激活NavRouter，加载对应的NavDestination子组件时，回调onStateChange(true)。NavRouter对应的NavDestination子组件不再显示时，回调 onStateChange(false)。

**Since:** 9

**Deprecated since:** 13

**Substitute:** NavDestination#onShown

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isActivated: boolean) => void | Yes | isActivated为true时表示激活，为false时表示未激活。 |

