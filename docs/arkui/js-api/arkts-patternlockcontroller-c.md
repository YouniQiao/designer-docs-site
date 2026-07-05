# PatternLockController

PatternLock组件的控制器，用于重置组件状态和设置图案密码的正确或错误状态。 ###### 导入对象 ```ts patternLockController: PatternLockController = new PatternLockController() ```

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

PatternLockController的构造函数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reset

```TypeScript
reset()
```

重置组件状态。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setChallengeResult

```TypeScript
setChallengeResult(result: PatternLockChallengeResult): void
```

设置图案密码的正确或错误状态。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | PatternLockChallengeResult | Yes | 图案密码状态。包括正确和错误状态。 |

