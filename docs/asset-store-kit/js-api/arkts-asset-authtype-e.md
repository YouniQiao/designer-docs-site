# AuthType

```TypeScript
enum AuthType
```

枚举，关键资产支持的用户认证类型。

**Since:** 11

**System capability:** SystemCapability.Security.Asset

## NONE

```TypeScript
NONE = 0x00
```

访问关键资产前无需用户认证。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

## PRIVATE_PIN

```TypeScript
PRIVATE_PIN = 0x100
```

隐私PIN码仅支持系统应用

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## ANY

```TypeScript
ANY = 0xFF
```

任意一种用户认证方式（PIN码、人脸、指纹等）通过后，均可访问关键资产。

**Since:** 11

**Atomic service API:** From API version 14 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Asset

