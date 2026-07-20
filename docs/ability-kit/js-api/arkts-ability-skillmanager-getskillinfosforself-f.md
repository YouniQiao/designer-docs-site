# getSkillInfosForSelf

## Modules to Import

```TypeScript
import { skillManager } from '@kit.AbilityKit';
```

## getSkillInfosForSelf

```TypeScript
function getSkillInfosForSelf(flags: number): Promise<Array<SkillInfo>>
```

Obtains all SkillInfo objects of the calling application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-skillManager-function getSkillInfosForSelf(flags: int): Promise<Array<SkillInfo>>--><!--Device-skillManager-function getSkillInfosForSelf(flags: int): Promise<Array<SkillInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flags | number | Yes | { |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<SkillInfo>> | Returns the list of SkillInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17700101](../errorcode-bundle.md#17700101-bundle-manager-service-abnormal) | Bundle manager service is exception. Possible causes:1. Failed to connect to the system service.2. IPC data transmission failed.3. Failed to obtain the object constructor. |

