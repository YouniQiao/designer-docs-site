# TouchPoint

表示屏幕上的单个触点信息。

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## displayY

```TypeScript
displayY: int
```

触点相对于屏幕上边缘的Y坐标，单位为像素（px），必须为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## displayX

```TypeScript
displayX: int
```

触点相对于屏幕左边缘的X坐标，单位为像素（px），必须为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## id

```TypeScript
id: int
```

触点唯一标识。取值范围为[0, 9]，且必须为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## displayId

```TypeScript
displayId: int
```

触点所在屏幕的唯一标识，必须为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

