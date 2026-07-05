# SkillInfoFlag

```TypeScript
export enum SkillInfoFlag
```

Enumeration of flags used to control what content is populated in a SkillInfo. Multiple flags can be combined using bitwise OR, for example GET_SKILL_INFO_WITH_SRC_ENTRIES | GET_SKILL_INFO_WITH_DESCRIPTION.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## GET_SKILL_INFO_DEFAULT

```TypeScript
GET_SKILL_INFO_DEFAULT = 0x00000000
```

Used to obtain the default SkillInfo.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## GET_SKILL_INFO_WITH_DESCRIPTION

```TypeScript
GET_SKILL_INFO_WITH_DESCRIPTION = 0x00000001
```

Used to obtain the SkillInfo containing description.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## GET_SKILL_INFO_WITH_SRC_ENTRIES

```TypeScript
GET_SKILL_INFO_WITH_SRC_ENTRIES = 0x00000002
```

Used to obtain the SkillInfo containing srcEntries.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## GET_SKILL_INFO_WITH_PERMISSIONS

```TypeScript
GET_SKILL_INFO_WITH_PERMISSIONS = 0x00000004
```

Used to obtain the SkillInfo containing permissions.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## GET_SKILL_INFO_WITH_REQUEST_PERMISSIONS

```TypeScript
GET_SKILL_INFO_WITH_REQUEST_PERMISSIONS = 0x00000008
```

Used to obtain the permissions declared under requestPermissions in the module manifest.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

