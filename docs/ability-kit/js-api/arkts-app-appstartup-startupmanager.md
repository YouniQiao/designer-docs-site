# @ohos.app.appstartup.startupManager

本模块提供[应用启动框架](docroot://application-models/app-startup.md)管理启动任务的能力，只能在主线程调用。 > **说明：** > > 本模块从API version 18开始支持so预加载。

**Since:** 12

**System capability:** SystemCapability.Ability.AppStartup

## Modules to Import

```TypeScript
import { startupManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getStartupTaskResult](arkts-startupmanager-getstartuptaskresult-f.md#getStartupTaskResult-1) | 获取指定启动任务或so预加载任务的执行结果。 |
| [getStartupTaskResult](arkts-startupmanager-getstartuptaskresult-f.md#getStartupTaskResult-2) | 获取指定启动任务或so预加载任务的执行结果。 |
| [isStartupTaskInitialized](arkts-startupmanager-isstartuptaskinitialized-f.md#isStartupTaskInitialized-1) | 获取指定启动任务或so预加载任务是否已初始化。 |
| [removeAllStartupTaskResults](arkts-startupmanager-removeallstartuptaskresults-f.md#removeAllStartupTaskResults-1) | 删除所有启动任务结果。 如果存在so预加载任务，则将对应so文件置为未加载状态。对于缓存中已加载的so文件，不会被移除。 |
| [removeStartupTaskResult](arkts-startupmanager-removestartuptaskresult-f.md#removeStartupTaskResult-1) | 删除指定启动任务或so预加载任务的初始化结果。 - 输入为启动任务名时，删除指定启动任务的初始化结果。 - 输入为so文件时，将该so文件置为未加载，缓存中已加载的so文件不会被移除。 |
| [run](arkts-startupmanager-run-f.md#run-1) | 执行启动框架启动任务或加载so文件。 > **说明：** > > 本接口不支持执行feature类型HAP中的启动任务，如需要使用相关能力请调用 > [startupManager.run]{@link startupManager.run(startupTasks: Array<string>, context: common.AbilityStageContext, config: StartupConfig)} > 接口。 |
| [run](arkts-startupmanager-run-f.md#run-2) | 执行启动框架启动任务或加载so文件。支持指定[AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}用于启动任务的加载。使 用Promise异步回调。 |

