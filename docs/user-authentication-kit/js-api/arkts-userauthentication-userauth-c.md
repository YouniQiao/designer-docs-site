# UserAuth

Provides APIs for managing the **UserAuth** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [AuthInstance](arkts-userauthentication-authinstance-i.md#authinstance)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## auth

```TypeScript
auth(
      challenge: Uint8Array,
      authType: UserAuthType,
      authTrustLevel: AuthTrustLevel,
      callback: IUserAuthCallback
    ): Uint8Array
```

Starts user authentication. This API uses a callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [start](arkts-userauthentication-authinstance-i.md#start)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| challenge | Uint8Array | Yes | Challenge value, which can be passed in Uint8Array([]) format. |
| authType | UserAuthType | Yes | Authentication type. Currently, **FACE** and **FINGERPRINT** are supported. |
| authTrustLevel | AuthTrustLevel | Yes | Authentication trust level. |
| callback | IUserAuthCallback | Yes | Callback used to return the result. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Context ID, which is used as the input parameter of[cancelAuth](arkts-userauthentication-userauth-c.md#cancelauth-1). |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let auth = new userAuth.UserAuth();
let challenge = new Uint8Array([]);
auth.auth(challenge, userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL1, {
  onResult: (result, extraInfo) => {
    try {
      console.info(`auth onResult result = ${result}`);
      if (result == userAuth.ResultCode.SUCCESS) {
        // Add the logic to be executed when the authentication is successful.
      } else {
        // Add the logic to be executed when the authentication fails.
      }
    } catch (error) {
      console.error(`auth onResult failed, error = ${error}`);
    }
  }
});

```

## cancelAuth

```TypeScript
cancelAuth(contextID: Uint8Array): number
```

Cancels the authentication based on the context ID.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [cancel](arkts-userauthentication-authinstance-i.md#cancel)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contextID | Uint8Array | Yes | Context ID, which is obtained by [auth](arkts-userauthentication-userauth-c.md#auth-1). |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **SUCCESS** if the cancellation is successful. Returns a[ResultCode](arkts-userauthentication-resultcode-e.md#resultcode) otherwise. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

// contextId can be obtained via auth(). In this example, it is defined here.
let contextId = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]);
let auth = new userAuth.UserAuth();
let cancelCode = auth.cancelAuth(contextId);
if (cancelCode == userAuth.ResultCode.SUCCESS) {
  console.info('cancel auth successfully.');
} else {
  console.error('cancel auth failed.');
}

```

## constructor

```TypeScript
constructor()
```

A constructor used to create a **UserAuth** instance.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAuthInstance](arkts-userauthentication-getauthinstance-f.md#getauthinstance-1)

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let auth = new userAuth.UserAuth();

```

## getAvailableStatus

```TypeScript
getAvailableStatus(authType: UserAuthType, authTrustLevel: AuthTrustLevel): number
```

Checks whether the specified authentication capability is supported.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAvailableStatus](arkts-userauthentication-getavailablestatus-f.md#getavailablestatus-1)

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | UserAuthType | Yes | Authentication type. Currently, **FACE** and **FINGERPRINT** are supported. |
| authTrustLevel | AuthTrustLevel | Yes | Authentication trust level. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Query result. If the authentication capability is supported, **SUCCESS** is returned.Otherwise, a [ResultCode](arkts-userauthentication-resultcode-e.md#resultcode) is returned. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let auth = new userAuth.UserAuth();
let checkCode = auth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL1);
if (checkCode == userAuth.ResultCode.SUCCESS) {
  console.info('check auth support successfully.');
} else {
  console.error(`check auth support failed, code = ${checkCode}`);
}

```

## getVersion

```TypeScript
getVersion(): number
```

Obtains the version of this authenticator.

**Since:** 8

**Deprecated since:** 9

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Authenticator version obtained. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

let auth = new userAuth.UserAuth();
let version = auth.getVersion();
console.info(`auth version = ${version}`);

```

