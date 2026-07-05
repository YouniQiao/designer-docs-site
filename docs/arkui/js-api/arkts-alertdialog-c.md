# AlertDialog

**Since:** 7

**Deprecated since:** 26.0.0

**Substitute:** ohos.arkui.UIContext.UIContext#showAlertDialog

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## show

```TypeScript
static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions)
```

定义警告弹窗并弹出。 > **说明：** showAlertDialog需先获取[UIContext]@ohos.arkui.UIContext实例后再进行调用。 > 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [showAlertDialog](arkts-uicontext-c.md#showAlertDialog)来明确UI的执行上下文。

**Since:** 7

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#showAlertDialog

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AlertDialogParamWithConfirm \| AlertDialogParamWithButtons \| AlertDialogParamWithOptions | Yes | 定义并显示  AlertDialog组件。 [since 10] |

