# @ohos.systemDateTime

The **systemTime** module provides system time and time zone features. You can obtain the system time and time zone
by using the following APIs.

**Since:** 9

**System capability:** SystemCapability.MiscServices.Time

## Modules to Import

```TypeScript
import { systemDateTime } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAutoTimeStatus](arkts-basicservices-getautotimestatus-f.md#getautotimestatus-1) | Obtains the switch status of the automatic time setting. This API returns the result synchronously. |
| [getCurrentTime](arkts-basicservices-getcurrenttime-f.md#getcurrenttime-1) | Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result. |
| [getCurrentTime](arkts-basicservices-getcurrenttime-f.md#getcurrenttime-2) | Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result. |
| [getCurrentTime](arkts-basicservices-getcurrenttime-f.md#getcurrenttime-3) | Obtains the time elapsed since the Unix epoch. This API uses a promise to return the result. |
| [getDate](arkts-basicservices-getdate-f.md#getdate-1) | Obtains the current system date. This API uses an asynchronous callback to return the result. |
| [getDate](arkts-basicservices-getdate-f.md#getdate-2) | Obtains the current system date. This API uses a promise to return the result. |
| [getRealActiveTime](arkts-basicservices-getrealactivetime-f.md#getrealactivetime-1) | Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealActiveTime](arkts-basicservices-getrealactivetime-f.md#getrealactivetime-2) | Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealActiveTime](arkts-basicservices-getrealactivetime-f.md#getrealactivetime-3) | Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses a promise to return theresult. |
| [getRealTime](arkts-basicservices-getrealtime-f.md#getrealtime-1) | Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealTime](arkts-basicservices-getrealtime-f.md#getrealtime-2) | Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous callback to return the result. |
| [getRealTime](arkts-basicservices-getrealtime-f.md#getrealtime-3) | Obtains the time elapsed since system startup, including the deep sleep time. This API uses a promise to return theresult. |
| [getTime](arkts-basicservices-gettime-f.md#gettime-1) | Obtains the time elapsed since the Unix epoch. This API returns the result synchronously. |
| [getTimezone](arkts-basicservices-gettimezone-f.md#gettimezone-1) | Obtains the system time zone. This API uses an asynchronous callback to return the result. |
| [getTimezone](arkts-basicservices-gettimezone-f.md#gettimezone-2) | Obtains the system time zone. This API uses a promise to return the result. |
| [getTimezoneSync](arkts-basicservices-gettimezonesync-f.md#gettimezonesync-1) | Obtains the system time zone in synchronous mode. |
| [getUptime](arkts-basicservices-getuptime-f.md#getuptime-1) | Obtains the time elapsed since system startup. This API returns the result synchronously. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getNtpTime](arkts-basicservices-getntptime-f-sys.md#getntptime-1) | Obtains the actual time calculated based on the last updated NTP time. This API returns the result synchronously. |
| [setAutoTimeStatus](arkts-basicservices-setautotimestatus-f-sys.md#setautotimestatus-1) | Sets the status of the automatic time setting. This API uses a promise to return the result. |
| [setDate](arkts-basicservices-setdate-f-sys.md#setdate-1) | Sets the system date. This API uses an asynchronous callback to return the result. |
| [setDate](arkts-basicservices-setdate-f-sys.md#setdate-2) | Sets the system date. This API uses a promise to return the result. |
| [setTime](arkts-basicservices-settime-f-sys.md#settime-1) | Sets the system time. This API uses an asynchronous callback to return the result. |
| [setTime](arkts-basicservices-settime-f-sys.md#settime-2) | Sets the system time. This API uses a promise to return the result. |
| [setTimezone](arkts-basicservices-settimezone-f-sys.md#settimezone-1) | Sets the system time zone. This API uses an asynchronous callback to return the result. |
| [setTimezone](arkts-basicservices-settimezone-f-sys.md#settimezone-2) | Sets the system time zone. This API uses a promise to return the result. |
| [updateNtpTime](arkts-basicservices-updatentptime-f-sys.md#updatentptime-1) | Updates the NTP time from the NTP server This API returns the result asynchronously. In this way, the NTP time is updated from the NTP server only once within one hour. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [TimeType](arkts-basicservices-timetype-e.md) | Enumerates the types of time to obtain. |

