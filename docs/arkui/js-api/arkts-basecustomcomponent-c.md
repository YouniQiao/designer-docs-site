# BaseCustomComponent

自定义组件基类，它是从类CustomComponent迁移过来的。

**Inheritance:** BaseCustomComponentextends: CommonAttribute.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToAppear

```TypeScript
aboutToAppear?(): void
```

aboutToAppear方法 aboutToAppear函数在创建自定义组件的新实例之后，在执行其构建（）函数之前执行。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToDisappear

```TypeScript
aboutToDisappear?(): void
```

aboutToDisappear 方法 在自定义组件被销毁之前，aboutToDisappear 函数会执行。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToRecycle

```TypeScript
aboutToRecycle?(): void
```

aboutToRecycle Method and it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## build

```TypeScript
build(): void
```

Customize the pop-up content constructor and it is migrated from class CustomComponent.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getDialogController

```TypeScript
getDialogController(): PromptActionDialogController | undefined
```

The dialog controller of the custom component.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| PromptActionDialogController | The controller of dialog, or undefined if it is not available |

## getUIContext

```TypeScript
getUIContext(): UIContext
```

Get current UIContext and it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| UIContext | The UIContext that the custom component belongs to. |

## getUniqueId

```TypeScript
getUniqueId(): number
```

Get uniqueId of the custom component and it is migrated from class CustomComponent. This unique ID is assigned by the system to each component. If this API is called before the component's corresponding node is created or after it has been destroyed, an invalid unique ID, which is -1, will be returned.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | - The uniqueId of the custom component. |

## onBackPress

```TypeScript
onBackPress?(): void | boolean
```

在router路由页面（即[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的自定义组件）生效，当用户点击返回按钮时 触发。返回true表示页面自己处理返回逻辑，不进行页面路由；返回false表示使用默认的路由返回逻辑，不设置返回值按照false处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidBuild

```TypeScript
onDidBuild?(): void
```

The callback method after the custom component is built and it is migrated from class CustomComponent. Triggered when the custom component has been built.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFormRecover

```TypeScript
onFormRecover?(statusData: string): void
```

onFormRecover Method, this is only for ArkTS form, it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| statusData | string | Yes | indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form |

## onFormRecycle

```TypeScript
onFormRecycle?(): string
```

onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low, it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be passed back as params in onFormRecover, in which you can recover the form, it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | status data of ArkTS form UI, this data will be passed in when recover form later |

## onMeasureSize

```TypeScript
onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult
```

ArkUI框架会在自定义组件确定尺寸时，将该自定义组件的节点信息和尺寸范围通过onMeasureSize传递给该开发者。不允许在onMeasureSize函数中改变状态变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selfLayoutInfo | GeometryInfo | Yes | 计算自定义组件大小后的自身布局信息。 说明： 第一次布局时以自身设置的属性为准。 |
| children | Array&lt;Measurable> | Yes | 计算子组件大小后的子组件布局信息。 说明：  如果没有设置子组件的布局信息，子组件会维持上一次的布局信息，当子组件从来没有设置过尺寸时，尺寸默认为0。 |
| constraint | ConstraintSizeOptions | Yes | 自定义组件的布局约束信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| SizeResult | Component size information. |

## onNewParam

```TypeScript
onNewParam?(param: ESObject): void
```

该回调仅生效于由[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的、作为[router]**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | ESObject | Yes | 路由跳转时传递到目标页面的数据。 |

## onPageHide

```TypeScript
onPageHide?(): void
```

router路由页面（即[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的自定义组件）每次隐藏时触发一次，包括路由 跳转、应用进入后台等场景。 > **说明：** > 在该回调函数内，建议避免执行高耗时操作阻塞主线程造成卡顿。对于高耗时操作例如相机资源释放，推荐使用异步方案替代。最佳实践请参考 > [优化应用时延问题-延迟执行资源释放操作](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-latency-optimiza tion-cases#section8783201923819)。 It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onPageShow

```TypeScript
onPageShow?(): void
```

router路由页面（即[\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)装饰的自定义组件）每次显示时触发一次，包括路由 跳转、应用进入前台等场景。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onPlaceChildren

```TypeScript
onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void
```

ArkUI框架会在自定义组件确定位置时，将该自定义组件的子节点自身的尺寸范围通过onPlaceChildren传递给该自定义组件。不允许在onPlaceChildren函数中改变状态变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selfLayoutInfo | GeometryInfo | Yes | 计算自定义组件大小后的自身布局信息。 |
| children | Array&lt;Layoutable> | Yes | 计算子组件大小后的子组件布局信息。 |
| constraint | ConstraintSizeOptions | Yes | 自定义组件的布局约束信息。 |

## onWillApplyTheme

```TypeScript
onWillApplyTheme?(theme: Theme): void
```

onWillApplyTheme函数用于获取当前组件上下文的Theme对象，在创建自定义组件的新实例后，在执行其build()函数之前执行。允许在onWillApplyTheme函数中改变状态变量，更改将在后续执行build()函 数中生效。 > **说明：** > 从API version 18开始，该接口支持在状态管理V2组件中使用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| theme | Theme | Yes | 自定义组件当前生效的Theme对象。 |

## pageTransition

```TypeScript
pageTransition?(): void
```

PageTransition Method and it is migrated from class CustomComponent. Implement Animation when enter this page or move to other pages.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## queryNavDestinationInfo

```TypeScript
queryNavDestinationInfo(): NavDestinationInfo | undefined
```

查询自定义组件所属的[NavDestination]{@link nav_destination信息，仅当自定义组件在NavDestination的内部时才生效。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| NavDestinationInfo | NavDestinationInfo instance obtained. |

## queryNavDestinationInfo

```TypeScript
queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined
```

查询当前自定义组件距离最近的NavDestination信息（要求该NavDestination是Navigation的导航页或子页），isInner为true表示向内查找，false表示向外查找。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isInner | Optional&lt;boolean> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| NavDestinationInfo | NavDestinationInfo instance obtained. |

## queryNavigationInfo

```TypeScript
queryNavigationInfo(): NavigationInfo | undefined
```

查询自定义组件所属的[Navigation]navigation信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| NavigationInfo | NavigationInfo instance obtained. |

## queryRouterPageInfo

```TypeScript
queryRouterPageInfo(): RouterPageInfo | undefined
```

获取RouterPageInfo实例对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RouterPageInfo | RouterPageInfo instance obtained. |

