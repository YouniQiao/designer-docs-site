# @ohos.systemTimer

The **systemTimer** module provides system timer features. You can use the APIs of this module to implement the alarm
clock and other timer services.

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { systemTimer } from '@kit.BasicServicesKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createTimer](arkts-basicservices-createtimer-f-sys.md#createtimer-1) | Creates a timer. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; This API must be used together with &gt; [systemTimer.destroyTimer](arkts-basicservices-destroytimer-f-sys.md#destroytimer-1). Otherwise&gt; , memory leakage occurs. |
| [createTimer](arkts-basicservices-createtimer-f-sys.md#createtimer-2) | Creates a timer. This API uses a promise to return the timer ID.&gt; **NOTE**&gt;&gt; This API must be used together with &gt; [systemTimer.destroyTimer](arkts-basicservices-destroytimer-f-sys.md#destroytimer-1). Otherwise&gt; , memory leakage occurs. |
| [destroyTimer](arkts-basicservices-destroytimer-f-sys.md#destroytimer-1) | Destroys a timer. This API uses an asynchronous callback to return the result. |
| [destroyTimer](arkts-basicservices-destroytimer-f-sys.md#destroytimer-2) | Destroys a timer. This API uses a promise to return the result. |
| [startTimer](arkts-basicservices-starttimer-f-sys.md#starttimer-1) | Starts a timer. This API uses an asynchronous callback to return the result. |
| [startTimer](arkts-basicservices-starttimer-f-sys.md#starttimer-2) | Starts a timer. This API uses a promise to return the result. |
| [stopTimer](arkts-basicservices-stoptimer-f-sys.md#stoptimer-1) | Stops the timer. This API uses an asynchronous callback to return the result. |
| [stopTimer](arkts-basicservices-stoptimer-f-sys.md#stoptimer-2) | Stops a timer. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [TimerOptions](arkts-basicservices-timeroptions-i-sys.md) | Defines the initialization options for the system timer. |
<!--DelEnd-->

<!--Del-->
### Constants（系统接口）

| Name | Description |
| --- | --- |
| [TIMER_TYPE_EXACT](arkts-basicservices-systemtimer-con-sys.md#timer_type_exact) | Exact type. (If the system time is changed, the offset may be 1s at most.) |
| [TIMER_TYPE_IDLE](arkts-basicservices-systemtimer-con-sys.md#timer_type_idle) | Idle timer type (supported only for system services). |
| [TIMER_TYPE_REALTIME](arkts-basicservices-systemtimer-con-sys.md#timer_type_realtime) | CPU time type. (The start time of the timer cannot be later than the current system time.) |
| [TIMER_TYPE_WAKEUP](arkts-basicservices-systemtimer-con-sys.md#timer_type_wakeup) | Wakeup type. (If the wakeup type is not set, the system does not wake up until it exits the sleep state.) |
<!--DelEnd-->

