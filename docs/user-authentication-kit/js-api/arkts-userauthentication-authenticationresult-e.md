# AuthenticationResult

Enumerates the authentication results.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** [UserAuthResultCode](arkts-userauthentication-userauthresultcode-e.md#userauthresultcode)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## NO_SUPPORT

```TypeScript
NO_SUPPORT = -1
```

The device does not support the current authentication mode.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** TYPE_NOT_SUPPORT

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## SUCCESS

```TypeScript
SUCCESS = 0
```

The authentication is successful.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** SUCCESS

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## COMPARE_FAILURE

```TypeScript
COMPARE_FAILURE = 1
```

The feature comparison failed.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** FAIL

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CANCELED

```TypeScript
CANCELED = 2
```

The authentication was canceled by the user.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** CANCELED

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## TIMEOUT

```TypeScript
TIMEOUT = 3
```

The authentication has timed out.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** TIMEOUT

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## CAMERA_FAIL

```TypeScript
CAMERA_FAIL = 4
```

The camera failed to start.

**Since:** 6

**Deprecated since:** 8

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## BUSY

```TypeScript
BUSY = 5
```

The authentication service is not available. Try again later.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** BUSY

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## INVALID_PARAMETERS

```TypeScript
INVALID_PARAMETERS = 6
```

The authentication parameters are invalid.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** INVALID_PARAMETERS

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## LOCKED

```TypeScript
LOCKED = 7
```

The user account is locked because the number of authentication failures has reached the threshold.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** LOCKED

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## NOT_ENROLLED

```TypeScript
NOT_ENROLLED = 8
```

No authentication credential is registered.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** NOT_ENROLLED

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## GENERAL_ERROR

```TypeScript
GENERAL_ERROR = 100
```

Other errors.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** GENERAL_ERROR

**System capability:** SystemCapability.UserIAM.UserAuth.Core

