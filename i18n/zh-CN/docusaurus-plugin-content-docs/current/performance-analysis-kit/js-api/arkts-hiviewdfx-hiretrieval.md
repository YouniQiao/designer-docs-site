# @ohos.hiviewdfx.hiRetrieval

Provide interfaces and functions for HiRetrieval feature.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.HiviewDFX.HiRetrieval

## 导入模块

```TypeScript
import { hiRetrieval } from '@kit.PerformanceAnalysisKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getCurrentConfig](arkts-hiretrieval-getcurrentconfig-f.md#getCurrentConfig-1) | Query the current HiRetrieval config. |
| [getLastParticipationTimestamp](arkts-hiretrieval-getlastparticipationtimestamp-f.md#getLastParticipationTimestamp-1) | Query the UNIX timestamp of the last participating time. |
| [init](arkts-hiretrieval-init-f.md#init-1) | Init the HiRetrieval functionality. |
| [isParticipant](arkts-hiretrieval-isparticipant-f.md#isParticipant-1) | Query if the app is participating the HiRetrieval project. |
| [participate](arkts-hiretrieval-participate-f.md#participate-1) | Participate the HiRetrieval project with given HiRetrievalConfig. |
| [quit](arkts-hiretrieval-quit-f.md#quit-1) | Quit the HiRetrieval project. This operation clears the current HiRetrieval config. Invoking init function again is required after invoking quit function. |
| [run](arkts-hiretrieval-run-f.md#run-1) | Trigger the HiRetrieval functionality, make it start working. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [HiRetrievalConfig](arkts-hiretrieval-hiretrievalconfig-i.md) | HiRetrieval functionality config. |

