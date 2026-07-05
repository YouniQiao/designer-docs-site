# @ohos.runningLock

该模块为RunningLock锁相关操作的接口，提供使能接近光亮灭屏或者设备熄屏后阻止进入睡眠的能力，包括创建、查询、持锁、释放锁等操作，类型详情见 [RunningLockType]{@link runningLock.RunningLockType}。

**起始版本：** 7

**系统能力：** SystemCapability.PowerManager.PowerManager.Core

## 导入模块

```TypeScript
import { runningLock } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [create](arkts-runninglock-create-f.md#create-1) | 创建RunningLock锁。使用callback异步回调。 |
| [create](arkts-runninglock-create-f.md#create-2) | 创建RunningLock锁。使用Promise异步回调。 |
| [createRunningLock](arkts-runninglock-createrunninglock-f.md#createRunningLock-1) | 创建RunningLock锁。使用callback异步回调。 |
| [createRunningLock](arkts-runninglock-createrunninglock-f.md#createRunningLock-2) | 创建RunningLock锁。使用Promise异步回调。 |
| [isRunningLockTypeSupported](arkts-runninglock-isrunninglocktypesupported-f.md#isRunningLockTypeSupported-1) | 查询系统是否支持该类型的锁。使用callback异步回调。 |
| [isRunningLockTypeSupported](arkts-runninglock-isrunninglocktypesupported-f.md#isRunningLockTypeSupported-2) | 查询系统是否支持该类型的锁。使用Promise异步回调。 |
| [isSupported](arkts-runninglock-issupported-f.md#isSupported-1) | 查询系统是否支持该类型的锁。 |

### 类

| 名称 | 描述 |
| --- | --- |
| [RunningLock](arkts-runninglock-runninglock-c.md) | 阻止系统睡眠的锁。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [RunningLockType](arkts-runninglock-runninglocktype-e.md) | RunningLock锁的类型。 |

