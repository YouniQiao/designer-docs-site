# TextPickerDialog

A text picker dialog box is a dialog box that allows users to select text from the given range.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## show

```TypeScript
static show(options?: TextPickerDialogOptions)
```

定义文本滑动选择器弹窗并弹出。 > **说明：** showTextPickerDialog需先获取[UIContext]@ohos.arkui.UIContext实例后再进行调用。 > 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [showTextPickerDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#showtextpickerdialog) > 来明确UI的执行上下文。

**Since:** 8

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#showTextPickerDialog

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TextPickerDialogOptions | No | 配置文本选择器弹窗的参数。参数缺省时无法弹出弹窗。 |

