# @ohos.systemTime

The **systemTime** module provides system time and time zone features. You can use the APIs of this module to set and obtain the system time and time zone.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [systemDateTime:systemDateTime](arkts-systemdatetime.md#systemdatetime)

**System capability:** SystemCapability.MiscServices.Time

## Modules to Import

```TypeScript
import { systemTime } from '@ohos.systemTime';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getCurrentTime](arkts-basicservices-getcurrenttime-f.md#getcurrenttime-1) | Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result. |
| [getCurrentTime](arkts-basicservices-getcurrenttime-f.md#getcurrenttime-2) | Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result. |
| [getCurrentTime](arkts-basicservices-getcurrenttime-f.md#getcurrenttime-3) | Obtains the time elapsed since the Unix epoch. This API uses a promise to return the result. |
| [getDate](arkts-basicservices-getdate-f.md#getdate-1) | Obtains the current system date. This API uses an asynchronous callback to return the result. |
| [getDate](arkts-basicservices-getdate-f.md#getdate-2) | Obtains the current system date. This API uses a promise to return the result. |
| [getRealActiveTime](arkts-basicservices-getrealactivetime-f.md#getrealactivetime-1) | Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealActiveTime](arkts-basicservices-getrealactivetime-f.md#getrealactivetime-2) | Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealActiveTime](arkts-basicservices-getrealactivetime-f.md#getrealactivetime-3) | Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses a promise to return the result. |
| [getRealTime](arkts-basicservices-getrealtime-f.md#getrealtime-1) | Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealTime](arkts-basicservices-getrealtime-f.md#getrealtime-2) | Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealTime](arkts-basicservices-getrealtime-f.md#getrealtime-3) | Obtains the time elapsed since system startup, including the deep sleep time. This API uses a promise to return the result. |
| [getTimezone](arkts-basicservices-gettimezone-f.md#gettimezone-1) | Obtains the system time zone. This API uses an asynchronous callback to return the result. |
| [getTimezone](arkts-basicservices-gettimezone-f.md#gettimezone-2) | Obtains the system time zone. This API uses a promise to return the result. |
| [setDate](arkts-basicservices-setdate-f.md#setdate-1) | Sets the system date. This API uses an asynchronous callback to return the result. |
| [setDate](arkts-basicservices-setdate-f.md#setdate-2) | Sets the system date. This API uses a promise to return the result. |
| [setTime](arkts-basicservices-settime-f.md#settime-1) | Sets the system time. This API uses an asynchronous callback to return the result. |
| [setTime](arkts-basicservices-settime-f.md#settime-2) | Sets the system time. This API uses a promise to return the result. |
| [setTimezone](arkts-basicservices-settimezone-f.md#settimezone-1) | Sets the system time zone. This API uses an asynchronous callback to return the result. |
| [setTimezone](arkts-basicservices-settimezone-f.md#settimezone-2) | Sets the system time zone. This API uses a promise to return the result. |

