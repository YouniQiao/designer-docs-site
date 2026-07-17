# FactoryResetStrategy (System API)

Describes the factory reset strategy.

**Since:** 26.0.0

<!--Device-update-export interface FactoryResetStrategy--><!--Device-update-export interface FactoryResetStrategy-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## scope

```TypeScript
scope: FactoryResetScope
```

Reset scope.Available values:

- DATA: Indicates "quick erase", erasing only the user data partition (app data, user settings, account info, etc.).Factory reset takes less time.

- DATA_AND_OS: Indicates "deep erase", erasing both the user data partition and the system partition.Factory reset takes longer time.

**Type:** FactoryResetScope

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-FactoryResetStrategy-scope: FactoryResetScope--><!--Device-FactoryResetStrategy-scope: FactoryResetScope-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## strategy

```TypeScript
strategy: string
```

Reset scope description, providing supplementary details for the scope field.A meaningful value must be provided to match the corresponding erase scenario. If left empty, logs will lack effective information when anomalies occur, increasing troubleshooting difficulty.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-FactoryResetStrategy-strategy: string--><!--Device-FactoryResetStrategy-strategy: string-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

