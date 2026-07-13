# Authenticator

Provides APIs to operate the authenticator.

**Since:** 8

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## addAccountImplicitly

```TypeScript
addAccountImplicitly(
      authType: string,
      callerBundleName: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void
```

Adds an application account implicitly based on the specified authentication type and options. This API uses an
asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [createAccountImplicitly](../../../../reference/apis-basic-services-kit/js-apis-appAccount.md#createaccountimplicitly9-2)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** createAccountImplicitly(options:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callerBundleName | string | Yes | Bundle name of the authentication requester. |
| options | { [key: string]: any } | Yes | Options for the authentication. |
| callback | AuthenticatorCallback | Yes | Authenticator callback used to return the result. |

## auth

```TypeScript
auth(name: string, authType: string, options: Record<string, Object>, callback: AuthCallback): void
```

Authenticates an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| options | Record&lt;string, Object&gt; | Yes | Options for the authentication. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

## authenticate

```TypeScript
authenticate(
      name: string,
      authType: string,
      callerBundleName: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void
```

Authenticates an application account to obtain the OAuth token. This API uses an asynchronous callback to return
the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [auth](../../../../reference/apis-basic-services-kit/js-apis-appAccount.md#auth9-2) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** auth(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callerBundleName | string | Yes | Bundle name of the authentication requester. |
| options | { [key: string]: any } | Yes | Options for the authentication. |
| callback | AuthenticatorCallback | Yes | Authenticator callback used to return the result. |

## checkAccountLabels

```TypeScript
checkAccountLabels(name: string, labels: Array<string>, callback: AuthCallback): void
```

Checks the account labels. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| labels | Array&lt;string&gt; | Yes | Labels to check. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Example**

This API must be used together with the getRemoteObject API. For details, see the example of the [getRemoteObject](#getremoteobject9) API.

## checkAccountRemovable

```TypeScript
checkAccountRemovable(name: string, callback: AuthCallback): void
```

Checks whether an application account can be deleted. This API uses an asynchronous callback to return the
result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Example**

This API must be used together with the getRemoteObject API. For details, see the example of the [getRemoteObject](#getremoteobject9) API.

## createAccountImplicitly

```TypeScript
createAccountImplicitly(options: CreateAccountImplicitlyOptions, callback: AuthCallback): void
```

Creates an application account implicitly based on the specified account owner. This API uses an asynchronous
callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CreateAccountImplicitlyOptions | Yes | Options for implicitly creating the account. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

## getRemoteObject

```TypeScript
getRemoteObject(): rpc.RemoteObject
```

Obtains the remote object of an authenticator. This API cannot be overloaded.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | Remote object of the authenticator, which is used for inter-process communication. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class MyAuthenticator extends appAccount.Authenticator {
  verifyCredential(name: string,
    options: appAccount.VerifyCredentialOptions, callback: appAccount.AuthCallback) {
      let want: Want = {
        bundleName: 'com.example.accountjsdemo',
        abilityName: 'com.example.accountjsdemo.VerifyAbility',
        parameters: {
          name: name
        }
      };
      callback.onRequestRedirected(want);
  }

  setProperties(options: appAccount.SetPropertiesOptions, callback: appAccount.AuthCallback) {
    let want: Want = {
      bundleName: 'com.example.accountjsdemo',
      abilityName: 'com.example.accountjsdemo.SetPropertiesAbility',
      parameters: {
        options: options
      }
    };
    callback.onRequestRedirected(want);
  }

  checkAccountLabels(name: string, labels: string[], callback: appAccount.AuthCallback) {
    callback.onResult(0);
  }

  checkAccountRemovable(name: string, callback: appAccount.AuthCallback) {
    callback.onResult(0);
  }
}

export default {
  onConnect(want: Want): rpc.RemoteObject { // serviceAbility lifecycle function, which needs to be placed in serviceAbility.
    let authenticator = new MyAuthenticator();
    return authenticator.getRemoteObject();
  }
}

```

## setProperties

```TypeScript
setProperties(options: SetPropertiesOptions, callback: AuthCallback): void
```

Sets the authenticator properties. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SetPropertiesOptions | Yes | Authenticator properties to set. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Example**

This API must be used together with the getRemoteObject API. For details, see the example of the [getRemoteObject](#getremoteobject9) API.

## verifyCredential

```TypeScript
verifyCredential(name: string, options: VerifyCredentialOptions, callback: AuthCallback): void
```

Verifies the credential of an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| options | VerifyCredentialOptions | Yes | Options for credential verification. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Example**

This API must be used together with the getRemoteObject API. For details, see the example of the [getRemoteObject](#getremoteobject9) API.

