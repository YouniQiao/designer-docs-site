# Environment

Environment具体使用说明，详见[Environment(设备环境查询)](docroot://ui/state-management/arkts-environment.md) ###### 内置环境变量说明 | key | 类型 | 说明 | | -------------------- | --------------- | ------------------------------------------------------------ | | accessibilityEnabled | string | 无障碍屏幕朗读是否启用。当无法获取环境变量中的accessibilityEnabled的值时，将通过envProp、envProps等接口传入的开发者指定的默认值添加到AppStorage中。 | | colorMode | [ColorMode](@link ColorMode) | 深浅色模式，可选值为：<br/>- ColorMode.LIGHT：浅色模式；<br/>- ColorMode.DARK：深色模式。 | | fontScale | number | 字体大小比例。 | | fontWeightScale | number | 字重比例。 | | layoutDirection | [LayoutDirection](@link LayoutDirection) | 布局方向类型，可选值为：<br/>- LayoutDirection.LTR：从左到右；<br/>- LayoutDirection.RTL：从右到左。<br/>- Auto：跟随系统。 | | languageCode | string | 当前系统语言，小写字母，例如zh。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

构造函数。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## EnvProp

```TypeScript
static EnvProp<S>(key: string, value: S): boolean
```

将[Environment](docroot://ui/state-management/arkts-environment.md)的内置环境变量key存入 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回 true。如果AppStorage中已经有对应的key，则返回false。 所以建议在程序启动的时候调用该接口。 在没有调用EnvProp的情况下，就使用AppStorage读取环境变量是错误的。

**Since:** 7

**Deprecated since:** 10

**Substitute:** Environment#envProp

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 环境变量名称，支持的范围详见  [内置环境变量说明](@link Environment)。 |
| value | S | Yes | 查询不到环境变量key，则使用value作为默认值存入AppStorage中。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。 |

## envProp

```TypeScript
static envProp<S>(key: string, value: S): boolean
```

将[Environment](docroot://ui/state-management/arkts-environment.md)的内置环境变量key存入 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回 true。如果AppStorage中已经有对应的key，则返回false。 所以建议在程序启动的时候调用该接口。 在没有调用envProp的情况下，就使用AppStorage读取环境变量是错误的。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 环境变量名称，支持的范围详见  [内置环境变量说明](@link Environment)。 |
| value | S | Yes | 查询不到环境变量key时，则使用value作为默认值存入AppStorage中。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。 |

## EnvProps

```TypeScript
static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void
```

和[EnvProp](arkts-environment-c.md#EnvProp)类似，不同点在于参数为数组，可以一次性初始化多个数据。建议在应用启动时调用，将系统环境变量批量存入 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。

**Since:** 7

**Deprecated since:** 10

**Substitute:** Environment#envProps

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| props | {
      key: string;
      defaultValue: any;
    }[] | Yes |  |

## envProps

```TypeScript
static envProps(props: EnvPropsOptions[]): void
```

和[envProp](arkts-environment-c.md#envProp)类似，不同点在于参数为数组，可以一次性初始化多个数据。建议在应用启动时调用，将系统环境变量批量存入 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| props | EnvPropsOptions[] | Yes | 系统环境变量和默认值的键值对的数组。 |

## Keys

```TypeScript
static Keys(): Array<string>
```

返回环境变量的属性key的数组。

**Since:** 7

**Deprecated since:** 10

**Substitute:** Environment#keys

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回关联的系统项数组。 |

## keys

```TypeScript
static keys(): Array<string>
```

返回环境变量的属性key的数组。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回关联的系统项数组。 |

