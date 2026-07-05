# BuildOptions

build的可选参数。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## localStorage

```TypeScript
localStorage?: LocalStorage
```

给当前BuilderNode设置LocalStorage，挂载在此BuilderNode下的自定义组件共享该LocalStorage。如果自定义组件构造函数同时也传入LocalStorage，优先使用构造函数中传入的 LocalStorage。 默认值：null

**Type:** LocalStorage

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableProvideConsumeCrossing

```TypeScript
enableProvideConsumeCrossing?: boolean
```

定义BuilderNode内[状态管理V1](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)自定义组件的 [@Consume](docroot://ui/state-management/arkts-provide-and-consume.md)变量是否与BuilderNode外部的 [@Provide](docroot://ui/state-management/arkts-provide-and-consume.md)变量双向同步，BuilderNode内 [状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)自定义组件的 [@Consumer](docroot://ui/state-management/arkts-new-provider-and-consumer.md)变量是否与BuilderNode外部的 [@Provider](docroot://ui/state-management/arkts-new-provider-and-consumer.md)变量双向同步。 从API version 20开始支持状态管理V1自定义组件的双向同步，从API version 23开始支持状态管理V2自定义组件的双向同步。 true表示支持，false表示不支持。 默认值：false

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## nestingBuilderSupported

```TypeScript
nestingBuilderSupported?: boolean
```

是否支持Builder嵌套Builder进行使用。其中，true表示支持，false表示不支持。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

