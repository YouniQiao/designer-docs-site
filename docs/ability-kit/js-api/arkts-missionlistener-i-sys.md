# MissionListener

定义系统任务状态监听，可以通过[on](arkts-missionmanager-on-f-sys.md#on-1)注册。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## onMissionClosed

```TypeScript
onMissionClosed(mission: int): void
```

当系统关闭任务时会触发该回调函数。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示关闭的任务ID。 |

## onMissionCreated

```TypeScript
onMissionCreated(mission: int): void
```

当系统创建任务时会触发该回调函数。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示创建的任务ID。 |

## onMissionDestroyed

```TypeScript
onMissionDestroyed(mission: int): void
```

当系统销毁任务时会触发该回调函数。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示销毁的任务ID。 |

## onMissionIconUpdated

```TypeScript
onMissionIconUpdated(mission: int, icon: image.PixelMap): void
```

当系统更新任务图标时会触发该回调函数。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示任务ID。 |
| icon | image.PixelMap | Yes | 表示更新的任务图标。 |

## onMissionLabelUpdated

```TypeScript
onMissionLabelUpdated(mission: int): void
```

当系统更新任务标签时会触发该回调函数。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示任务ID。 |

## onMissionMovedToFront

```TypeScript
onMissionMovedToFront(mission: int): void
```

当系统将任务移动到前台时会触发该回调函数。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示任务ID。 |

## onMissionSnapshotChanged

```TypeScript
onMissionSnapshotChanged(mission: int): void
```

当系统更新任务缩略图时会触发该回调函数。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | int | Yes | 表示任务ID。 |

