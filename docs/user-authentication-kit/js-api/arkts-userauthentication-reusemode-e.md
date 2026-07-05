# ReuseMode

Enumerates the modes for reusing authentication results.

**Since:** 12

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## AUTH_TYPE_RELEVANT

```TypeScript
AUTH_TYPE_RELEVANT = 1
```

The device unlock authentication result can be reused within the validity period if the authentication type matches any of the authentication types specified for this authentication. This API can be used in atomic services since API version 12.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## AUTH_TYPE_IRRELEVANT

```TypeScript
AUTH_TYPE_IRRELEVANT = 2
```

The device unlock authentication result can be reused within the validity period regardless of the authentication type. This API can be used in atomic services since API version 12.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT

```TypeScript
CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT = 3
```

Any identity authentication result (including device unlock authentication result) can be reused within the validity period if the authentication type matches any of the authentication types specified for this authentication. This API can be used in atomic services since API version 14.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CALLER_IRRELEVANT_AUTH_TYPE_IRRELEVANT

```TypeScript
CALLER_IRRELEVANT_AUTH_TYPE_IRRELEVANT = 4
```

Any identity authentication result (including device unlock authentication result) can be reused within the validity period regardless of the authentication type. This API can be used in atomic services since API version 14.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

