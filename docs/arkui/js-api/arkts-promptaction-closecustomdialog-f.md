# closeCustomDialog

## closeCustomDialog

```TypeScript
function closeCustomDialog(dialogId: number): void
```

关闭自定义弹窗。 > **说明：** > > - 从API version 11开始支持，从API version 18开始废弃，建议使用[closeCustomDialog](arkts-apis-uicontext-promptaction.md#closecustomdialog12-1)替代。 closeCustomDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用closeCustomDialog可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 12开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。

**Since:** 11

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.PromptAction#closeCustomDialog

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogId | number | Yes | openCustomDialog返回的对话框id。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |

