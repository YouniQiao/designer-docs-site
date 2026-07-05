# AbilityFirstFrameStateObserver

定义了Ability首帧绘制完成事件监听对象，可以作为 [on]./../@ohos.app.ability.appManager:appManager.on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string) 的入参，用于监听Ability首帧绘制完成事件。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## onAbilityFirstFrameDrawn

```TypeScript
onAbilityFirstFrameDrawn(data: AbilityFirstFrameStateData): void
```

Ability首帧绘制完成时触发的回调函数。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | AbilityFirstFrameStateData | Yes | 表示首帧绘制完成时返回的数据。 |

