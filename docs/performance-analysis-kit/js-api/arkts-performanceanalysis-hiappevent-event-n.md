# event

Provides event name constants, including system event name constants and application event name constants.<br>The application event name constants are optional custom event names reserved when you call Write for application event logging.

**Since:** 9

<!--Device-hiAppEvent-namespace event--><!--Device-hiAppEvent-namespace event-End-->

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Constants

| Name | Description |
| --- | --- |
| [USER_LOGIN](arkts-performanceanalysis-event-con.md#user_login) | User login event. This is a reserved application event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [USER_LOGOUT](arkts-performanceanalysis-event-con.md#user_logout) | User logout event. This is a reserved application event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [DISTRIBUTED_SERVICE_START](arkts-performanceanalysis-event-con.md#distributed_service_start) | Distributed service startup event. This is a reserved application event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [APP_CRASH](arkts-performanceanalysis-event-con.md#app_crash) | Application crash event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [APP_FREEZE](arkts-performanceanalysis-event-con.md#app_freeze) | Application freeze event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [APP_LAUNCH](arkts-performanceanalysis-event-con.md#app_launch) | Event indicating the application launch duration. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [SCROLL_JANK](arkts-performanceanalysis-event-con.md#scroll_jank) | Event indicating frame loss during swiping. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [CPU_USAGE_HIGH](arkts-performanceanalysis-event-con.md#cpu_usage_high) | Event indicating a high CPU usage. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [BATTERY_USAGE](arkts-performanceanalysis-event-con.md#battery_usage) | Event indicating battery usage statistics. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [RESOURCE_OVERLIMIT](arkts-performanceanalysis-event-con.md#resource_overlimit) | Application resource leak event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [ADDRESS_SANITIZER](arkts-performanceanalysis-event-con.md#address_sanitizer) | Application address sanitizer event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [MAIN_THREAD_JANK](arkts-performanceanalysis-event-con.md#main_thread_jank) | Main thread jank event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [APP_KILLED](arkts-performanceanalysis-event-con.md#app_killed) | Application killed event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 20. |
| [APP_HICOLLIE](arkts-performanceanalysis-event-con.md#app_hicollie) | Application task execution timeout event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 21. |
| [AUDIO_JANK_FRAME](arkts-performanceanalysis-event-con.md#audio_jank_frame) | Audio jank event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 21. |
| [SCROLL_ARKWEB_FLING_JANK](arkts-performanceanalysis-event-con.md#scroll_arkweb_fling_jank) | ArkWeb fling jank event. This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 23. |
| [appFreezeWarning](arkts-performanceanalysis-event-con.md#appfreezewarning) | App encounter a longer hang and trigger an system warning, such as THREAD_BLOCK_3S or LIFECYCLE_HALF_TIMEOUT.This is a system event name constant.**Atomic service API**: This parameter can be used in atomic services since API version 26.0.0. |

