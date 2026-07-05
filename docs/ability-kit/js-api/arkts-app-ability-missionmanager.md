# @ohos.app.ability.missionManager

The missionManager module provides APIs to lock, unlock, and clear missions, and switch a mission to the foreground.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { missionManager } from '@ohos.app.ability.missionManager';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [clearAllMissions](arkts-ability-clearallmissions-f-sys.md#clearallmissions-1) | Clears all unlocked missions. This API uses an asynchronous callback to return the result. |
| [clearAllMissions](arkts-ability-clearallmissions-f-sys.md#clearallmissions-2) | Clears all unlocked missions. This API uses a promise to return the result. |
| [clearMission](arkts-ability-clearmission-f-sys.md#clearmission-1) | Clears a given mission, regardless of whether it is locked. This API uses an asynchronous callback to return the result. |
| [clearMission](arkts-ability-clearmission-f-sys.md#clearmission-2) | Clears a given mission, regardless of whether it is locked. This API uses a promise to return the result. |
| [getLowResolutionMissionSnapShot](arkts-ability-getlowresolutionmissionsnapshot-f-sys.md#getlowresolutionmissionsnapshot-1) | Obtains the low-resolution snapshot of a given mission. This API uses an asynchronous callback to return the result. |
| [getLowResolutionMissionSnapShot](arkts-ability-getlowresolutionmissionsnapshot-f-sys.md#getlowresolutionmissionsnapshot-2) | Obtains the low-resolution snapshot of a given mission. This API uses a promise to return the result. |
| [getMissionInfo](arkts-ability-getmissioninfo-f-sys.md#getmissioninfo-1) | Obtains the mission information. This API uses an asynchronous callback to return the result. |
| [getMissionInfo](arkts-ability-getmissioninfo-f-sys.md#getmissioninfo-2) | Obtains the mission information. This API uses a promise to return the result. |
| [getMissionInfos](arkts-ability-getmissioninfos-f-sys.md#getmissioninfos-1) | Obtains information about all missions. This API uses an asynchronous callback to return the result. |
| [getMissionInfos](arkts-ability-getmissioninfos-f-sys.md#getmissioninfos-2) | Obtains information about all missions. This API uses a promise to return the result. |
| [getMissionSnapShot](arkts-ability-getmissionsnapshot-f-sys.md#getmissionsnapshot-1) | Obtains the snapshot of a given mission. This API uses an asynchronous callback to return the result. |
| [getMissionSnapShot](arkts-ability-getmissionsnapshot-f-sys.md#getmissionsnapshot-2) | Obtains the snapshot of a given mission. This API uses a promise to return the result. |
| [lockMission](arkts-ability-lockmission-f-sys.md#lockmission-1) | Locks a given mission. This API uses an asynchronous callback to return the result. |
| [lockMission](arkts-ability-lockmission-f-sys.md#lockmission-2) | Locks a given mission. This API uses a promise to return the result. |
| [moveMissionToFront](arkts-ability-movemissiontofront-f-sys.md#movemissiontofront-1) | Switches a given mission to the foreground. This API uses an asynchronous callback to return the result. |
| [moveMissionToFront](arkts-ability-movemissiontofront-f-sys.md#movemissiontofront-2) | Switches a given mission to the foreground, with the startup parameters for the switching specified. This API uses an asynchronous callback to return the result. |
| [moveMissionToFront](arkts-ability-movemissiontofront-f-sys.md#movemissiontofront-3) | Switches a given mission to the foreground, with the startup parameters for the switching specified. This API uses a promise to return the result. |
| [moveMissionsToBackground](arkts-ability-movemissionstobackground-f-sys.md#movemissionstobackground-1) | Switches a batch of missions to the background. The mission IDs returned are sorted by mission level when the missions are switched. This API uses an asynchronous callback to return the result. |
| [moveMissionsToBackground](arkts-ability-movemissionstobackground-f-sys.md#movemissionstobackground-2) | Switches a batch of missions to the background. The mission IDs returned are sorted by mission level when the missions are switched. This API uses a promise to return the result. |
| [moveMissionsToForeground](arkts-ability-movemissionstoforeground-f-sys.md#movemissionstoforeground-1) | Switches a batch of missions to the foreground. This API uses an asynchronous callback to return the result. |
| [moveMissionsToForeground](arkts-ability-movemissionstoforeground-f-sys.md#movemissionstoforeground-2) | Switches a batch of missions to the foreground, and moves the mission with the specified ID to the top. This API uses an asynchronous callback to return the result. |
| [moveMissionsToForeground](arkts-ability-movemissionstoforeground-f-sys.md#movemissionstoforeground-3) | Switches a batch of missions to the foreground, and moves the mission with the specified ID to the top. This API uses a promise to return the result. |
| [off](arkts-ability-off-f-sys.md#off-1) | Deregisters a mission status listener. This API uses an asynchronous callback to return the result. |
| [off](arkts-ability-off-f-sys.md#off-2) | Unregisters a mission status listener. This API uses a promise to return the result. |
| [off](arkts-ability-off-f-sys.md#off-3) | Deregisters a mission status listener. This API uses an asynchronous callback to return the result. |
| [off](arkts-ability-off-f-sys.md#off-4) | Unregisters a mission status listener. This API uses a promise to return the result. |
| [on](arkts-ability-on-f-sys.md#on-1) | Registers a listener to observe the mission status. |
| [on](arkts-ability-on-f-sys.md#on-2) | Registers a listener to observe the mission status. |
| [unlockMission](arkts-ability-unlockmission-f-sys.md#unlockmission-1) | Unlocks a given mission. This API uses an asynchronous callback to return the result. |
| [unlockMission](arkts-ability-unlockmission-f-sys.md#unlockmission-2) | Unlocks a given mission. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [MissionInfo](arkts-ability-missioninfo-t-sys.md) | Mission information corresponding to ability. |
| [MissionListener](arkts-ability-missionlistener-t-sys.md) | MissionListener registered by app. |
| [MissionSnapshot](arkts-ability-missionsnapshot-t-sys.md) | Mission snapshot corresponding to mission. |
<!--DelEnd-->

