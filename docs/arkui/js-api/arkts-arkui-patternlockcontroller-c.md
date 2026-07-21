# PatternLockController

Controller of the **PatternLock** component, which is used to reset the component status and challenge result of the pattern password.

## Objects to Import

```ts
patternLockController: PatternLockController = new PatternLockController()
```

**Since:** 9

<!--Device-unnamed-declare class PatternLockController--><!--Device-unnamed-declare class PatternLockController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **PatternLockController** instance.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PatternLockController-constructor()--><!--Device-PatternLockController-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="reset"></a>
## reset

```TypeScript
reset()
```

Resets the component status.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PatternLockController-reset()--><!--Device-PatternLockController-reset()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="setchallengeresult"></a>
## setChallengeResult

```TypeScript
setChallengeResult(result: PatternLockChallengeResult): void
```

Challenge result of the pattern password.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PatternLockController-setChallengeResult(result: PatternLockChallengeResult): void--><!--Device-PatternLockController-setChallengeResult(result: PatternLockChallengeResult): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | [PatternLockChallengeResult](arkts-arkui-patternlockchallengeresult-e.md) | Yes | Authentication challenge result of the pattern password. The status can be correct or incorrect. |

