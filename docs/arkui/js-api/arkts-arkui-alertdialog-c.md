# AlertDialog

**Since:** 7

**Deprecated since:** 26.0.0

**Substitutes:** showAlertDialog

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## show

```TypeScript
static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions)
```

Shows an alert dialog box. > **NOTE** > > Since API version 10, you can use the > [showAlertDialog](../arkts-apis/arkts-arkui-uicontext-c.md#showalertdialog-1) API in > [UIContext](../arkts-apis/arkts-arkui-uicontext.md), which ensures that the alert dialog box is shown in the intended UI > instance.

**Since:** 7

**Deprecated since:** 18

**Substitutes:** showAlertDialog

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AlertDialogParamWithConfirm \| AlertDialogParamWithButtons \| AlertDialogParamWithOptions | Yes | Definesand displays the **AlertDialog** component.<br>**Since:** 10 |

