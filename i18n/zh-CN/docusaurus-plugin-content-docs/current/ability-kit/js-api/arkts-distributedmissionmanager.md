# @ohos.distributedMissionManager

The distributedMissionManager module implements mission management across devices. You can use the APIs provided by this module to register or unregister a mission status listener, start or stop synchronizing a remote mission list, and continue a mission on a remote device by mission ID or bundle name.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[continueMission](arkts-distributedmissionmanager-continuemission-f-sys.md#continueMission-1) | Continues a mission on a remote device, with the mission ID specified. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[continueMission](arkts-distributedmissionmanager-continuemission-f-sys.md#continueMission-2) | Continues a mission on a remote device, with the mission ID specified. This API uses a promise to return the result. |
| <!--DelRow-->[continueMission](arkts-distributedmissionmanager-continuemission-f-sys.md#continueMission-3) | Continues a mission on a remote device, with the bundle name specified. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[continueMission](arkts-distributedmissionmanager-continuemission-f-sys.md#continueMission-4) | Continues a mission on a remote device, with the bundle name specified. This API uses a promise to return the result. |
| <!--DelRow-->[off](arkts-distributedmissionmanager-off-f-sys.md#off-1) | Unsubscribes from continuation state change events of the current mission. |
| <!--DelRow-->[offContinueStateChange](arkts-distributedmissionmanager-offcontinuestatechange-f-sys.md#offContinueStateChange-1) | Unregister continuable info listener to ams. |
| <!--DelRow-->[on](arkts-distributedmissionmanager-on-f-sys.md#on-1) | Subscribes to continuation state change events of the current mission. |
| <!--DelRow-->[onContinueStateChange](arkts-distributedmissionmanager-oncontinuestatechange-f-sys.md#onContinueStateChange-1) | Register continuable info listener to ams. |
| <!--DelRow-->[registerMissionListener](arkts-distributedmissionmanager-registermissionlistener-f-sys.md#registerMissionListener-1) | Registers a mission status listener. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[registerMissionListener](arkts-distributedmissionmanager-registermissionlistener-f-sys.md#registerMissionListener-2) | Registers a mission status listener. This API uses a promise to return the result. |
| <!--DelRow-->[startSyncRemoteMissions](arkts-distributedmissionmanager-startsyncremotemissions-f-sys.md#startSyncRemoteMissions-1) | Starts to synchronize the remote mission list. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[startSyncRemoteMissions](arkts-distributedmissionmanager-startsyncremotemissions-f-sys.md#startSyncRemoteMissions-2) | Starts to synchronize the remote mission list. This API uses a promise to return the result. |
| <!--DelRow-->[stopSyncRemoteMissions](arkts-distributedmissionmanager-stopsyncremotemissions-f-sys.md#stopSyncRemoteMissions-1) | Stops synchronizing the remote mission list. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[stopSyncRemoteMissions](arkts-distributedmissionmanager-stopsyncremotemissions-f-sys.md#stopSyncRemoteMissions-2) | Stops synchronizing the remote mission list. This API uses a promise to return the result. |
| <!--DelRow-->[unRegisterMissionListener](arkts-distributedmissionmanager-unregistermissionlistener-f-sys.md#unRegisterMissionListener-1) | Unregisters a mission status listener. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[unRegisterMissionListener](arkts-distributedmissionmanager-unregistermissionlistener-f-sys.md#unRegisterMissionListener-2) | Unregisters a mission status listener. This API uses a promise to return the result. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ContinueCallbackInfo](arkts-distributedmissionmanager-continuecallbackinfo-i-sys.md) | Defines the information about the callback that is triggered for mission continuation state changes. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ContinuableInfo](arkts-distributedmissionmanager-continuableinfo-t-sys.md) | Continuable information corresponding to ability. |
| <!--DelRow-->[ContinueCallback](arkts-distributedmissionmanager-continuecallback-t-sys.md) | ContinueCallback registered for notify continue result. |
| <!--DelRow-->[ContinueDeviceInfo](arkts-distributedmissionmanager-continuedeviceinfo-t-sys.md) | Parameters corresponding to continue mission. |
| <!--DelRow-->[ContinueMissionInfo](arkts-distributedmissionmanager-continuemissioninfo-t-sys.md) | Parameters corresponding to continue mission. |
| <!--DelRow-->[MissionCallback](arkts-distributedmissionmanager-missioncallback-t-sys.md) | Defines the callback invoked after synchronization starts. It is used as an input parameter in [registerMissionListener]{@link registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback)} . |
| <!--DelRow-->[MissionDeviceInfo](arkts-distributedmissionmanager-missiondeviceinfo-t-sys.md) | Defines the parameters required for registering a listener. It is used as an input parameter in [registerMissionListener]{@link registerMissionListener(parameter: MissionDeviceInfo, options: MissionCallback)} . |
| <!--DelRow-->[MissionParameter](arkts-distributedmissionmanager-missionparameter-t-sys.md) | Defines the parameters required for mission synchronization. It is used an input parameter in [startSyncRemoteMissions]{@link startSyncRemoteMissions(parameter: MissionParameter)} . |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ContinueState](arkts-distributedmissionmanager-continuestate-e-sys.md) | Enumerates the mission continuation states. |

