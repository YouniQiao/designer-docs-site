# AuthTokenType

```TypeScript
enum AuthTokenType
```

认证令牌类型枚举。该枚举定义了认证令牌的类型，用于标识令牌的签发来源。

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## TOKEN_TYPE_LOCAL_AUTH

```TypeScript
TOKEN_TYPE_LOCAL_AUTH = 0
```

本地认证令牌。基于本地认证结果签发的身份验证令牌，表示用户在本设备上完成了身份认证。

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## TOKEN_TYPE_LOCAL_RESIGN

```TypeScript
TOKEN_TYPE_LOCAL_RESIGN = 1
```

本地重签令牌。基于复用的身份认证结果重新签发的身份验证令牌，表示本次认证结果是从之前的认证结果复用而来。

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## TOKEN_TYPE_COAUTH

```TypeScript
TOKEN_TYPE_COAUTH = 2
```

协同认证令牌。基于多个设备协同认证结果签发的身份验证令牌，表示用户通过多设备协同完成了身份认证。

**Since:** 18

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

