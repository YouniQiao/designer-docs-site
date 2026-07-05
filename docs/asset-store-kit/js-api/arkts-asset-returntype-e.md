# ReturnType

```TypeScript
enum ReturnType
```

枚举，关键资产查询返回的结果类型。

**Since:** 11

**System capability:** SystemCapability.Security.Asset

## ALL

```TypeScript
ALL = 0
```

返回关键资产明文及属性。 **说明：** 查询单条关键资产明文时，需设置此类型。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## ATTRIBUTES

```TypeScript
ATTRIBUTES = 1
```

返回关键资产属性，不含关键资产明文。 **说明：** 批量查询关键资产属性时，需设置此类型。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

