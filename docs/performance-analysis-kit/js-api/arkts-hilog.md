# @ohos.hilog

The HiLog subsystem allows your applications or services to output logs based on the specified type, level, and format string. Such logs help you learn the running status of applications and better debug programs.

**Since:** 7

**System capability:** SystemCapability.HiviewDFX.HiLog

## Modules to Import

```TypeScript
import { hilog } from '@ohos.hilog';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [clean](arkts-performanceanalysis-clean-f.md#clean-1) | Delete all hilog logs in the sandbox. |
| [debug](arkts-performanceanalysis-debug-f.md#debug-1) | Prints DEBUG logs. DEBUG logs are not recorded in official versions by default. They are available in debug versions or in official versions with the debug function enabled. |
| [error](arkts-performanceanalysis-error-f.md#error-1) | Prints ERROR logs. |
| [fatal](arkts-performanceanalysis-fatal-f.md#fatal-1) | Prints FATAL logs. |
| [flush](arkts-performanceanalysis-flush-f.md#flush-1) | Flush hilog logs in the sandbox. |
| [getLogFile](arkts-performanceanalysis-getlogfile-f.md#getlogfile-1) | Returns the list of hilog log file paths in the sandbox for the specified recent time period. |
| [getOutputDir](arkts-performanceanalysis-getoutputdir-f.md#getoutputdir-1) | Returns the directory path of hilog logs in the sandbox. If the output type of hilog is DEFAULT, an empty string is returned. |
| [getOutputType](arkts-performanceanalysis-getoutputtype-f.md#getoutputtype-1) | Returns the current output type of hilog. |
| [info](arkts-performanceanalysis-info-f.md#info-1) | Prints INFO logs. |
| [isLoggable](arkts-performanceanalysis-isloggable-f.md#isloggable-1) | Checks whether logs are printable based on the specified service domain, log tag, and log level. |
| [setLogLevel](arkts-performanceanalysis-setloglevel-f.md#setloglevel-1) | Sets the minimum log level of the current application process. You can configure different preference strategies using the **prefer** parameter. The **PREFER_CLOSE_LOG** strategy has the same effect as the **setMinLogLevel()** function. &gt; **NOTE** &gt; &gt; This function does not take effect for debug applications. |
| [setMinLogLevel](arkts-performanceanalysis-setminloglevel-f.md#setminloglevel-1) | Sets the minimum log level. &gt; **NOTE** &gt; &gt; If the set log level is lower than the &gt; [global log level](../../../../dfx/hilog.md#displaying-and-setting-log-levels), the setting does not take effect. &gt; &gt; This function does not take effect for debug applications. |
| [setOutputType](arkts-performanceanalysis-setoutputtype-f.md#setoutputtype-1) | Sets the output type of hilog. |
| [setOutputTypeByDomainID](arkts-performanceanalysis-setoutputtypebydomainid-f.md#setoutputtypebydomainid-1) | Sets the output type for hilog for the domainID list. |
| [warn](arkts-performanceanalysis-warn-f.md#warn-1) | Prints WARN logs. |

### Enums

| Name | Description |
| --- | --- |
| [LogLevel](arkts-performanceanalysis-loglevel-e.md) | Enumerates the log levels. |
| [OutputType](arkts-performanceanalysis-outputtype-e.md) | Enumerates output type of hilog. |
| [PreferStrategy](arkts-performanceanalysis-preferstrategy-e.md) | Enumerates the preference strategies. |

