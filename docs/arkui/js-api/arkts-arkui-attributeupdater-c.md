# AttributeUpdater

Represents the implementation class of AttributeModifier. You need to customize a class to inherit AttributeUpdater. C indicates the constructor type of the component, for example, TextInterface of the Text component and ImageInterface of the Image component. It is required only when updateConstructorParams is used.

**Inheritance/Implementation:** AttributeUpdater implements [AttributeModifier<T>](AttributeModifier<T>)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## applyNormalAttribute

```TypeScript
applyNormalAttribute?(instance: T): void
```

Defines the function for updating attributes in normal state.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | T | Yes | Component attribute class, which identifies the type of component to which attributeswill be applied, for example, ButtonAttribute for the Button component and TextAttribute for the Textcomponent. |

## initializeModifier

```TypeScript
initializeModifier(instance: T): void
```

Initializes the component's attributes to the default values defined in this AttributeUpdater.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | T | Yes | Component attribute class, which identifies the type of component to which attributeswill be applied, for example, ButtonAttribute for the Button component and TextAttribute for the Textcomponent. |

## onComponentChanged

```TypeScript
onComponentChanged(component: T): void
```

Invoked to notify the application that the component bound to the same custom Modifier object changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| component | T | Yes | Component attribute class, which identifies the type of component to which attributeswill be applied, for example, ButtonAttribute for the Button component and TextAttribute for the Textcomponent. |

## attribute

```TypeScript
get attribute(): T | undefined
```

Obtains the attribute class instance corresponding to the component in AttributeUpdater. The instance can then be used to directly update attributes.

**Type:** T

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## updateConstructorParams

```TypeScript
updateConstructorParams: C
```

The type is used to change the constructor input parameters of the component.C indicates the constructor type of the component, for example, TextInterface of the Text component and ImageInterface of the Image component.

**Type:** C

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

