# @ohos.systemDateTime

本模块主要由系统时间和系统时区功能组成。开发者可以获取系统时间及系统时区。

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
| [getAutoTimeStatus](arkts-systemdatetime-getautotimestatus-f.md#getAutoTimeStatus-1) | 获取自动设置时间开关状态，使用同步方式。 |
| [getCurrentTime](arkts-systemdatetime-getcurrenttime-f.md#getCurrentTime-1) | 获取自Unix纪元以来经过的时间，使用callback异步回调。 |
| [getCurrentTime](arkts-systemdatetime-getcurrenttime-f.md#getCurrentTime-2) | 获取自Unix纪元以来经过的时间，使用callback异步回调。 |
| [getCurrentTime](arkts-systemdatetime-getcurrenttime-f.md#getCurrentTime-3) | 获取自Unix纪元以来经过的时间，使用Promise异步回调。 |
| [getDate](arkts-systemdatetime-getdate-f.md#getDate-1) | 获取当前系统日期，使用callback异步回调。 |
| [getDate](arkts-systemdatetime-getdate-f.md#getDate-2) | 获取当前系统日期，使用Promise异步回调。 |
| <!--DelRow-->[getNtpTime](arkts-systemdatetime-getntptime-f-sys.md#getNtpTime-1) | 使用同步方式获取基于上次更新的NTP时间所计算出的真实时间。 |
| [getRealActiveTime](arkts-systemdatetime-getrealactivetime-f.md#getRealActiveTime-1) | 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。 |
| [getRealActiveTime](arkts-systemdatetime-getrealactivetime-f.md#getRealActiveTime-2) | 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。 |
| [getRealActiveTime](arkts-systemdatetime-getrealactivetime-f.md#getRealActiveTime-3) | 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用Promise异步回调。 |
| [getRealTime](arkts-systemdatetime-getrealtime-f.md#getRealTime-1) | 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。 |
| [getRealTime](arkts-systemdatetime-getrealtime-f.md#getRealTime-2) | 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。 |
| [getRealTime](arkts-systemdatetime-getrealtime-f.md#getRealTime-3) | 获取自系统启动以来经过的时间，包括深度睡眠时间，使用Promise异步回调。 |
| [getTime](arkts-systemdatetime-gettime-f.md#getTime-1) | 使用同步方式获取自Unix纪元以来到当前系统时间所经过的时间。 |
| [getTimezone](arkts-systemdatetime-gettimezone-f.md#getTimezone-1) | 获取系统时区，使用callback异步回调。 |
| [getTimezone](arkts-systemdatetime-gettimezone-f.md#getTimezone-2) | 获取系统时区，使用Promise异步回调。 |
| [getTimezoneSync](arkts-systemdatetime-gettimezonesync-f.md#getTimezoneSync-1) | 获取系统时区，使用同步方式。 |
| [getUptime](arkts-systemdatetime-getuptime-f.md#getUptime-1) | 使用同步方式获取自系统启动以来经过的时间。 |
| <!--DelRow-->[setAutoTimeStatus](arkts-systemdatetime-setautotimestatus-f-sys.md#setAutoTimeStatus-1) | 设置自动设置时间开关状态，使用Promise异步回调。 |
| <!--DelRow-->[setDate](arkts-systemdatetime-setdate-f-sys.md#setDate-1) | 设置系统日期，使用callback异步回调。 |
| <!--DelRow-->[setDate](arkts-systemdatetime-setdate-f-sys.md#setDate-2) | 设置系统日期，使用Promise异步回调。 |
| <!--DelRow-->[setTime](arkts-systemdatetime-settime-f-sys.md#setTime-1) | 设置系统时间，使用callback异步回调。 |
| <!--DelRow-->[setTime](arkts-systemdatetime-settime-f-sys.md#setTime-2) | 设置系统时间，使用Promise异步回调。 |
| <!--DelRow-->[setTimezone](arkts-systemdatetime-settimezone-f-sys.md#setTimezone-1) | 设置系统时区，使用callback异步回调。 |
| <!--DelRow-->[setTimezone](arkts-systemdatetime-settimezone-f-sys.md#setTimezone-2) | 设置系统时区，使用Promise异步回调。 |
| <!--DelRow-->[updateNtpTime](arkts-systemdatetime-updatentptime-f-sys.md#updateNtpTime-1) | 使用异步方式从NTP服务器更新NTP时间。该方法一小时内只会从NTP服务器更新一次NTP时间。 |

### Enums

| Name | Description |
| --- | --- |
| [TimeType](arkts-systemdatetime-timetype-e.md) | 定义获取时间的枚举类型。 |

