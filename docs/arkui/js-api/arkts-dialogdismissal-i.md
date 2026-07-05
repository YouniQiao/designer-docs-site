# DialogDismissal

提供有关关闭对话框的操作的信息。

**Since:** 26.1.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DialogButtonOrientation,DialogState,DialogResult,DialogBaseController,DialogBaseAlignment,DialogDismissal } from '@kit.ArkUI';
```

## reason

```TypeScript
reason: DismissReason
```

无法关闭对话框的原因。

**Type:** DismissReason

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dismiss

```TypeScript
dismiss: VoidCallback
```

关闭对话框的回调。只有当需要退出对话框时，才会调用此接口。

**Type:** VoidCallback

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

