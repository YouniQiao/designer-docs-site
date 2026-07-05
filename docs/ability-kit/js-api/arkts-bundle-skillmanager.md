# @ohos.bundle.skillManager

This module provides skill query capabilities for applications.

**Since:** 26.0.0

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## Modules to Import

```TypeScript
import { skillManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllSkillInfos](arkts-skillmanager-getallskillinfos-f.md#getAllSkillInfos-1) | Obtains all SkillInfo objects installed on the device. To query information for other local accounts, the permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS must additionally be granted. |
| [getSkillInfo](arkts-skillmanager-getskillinfo-f.md#getSkillInfo-1) | Obtains SkillInfo of a specified application based on bundleName, moduleName and skillName. To query information for other local accounts, the permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS must additionally be granted. |
| [getSkillInfoForSelf](arkts-skillmanager-getskillinfoforself-f.md#getSkillInfoForSelf-1) | Obtains SkillInfo of the calling application based on moduleName and skillName. |
| [getSkillInfos](arkts-skillmanager-getskillinfos-f.md#getSkillInfos-1) | Obtains all SkillInfo of a specified application based on bundleName. To query information for other local accounts, the permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS must additionally be granted. |
| [getSkillInfosForSelf](arkts-skillmanager-getskillinfosforself-f.md#getSkillInfosForSelf-1) | Obtains all SkillInfo objects of the calling application. |

### Types

| Name | Description |
| --- | --- |
| [SkillInfo](arkts-skillmanager-skillinfo-t.md) | Provides information about a skill, including skill name, type, and associated metadata. |
| [SkillType](arkts-skillmanager-skilltype-t.md) | Enumerates the skill types. |

### Enums

| Name | Description |
| --- | --- |
| [SkillInfoFlag](arkts-skillmanager-skillinfoflag-e.md) | Enumeration of flags used to control what content is populated in a SkillInfo. Multiple flags can be combined using bitwise OR, for example GET_SKILL_INFO_WITH_SRC_ENTRIES | GET_SKILL_INFO_WITH_DESCRIPTION. |

