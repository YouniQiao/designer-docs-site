# AppProvisionInfo

应用[HarmonyAppProvision配置文件](docroot://security/app-provision-structure.md)中的信息。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## developerId

```TypeScript
readonly developerId: string
```

配置文件中的开发者ID。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## organization

```TypeScript
readonly organization: string
```

应用的组织信息。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## certificate

```TypeScript
readonly certificate: string
```

配置文件中的证书信息。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## bundleName

```TypeScript
readonly bundleName?: string
```

应用的包名。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## validity

```TypeScript
readonly validity: Validity
```

配置文件中的有效期。

**Type:** Validity

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## appDistributionType

```TypeScript
readonly appDistributionType: string
```

配置文件中的[分发类型](docroot://security/app-provision-structure.md)。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## appIdentifier

```TypeScript
readonly appIdentifier: string
```

应用的唯一标识，详情信息可参考[什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## apl

```TypeScript
readonly apl: string
```

配置文件中的apl字段，为normal、system_basic和system_core其中之一。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## type

```TypeScript
readonly type: string
```

配置文件的类型，为debug或release。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## versionName

```TypeScript
readonly versionName: string
```

配置文件的版本名称。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## uuid

```TypeScript
readonly uuid: string
```

配置文件中的uuid。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## issuer

```TypeScript
readonly issuer: string
```

配置文件中的发行者名称。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## versionCode

```TypeScript
readonly versionCode: long
```

配置文件的版本号。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

