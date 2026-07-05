# TimePickerDialog

以24小时的时间区间创建时间滑动选择器，展示在弹窗上。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## show

```TypeScript
static show(options?: TimePickerDialogOptions)
```

定义时间滑动选择器弹窗并弹出。 **说明：** showTimePickerDialog需先获取[UIContext]@ohos.arkui.UIContext实例后再进行调用。 - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 [showTimePickerDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#showtimepickerdialog) 来明确UI的执行上下文。

**Since:** 8

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#showTimePickerDialog

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TimePickerDialogOptions | No | 配置时间选择器弹窗的参数。参数缺省时无法弹出弹窗。 |

