# CommonController

公共控制器，可以控制promptAction相关组件。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## close

```TypeScript
close(): void
```

关闭显示的自定义弹窗，若已关闭，则不生效。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

控制器的构造函数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getState

```TypeScript
getState(): CommonState
```

获取自定义弹窗的状态。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| CommonState | 返回对应的弹窗状态。 |

