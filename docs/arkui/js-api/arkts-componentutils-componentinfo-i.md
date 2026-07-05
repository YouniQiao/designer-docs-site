# ComponentInfo

组件大小、位置、平移缩放旋转及仿射矩阵属性信息。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { componentUtils } from '@kit.ArkUI';
```

## rotate

```TypeScript
rotate: RotateResult
```

组件旋转信息。

**Type:** RotateResult

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transform

```TypeScript
transform: Matrix4Result
```

仿射矩阵信息，根据入参创建的四阶矩阵对象。

**Type:** Matrix4Result

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size: Size
```

组件大小。

**Type:** Size

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## localOffset

```TypeScript
localOffset: Offset
```

组件相对于父组件信息。

**Type:** Offset

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scale

```TypeScript
scale: ScaleResult
```

组件缩放信息。

**Type:** ScaleResult

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## screenOffset

```TypeScript
screenOffset: Offset
```

组件相对于屏幕信息。

**Type:** Offset

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## windowOffset

```TypeScript
windowOffset: Offset
```

组件相对于窗口信息。

**Type:** Offset

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## translate

```TypeScript
translate: TranslateResult
```

组件平移信息。

**Type:** TranslateResult

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

