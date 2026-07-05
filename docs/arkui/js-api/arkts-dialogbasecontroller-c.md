# DialogBaseController

用于控制对话框的类。

**Since:** 26.1.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DialogButtonOrientation,DialogState,DialogResult,DialogBaseController,DialogBaseAlignment,DialogDismissal } from '@kit.ArkUI';
```

## close

```TypeScript
close(): void
```

关闭相应的对话框。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

构造函数。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getState

```TypeScript
getState(): DialogState
```

获取状态。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DialogState | 返回状态。 |

