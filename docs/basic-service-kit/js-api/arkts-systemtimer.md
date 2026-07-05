# @ohos.systemTimer

本模块主要由系统定时器功能组成。开发者可以使用定时功能实现定时服务，如闹钟等。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { systemTimer } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[createTimer](arkts-systemtimer-createtimer-f-sys.md#createTimer-1) | 创建定时器，使用callback异步回调。 > **注意：** > > 需与[systemTimer.destroyTimer]{@link systemTimer.destroyTimer(timer: long, callback: AsyncCallback<void>)}结合使用，否则会造 > 成内存泄漏 |
| <!--DelRow-->[createTimer](arkts-systemtimer-createtimer-f-sys.md#createTimer-2) | 创建定时器，使用Promise异步回调返回定时器的ID。 > **注意：** > > 需与[systemTimer.destroyTimer]{@link systemTimer.destroyTimer(timer: long, callback: AsyncCallback<void>)}结合使用，否则会造 > 成内存泄漏 |
| <!--DelRow-->[destroyTimer](arkts-systemtimer-destroytimer-f-sys.md#destroyTimer-1) | 销毁定时器，使用callback异步回调。 |
| <!--DelRow-->[destroyTimer](arkts-systemtimer-destroytimer-f-sys.md#destroyTimer-2) | 销毁定时器，使用Promise进行异步回调。 |
| <!--DelRow-->[startTimer](arkts-systemtimer-starttimer-f-sys.md#startTimer-1) | 开启定时器，使用callback异步回调。 |
| <!--DelRow-->[startTimer](arkts-systemtimer-starttimer-f-sys.md#startTimer-2) | 开启定时器，使用Promise进行异步回调。 |
| <!--DelRow-->[stopTimer](arkts-systemtimer-stoptimer-f-sys.md#stopTimer-1) | 该方法停止定时器，并使用callback进行异步回调。 |
| <!--DelRow-->[stopTimer](arkts-systemtimer-stoptimer-f-sys.md#stopTimer-2) | 此方法用于停止定时器，并使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[TimerOptions](arkts-systemtimer-timeroptions-i-sys.md) | 创建系统定时器的初始化选项。 |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[TIMER_TYPE_EXACT](arkts-systemtimer-con-sys.md#TIMER_TYPE_EXACT) | 精准定时器（系统时间修改的情况下，可能会出现最多1s的前后偏移误差）。 |
| <!--DelRow-->[TIMER_TYPE_IDLE](arkts-systemtimer-con-sys.md#TIMER_TYPE_IDLE) | IDLE模式定时器（仅支持系统服务配置，不支持应用配置）。 |
| <!--DelRow-->[TIMER_TYPE_REALTIME](arkts-systemtimer-con-sys.md#TIMER_TYPE_REALTIME) | 系统启动时间定时器（定时器启动时间不能晚于当前设置的系统时间）。 |
| <!--DelRow-->[TIMER_TYPE_WAKEUP](arkts-systemtimer-con-sys.md#TIMER_TYPE_WAKEUP) | 唤醒定时器（如果未配置为唤醒定时器，则系统处于休眠状态下不会触发，直到退出休眠状态）。 |

