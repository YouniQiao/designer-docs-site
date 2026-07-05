# Parameter

Sets the parameter for a specific operation when the accessibility node element executes this operation. For details, see [AccessibilityAction]./../@ohos.accessibility:AccessibilityAction (executable actions for accessibility node elements).

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## spanId

```TypeScript
spanId?: string
```

ID of the hyperlink wrapped by the span tag.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## customAction

```TypeScript
customAction?: string
```

Indicates the action for AccessibilityAction.EXECUTE_CUSTOM_ACTION.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## selectTextBegin

```TypeScript
selectTextBegin?: string
```

Start coordinate of the selected text in the component, for example, **'2'**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## scrollType

```TypeScript
scrollType?: string
```

Scroll type of the component. The options are **'fullScreen'** and **'halfScreen'**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## offset

```TypeScript
offset?: string
```

Cursor offset, for example, **'1'**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## injectActionType

```TypeScript
injectActionType?: InjectActionType
```

Injection action.

**类型：** InjectActionType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityFocusScene

```TypeScript
accessibilityFocusScene?: AccessibilityFocusScene
```

Indicates the scene for AccessibilityAction.ACCESSIBILITY_FOCUS.

**类型：** AccessibilityFocusScene

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## selectTextInForWard

```TypeScript
selectTextInForWard?: boolean
```

Whether to forward select the text within the component. The value **true** indicates to forward select the text, and the value **false** indicates the opposite.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## selectTextEnd

```TypeScript
selectTextEnd?: string
```

End coordinate of the selected text in the component, for example, **'8'**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## setText

```TypeScript
setText?: string
```

Text content of the component.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

