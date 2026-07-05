# @ohos.hiviewdfx.hiRetrieval

Provide interfaces and functions for HiRetrieval feature.

**Since:** 26.0.0

**System capability:** SystemCapability.HiviewDFX.HiRetrieval

## Modules to Import

```TypeScript
import { hiRetrieval } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getCurrentConfig](arkts-hiretrieval-getcurrentconfig-f.md#getCurrentConfig-1) | Query the current HiRetrieval config. |
| [getLastParticipationTimestamp](arkts-hiretrieval-getlastparticipationtimestamp-f.md#getLastParticipationTimestamp-1) | Query the UNIX timestamp of the last participating time. |
| [init](arkts-hiretrieval-init-f.md#init-1) | Init the HiRetrieval functionality. |
| [isParticipant](arkts-hiretrieval-isparticipant-f.md#isParticipant-1) | Query if the app is participating the HiRetrieval project. |
| [participate](arkts-hiretrieval-participate-f.md#participate-1) | Participate the HiRetrieval project with given HiRetrievalConfig. |
| [quit](arkts-hiretrieval-quit-f.md#quit-1) | Quit the HiRetrieval project. This operation clears the current HiRetrieval config. Invoking init function again is required after invoking quit function. |
| [run](arkts-hiretrieval-run-f.md#run-1) | Trigger the HiRetrieval functionality, make it start working. |

### Interfaces

| Name | Description |
| --- | --- |
| [HiRetrievalConfig](arkts-hiretrieval-hiretrievalconfig-i.md) | HiRetrieval functionality config. |

