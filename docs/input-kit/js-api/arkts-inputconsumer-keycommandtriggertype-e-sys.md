# KeyCommandTriggerType

```TypeScript
export enum KeyCommandTriggerType
```

按键命令触发类型枚举，用于指定组合按键的触发时机。

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## PRESSED

```TypeScript
PRESSED = 1
```

首次按下触发。当最终按键首次按下时触发回调，自动重复按下不触发。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## REPEAT_PRESSED

```TypeScript
REPEAT_PRESSED = 2
```

重复按下触发。当最终按键每次按下时都触发回调，包括自动重复按下。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## ALL_RELEASED

```TypeScript
ALL_RELEASED = 3
```

按下按键或抬起按键时均会触发回调。包括自动重复按下的按键。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

