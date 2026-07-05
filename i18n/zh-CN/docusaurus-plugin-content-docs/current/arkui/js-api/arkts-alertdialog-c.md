# AlertDialog

**起始版本：** 7

**废弃版本：** 26.0.0

**替代接口：** ohos.arkui.UIContext.UIContext#showAlertDialog

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## show

```TypeScript
static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions)
```

定义警告弹窗并弹出。 > **说明：** showAlertDialog需先获取[UIContext]@ohos.arkui.UIContext实例后再进行调用。 > 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [showAlertDialog](arkts-uicontext-c.md#showAlertDialog)来明确UI的执行上下文。

**起始版本：** 7

**废弃版本：** 18

**替代接口：** ohos.arkui.UIContext.UIContext#showAlertDialog

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | AlertDialogParamWithConfirm \| AlertDialogParamWithButtons \| AlertDialogParamWithOptions | 是 | 定义并显示  AlertDialog组件。 [since 10] |

