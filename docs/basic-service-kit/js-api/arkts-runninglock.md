# @ohos.runningLock

该模块为RunningLock锁相关操作的接口，提供使能接近光亮灭屏或者设备熄屏后阻止进入睡眠的能力，包括创建、查询、持锁、释放锁等操作，类型详情见 [RunningLockType]{@link runningLock.RunningLockType}。

**Since:** 7

**System capability:** SystemCapability.PowerManager.PowerManager.Core

## Modules to Import

```TypeScript
import { runningLock } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-runninglock-create-f.md#create-1) | 创建RunningLock锁。使用callback异步回调。 |
| [create](arkts-runninglock-create-f.md#create-2) | 创建RunningLock锁。使用Promise异步回调。 |
| [createRunningLock](arkts-runninglock-createrunninglock-f.md#createRunningLock-1) | 创建RunningLock锁。使用callback异步回调。 |
| [createRunningLock](arkts-runninglock-createrunninglock-f.md#createRunningLock-2) | 创建RunningLock锁。使用Promise异步回调。 |
| [isRunningLockTypeSupported](arkts-runninglock-isrunninglocktypesupported-f.md#isRunningLockTypeSupported-1) | 查询系统是否支持该类型的锁。使用callback异步回调。 |
| [isRunningLockTypeSupported](arkts-runninglock-isrunninglocktypesupported-f.md#isRunningLockTypeSupported-2) | 查询系统是否支持该类型的锁。使用Promise异步回调。 |
| [isSupported](arkts-runninglock-issupported-f.md#isSupported-1) | 查询系统是否支持该类型的锁。 |

### Classes

| Name | Description |
| --- | --- |
| [RunningLock](arkts-runninglock-runninglock-c.md) | 阻止系统睡眠的锁。 |

### Enums

| Name | Description |
| --- | --- |
| [RunningLockType](arkts-runninglock-runninglocktype-e.md) | RunningLock锁的类型。 |

