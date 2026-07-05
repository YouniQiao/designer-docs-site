# Resource

本模块提供资源相关信息，包括应用包名、应用模块名、资源id等。

**Since:** 9

**System capability:** SystemCapability.Global.ResourceManager

## moduleName

```TypeScript
moduleName: string
```

应用的module名称。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

## bundleName

```TypeScript
bundleName: string
```

应用的bundle名称。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

## id

```TypeScript
id: long
```

资源的id值，取值如下： <br>- 应用资源区间：[0x01000000, 0x06FFFFFF] 和 [0x08000000, 0xFFFFFFFF] <br>- 系统资源区间：[0x07000000, 0x07FFFFFF]

**Type:** long

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

## type

```TypeScript
type?: int
```

资源的类型，取值如下： <br>- 10001：color <br>- 10002：float <br>- 10003：string <br>- 10004：plural <br>- 10005：boolean <br>- 10006：intarray <br>- 10007：integer <br>- 10008：pattern <br>- 10009：strarray <br>- 20000：media <br>- 30000：rawfile <br>- 40000：symbol

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

## params

```TypeScript
params?: any[]
```

其他资源参数，包括资源名、格式化接口的替换值、复数接口的量词。

**Type:** any[]

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

```TypeScript
params?: Array<string | int | long | double | Resource>
```

Set params.

**Type:** Array<string | int | long | double | Resource>

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.ResourceManager

