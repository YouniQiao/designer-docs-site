# AlertDialogButtonOptions

继承自[AlertDialogButtonBaseOptions](arkts-alertdialogbuttonbaseoptions-i.md#AlertDialogButtonBaseOptions)。

**Inheritance:** AlertDialogButtonOptionsextends: AlertDialogButtonBaseOptions.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primary

```TypeScript
primary?: boolean
```

在弹窗获焦且未进行tab键走焦时，按钮是否默认响应Enter键。多个Button时，只允许一个Button的该字段配置为true，否则所有Button均不响应。多重弹窗可自动获焦连续响应。在defaultFocus为true时不生 效。值为true表示按钮默认响应Enter键，值为false时，按钮不默认响应Enter键。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

