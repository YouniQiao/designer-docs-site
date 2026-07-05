# KeyOptions

组合键选项。

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

## finalKeyDownDuration

```TypeScript
finalKeyDownDuration: int
```

最终按键保持按下持续时间，单位为微秒（μs）。 当finalKeyDownDuration为0时，立即触发回调函数。 当finalKeyDownDuration大于0时，isFinalKeyDown为true，则最终按键按下超过设置时长后触发回调函数；isFinalKeyDown为false，则最终按键按下到抬起时间小于设置时长时触发回调函 数。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## preKeys

```TypeScript
preKeys: Array<int>
```

前置按键集合，数量范围[0, 4]，前置按键无顺序要求。 如组合按键Ctrl+Alt+A中，Ctrl+Alt称为前置按键。

**Type:** Array<int>

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## isFinalKeyDown

```TypeScript
isFinalKeyDown: boolean
```

最终按键状态。 true表示按键按下，false表示按键抬起。

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## triggerType

```TypeScript
triggerType?: KeyCommandTriggerType
```

触发模式。取值为PRESSED(1)、REPEAT_PRESSED(2)或ALL_RELEASED(3)。启用命令触发模式。一旦设置此值，isFinalKeyDown和isRepeat将被忽略。对于 [inputConsumer.on('key')]inputConsumer.on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>) 接口该参数是可选参数，对于 [inputConsumer.onKey]inputConsumer.onKey(keyOptions: KeyOptions, callback:KeyCommandCallback)接口该参数是必填参数。

**Type:** KeyCommandTriggerType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## isRepeat

```TypeScript
isRepeat?: boolean
```

是否上报重复的按键事件。true表示上报，false表示不上报，若不填默认为true。

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

## finalKey

```TypeScript
finalKey: int
```

最终按键，此项必填，最终按键触发上报回调函数。 如组合按键Ctrl+Alt+A中，A称为最终按键。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

