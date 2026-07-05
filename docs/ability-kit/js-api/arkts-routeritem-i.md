# RouterItem

描述模块配置的路由表信息。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## buildFunction

```TypeScript
readonly buildFunction: string
```

标识被@Builder修饰的函数，该函数描述页面的UI。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## data

```TypeScript
readonly data: Array<DataItem>
```

标识[路由表配置文件](docroot://quick-start/module-configuration-file.md#routermap标签)中的字符串自定义数据，即data字段的信息，该字段已由系统解析，无需开发者自行解 析。

**Type:** Array<DataItem>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## name

```TypeScript
readonly name: string
```

标识跳转页面的名称。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## customData

```TypeScript
readonly customData: string
```

标识[路由表配置文件](docroot://quick-start/module-configuration-file.md#routermap标签)中的任意类型的自定义数据，即customData字段的JSON字符串，开发者需要 调用JSON.parse函数解析出具体内容。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## pageSourceFile

```TypeScript
readonly pageSourceFile: string
```

标识页面在模块内的路径。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

