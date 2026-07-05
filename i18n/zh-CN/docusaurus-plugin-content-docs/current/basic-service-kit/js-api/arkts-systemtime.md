# @ohos.systemTime

本模块主要由系统时间和系统时区功能组成。开发者可以设置、获取系统时间及系统时区。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.systemDateTime:systemDateTime

**系统能力：** SystemCapability.MiscServices.Time

## 导入模块

```TypeScript
import { systemTime } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getCurrentTime](arkts-systemtime-getcurrenttime-f.md#getCurrentTime-1) | 获取自Unix纪元以来经过的时间，使用callback异步回调。 |
| [getCurrentTime](arkts-systemtime-getcurrenttime-f.md#getCurrentTime-2) | 获取自Unix纪元以来经过的时间，使用callback异步回调。 |
| [getCurrentTime](arkts-systemtime-getcurrenttime-f.md#getCurrentTime-3) | 获取自Unix纪元以来经过的时间，使用Promise异步回调。 |
| [getDate](arkts-systemtime-getdate-f.md#getDate-1) | 获取当前系统日期，使用callback异步回调。 |
| [getDate](arkts-systemtime-getdate-f.md#getDate-2) | 获取当前系统日期，使用Promise异步回调。 |
| [getRealActiveTime](arkts-systemtime-getrealactivetime-f.md#getRealActiveTime-1) | 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。 |
| [getRealActiveTime](arkts-systemtime-getrealactivetime-f.md#getRealActiveTime-2) | 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。 |
| [getRealActiveTime](arkts-systemtime-getrealactivetime-f.md#getRealActiveTime-3) | 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用Promise异步回调。 |
| [getRealTime](arkts-systemtime-getrealtime-f.md#getRealTime-1) | 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。 |
| [getRealTime](arkts-systemtime-getrealtime-f.md#getRealTime-2) | 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。 |
| [getRealTime](arkts-systemtime-getrealtime-f.md#getRealTime-3) | 获取自系统启动以来经过的时间，包括深度睡眠时间，使用Promise异步回调。 |
| [getTimezone](arkts-systemtime-gettimezone-f.md#getTimezone-1) | 获取系统时区，使用callback异步回调。 |
| [getTimezone](arkts-systemtime-gettimezone-f.md#getTimezone-2) | 获取系统时区，使用Promise异步回调。 |
| [setDate](arkts-systemtime-setdate-f.md#setDate-1) | 设置系统日期，使用callback异步回调。 |
| [setDate](arkts-systemtime-setdate-f.md#setDate-2) | 设置系统日期，使用Promise异步回调。 |
| [setTime](arkts-systemtime-settime-f.md#setTime-1) | 设置系统时间，使用callback异步回调。 |
| [setTime](arkts-systemtime-settime-f.md#setTime-2) | 设置系统时间，使用Promise异步回调。 |
| [setTimezone](arkts-systemtime-settimezone-f.md#setTimezone-1) | 设置系统时区，使用callback异步回调。 |
| [setTimezone](arkts-systemtime-settimezone-f.md#setTimezone-2) | 使用Promise异步回调设置系统时区。 |

