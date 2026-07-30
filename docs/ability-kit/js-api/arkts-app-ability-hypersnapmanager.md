# @ohos.app.ability.hyperSnapManager

This module provides the capability to manage HyperSnap.

**Since:** 24

<!--Device-unnamed-declare namespace hyperSnapManager--><!--Device-unnamed-declare namespace hyperSnapManager-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { hyperSnapManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [requestRebuildHyperSnap](arkts-ability-hypersnapmanager-requestrebuildhypersnap-f.md#requestrebuildhypersnap) | Requests the recreation of the Hyper Snap process snapshot for the application.  When compatibility issues arise with an existing snapshot, this method triggers destruction of the current snapshot process. The system will subsequently generate a new snapshot at an optimal time to resolve compatibility problems while maintaining launch performance benefits.  **Notes:**  - The system ultimately determines whether and when to recreate the snapshot. Invoking this method only submits a request; actual snapshot recreation depends on system policies and resource availability.  - Recreation occurs during optimal system idle periods to minimize performance impact.  - Primarily for resolving specific compatibility issues identified after initial snapshot creation.Most applications don't require manual intervention for snapshot management. |
| [setHyperSnapEnabled](arkts-ability-hypersnapmanager-sethypersnapenabled-f.md#sethypersnapenabled) | Enables or disables the Hyper Snap performance optimization for the application.  When enabled, the system will create a snapshot of the application process at an appropriate time.Subsequent launched resume directly from this snapshot, bypassing the full cold start sequence,resulting in significantly improved application launch performance.  **Notes:**  - The system ultimately determines whether to create or use snapshots based on application compatibility, resource availability, and system policies. Enabling this feature only indicates the application's readiness for optimization.  - Hyper Snap is enabled by default for applications meeting system compatibility requirements.  - If issues arise after enabling Hyper Snap, disable this feature to revert to standard cold start processes.  - Settings persist across reboots. |

