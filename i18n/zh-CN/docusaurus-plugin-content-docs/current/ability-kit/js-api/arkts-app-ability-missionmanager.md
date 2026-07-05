# @ohos.app.ability.missionManager

missionManager模块提供系统任务管理能力，包括对系统任务执行锁定、解锁、清理、切换到前台等操作。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { missionManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[clearAllMissions](arkts-missionmanager-clearallmissions-f-sys.md#clearAllMissions-1) | 清理所有未锁定的任务。使用callback异步回调。 |
| <!--DelRow-->[clearAllMissions](arkts-missionmanager-clearallmissions-f-sys.md#clearAllMissions-2) | 清理所有未锁定的任务。使用Promise异步回调。 |
| <!--DelRow-->[clearMission](arkts-missionmanager-clearmission-f-sys.md#clearMission-1) | 清理指定任务ID的任务，无论该任务是否被锁定。使用callback异步回调。 |
| <!--DelRow-->[clearMission](arkts-missionmanager-clearmission-f-sys.md#clearMission-2) | 清理指定任务ID的任务，无论该任务是否被锁定。使用Promise异步回调。 |
| <!--DelRow-->[getLowResolutionMissionSnapShot](arkts-missionmanager-getlowresolutionmissionsnapshot-f-sys.md#getLowResolutionMissionSnapShot-1) | 获取任务低分辨率快照。使用callback异步回调。 |
| <!--DelRow-->[getLowResolutionMissionSnapShot](arkts-missionmanager-getlowresolutionmissionsnapshot-f-sys.md#getLowResolutionMissionSnapShot-2) | 获取任务低分辨率快照。使用Promise异步回调。 |
| <!--DelRow-->[getMissionInfo](arkts-missionmanager-getmissioninfo-f-sys.md#getMissionInfo-1) | 获取任务信息。使用callback异步回调。 |
| <!--DelRow-->[getMissionInfo](arkts-missionmanager-getmissioninfo-f-sys.md#getMissionInfo-2) | 获取任务信息。使用Promise异步回调。 |
| <!--DelRow-->[getMissionInfos](arkts-missionmanager-getmissioninfos-f-sys.md#getMissionInfos-1) | 获取所有任务信息。使用callback异步回调。 |
| <!--DelRow-->[getMissionInfos](arkts-missionmanager-getmissioninfos-f-sys.md#getMissionInfos-2) | 获取所有任务信息。使用Promise异步回调。 |
| <!--DelRow-->[getMissionSnapShot](arkts-missionmanager-getmissionsnapshot-f-sys.md#getMissionSnapShot-1) | 获取任务快照。使用callback异步回调。 |
| <!--DelRow-->[getMissionSnapShot](arkts-missionmanager-getmissionsnapshot-f-sys.md#getMissionSnapShot-2) | 获取任务快照。使用Promise异步回调。 |
| <!--DelRow-->[lockMission](arkts-missionmanager-lockmission-f-sys.md#lockMission-1) | 锁定指定任务ID的任务。使用callback异步回调。 |
| <!--DelRow-->[lockMission](arkts-missionmanager-lockmission-f-sys.md#lockMission-2) | 锁定指定任务ID的任务。使用Promise异步回调。 |
| <!--DelRow-->[moveMissionToFront](arkts-missionmanager-movemissiontofront-f-sys.md#moveMissionToFront-1) | 把指定任务ID的任务切到前台。使用callback异步回调。 |
| <!--DelRow-->[moveMissionToFront](arkts-missionmanager-movemissiontofront-f-sys.md#moveMissionToFront-2) | 把指定任务ID的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用callback异步回调。 |
| <!--DelRow-->[moveMissionToFront](arkts-missionmanager-movemissiontofront-f-sys.md#moveMissionToFront-3) | 把指定任务ID的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用Promise异步回调。 |
| <!--DelRow-->[moveMissionsToBackground](arkts-missionmanager-movemissionstobackground-f-sys.md#moveMissionsToBackground-1) | 将指定任务批量切到后台，返回的结果任务ID按被隐藏时的任务层级排序。使用callback异步回调。 |
| <!--DelRow-->[moveMissionsToBackground](arkts-missionmanager-movemissionstobackground-f-sys.md#moveMissionsToBackground-2) | 将指定任务批量切到后台，返回的结果按被隐藏时的任务层级排序。使用Promise异步回调。 |
| <!--DelRow-->[moveMissionsToForeground](arkts-missionmanager-movemissionstoforeground-f-sys.md#moveMissionsToForeground-1) | 将指定任务批量切到前台。使用callback异步回调。 |
| <!--DelRow-->[moveMissionsToForeground](arkts-missionmanager-movemissionstoforeground-f-sys.md#moveMissionsToForeground-2) | 将指定任务批量切换到前台，并将任务ID等于topMission的任务移动到最顶层。使用callback异步回调。 |
| <!--DelRow-->[moveMissionsToForeground](arkts-missionmanager-movemissionstoforeground-f-sys.md#moveMissionsToForeground-3) | 将指定任务批量切到前台，并将任务ID等于topMission的任务移动到最顶层。使用Promise异步回调。 |
| <!--DelRow-->[off](arkts-missionmanager-off-f-sys.md#off-1) | 解注册任务状态监听器。使用callback异步回调。 |
| <!--DelRow-->[off](arkts-missionmanager-off-f-sys.md#off-2) | 解注册任务状态监听。使用Promise异步回调。 |
| <!--DelRow-->[offMission](arkts-missionmanager-offmission-f-sys.md#offMission-1) | 解注册任务状态监听器。使用callback异步回调。 |
| <!--DelRow-->[offMission](arkts-missionmanager-offmission-f-sys.md#offMission-2) | 解注册任务状态监听。使用Promise异步回调。 |
| <!--DelRow-->[on](arkts-missionmanager-on-f-sys.md#on-1) | 注册系统任务状态监听器。 |
| <!--DelRow-->[onMission](arkts-missionmanager-onmission-f-sys.md#onMission-1) | 注册系统任务状态监听器。 |
| <!--DelRow-->[unlockMission](arkts-missionmanager-unlockmission-f-sys.md#unlockMission-1) | 解锁指定任务ID的任务。使用callback异步回调。 |
| <!--DelRow-->[unlockMission](arkts-missionmanager-unlockmission-f-sys.md#unlockMission-2) | 解锁指定任务ID的任务。使用Promise异步回调。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[MissionInfo](arkts-missionmanager-missioninfo-t-sys.md) | 表示任务的详细信息。 |
| <!--DelRow-->[MissionListener](arkts-missionmanager-missionlistener-t-sys.md) | 定义系统任务状态监听。 |
| <!--DelRow-->[MissionSnapshot](arkts-missionmanager-missionsnapshot-t-sys.md) | 任务的任务快照对象。 |

