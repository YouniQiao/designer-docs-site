# @ohos.app.ability.appManager

appManager模块提供App管理的能力，包括查询当前是否处于稳定性测试场景、查询是否为ram受限设备、获取应用程序的内存大小、获取有关运行进程的信息等。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[clearUpAppData](arkts-appmanager-clearupappdata-f-sys.md#clearUpAppData-1) | 根据Bundle名称和应用分身索引，清除指定应用的数据。使用Promise异步回调。 |
| <!--DelRow-->[clearUpApplicationData](arkts-appmanager-clearupapplicationdata-f-sys.md#clearUpApplicationData-1) | 通过Bundle名称清除应用数据。使用Promise异步回调。 |
| <!--DelRow-->[clearUpApplicationData](arkts-appmanager-clearupapplicationdata-f-sys.md#clearUpApplicationData-2) | 通过Bundle名称清除应用数据。使用callback异步回调。 |
| [getAppMemorySize](arkts-appmanager-getappmemorysize-f.md#getAppMemorySize-1) | 获取当前应用程序可以使用的最大内存（RAM）值。使用Promise异步回调。 |
| [getAppMemorySize](arkts-appmanager-getappmemorysize-f.md#getAppMemorySize-2) | 获取当前应用程序可以使用的最大内存（RAM）值。使用callback异步回调。 |
| <!--DelRow-->[getForegroundApplications](arkts-appmanager-getforegroundapplications-f-sys.md#getForegroundApplications-1) | 获取当前所有前台应用的信息。该应用信息由[AppStateData]{@link ./application/AppStateData:AppStateData}定义。使用callback异步回调。 |
| <!--DelRow-->[getForegroundApplications](arkts-appmanager-getforegroundapplications-f-sys.md#getForegroundApplications-2) | 获取当前所有前台应用的信息。该应用信息由[AppStateData]{@link ./application/AppStateData:AppStateData}定义。使用Promise异步回调。 |
| <!--DelRow-->[getKeepAliveAppServiceExtensions](arkts-appmanager-getkeepaliveappserviceextensions-f-sys.md#getKeepAliveAppServiceExtensions-1) | 获取所有保活的AppServiceExtensionAbility应用信息，此信息由[KeepAliveBundleInfo]{@link appManager.KeepAliveBundleInfo}定义。使用Promise异步 回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。 |
| <!--DelRow-->[getKeepAliveBundles](arkts-appmanager-getkeepalivebundles-f-sys.md#getKeepAliveBundles-1) | 获取指定用户下指定类型的保活应用信息。该应用信息由[KeepAliveBundleInfo]{@link appManager.KeepAliveBundleInfo}定义。使用Promise异步回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。 **需要权限**：ohos.permission.MANAGE_APP_KEEP_ALIVE |
| <!--DelRow-->[getProcessMemoryByPid](arkts-appmanager-getprocessmemorybypid-f-sys.md#getProcessMemoryByPid-1) | 通过pid查询对应进程占用的内存大小。使用Promise异步回调。 |
| <!--DelRow-->[getProcessMemoryByPid](arkts-appmanager-getprocessmemorybypid-f-sys.md#getProcessMemoryByPid-2) | 通过pid查询对应进程占用的内存大小。使用callback异步回调。 |
| <!--DelRow-->[getRunningMultiAppInfo](arkts-appmanager-getrunningmultiappinfo-f-sys.md#getRunningMultiAppInfo-1) | 根据应用包名获取系统中运行态的应用多开（即在一个设备上运行多个相同的应用）的相关信息。使用Promise异步回调。 |
| <!--DelRow-->[getRunningProcessInfoByBundleName](arkts-appmanager-getrunningprocessinfobybundlename-f-sys.md#getRunningProcessInfoByBundleName-1) | 通过bundleName获取有关运行进程的信息。使用callback异步回调。 |
| <!--DelRow-->[getRunningProcessInfoByBundleName](arkts-appmanager-getrunningprocessinfobybundlename-f-sys.md#getRunningProcessInfoByBundleName-2) | 通过bundleName和userId获取有关运行进程的信息。使用callback异步回调。 |
| <!--DelRow-->[getRunningProcessInfoByBundleName](arkts-appmanager-getrunningprocessinfobybundlename-f-sys.md#getRunningProcessInfoByBundleName-3) | 通过bundleName获取有关运行进程的信息。使用Promise异步回调。 |
| <!--DelRow-->[getRunningProcessInfoByBundleName](arkts-appmanager-getrunningprocessinfobybundlename-f-sys.md#getRunningProcessInfoByBundleName-4) | 通过bundleName和userId获取有关运行进程的信息。使用Promise异步回调。 |
| [getRunningProcessInformation](arkts-appmanager-getrunningprocessinformation-f.md#getRunningProcessInformation-1) | 获取当前应用运行进程的相关信息。使用Promise异步回调。 > **说明：** > > - 对于API version 11之前的版本，该接口需要申请权限ohos.permission.GET_RUNNING_INFO（该权限仅系统应用可申请）。 > > - 从API version 11开始，该接口仅用于获取调用方自身的进程信息，不再需要申请权限。 |
| [getRunningProcessInformation](arkts-appmanager-getrunningprocessinformation-f.md#getRunningProcessInformation-2) | 获取当前应用运行进程的相关信息。使用callback异步回调。 > **说明：** > > - 对于API version 11之前的版本，该接口需要申请权限ohos.permission.GET_RUNNING_INFO（该权限仅系统应用可申请）。 > > - 从API version 11开始，该接口仅用于获取调用方自身的进程信息，不再需要申请权限。 |
| <!--DelRow-->[getRunningProcessInformationByBundleType](arkts-appmanager-getrunningprocessinformationbybundletype-f-sys.md#getRunningProcessInformationByBundleType-1) | 根据包类型获取当前运行进程的有关信息。使用Promise异步回调。 |
| <!--DelRow-->[getSupportedProcessCachePids](arkts-appmanager-getsupportedprocesscachepids-f-sys.md#getSupportedProcessCachePids-1) | 查询当前应用中支持缓存后快速启动的进程PID。使用Promise异步回调。 > **说明：** > > 本接口仅支持获取调用者所在系统账号下的进程PID。 |
| [isAppRunning](arkts-appmanager-isapprunning-f.md#isAppRunning-1) | 判断所有用户下指定包名和分身应用索引的应用是否正在运行。使用Promise异步回调。 > **说明：** > > 如果当前用户未安装该应用，则返回错误码16000073；如果当前用户已安装该应用，则判断所有用户下该指定应用是否正在运行。 |
| <!--DelRow-->[isApplicationRunning](arkts-appmanager-isapplicationrunning-f-sys.md#isApplicationRunning-1) | 查询所有用户下指定包名的应用是否正在运行。使用Promise异步回调。 |
| <!--DelRow-->[isApplicationRunning](arkts-appmanager-isapplicationrunning-f-sys.md#isApplicationRunning-2) | 查询所有用户下指定包名的应用是否正在运行。使用callback异步回调。 |
| [isRamConstrainedDevice](arkts-appmanager-isramconstraineddevice-f.md#isRamConstrainedDevice-1) | 查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用Promise异步回调。 |
| [isRamConstrainedDevice](arkts-appmanager-isramconstraineddevice-f.md#isRamConstrainedDevice-2) | 查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用callback异步回调。 |
| [isRunningInStabilityTest](arkts-appmanager-isrunninginstabilitytest-f.md#isRunningInStabilityTest-1) | 查询当前系统是否处于稳定性测试场景。使用callback异步回调。 > **说明：** > > 稳定性测试场景指为验证应用在复杂、极端或长期运行条件下的可靠性而设计的特定测试环境。 |
| [isRunningInStabilityTest](arkts-appmanager-isrunninginstabilitytest-f.md#isRunningInStabilityTest-2) | 查询当前系统是否处于稳定性测试场景。使用Promise异步回调。 > **说明：** > > 稳定性测试场景指为验证应用在复杂、极端或长期运行条件下的可靠性而设计的特定测试环境。 |
| <!--DelRow-->[isSharedBundleRunning](arkts-appmanager-issharedbundlerunning-f-sys.md#isSharedBundleRunning-1) | 检查共享库是否正在使用。使用Promise异步回调。 |
| <!--DelRow-->[isSharedBundleRunning](arkts-appmanager-issharedbundlerunning-f-sys.md#isSharedBundleRunning-2) | 检查共享库是否正在使用。使用callback异步回调。 |
| <!--DelRow-->[killProcessWithAccount](arkts-appmanager-killprocesswithaccount-f-sys.md#killProcessWithAccount-1) | 终止account进程。使用Promise异步回调。 > **说明：** > > 当accountId为当前用户时，不需要校验ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。 |
| <!--DelRow-->[killProcessWithAccount](arkts-appmanager-killprocesswithaccount-f-sys.md#killProcessWithAccount-2) | 终止account进程。使用Promise异步回调。 > **说明：** > > 当accountId为当前用户时，不需要校验ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。 |
| <!--DelRow-->[killProcessWithAccount](arkts-appmanager-killprocesswithaccount-f-sys.md#killProcessWithAccount-3) | 终止account进程。使用callback异步回调。 > **说明：** > > 当accountId为当前用户时，不需要校验ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。 |
| [killProcessesByBundleName](arkts-appmanager-killprocessesbybundlename-f.md#killProcessesByBundleName-1) | 终止指定应用包名的应用进程。使用Promise异步回调。 |
| <!--DelRow-->[killProcessesByBundleName](arkts-appmanager-killprocessesbybundlename-f-sys.md#killProcessesByBundleName-1) | 通过Bundle名称终止进程。使用Promise异步回调。 |
| <!--DelRow-->[killProcessesByBundleName](arkts-appmanager-killprocessesbybundlename-f-sys.md#killProcessesByBundleName-2) | 通过Bundle名称终止进程。使用callback异步回调。 |
| <!--DelRow-->[killProcessesInBatch](arkts-appmanager-killprocessesinbatch-f-sys.md#killProcessesInBatch-1) | 批量终止进程。使用Promise异步回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。 **需要权限**：ohos.permission.KILL_APP_PROCESSES |
| [off](arkts-appmanager-off-f.md#off-1) | 注销应用状态监听器。使用callback异步回调。 |
| [off](arkts-appmanager-off-f.md#off-2) | 注销应用状态监听器。使用Promise异步回调。 |
| <!--DelRow-->[off](arkts-appmanager-off-f-sys.md#off-1) | 注销应用启动和退出的监听器。 |
| <!--DelRow-->[off](arkts-appmanager-off-f-sys.md#off-2) | 取消注册监听Ability首帧绘制完成事件观察者对象。 |
| <!--DelRow-->[offAbilityFirstFrameStateChange](arkts-appmanager-offabilityfirstframestatechange-f-sys.md#offAbilityFirstFrameStateChange-1) | 取消注册监听Ability首帧绘制完成事件观察者对象。 |
| <!--DelRow-->[offAppForegroundStateChange](arkts-appmanager-offappforegroundstatechange-f-sys.md#offAppForegroundStateChange-1) | 注销应用启动和退出的监听器。 |
| [offApplicationStateChange](arkts-appmanager-offapplicationstatechange-f.md#offApplicationStateChange-1) | 注销应用状态监听器。使用callback异步回调。 |
| [offApplicationStateChange](arkts-appmanager-offapplicationstatechange-f.md#offApplicationStateChange-2) | 注销应用状态监听器。使用Promise异步回调。 |
| [on](arkts-appmanager-on-f.md#on-1) | 注册所有应用程序的状态监听器。 |
| [on](arkts-appmanager-on-f.md#on-2) | 注册指定应用程序的状态监听器。 |
| <!--DelRow-->[on](arkts-appmanager-on-f-sys.md#on-1) | 注册应用程序的状态监听器，并通过设置过滤条件来筛选所需监听的应用生命周期变化事件。 |
| <!--DelRow-->[on](arkts-appmanager-on-f-sys.md#on-2) | 注册应用启动和退出的监听器，可用于系统应用监听所有应用的启动和退出。 |
| <!--DelRow-->[on](arkts-appmanager-on-f-sys.md#on-3) | 注册监听Ability首帧绘制完成事件观察者对象，可用于系统应用监听Ability首帧绘制事件。 |
| <!--DelRow-->[onAbilityFirstFrameStateChange](arkts-appmanager-onabilityfirstframestatechange-f-sys.md#onAbilityFirstFrameStateChange-1) | 注册监听Ability首帧绘制完成事件观察者对象，可用于系统应用监听Ability首帧绘制事件。 |
| <!--DelRow-->[onAppForegroundStateChange](arkts-appmanager-onappforegroundstatechange-f-sys.md#onAppForegroundStateChange-1) | 注册应用启动和退出的监听器，可用于系统应用监听所有应用的启动和退出。 |
| [onApplicationStateChange](arkts-appmanager-onapplicationstatechange-f.md#onApplicationStateChange-1) | 注册所有应用程序的状态监听器。 |
| [onApplicationStateChange](arkts-appmanager-onapplicationstatechange-f.md#onApplicationStateChange-2) | 注册指定应用程序的状态监听器。 |
| <!--DelRow-->[onApplicationStateChange](arkts-appmanager-onapplicationstatechange-f-sys.md#onApplicationStateChange-1) | 注册应用程序的状态监听器，并通过设置过滤条件来筛选所需监听的应用生命周期变化事件。 |
| <!--DelRow-->[preloadApplication](arkts-appmanager-preloadapplication-f-sys.md#preloadApplication-1) | 预加载应用进程。接口返回成功并不代表预加载成功，具体结果以目标应用进程是否创建成功为准。使用Promise异步回调。 |
| <!--DelRow-->[setKeepAliveForAppServiceExtension](arkts-appmanager-setkeepaliveforappserviceextension-f-sys.md#setKeepAliveForAppServiceExtension-1) | 为AppServiceExtensionAbility设置保活或取消保活。使用Promise异步回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > - 仅当应用安装在userId为1的用户下，且应用中entry类型的HAP的module.json5配置文件中的mainElement字段配置为AppServiceExtensionAbility时，该接口才生效。 |
| <!--DelRow-->[setKeepAliveForBundle](arkts-appmanager-setkeepaliveforbundle-f-sys.md#setKeepAliveForBundle-1) | 为指定用户下的应用设置或取消保活。使用Promise异步回调。 从API version 18开始，该接口仅在2in1和Wearable设备上生效。对于API version 18之前版本，该接口仅在2in1设备上生效。其他情况下调用该接口将返回错误码801。 > **说明：** > > - 应用如果需要支持保活，其[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的mainElement必须是UIAbility。只有当 > mainElement启动后，系统才会执行应用保活操作。 > > - 在2in1设备上，被保活的应用需要在启动后5秒内添加至状态栏。否则，系统将取消该应用的保活设置，并杀死保活重启的进程。 > > - 当被保活的应用进程退出时，系统将尝试重启该进程，连续3次重启失败后将不再继续重启。 |
| <!--DelRow-->[terminateMission](arkts-appmanager-terminatemission-f-sys.md#terminateMission-1) | 关闭指定的任务。使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AppStateFilter](arkts-appmanager-appstatefilter-i-sys.md) | 应用生命周期变化事件的过滤器，可作为 [on]{@link appManager.on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter)}的参数用 于筛选所需监听的应用生命周期变化事件。 |
| <!--DelRow-->[KeepAliveBundleInfo](arkts-appmanager-keepalivebundleinfo-i-sys.md) | 定义应用保活信息，可以通过[getKeepAliveBundles]{@link appManager.getKeepAliveBundles}或 [getKeepAliveAppServiceExtensions]{@link appManager.getKeepAliveAppServiceExtensions}获取。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AbilityFirstFrameStateData](arkts-appmanager-abilityfirstframestatedata-t-sys.md) | UIAbility首帧绘制完成回调上报数据结构。 |
| <!--DelRow-->[AbilityFirstFrameStateData](arkts-appmanager-abilityfirstframestatedata-t-sys.md) | UIAbility首帧绘制完成回调上报数据结构。 |
| <!--DelRow-->[AbilityFirstFrameStateObserver](arkts-appmanager-abilityfirstframestateobserver-t-sys.md) | UIAbility首帧绘制完成事件监听对象。 |
| <!--DelRow-->[AbilityFirstFrameStateObserver](arkts-appmanager-abilityfirstframestateobserver-t-sys.md) | UIAbility首帧绘制完成事件监听对象。 |
| [AbilityStateData](arkts-appmanager-abilitystatedata-t.md) | Ability状态信息。 |
| [AbilityStateData](arkts-appmanager-abilitystatedata-t.md) | Ability状态信息。 |
| <!--DelRow-->[AppForegroundStateObserver](arkts-appmanager-appforegroundstateobserver-t-sys.md) | 应用启动和退出的状态监听。 |
| <!--DelRow-->[AppForegroundStateObserver](arkts-appmanager-appforegroundstateobserver-t-sys.md) | 应用启动和退出的状态监听。 |
| [ApplicationStateObserver](arkts-appmanager-applicationstateobserver-t.md) | 应用状态监听器。 |
| [ApplicationStateObserver](arkts-appmanager-applicationstateobserver-t.md) | 应用状态监听器。 |
| [AppStateData](arkts-appmanager-appstatedata-t.md) | 应用状态信息。 |
| [AppStateData](arkts-appmanager-appstatedata-t.md) | 应用状态信息。 |
| [ProcessData](arkts-appmanager-processdata-t.md) | 进程数据。 |
| [ProcessData](arkts-appmanager-processdata-t.md) | 进程数据。 |
| [ProcessInformation](arkts-appmanager-processinformation-t.md) | 进程信息。 |
| <!--DelRow-->[RunningMultiAppInfo](arkts-appmanager-runningmultiappinfo-t-sys.md) | 应用多开在运行态的结构信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ApplicationState](arkts-appmanager-applicationstate-e-sys.md) | 应用状态，该类型为枚举，可配合[AbilityStateData]{@link ./application/AbilityStateData:AbilityStateData}返回相应的应用状态。 |
| <!--DelRow-->[FilterAbilityStateType](arkts-appmanager-filterabilitystatetype-e-sys.md) | 表示要监听的Ability状态，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的Ability状态。 |
| <!--DelRow-->[FilterAppStateType](arkts-appmanager-filterappstatetype-e-sys.md) | 表示要监听的应用状态，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的应用状态。 |
| <!--DelRow-->[FilterBundleType](arkts-appmanager-filterbundletype-e-sys.md) | 表示要监听的的应用类型，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的应用类型。 |
| <!--DelRow-->[FilterCallback](arkts-appmanager-filtercallback-e-sys.md) | 表示要监听的回调函数，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的回调函数。 |
| <!--DelRow-->[FilterProcessStateType](arkts-appmanager-filterprocessstatetype-e-sys.md) | 表示要监听的进程状态，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的进程状态。 |
| <!--DelRow-->[KeepAliveAppType](arkts-appmanager-keepaliveapptype-e-sys.md) | 表示被保活应用的应用类型。 |
| <!--DelRow-->[KeepAliveSetter](arkts-appmanager-keepalivesetter-e-sys.md) | 表示应用保活的设置方类型。 |
| <!--DelRow-->[PreloadMode](arkts-appmanager-preloadmode-e-sys.md) | 表示预加载应用进程模式的枚举。 |
| [ProcessState](arkts-appmanager-processstate-e.md) | 表示进程状态的枚举。 |

