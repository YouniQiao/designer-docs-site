# LocalWantAgentInfo

定义触发本地WantAgent所需要的信息，可以作为 [createLocalWantAgent](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent-sys.md#wantagentcreatelocalwantagent20) 的入参创建指定的本地WantAgent对象。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## requestCode

```TypeScript
requestCode: int
```

开发者自定义的请求码，用于标识将被执行的动作。

**Type:** int

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## wants

```TypeScript
wants: Array<Want>
```

将被执行的动作列表。当前只支持一个want。传入多个时只取wants数组的第一个成员。

**Type:** Array<Want>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## operationType

```TypeScript
operationType?: abilityWantAgent.OperationType
```

将被执行的动作类型。

**Type:** abilityWantAgent.OperationType

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

