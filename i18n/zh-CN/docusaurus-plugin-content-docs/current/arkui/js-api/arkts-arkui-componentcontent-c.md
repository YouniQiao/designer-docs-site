# ComponentContent

有两种创建实体封装组件的方式。ComponentContent需要通过update接口手动更新内容，主要适用于弹窗等解耦封装场景；ReactiveComponentContent支持响应式数据自动更新、完整生命周期管理和组件复用，适用于长列表等高性能渲染场景。开发者可根据实际需求从以下方式中选择。

ComponentContent表示组件内容的实体封装，其对象支持在非UI组件中创建与传递，便于开发者对弹窗类组件进行解耦封装。其底层使用了BuilderNode，具体使用规格参考[BuilderNode](arkts-arkui-buildernode-c.md)。

ReactiveComponentContent表示组件内容的实体封装，其对象支持在非UI组件中创建与传递。它支持响应式数据自动更新、完整的生命周期管理和组件复用，适用于长列表等需要高性能渲染的场景。其底层使用了ReactiveBuilderNode，具体使用规格参考[ReactiveBuilderNode](arkts-arkui-buildernode-reactivebuildernode-c.md)。
> **说明：**  
>  
> - 当前不支持在预览器中使用ComponentContent和ReactiveComponentContent。  
>  
> - ComponentContent对象不支持使用JSON序列化。

**继承/实现关系：** ComponentContent extends [Content](arkts-arkui-content-c.md)

**起始版本：** 12

<!--Device-unnamed-export class ComponentContent<T extends Object> extends Content--><!--Device-unnamed-export class ComponentContent<T extends Object> extends Content-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)
```

ComponentContent的构造函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)--><!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | 是 | 创建对应节点时所需要的UI上下文。 |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;[]&gt; | 是 | 封装不带参builder函数的WrappedBuilder对象。 |

## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)
```

ComponentContent的构造函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)--><!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | 是 | 创建对应节点时所需要的UI上下文。 |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;[T]&gt; | 是 | 封装带参builder函数的WrappedBuilder对象。 |
| args | T | 是 | WrappedBuilder对象封装的builder函数的参数，类型T需与`WrappedBuilder&lt;[T]&gt;`中指定的参数类型保持一致，用于将外部数据传递给builder函数以构建UI内容。 |

## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)
```

ComponentContent的构造函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)--><!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | 是 | 创建对应节点时所需要的UI上下文。 |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;[T]&gt; | 是 | 封装带参builder函数的WrappedBuilder对象。 |
| args | T | 是 | WrappedBuilder对象封装的builder函数的参数，类型T需与`WrappedBuilder&lt;[T]&gt;`中指定的参数类型保持一致，用于将外部数据传递给builder函数以构建UI内容。 |
| options | [BuildOptions](arkts-arkui-buildernode-buildoptions-i.md) | 是 | 构建配置参数，用于配置Builder的构建行为，BuildOptions中所有属性都是可选的。 |

## dispose

```TypeScript
dispose(): void
```

立即释放当前ComponentContent对象对[基本概念：实体节点](../../../ui/arkts-user-defined-node.md#基本概念)的引用关系。关于ComponentContent的解绑场景请参见[解除实体节点引用关系](../../../ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。
> **说明：**  
>  
> 当ComponentContent对象调用dispose之后，会与后端实体节点解除引用关系。调用dispose后再次调用该对象的其他接口可能会出现crash或返回默认值，建议在操作节点前通过  
> [isDisposed](arkts-arkui-componentcontent-c.md#isdisposed)接口检查其有效性。若前端对象ComponentContent无法释放，容易导致内存泄漏。建议在不再需要操作该  
> ComponentContent对象时，开发者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-dispose(): void--><!--Device-ComponentContent-dispose(): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## inheritFreezeOptions

```TypeScript
inheritFreezeOptions(enabled: boolean): void
```

设置当前ComponentContent对象是否继承父组件中自定义组件的冻结策略。冻结策略用于控制组件在不活跃状态下是否暂停状态刷新。如果设置继承状态为false，则ComponentContent对象的冻结策略为false。适用于多页面导航（Navigation）等需要对不活跃组件进行冻结管理的场景。
> **说明：**  
>  
> ComponentContent设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或  
> ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，ComponentContent的冻结策略不会传递给该子组件。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本20开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-inheritFreezeOptions(enabled: boolean): void--><!--Device-ComponentContent-inheritFreezeOptions(enabled: boolean): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | ComponentContent对象是否设置为继承父组件中自定义组件的冻结策略。<br>true：继承父组件中自定义组件的冻结策略；false：不继承父组件中自定义组件的冻结策略。<br>**说明：** 仅当父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或ReactiveComponentContent时，设置true才会继承父组件的冻结策略。 |

## isDisposed

```TypeScript
isDisposed(): boolean
```

查询当前ComponentContent对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本20开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-isDisposed(): boolean--><!--Device-ComponentContent-isDisposed(): boolean-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。 |

## isTransferred

```TypeScript
isTransferred(): boolean
```

判断ComponentContent是否通过transfer.transferStatic或者transfer.transferDynamic方法创建。如果通过上述两个接口创建，则不支持以下方法：[update](arkts-arkui-componentcontent-c.md#update)，[dispose](arkts-arkui-componentcontent-c.md#dispose)，[updateConfiguration](arkts-arkui-componentcontent-c.md#updateconfiguration)，[inheritFreezeOptions](arkts-arkui-componentcontent-c.md#inheritfreezeoptions)。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本24开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-isTransferred(): boolean--><!--Device-ComponentContent-isTransferred(): boolean-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - 返回ComponentContent是否通过transfer.transferStatic或transfer.transferDynamic方法创建。<br/>true：ComponentContent通过transfer.transferStatic或transfer.transferDynamic方法创建。<br/>false：ComponentContent不通过transfer.transferStatic或transfer.transferDynamic方法创建。 |

## recycle

```TypeScript
recycle(): void
```

- 触发ComponentContent中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见[@Reusable装饰器：V1组件复用](../../../ui/state-management/arkts-reusable.md)。  
- ComponentContent通过reuse和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见[BuilderNode调用reuse和recycle接口实现节点复用能力](../../../ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。从API版本26.0.0开始，ComponentContent中的自定义组件支持V2组件复用，请参见[@ReusableV2装饰器：V2组件复用](../../../ui/state-management/arkts-new-reusableV2.md)。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-recycle(): void--><!--Device-ComponentContent-recycle(): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## reuse

```TypeScript
reuse(param?: Object): void
```

触发ComponentContent中的自定义组件的复用。组件复用请参见[@Reusable装饰器：V1组件复用](../../../ui/state-management/arkts-reusable.md)。关于ComponentContent的解绑场景请参见[解除实体节点引用关系](../../../ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。ComponentContent通过reuse和[recycle](arkts-arkui-componentcontent-c.md#recycle)接口完成其内外自定义组件之间的复用事件传递，具体使用场景请参见[BuilderNode调用reuse和recycle接口实现节点复用能力](../../../ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。从API版本26.0.0开始，ComponentContent中的自定义组件支持V2组件复用，请参见[@ReusableV2装饰器：V2组件复用](../../../ui/state-management/arkts-new-reusableV2.md)。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-reuse(param?: Object): void--><!--Device-ComponentContent-reuse(param?: Object): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | Object | 否 | 用于复用ComponentContent的参数。该参数将直接用于ComponentContent中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则会导致未定义行为。调用此方法将同步触发内部自定义组件的[aboutToReuse](../../../reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ComponentContent中的自定义组件将直接使用构造时的数据源。 |

## update

```TypeScript
update(args: T): void
```

用于更新[WrappedBuilder](../../../ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数参数，与constructor传入的参数类型保持一致。适用于组件内容需要动态变化的场景，如弹窗内容更新等。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-update(args: T): void--><!--Device-ComponentContent-update(args: T): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| args | T | 是 | 用于更新[WrappedBuilder](../../../ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数参数，与constructor传入的参数类型保持一致。 |

## updateConfiguration

```TypeScript
updateConfiguration(): void
```

传递系统环境变化事件，触发节点的全量更新。适用于系统深浅色模式切换、语言变更、字体大小调整等需要节点响应系统配置变化的场景。系统环境变化的相关信息请参见[@ohos.app.ability.Configuration (环境变量)](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-configuration-configuration-i.md)。
> **说明：**  
>  
> updateConfiguration接口用于通知对象更新当前的系统环境变化。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API版本12开始，该接口支持在原子化服务API中使用。

<!--Device-ComponentContent-updateConfiguration(): void--><!--Device-ComponentContent-updateConfiguration(): void-End-->

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

