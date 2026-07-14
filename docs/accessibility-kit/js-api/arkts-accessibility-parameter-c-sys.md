# Parameter (System API)

Sets the parameter for a specific operation when the accessibility node element executes this operation. For details, see [AccessibilityAction](arkts-accessibility-accessibilityaction-e-sys.md) (executable actions for accessibility node elements).

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityFocusScene

```TypeScript
accessibilityFocusScene?: AccessibilityFocusScene
```

Indicates the scene for AccessibilityAction.ACCESSIBILITY_FOCUS.

**Type:** AccessibilityFocusScene

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## customAction

```TypeScript
customAction?: string
```

Indicates the action for AccessibilityAction.EXECUTE_CUSTOM_ACTION.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## injectActionType

```TypeScript
injectActionType?: InjectActionType
```

Injection action.

**Type:** InjectActionType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## offset

```TypeScript
offset?: string
```

Cursor offset, for example, **'1'**.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## scrollType

```TypeScript
scrollType?: string
```

Scroll type of the component. The options are **'fullScreen'** and **'halfScreen'**.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## selectTextBegin

```TypeScript
selectTextBegin?: string
```

Start coordinate of the selected text in the component, for example, **'2'**.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## selectTextEnd

```TypeScript
selectTextEnd?: string
```

End coordinate of the selected text in the component, for example, **'8'**.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## selectTextInForWard

```TypeScript
selectTextInForWard?: boolean
```

Whether to forward select the text within the component. The value **true** indicates to forward select the text, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## setText

```TypeScript
setText?: string
```

Text content of the component.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## spanId

```TypeScript
spanId?: string
```

ID of the hyperlink wrapped by the span tag.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

