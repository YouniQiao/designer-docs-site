---
last_update:
  date: 2026-07-04
---

# getSkillInfosForSelf

## Modules to Import

```TypeScript
import { skillManager } from '@ohos.bundle.skillManager';
```

## getSkillInfosForSelf

```TypeScript
function getSkillInfosForSelf(flags: number): Promise<Array<SkillInfo>>
```

Obtains all SkillInfo objects of the calling application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flags | number | Yes | { |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SkillInfo&gt;&gt; | Returns the list of SkillInfo objects. |

