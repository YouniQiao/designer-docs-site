# TriggerInfo

作为[trigger](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagenttrigger)的入参定义触发WantAgent所需 要的信息。

**起始版本：** 7

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## code

```TypeScript
code: int
```

表示传递的公共事件数据，仅当WantAgent实例的 [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype)类型是' SEND_COMMON_EVENT'时有效。该字段与发布者使用 [commonEventManager.publish](../../apis-basic-service-kit/arkts-apis/arkts-commoneventmanager-publish-f.md#publish-2) 发布公共事件时，传递 [CommonEventPublishData](docroot://reference/apis-basic-services-kit/js-apis-inner-commonEvent-commonEventPublishData.md#属性) 公共事件数据中的`code`字段含义一致。

**类型：** int

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## want

```TypeScript
want?: Want
```

对象间信息传递的载体，可以用于应用组件间的信息传递。

**类型：** Want

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## permission

```TypeScript
permission?: string
```

表示公共事件订阅者的权限。仅当WantAgent实例的 [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype)类型是' SEND_COMMON_EVENT'时，该字段生效。

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## startOptions

```TypeScript
startOptions?: StartOptions
```

触发启动Ability的wantAgent时，由该属性指定启动参数。

**类型：** StartOptions

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## extraInfos

```TypeScript
extraInfos?: Record<string, Object>
```

额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

**类型：** Record<string, Object>

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfos?: Record<string, RecordData>
```

额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

**类型：** Record<string, RecordData>

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## extraInfo

```TypeScript
extraInfo?: { [key: string]: any }
```

额外数据。

**类型：** { [key: string]: any }

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfo?: Record<string, RecordData>
```

额外数据。

**类型：** Record<string, RecordData>

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

