# AlertDialog

**Since:** 7

**Deprecated since:** 26.0.0

**Substitutes:** showAlertDialog

<!--Device-unnamed-declare class AlertDialog--><!--Device-unnamed-declare class AlertDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="show"></a>
## show

```TypeScript
static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions)
```

Shows an alert dialog box.

> **NOTE**  
>  
> Since API version 10, you can use the  
> [showAlertDialog](arkts-arkui-arkui-uicontext-uicontext-c.md#showalertdialog-1) API in  
> [UIContext](arkts-arkui-uicontext.md), which ensures that the alert dialog box is shown in the intended UI  
> instance.

**Since:** 7

**Deprecated since:** 18

**Substitutes:** showAlertDialog

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialog-static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions)--><!--Device-AlertDialog-static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [AlertDialogParamWithConfirm](arkts-arkui-alertdialogparamwithconfirm-i.md) \| AlertDialogParamWithButtons \| AlertDialogParamWithOptions | Yes | Defines and displays the **AlertDialog** component.<br>**Since:** 10 |

