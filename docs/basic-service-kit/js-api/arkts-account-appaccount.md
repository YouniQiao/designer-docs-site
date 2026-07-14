# @ohos.account.appAccount

The **appAccount** module provides APIs for adding, deleting, modifying, and querying application account information , and supports inter-application authentication and distributed data synchronization.

**Since:** 7

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAppAccountManager](arkts-basicservices-createappaccountmanager-f.md#createappaccountmanager-1) | Creates an **AppAccountManager** object. |

### Classes

| Name | Description |
| --- | --- |
| [Authenticator](arkts-basicservices-authenticator-c.md) | Provides APIs to operate the authenticator. |

### Interfaces

| Name | Description |
| --- | --- |
| [AppAccountInfo](arkts-basicservices-appaccountinfo-i.md) | Defines application account information. |
| [AppAccountManager](arkts-basicservices-appaccountmanager-i.md) | Defines the application account manager, which is used to manage account information of applications. |
| [AuthCallback](arkts-basicservices-authcallback-i.md) | Implements authenticator callbacks. |
| [AuthResult](arkts-basicservices-authresult-i.md) | Defines the authentication result. |
| [AuthTokenInfo](arkts-basicservices-authtokeninfo-i.md) | Defines authorization token information. |
| [AuthenticatorCallback](arkts-basicservices-authenticatorcallback-i.md) | Provides OAuth authenticator callbacks. &gt; **NOTE** &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [AuthCallback](arkts-basicservices-authcallback-i.md) instead. |
| [AuthenticatorInfo](arkts-basicservices-authenticatorinfo-i.md) | Defines OAuth authenticator information. |
| [CreateAccountImplicitlyOptions](arkts-basicservices-createaccountimplicitlyoptions-i.md) | Defines the options for implicitly creating an application account. |
| [CreateAccountOptions](arkts-basicservices-createaccountoptions-i.md) | Defines the options for creating an application account. |
| [OAuthTokenInfo](arkts-basicservices-oauthtokeninfo-i.md) | Defines authorization token information. &gt; **NOTE** &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. You are advised to use &gt; [AuthTokenInfo](arkts-basicservices-authtokeninfo-i.md) instead. |
| [SelectAccountsOptions](arkts-basicservices-selectaccountsoptions-i.md) | Defines the options for selecting accounts. |
| [SetPropertiesOptions](arkts-basicservices-setpropertiesoptions-i.md) | Represents the options for setting authenticator properties. |
| [VerifyCredentialOptions](arkts-basicservices-verifycredentialoptions-i.md) | Represents the options for verifying the user credential. |

### Enums

| Name | Description |
| --- | --- |
| [Constants](arkts-basicservices-constants-e.md) | Enumerates the constants. |
| [ResultCode](arkts-basicservices-resultcode-e.md) | Enumerates the result codes. &gt; **NOTE**<br> &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. For details, see &gt; [Account Management Error Codes](../../../../reference/apis-basic-services-kit/errorcode-account.md). |

