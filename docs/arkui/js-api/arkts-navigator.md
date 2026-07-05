# navigator

Defines Navigator Component instance.

## navigator

```TypeScript
navigator(value?: { target: string; type?: NavigationType })
```

在路由跳转时调用。

**Since:** 7

**Deprecated since:** 13

**Substitute:** NavPathInfo

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { target: string; type?: NavigationType } | No | 跳转页面的信息。 target：指定跳转目标页面的路径。 type：指定路由方式。 默认值：NavigationType.Push |

```TypeScript
navigator()
```

在使用Navigator时调用。 NavigationAttribute为Navigation组件的属性。

**Since:** 7

**Deprecated since:** 13

**Substitute:** NavigationAttribute

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Classes

| Name | Description |
| --- | --- |
| [NavigatorAttribute](arkts-navigatorattribute-c.md) | Navigator的属性。 |

### Interfaces

| Name | Description |
| --- | --- |
| [NavigatorInterface](arkts-navigatorinterface-i.md) | 路由容器组件，提供路由跳转能力。 |

### Enums

| Name | Description |
| --- | --- |
| [NavigationType](arkts-navigationtype-e.md) | 路由的跳转方式。 |

### Constants

| Name | Description |
| --- | --- |
| [Navigator](arkts-navigator-con.md#Navigator) | 路由容器组件，提供路由跳转能力。 > **说明：** ###### 子组件 可以包含子组件。 |
| [NavigatorInstance](arkts-navigator-con.md#NavigatorInstance) | Defines Navigator Component instance. |

