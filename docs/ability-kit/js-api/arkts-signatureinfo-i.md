# SignatureInfo

描述应用包的签名信息。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## appId

```TypeScript
readonly appId: string
```

应用的appId，表示应用的唯一标识，详情信息可参考[什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## certificate

```TypeScript
readonly certificate?: string
```

应用的证书公钥。

**Type:** string

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## fingerprint

```TypeScript
readonly fingerprint: string
```

应用包的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## appIdentifier

```TypeScript
readonly appIdentifier: string
```

应用的唯一标识。详情信息可参考[什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

