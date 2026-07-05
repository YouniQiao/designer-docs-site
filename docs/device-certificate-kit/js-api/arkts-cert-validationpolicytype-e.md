# ValidationPolicyType

```TypeScript
enum ValidationPolicyType
```

表示证书链在线校验策略的枚举。

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## VALIDATION_POLICY_TYPE_X509

```TypeScript
VALIDATION_POLICY_TYPE_X509 = 0
```

默认值，不需要校验证书中的sslHostname或dNSName。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## VALIDATION_POLICY_TYPE_SSL

```TypeScript
VALIDATION_POLICY_TYPE_SSL = 1
```

需要校验证书中的sslHostname字段。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

