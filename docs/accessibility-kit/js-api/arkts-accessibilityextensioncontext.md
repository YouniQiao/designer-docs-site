# AccessibilityExtensionContext

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AccessibilityExtensionContext](arkts-accessibilityextensioncontext-c.md) | The accessibility extension context. Used to configure, query information, and inject gestures. |
| <!--DelRow-->[Parameter](arkts-parameter-c.md) | Sets the parameter for a specific operation when the accessibility node element executes this operation. For details, see [AccessibilityAction]{@link ./../@ohos.accessibility:AccessibilityAction} (executable actions for accessibility node elements). |

### Interfaces

| Name | Description |
| --- | --- |
| [AccessibilityElement](arkts-accessibilityelement-i.md) | Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call [AccessibilityExtensionContext.getFocusElement()]{@link AccessibilityExtensionContext#getFocusElement(isAccessibilityFocus?: boolean)} or [AccessibilityExtensionContext.getWindowRootElement()]{@link AccessibilityExtensionContext#getWindowRootElement(windowId?: int)} to obtain an **AccessibilityElement** instance. |
| <!--DelRow-->[AccessibilityGrid](arkts-accessibilitygrid-i.md) | Defines accessibility grid information. For details, see the currentItem attribute in [AccessibilityElement]{@link AccessibilityElement}. |
| <!--DelRow-->[AccessibilitySpan](arkts-accessibilityspan-i.md) | Defines the information about the hyperlink wrapped by the span tag. For details, see the spans attribute in [AccessibilityElement]{@link AccessibilityElement}. |
| <!--DelRow-->[AccessibilityVirtualNode](arkts-accessibilityvirtualnode-i.md) | Defines the **AccessibilityVirtualNode**. |
| [ElementAttributeValues](arkts-elementattributevalues-i.md) | Provides attribute names and value types of a node element. |
| <!--DelRow-->[FocusMoveResult](arkts-focusmoveresult-i.md) | Queries the return value type of the target accessibility nodes. |
| [Rect](arkts-rect-i.md) | Defines a rectangle. |
| <!--DelRow-->[TouchPosition](arkts-touchposition-i.md) | Indicates touch position of accessibility virtual node. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[FocusCondition](arkts-focuscondition-t.md) | Defines a condition for querying the focusable node. |
| [FocusDirection](arkts-focusdirection-t.md) | Enumerates the focus directions. |
| <!--DelRow-->[FocusRule](arkts-focusrule-t.md) | Defines a focus rule for determining the start node and its descendants when searching for a focusable node. |
| [FocusType](arkts-focustype-t.md) | Enumerates the focus types. |
| [WindowType](arkts-windowtype-t.md) | Enumerates the window types. |

