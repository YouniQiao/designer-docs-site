# ProgressInfo

Defines the progress information. This information is reported only when [ProgressIndicator]pasteboard.ProgressIndicator is set to **NONE**.

**Since:** 15

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## progress

```TypeScript
progress: int
```

If the progress indicator provided by the system is not used, the system reports the progress percentage of the paste task.

**Type:** int

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

