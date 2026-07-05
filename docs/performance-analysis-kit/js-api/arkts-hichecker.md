# @ohos.hichecker

The HiChecker module allows you to check issues that may be easily ignored during development of applications ( including system-built and third-party applications). Such issues include calling of time-consuming functions by key application threads, event distribution and execution timeout in application processes, and ability resource leakage in application processes. The issues are recorded in logs or lead to process crashes explicitly so that you can find and rectify them.

**Since:** 8

**System capability:** SystemCapability.HiviewDFX.HiChecker

## Modules to Import

```TypeScript
import { hichecker } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addCheckRule](arkts-hichecker-addcheckrule-f.md#addCheckRule-1) | Adds one or more check rules. HiChecker detects unexpected operations or gives feedback based on the added rules. You can use **grep HiChecker** to check for the application running information in the hilog. |
| [addRule](arkts-hichecker-addrule-f.md#addRule-1) | Adds one or more rules. HiChecker detects unexpected operations or gives feedback based on the added rules. |
| [contains](arkts-hichecker-contains-f.md#contains-1) | Checks whether the specified rule exists in the collection of added rules. If the rule is of the thread level, this operation is performed only on the current thread. |
| [containsCheckRule](arkts-hichecker-containscheckrule-f.md#containsCheckRule-1) | Checks whether the specified rule exists in the collection of added rules. If the rule is of the thread level, this operation is performed only on the current thread. |
| [getRule](arkts-hichecker-getrule-f.md#getRule-1) | Obtains a collection of thread, process, and alarm rules that have been added. |
| [removeCheckRule](arkts-hichecker-removecheckrule-f.md#removeCheckRule-1) | Removes one or more rules. The removed rules will become ineffective. |
| [removeRule](arkts-hichecker-removerule-f.md#removeRule-1) | Removes one or more rules. The removed rules will become ineffective. |

### Constants

| Name | Description |
| --- | --- |
| [RULE_CAUTION_PRINT_LOG](arkts-hichecker-con.md#RULE_CAUTION_PRINT_LOG) | Alarm rule, which is programmed to print a log when an alarm is generated. |
| [RULE_CAUTION_PRINT_LOG](arkts-hichecker-con.md#RULE_CAUTION_PRINT_LOG) | Alarm rule, which is programmed to print a log when an alarm is generated. |
| [RULE_CAUTION_TRIGGER_CRASH](arkts-hichecker-con.md#RULE_CAUTION_TRIGGER_CRASH) | Alarm rule, which is programmed to force the application to exit when an alarm is generated. |
| [RULE_CAUTION_TRIGGER_CRASH](arkts-hichecker-con.md#RULE_CAUTION_TRIGGER_CRASH) | Alarm rule, which is programmed to force the application to exit when an alarm is generated. |
| [RULE_CHECK_ABILITY_CONNECTION_LEAK](arkts-hichecker-con.md#RULE_CHECK_ABILITY_CONNECTION_LEAK) | Caution rule, which is programmed to detect whether ability leakage has occurred. |
| [RULE_CHECK_ABILITY_CONNECTION_LEAK](arkts-hichecker-con.md#RULE_CHECK_ABILITY_CONNECTION_LEAK) | Caution rule, which is programmed to detect whether ability leakage has occurred. |
| [RULE_CHECK_ARKUI_PERFORMANCE](arkts-hichecker-con.md#RULE_CHECK_ARKUI_PERFORMANCE) | Caution rule, which is programmed to detect the ArkUI performance. |
| [RULE_CHECK_ARKUI_PERFORMANCE](arkts-hichecker-con.md#RULE_CHECK_ARKUI_PERFORMANCE) | Caution rule, which is programmed to detect the ArkUI performance. |
| [RULE_THREAD_CHECK_NETWORK_USAGE](arkts-hichecker-con.md#RULE_THREAD_CHECK_NETWORK_USAGE) | The thread rule check network usage. |
| [RULE_THREAD_CHECK_SLOW_PROCESS](arkts-hichecker-con.md#RULE_THREAD_CHECK_SLOW_PROCESS) | Caution rule, which is programmed to detect whether any time-consuming function is invoked. |
| [RULE_THREAD_CHECK_SLOW_PROCESS](arkts-hichecker-con.md#RULE_THREAD_CHECK_SLOW_PROCESS) | Caution rule, which is programmed to detect whether any time-consuming function is invoked. |

