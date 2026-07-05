# DismissDialogAction

Dialog关闭的信息。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reason

```TypeScript
reason: DismissReason
```

Dialog无法关闭原因。根据开发者需要选择不同操作下，Dialog是否需要关闭。

**Type:** DismissReason

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dismiss

```TypeScript
dismiss: Callback<void>
```

Dialog关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。

**Type:** Callback<void>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

