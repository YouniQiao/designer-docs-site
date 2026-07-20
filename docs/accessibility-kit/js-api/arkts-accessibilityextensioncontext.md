# AccessibilityExtensionContext

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AccessibilityExtensionContext](arkts-accessibility-accessibilityextensioncontext-c.md) | The accessibility extension context. Used to configure, query information, and inject gestures. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [AccessibilityExtensionContext](arkts-accessibility-accessibilityextensioncontext-c-sys.md) | The accessibility extension context. Used to configure, query information, and inject gestures. |
| [Parameter](arkts-accessibility-accessibilityextensioncontext-parameter-c-sys.md) | Sets the parameter for a specific operation when the accessibility node element executes this operation. For details,see [AccessibilityAction](arkts-accessibility-accessibility-accessibilityaction-e-sys.md) (executable actions for accessibility node elements). |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AccessibilityElement](arkts-accessibility-accessibilityextensioncontext-accessibilityelement-i.md) | Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call [AccessibilityExtensionContext.getFocusElement()](arkts-accessibility-accessibilityextensioncontext-c.md#getfocuselement-2)or [AccessibilityExtensionContext.getWindowRootElement()](arkts-accessibility-accessibilityextensioncontext-c.md#getwindowrootelement-2)to obtain an **AccessibilityElement** instance. |
| [ElementAttributeValues](arkts-accessibility-accessibilityextensioncontext-elementattributevalues-i.md) | Provides attribute names and value types of a node element. |
| [Rect](arkts-accessibility-accessibilityextensioncontext-rect-i.md) | Defines a rectangle. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AccessibilityElement](arkts-accessibility-accessibilityextensioncontext-accessibilityelement-i-sys.md) | Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call [AccessibilityExtensionContext.getFocusElement()](arkts-accessibility-accessibilityextensioncontext-c.md#getfocuselement-2)or [AccessibilityExtensionContext.getWindowRootElement()](arkts-accessibility-accessibilityextensioncontext-c.md#getwindowrootelement-2)to obtain an **AccessibilityElement** instance. |
| [AccessibilityGrid](arkts-accessibility-accessibilityextensioncontext-accessibilitygrid-i-sys.md) | Defines accessibility grid information. For details, see the currentItem attribute in [AccessibilityElement](arkts-accessibility-accessibilityextensioncontext-accessibilityelement-i.md). |
| [AccessibilitySpan](arkts-accessibility-accessibilityextensioncontext-accessibilityspan-i-sys.md) | Defines the information about the hyperlink wrapped by the span tag. For details, see the spans attribute in [AccessibilityElement](arkts-accessibility-accessibilityextensioncontext-accessibilityelement-i.md). |
| [AccessibilityVirtualNode](arkts-accessibility-accessibilityextensioncontext-accessibilityvirtualnode-i-sys.md) | Defines the **AccessibilityVirtualNode**. |
| [ElementAttributeValues](arkts-accessibility-accessibilityextensioncontext-elementattributevalues-i-sys.md) | Provides attribute names and value types of a node element. |
| [FocusMoveResult](arkts-accessibility-accessibilityextensioncontext-focusmoveresult-i-sys.md) | Queries the return value type of the target accessibility nodes. |
| [TouchPosition](arkts-accessibility-accessibilityextensioncontext-touchposition-i-sys.md) | Indicates touch position of accessibility virtual node. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [FocusDirection](arkts-accessibility-focusdirection-t.md) | Enumerates the focus directions. |
| [FocusType](arkts-accessibility-focustype-t.md) | Enumerates the focus types. |
| [WindowType](arkts-accessibility-windowtype-t.md) | Enumerates the window types. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [FocusCondition](arkts-accessibility-focuscondition-t-sys.md) | Defines a condition for querying the focusable node. |
| [FocusRule](arkts-accessibility-focusrule-t-sys.md) | Defines a focus rule for determining the start node and its descendants when searching for a focusable node. |
<!--DelEnd-->

