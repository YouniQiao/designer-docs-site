# Skill

skill标签对象。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## uris

```TypeScript
readonly uris: Array<SkillUri>
```

Want匹配的Uri集合。

**Type:** Array<SkillUri>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## domainVerify

```TypeScript
readonly domainVerify: boolean
```

Skill接收的DomainVerify值，仅在AbilityInfo中存在，表示是否开启域名校验，取值为true表示开启域名校验，取值为false表示未开启域名校验。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## entities

```TypeScript
readonly entities: Array<string>
```

Skill接收的[Entity集合]./../@ohos.ability.wantConstant:wantConstant.Entity。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## actions

```TypeScript
readonly actions: Array<string>
```

Skill接收的[Action集合]./../@ohos.ability.wantConstant:wantConstant.Action。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

