# AuthInstance

Implements user authentication.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [UserAuthInstance](arkts-userauthentication-userauthinstance-i.md)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## cancel

```TypeScript
cancel: () => void
```

Cancels this authentication. > **NOTE** > > Use the [AuthInstance](arkts-userauthentication-authinstance-i.md) instance obtained to call this API. The > [AuthInstance](arkts-userauthentication-authinstance-i.md) instance must be the instance being authenticated.

**Type:** () => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [cancel](arkts-userauthentication-userauthinstance-i.md#cancel-1)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## off

```TypeScript
off: (name: AuthEventKey) => void
```

Unsubscribes from the user authentication events of the specified type. - **name**: indicates the authentication event type. The value **result** means to unsubscribe from the authentication result, and the value **tip** means to unsubscribe from the authentication tip information. For details, see [AuthEventKey](arkts-userauthentication-autheventkey-t.md). > **NOTE** > > The [AuthInstance](arkts-userauthentication-authinstance-i.md) instance used to invoke this API must be the one used to > subscribe to the event.

**Type:** (name: AuthEventKey) => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## on

```TypeScript
on: (name: AuthEventKey, callback: AuthEvent) => void
```

Subscribes to the user authentication events of the specified type. - **name**: indicates the authentication event type. The value **result** means that the callback returns the authentication result, and the value **tip** means that the callback returns the authentication tip information. For details, see [AuthEventKey](arkts-userauthentication-autheventkey-t.md). - **callback**: callback used to return the authentication result or tip information. For details, see [AuthEvent](arkts-userauthentication-authevent-i.md). > **NOTE** > > Use the [AuthInstance](arkts-userauthentication-authinstance-i.md) instance obtained to call this API.

**Type:** (name: AuthEventKey, callback: AuthEvent) => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** on

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## start

```TypeScript
start: () => void
```

Starts authentication. > **NOTE** > > Use the [AuthInstance](arkts-userauthentication-authinstance-i.md) instance obtained to call this API.

**Type:** () => void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [start](arkts-userauthentication-userauthinstance-i.md#start-1)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

