# SendableResource

The **SendableResource** module provides sendable resource information, such as the application bundle name, application module name, and resource ID.

**Inheritance/Implementation:** SendableResource extends [lang.ISendable](../../apis-arkts/arkts-apis/arkts-arkts-isendable-i.md#isendable)

**Since:** 12

**System capability:** SystemCapability.Global.ResourceManager

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the application.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.ResourceManager

## id

```TypeScript
id: number
```

Resource ID. The value can be: <br>- Application resource range: [0x01000000, 0x06FFFFFF] and [0x08000000, 0xFFFFFFFF] <br>- System resource range: [0x07000000, 0x07FFFFFF]

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.ResourceManager

## moduleName

```TypeScript
moduleName: string
```

Module name of the application.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.ResourceManager

## params

```TypeScript
params?: collections.Array <string | number>
```

Other resource parameters, including the resource name, substitution value for the formatting API, and quantifier for the singular-plural formatting API.

**Type:** collections.Array <string | number>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.ResourceManager

## type

```TypeScript
type?: number
```

Resource type. The options are as follows: <br>- 10001: color <br>- 10002: float <br>- 10003: string <br>- 10004: plural <br>- 10005: boolean <br>- 10006: intarray <br>- 10007: integer <br>- 10008: pattern <br>- 10009: strarray <br>- 20000: media <br>- 30000: rawfile <br>- 40000: symbol

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.ResourceManager

