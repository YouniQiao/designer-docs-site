# Skill

skill标签对象。

**起始版本：** 12

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## uris

```TypeScript
readonly uris: Array<SkillUri>
```

Want匹配的Uri集合。

**类型：** Array<SkillUri>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## domainVerify

```TypeScript
readonly domainVerify: boolean
```

Skill接收的DomainVerify值，仅在AbilityInfo中存在，表示是否开启域名校验，取值为true表示开启域名校验，取值为false表示未开启域名校验。

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## entities

```TypeScript
readonly entities: Array<string>
```

Skill接收的[Entity集合]./../@ohos.ability.wantConstant:wantConstant.Entity。

**类型：** Array<string>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## actions

```TypeScript
readonly actions: Array<string>
```

Skill接收的[Action集合]./../@ohos.ability.wantConstant:wantConstant.Action。

**类型：** Array<string>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

