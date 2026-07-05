# AlertDialogParamWithOptions

继承自[AlertDialogParam](arkts-alertdialogparam-i.md#AlertDialogParam)。

**Inheritance:** AlertDialogParamWithOptionsextends: AlertDialogParam.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons: Array<AlertDialogButtonOptions>
```

弹窗容器中的多个按钮。

**Type:** Array<AlertDialogButtonOptions>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonDirection

```TypeScript
buttonDirection?: DialogButtonDirection
```

按钮排布方向默认为DialogButtonDirection.AUTO。建议3个以上按钮使用Auto模式（两个以上按钮会切换为纵向模式，通常能显示更多按钮）。非Auto模式下，3个以上按钮可能会显示不全，超出显示范围的按钮会被截 断。

**Type:** DialogButtonDirection

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

