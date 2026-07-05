# SkillUri

Want匹配的Uri集合。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## maxFileSupported

```TypeScript
readonly maxFileSupported: int
```

对于指定类型的文件，标识一次能接收或打开的最大数量。取值范围：不小于0的整数。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## pathStartWith

```TypeScript
readonly pathStartWith: string
```

标识 URI 路径部分，用于前缀匹配，仅当 scheme 和 host 同时存在时才生效。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## path

```TypeScript
readonly path: string
```

标识 URI 路径部分，仅当 scheme 和 host 同时存在时才生效。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## pathRegex

```TypeScript
readonly pathRegex: string
```

标识 URI 路径部分，用于正则匹配，仅当 scheme 和 host 同时存在时才生效。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## utd

```TypeScript
readonly utd: string
```

标识与 Want 相匹配的 URI 的标准化数据类型，适用于分享等场景。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## scheme

```TypeScript
readonly scheme: string
```

标识 URI 协议名，常见的有http、https、file、ftp等。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## port

```TypeScript
readonly port: int
```

标识 URI 端口，仅当 scheme 和 host 同时存在时才生效。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

```TypeScript
readonly port: string
```

Indicates the port of the skillUri

**Type:** string

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## linkFeature

```TypeScript
readonly linkFeature: string
```

标识 URI 提供的[功能类型](docroot://application-models/app-uri-config.md#linkfeature标签说明)，用于实现应用间跳转，仅在AbilityInfo中存在。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## host

```TypeScript
readonly host: string
```

标识 URI 主机地址部分，仅当 scheme 存在时才生效。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## type

```TypeScript
readonly type: string
```

标识与Want相匹配的数据类型，使用MIME（Multipurpose?Internet?Mail?Extensions）类型规范和 [UniformDataType]./../@ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType类型规范。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

