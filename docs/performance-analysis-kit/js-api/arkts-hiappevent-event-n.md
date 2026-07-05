# event

Provides event name constants, including system event name constants and application event name constants. <br>The application event name constants are optional custom event names reserved when you call Write for application event logging.

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Constants

| Name | Description |
| --- | --- |
| [ADDRESS_SANITIZER](arkts-event-con.md#ADDRESS_SANITIZER) | Application address sanitizer event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [APP_CRASH](arkts-event-con.md#APP_CRASH) | Application crash event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [APP_FREEZE](arkts-event-con.md#APP_FREEZE) | Application freeze event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [APP_HICOLLIE](arkts-event-con.md#APP_HICOLLIE) | Application task execution timeout event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 21. |
| [APP_KILLED](arkts-event-con.md#APP_KILLED) | Application killed event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 20. |
| [APP_LAUNCH](arkts-event-con.md#APP_LAUNCH) | Event indicating the application launch duration. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [appFreezeWarning](arkts-event-con.md#appFreezeWarning) | App encounter a longer hang and trigger an system warning, such as THREAD_BLOCK_3S or LIFECYCLE_HALF_TIMEOUT. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 26.0.0. |
| [AUDIO_JANK_FRAME](arkts-event-con.md#AUDIO_JANK_FRAME) | Audio jank event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 21. |
| [BATTERY_USAGE](arkts-event-con.md#BATTERY_USAGE) | Event indicating battery usage statistics. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [CPU_USAGE_HIGH](arkts-event-con.md#CPU_USAGE_HIGH) | Event indicating a high CPU usage. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [DISTRIBUTED_SERVICE_START](arkts-event-con.md#DISTRIBUTED_SERVICE_START) | Distributed service startup event. This is a reserved application event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [MAIN_THREAD_JANK](arkts-event-con.md#MAIN_THREAD_JANK) | Main thread jank event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [RESOURCE_OVERLIMIT](arkts-event-con.md#RESOURCE_OVERLIMIT) | Application resource leak event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [SCROLL_ARKWEB_FLING_JANK](arkts-event-con.md#SCROLL_ARKWEB_FLING_JANK) | ArkWeb fling jank event. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 23. |
| [SCROLL_JANK](arkts-event-con.md#SCROLL_JANK) | Event indicating frame loss during swiping. This is a system event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 12. |
| [USER_LOGIN](arkts-event-con.md#USER_LOGIN) | User login event. This is a reserved application event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11. |
| [USER_LOGOUT](arkts-event-con.md#USER_LOGOUT) | User logout event. This is a reserved application event name constant. **Atomic service API**: This parameter can be used in atomic services since API version 11. |

