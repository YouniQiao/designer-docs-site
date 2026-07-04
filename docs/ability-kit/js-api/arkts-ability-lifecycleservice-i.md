# LifecycleService

interface of service lifecycle.

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## onCommand

```TypeScript
onCommand?(want: Want, startId: number): void
```

Called back when Service is started.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want of Service to start. |
| startId | number | Yes | Indicates the number of times the Service ability has been started. {@code startId} isincremented by 1 every time the ability is started. For example, if the abilityhas been started for six times. |

## onConnect

```TypeScript
onConnect?(want: Want): rpc.RemoteObject
```

Called back when a Service ability is first connected to an ability.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates connection information about the Service ability. |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | Returns the proxy of the Service ability. |

## onDisconnect

```TypeScript
onDisconnect?(want: Want): void
```

Called back when all abilities connected to a Service ability are disconnected.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates disconnection information about the Service ability. |

## onReconnect

```TypeScript
onReconnect?(want: Want): void
```

Called when a new client attempts to connect to a Service ability after all previous client connections to it are disconnected. <p>The Service ability must have been started but not been destroyed, that is, {@link #startAbility} has been called but {@link #terminateSelf} has not.</p>

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want of the Service ability being connected. |

## onStart

```TypeScript
onStart?(): void
```

Called back when an ability is started for initialization (it can be called only once in the entire lifecycle of an ability).

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## onStop

```TypeScript
onStop?(): void
```

Called back before an ability is destroyed.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

