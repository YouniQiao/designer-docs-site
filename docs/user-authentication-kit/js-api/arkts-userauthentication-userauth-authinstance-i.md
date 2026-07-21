# AuthInstance

Implements user authentication.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [UserAuthInstance](arkts-userauthentication-userauth-userauthinstance-i.md)

<!--Device-userAuth-interface AuthInstance--><!--Device-userAuth-interface AuthInstance-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## cancel

```TypeScript
cancel: () => void
```

Cancels this authentication.

> **NOTE**  
>  
> Use the [AuthInstance](arkts-userauthentication-userauth-authinstance-i.md) instance obtained to call this API. The  
> [AuthInstance](arkts-userauthentication-userauth-authinstance-i.md) instance must be the instance being authenticated.

**Type:** () =&gt; void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [cancel](arkts-userauthentication-userauth-userauthinstance-i.md#cancel-1)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

<!--Device-AuthInstance-cancel: () => void--><!--Device-AuthInstance-cancel: () => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## off

```TypeScript
off: (name: AuthEventKey) => void
```

Unsubscribes from the user authentication events of the specified type.

- **name**: indicates the authentication event type. The value **result** means to unsubscribe from the authentication result, and the value **tip** means to unsubscribe from the authentication tip information. For details, see [AuthEventKey](arkts-userauthentication-userauth-autheventkey-t.md).

> **NOTE**  
>  
> The [AuthInstance](arkts-userauthentication-userauth-authinstance-i.md) instance used to invoke this API must be the one used to  
> subscribe to the event.

**Type:** (name: AuthEventKey) =&gt; void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** off

<!--Device-AuthInstance-off: (name: AuthEventKey) => void--><!--Device-AuthInstance-off: (name: AuthEventKey) => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## on

```TypeScript
on: (name: AuthEventKey, callback: AuthEvent) => void
```

Subscribes to the user authentication events of the specified type.

- **name**: indicates the authentication event type. The value **result** means that the callback returns the authentication result, and the value **tip** means that the callback returns the authentication tip information.For details, see [AuthEventKey](arkts-userauthentication-userauth-autheventkey-t.md).  
- **callback**: callback used to return the authentication result or tip information. For details, see [AuthEvent](arkts-userauthentication-userauth-authevent-i.md).

> **NOTE**  
>  
> Use the [AuthInstance](arkts-userauthentication-userauth-authinstance-i.md) instance obtained to call this API.

**Type:** (name: AuthEventKey, callback: AuthEvent) =&gt; void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** on

<!--Device-AuthInstance-on: (name: AuthEventKey, callback: AuthEvent) => void--><!--Device-AuthInstance-on: (name: AuthEventKey, callback: AuthEvent) => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## start

```TypeScript
start: () => void
```

Starts authentication.

> **NOTE**  
>  
> Use the [AuthInstance](arkts-userauthentication-userauth-authinstance-i.md) instance obtained to call this API.

**Type:** () =&gt; void

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [start](arkts-userauthentication-userauth-userauthinstance-i.md#start-1)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

<!--Device-AuthInstance-start: () => void--><!--Device-AuthInstance-start: () => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

