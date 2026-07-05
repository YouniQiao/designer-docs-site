# AlertDialogParamWithConfirm

继承自[AlertDialogParam](arkts-alertdialogparam-i.md#AlertDialogParam)。 confirm参数优先级：fontColor、backgroundColor > style > defaultFocus

**Inheritance:** AlertDialogParamWithConfirmextends: AlertDialogParam.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## confirm

```TypeScript
confirm?: AlertDialogButtonBaseOptions
```

确认Button的使能状态、默认焦点、按钮风格、文本内容、文本色、按钮背景色和点击回调。在弹窗获焦且未进行tab键走焦时，该按钮默认响应Enter键。多重弹窗情况下，可自动获焦并连续响应。默认响应Enter键能力在 defaultFocus为true时不生效。

**Type:** AlertDialogButtonBaseOptions

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

