# TriggerInfo

作为[trigger](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagenttrigger)的入参定义触发WantAgent所需 要的信息。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## code

```TypeScript
code: int
```

表示传递的公共事件数据，仅当WantAgent实例的 [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype)类型是' SEND_COMMON_EVENT'时有效。该字段与发布者使用 [commonEventManager.publish](../../apis-basic-service-kit/arkts-apis/arkts-commoneventmanager-publish-f.md#publish-2) 发布公共事件时，传递 [CommonEventPublishData](docroot://reference/apis-basic-services-kit/js-apis-inner-commonEvent-commonEventPublishData.md#属性) 公共事件数据中的`code`字段含义一致。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## want

```TypeScript
want?: Want
```

对象间信息传递的载体，可以用于应用组件间的信息传递。

**Type:** Want

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## permission

```TypeScript
permission?: string
```

表示公共事件订阅者的权限。仅当WantAgent实例的 [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype)类型是' SEND_COMMON_EVENT'时，该字段生效。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startOptions

```TypeScript
startOptions?: StartOptions
```

触发启动Ability的wantAgent时，由该属性指定启动参数。

**Type:** StartOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## extraInfos

```TypeScript
extraInfos?: Record<string, Object>
```

额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

**Type:** Record<string, Object>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfos?: Record<string, RecordData>
```

额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## extraInfo

```TypeScript
extraInfo?: { [key: string]: any }
```

额外数据。

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfo?: Record<string, RecordData>
```

额外数据。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

