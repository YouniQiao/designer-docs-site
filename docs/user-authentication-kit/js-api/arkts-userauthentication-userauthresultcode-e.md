---
last_update:
  date: 2026-07-04
---

# UserAuthResultCode

Enumerates the authentication result codes.

**Since:** 9

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## SUCCESS

```TypeScript
SUCCESS = 12500000
```

The operation is successful. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## FAIL

```TypeScript
FAIL = 12500001
```

The authentication failed. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## GENERAL_ERROR

```TypeScript
GENERAL_ERROR = 12500002
```

A general operation error occurred. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CANCELED

```TypeScript
CANCELED = 12500003
```

The authentication is canceled. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TIMEOUT

```TypeScript
TIMEOUT = 12500004
```

The authentication has timed out. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TYPE_NOT_SUPPORT

```TypeScript
TYPE_NOT_SUPPORT = 12500005
```

The authentication type is not supported. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TRUST_LEVEL_NOT_SUPPORT

```TypeScript
TRUST_LEVEL_NOT_SUPPORT = 12500006
```

The authentication trust level is not supported. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## BUSY

```TypeScript
BUSY = 12500007
```

The system does not respond. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## INVALID_PARAMETERS

```TypeScript
INVALID_PARAMETERS = 12500008
```

Parameter verification failed. This API can be used in atomic services since API version 20.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## LOCKED

```TypeScript
LOCKED = 12500009
```

The authentication executor is locked. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## NOT_ENROLLED

```TypeScript
NOT_ENROLLED = 12500010
```

The user has not enrolled the specified system identity authentication credential. This API can be used in atomic services since API version 12.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CANCELED_FROM_WIDGET

```TypeScript
CANCELED_FROM_WIDGET = 12500011
```

The user cancels the system authentication and selects a custom authentication of the application. The caller needs to launch the custom authentication page. This API can be used in atomic services since API version 12.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## PIN_EXPIRED

```TypeScript
PIN_EXPIRED = 12500013
```

The authentication failed because the lock screen password has expired. This API can be used in atomic services since API version 12.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

