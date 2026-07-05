# NavigatorAttribute

Navigator的属性。

**Inheritance:** NavigatorAttributeextends: CommonMethod<NavigatorAttribute>.

**Since:** 7

**Deprecated since:** 13

**Substitute:** Navigation

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## active

```TypeScript
active(value: boolean)
```

设置当前路由组件是否处于激活状态，处于激活状态时，会生效相应的路由操作。

**Since:** 7

**Deprecated since:** 13

**Substitute:** Navigation

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 路由组件是否处于激活状态。设置为true时，组件处于激活态。设置为false时，组件不处于激活态。 |

## params

```TypeScript
params(value: object)
```

设置跳转时传递到目标页面的数据。 > **说明：

**Since:** 7

**Deprecated since:** 13

**Substitute:** NavPathInfo#param

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | object | Yes | 跳转时要同时传递到目标页面的数据，可在目标页面使用[router.getParams()](arkts-router-getparams-f.md#getParams-1)获得。 |

## target

```TypeScript
target(value: string)
```

设置跳转目标页面的路径。目标页面需加入main_pages.json文件中。

**Since:** 7

**Deprecated since:** 13

**Substitute:** Navigation

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 跳转目标页面的路径。 |

## type

```TypeScript
type(value: NavigationType)
```

设置路由跳转方式。 > **说明：

**Since:** 7

**Deprecated since:** 13

**Substitute:** Navigation

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NavigationType | Yes | 路由跳转方式。 默认值：NavigationType.Push |

