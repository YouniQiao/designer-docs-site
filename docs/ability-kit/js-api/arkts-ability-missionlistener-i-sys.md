# MissionListener (System API)

The module defines the listeners used to observe the mission status. The listeners can be registered by using [on](arkts-ability-missionmanager-on-f-sys.md#on-1).

**Since:** 8

<!--Device-unnamed-export interface MissionListener--><!--Device-unnamed-export interface MissionListener-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## onMissionClosed

```TypeScript
onMissionClosed(mission: number): void
```

Called when the system closes a mission.

**Since:** 9

<!--Device-MissionListener-onMissionClosed(mission: int): void--><!--Device-MissionListener-onMissionClosed(mission: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |

## onMissionCreated

```TypeScript
onMissionCreated(mission: number): void
```

Called when the system creates a mission.

**Since:** 8

<!--Device-MissionListener-onMissionCreated(mission: int): void--><!--Device-MissionListener-onMissionCreated(mission: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |

## onMissionDestroyed

```TypeScript
onMissionDestroyed(mission: number): void
```

Called when the system destroys a mission.

**Since:** 8

<!--Device-MissionListener-onMissionDestroyed(mission: int): void--><!--Device-MissionListener-onMissionDestroyed(mission: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |

## onMissionIconUpdated

```TypeScript
onMissionIconUpdated(mission: number, icon: image.PixelMap): void
```

Called when the system updates the icon of a mission.

**Since:** 9

<!--Device-MissionListener-onMissionIconUpdated(mission: int, icon: image.PixelMap): void--><!--Device-MissionListener-onMissionIconUpdated(mission: int, icon: image.PixelMap): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |
| icon | image.PixelMap | Yes | New mission icon. |

## onMissionLabelUpdated

```TypeScript
onMissionLabelUpdated(mission: number): void
```

Called when the system updates the label of a mission.

**Since:** 9

<!--Device-MissionListener-onMissionLabelUpdated(mission: int): void--><!--Device-MissionListener-onMissionLabelUpdated(mission: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |

## onMissionMovedToFront

```TypeScript
onMissionMovedToFront(mission: number): void
```

Called when the system moves a mission to the foreground.

**Since:** 8

<!--Device-MissionListener-onMissionMovedToFront(mission: int): void--><!--Device-MissionListener-onMissionMovedToFront(mission: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |

## onMissionSnapshotChanged

```TypeScript
onMissionSnapshotChanged(mission: number): void
```

Called when the system updates the snapshot of a mission.

**Since:** 8

<!--Device-MissionListener-onMissionSnapshotChanged(mission: int): void--><!--Device-MissionListener-onMissionSnapshotChanged(mission: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mission | number | Yes | Mission ID. |

