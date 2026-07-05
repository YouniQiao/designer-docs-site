# AttributeUpdater

为[AttributeModifier]AttributeModifier的实现类，开发者需要自定义class继承AttributeUpdater。 其中C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等，仅在使用updateConstructorParams时才需要传递C类型。

**Inheritance:** AttributeUpdaterimplements: AttributeModifier<T>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## applyNormalAttribute

```TypeScript
applyNormalAttribute?(instance: T): void
```

定义正常态更新属性函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | T | Yes | 组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。 |

## initializeModifier

```TypeScript
initializeModifier(instance: T): void
```

AttributeUpdater首次设置给组件时提供的样式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | T | Yes | 组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。 |

## onComponentChanged

```TypeScript
onComponentChanged(component: T): void
```

绑定相同的自定义的Modifier对象，组件发生切换时，通过该接口通知到应用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| component | T | Yes | 组件的属性类，用来标识进行属性设置的组件的类型，比如Button组件的ButtonAttribute，Text组件的TextAttribute等。 |

## updateConstructorParams

```TypeScript
updateConstructorParams: C
```

用于更改组件的构造函数入参。C代表组件的构造函数类型，比如Text组件的TextInterface，Image组件的ImageInterface等。

**Type:** C

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## attribute

```TypeScript
get attribute(): T | undefined
```

获取AttributeUpdater中组件对应的属性类实例，通过该实例实现属性直通更新的功能。

**Type:** T

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

