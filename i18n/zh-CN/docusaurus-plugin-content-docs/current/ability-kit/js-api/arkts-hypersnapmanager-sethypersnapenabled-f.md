# setHyperSnapEnabled

## setHyperSnapEnabled

```TypeScript
function setHyperSnapEnabled(enableFlag : boolean): void
```

Enables or disables the Hyper Snap performance optimization for the application. When enabled, the system will create a snapshot of the application process at an appropriate time. Subsequent launched resume directly from this snapshot, bypassing the full cold start sequence, resulting in significantly improved application launch performance. **Notes:** - The system ultimately determines whether to create or use snapshots based on application compatibility, resource availability, and system policies. Enabling this feature only indicates the application's readiness for optimization. - Hyper Snap is enabled by default for applications meeting system compatibility requirements. - If issues arise after enabling Hyper Snap, disable this feature to revert to standard cold start processes. - Settings persist across reboots.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enableFlag | boolean | 是 | Indicates the desired optimization state:  - `true`: Indicates the application's compatibility with Hyper Snap optimization (system may  apply when appropriate)  - `false`: Disables Hyper Snap; uses standard cold-start process. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000150 | Failed to send request to system service. |

