# isNotifyAllowedInDoNotDisturb

## isNotifyAllowedInDoNotDisturb

```TypeScript
function isNotifyAllowedInDoNotDisturb(): Promise<boolean>
```

Checks whether calling bundle is allow notify(e.g. sound & vibration) when system Do Not Disturb is on.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Required permissions:** ohos.permission.GET_DONOTDISTURB_STATE

**Model restriction:** This API can be used only in the stage model.

<!--Device-intelligentScene-function isNotifyAllowedInDoNotDisturb(): Promise<boolean>--><!--Device-intelligentScene-function isNotifyAllowedInDoNotDisturb(): Promise<boolean>-End-->

**System capability:** SystemCapability.Applications.IntelligentScene

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns whether notify in Do Not Disturb mode is Allowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [35200001](../../apis-basic-services-kit/errorcode-intelligentScene.md#35200001-internal-error) | Internal error. |

