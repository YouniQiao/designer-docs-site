# AbilityFirstFrameStateData

定义了首帧绘制完成事件回调上报的数据结构。通过 [on]./../@ohos.app.ability.appManager:appManager.on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string) 注册监听Ability首帧绘制完成事件后，可使用 [AbilityFirstFrameStateObserver](arkts-abilityfirstframestateobserver-i-sys.md#AbilityFirstFrameStateObserver)的 [onAbilityFirstFrameDrawn](arkts-abilityfirstframestateobserver-i-sys.md#onAbilityFirstFrameDrawn) 回调获取上报的数据结构。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## isColdStart

```TypeScript
isColdStart: boolean
```

是否冷启动。true表示冷启动，false表示热启动。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## appIndex

```TypeScript
appIndex: int
```

DLP沙盒的索引。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## abilityName

```TypeScript
abilityName: string
```

Ability名称。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName: string
```

应用Module名称。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

应用Bundle名称。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

