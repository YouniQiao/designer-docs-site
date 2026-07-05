# LifecycleService

interface of service lifecycle.

**起始版本：** 7

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onCommand

```TypeScript
onCommand?(want: Want, startId: number): void
```

Called back when Service is started.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the want of Service to start. |
| startId | number | 是 | Indicates the number of times the Service ability has been started. {@code startId} is  incremented by 1 every time the ability is started. For example, if the ability  has been started for six times. |

## onConnect

```TypeScript
onConnect?(want: Want): rpc.RemoteObject
```

Called back when a Service ability is first connected to an ability.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates connection information about the Service ability. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| rpc.RemoteObject | Returns the proxy of the Service ability. |

## onDisconnect

```TypeScript
onDisconnect?(want: Want): void
```

Called back when all abilities connected to a Service ability are disconnected.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates disconnection information about the Service ability. |

## onReconnect

```TypeScript
onReconnect?(want: Want): void
```

Called when a new client attempts to connect to a Service ability after all previous client connections to it are disconnected. <p>The Service ability must have been started but not been destroyed, that is, {@link #startAbility} has been called but {@link #terminateSelf} has not.</p>

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the want of the Service ability being connected. |

## onStart

```TypeScript
onStart?(): void
```

Called back when an ability is started for initialization (it can be called only once in the entire lifecycle of an ability).

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onStop

```TypeScript
onStop?(): void
```

Called back before an ability is destroyed.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

