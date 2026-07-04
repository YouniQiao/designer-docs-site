---
last_update:
  date: 2026-07-04
---

# UserAuthTipCode

Enumerates the intermediate states of identity authentication.

**Since:** 20

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## COMPARE_FAILURE

```TypeScript
COMPARE_FAILURE = 1
```

The authentication failed.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TIMEOUT

```TypeScript
TIMEOUT = 2
```

The authentication has timed out.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TEMPORARILY_LOCKED

```TypeScript
TEMPORARILY_LOCKED = 3
```

The authentication is temporarily locked.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## PERMANENTLY_LOCKED

```TypeScript
PERMANENTLY_LOCKED = 4
```

The authentication is permanently locked.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## WIDGET_LOADED

```TypeScript
WIDGET_LOADED = 5
```

The identity authentication page is loaded.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## WIDGET_RELEASED

```TypeScript
WIDGET_RELEASED = 6
```

The current identity authentication page is switched to another authentication page or the identity authentication component is closed.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## COMPARE_FAILURE_WITH_FROZEN

```TypeScript
COMPARE_FAILURE_WITH_FROZEN = 7
```

Authentication is locked after a failed attempt.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

