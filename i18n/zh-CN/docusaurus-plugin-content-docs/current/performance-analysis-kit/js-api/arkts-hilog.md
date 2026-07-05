# @ohos.hilog

hilog日志系统，使应用/服务可以按照指定级别、标识和格式字符串输出日志内容，帮助开发者了解应用/服务的运行状态，更好地调试程序。

**起始版本：** 7

**系统能力：** SystemCapability.HiviewDFX.HiLog

## 导入模块

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [debug](arkts-hilog-debug-f.md#debug-1) | 打印DEBUG级别的日志。 DEBUG级别的日志在正式发布版本中默认不被打印，只有在调试版本或打开调试开关的情况下才会打印。 |
| [debug](arkts-hilog-debug-f.md#debug-2) | 打印DEBUG级别的日志。 |
| [error](arkts-hilog-error-f.md#error-1) | 打印ERROR级别的日志。 |
| [error](arkts-hilog-error-f.md#error-2) | 打印ERROR级别的日志。 |
| [fatal](arkts-hilog-fatal-f.md#fatal-1) | 打印FATAL级别的日志。 |
| [fatal](arkts-hilog-fatal-f.md#fatal-2) | 打印FATAL级别的日志。 |
| [info](arkts-hilog-info-f.md#info-1) | 打印INFO级别的日志。 |
| [info](arkts-hilog-info-f.md#info-2) | 打印INFO级别的日志。 |
| [isLoggable](arkts-hilog-isloggable-f.md#isLoggable-1) | 在打印日志前调用该接口，用于检查指定领域标识、日志标识和级别的日志是否可以打印。 |
| [setLogLevel](arkts-hilog-setloglevel-f.md#setLogLevel-1) | 设置当前应用程序进程的最低日志级别。 可通过prefer参数配置不同的偏好策略。如果选择策略PREFER_CLOSE_LOG，等同于调用setMinLogLevel函数。 > **注意：** > > debug版本应用下，此函数不生效。 |
| [setMinLogLevel](arkts-hilog-setminloglevel-f.md#setMinLogLevel-1) | 设置应用日志打印的最低日志级别，用于拦截低级别日志打印。 > **注意：** > > 如果设置的日志级别低于[全局日志级别](docroot://dfx/hilog.md#查看和设置日志级别)，设置不生效。 > > debug版本应用下，此函数不生效。 |
| [warn](arkts-hilog-warn-f.md#warn-1) | 打印WARN级别的日志。 |
| [warn](arkts-hilog-warn-f.md#warn-2) | 打印WARN级别的日志。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [LogLevel](arkts-hilog-loglevel-e.md) | 日志级别。 |
| [PreferStrategy](arkts-hilog-preferstrategy-e.md) | 偏好策略。 |

