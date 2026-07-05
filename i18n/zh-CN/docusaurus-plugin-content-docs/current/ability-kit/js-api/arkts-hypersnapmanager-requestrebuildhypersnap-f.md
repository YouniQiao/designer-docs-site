# requestRebuildHyperSnap

## requestRebuildHyperSnap

```TypeScript
function requestRebuildHyperSnap(): void
```

Requests the recreation of the Hyper Snap process snapshot for the application. When compatibility issues arise with an existing snapshot, this method triggers destruction of the current snapshot process. The system will subsequently generate a new snapshot at an optimal time to resolve compatibility problems while maintaining launch performance benefits. **Notes:** - The system ultimately determines whether and when to recreate the snapshot. Invoking this method only submits a request; actual snapshot recreation depends on system policies and resource availability. - Recreation occurs during optimal system idle periods to minimize performance impact. - Primarily for resolving specific compatibility issues identified after initial snapshot creation. Most applications don't require manual intervention for snapshot management.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000150 | Failed to send request to system service. |

