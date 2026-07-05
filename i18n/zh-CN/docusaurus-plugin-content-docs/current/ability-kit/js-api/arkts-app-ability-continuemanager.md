# @ohos.app.ability.continueManager

The continueManager module provides capabilities for managing cross-device application migration. For example, it allows you to obtain the result of quickly launching the target application during the cross-device migration process.

**起始版本：** 18

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

## 导入模块

```TypeScript
import { continueManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [off](arkts-continuemanager-off-f.md#off-1) | Unregisters the callback used to obtain the quick start result when an application is launched quickly. This API uses an asynchronous callback to return the result. |
| [offPrepareContinue](arkts-continuemanager-offpreparecontinue-f.md#offPrepareContinue-1) | Unregister prepareContinue event. |
| [on](arkts-continuemanager-on-f.md#on-1) | Registers a callback to obtain the quick start result when an application is launched quickly. This API uses an asynchronous callback to return the result. |
| [onPrepareContinue](arkts-continuemanager-onpreparecontinue-f.md#onPrepareContinue-1) | Register prepareContinue event, when the ability is configured with 'ContinueQuickStart' in the continueType, then can get the result of LaunchReason.PREPARE_CONTINUATION. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ContinueResultInfo](arkts-continuemanager-continueresultinfo-i.md) | Describes the quick start result returned by the callback. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ContinueStateCode](arkts-continuemanager-continuestatecode-e.md) | Enumerates the status codes of the quick start result. |

