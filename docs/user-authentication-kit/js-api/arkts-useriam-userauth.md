# @ohos.userIAM.userAuth

The **userAuth** module provides APIs for user authentication, which applies to scenarios such as device unlocking, payment, and application login.

**Since:** 6

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAuthInstance](arkts-userauthentication-getauthinstance-f.md#getauthinstance-1) | Obtains an **AuthInstance** instance for user authentication. &gt; **NOTE** &gt; An **AuthInstance** instance can be used for authentication only once. |
| [getAuthLockState](arkts-userauthentication-getauthlockstate-f.md#getauthlockstate-1) | Queries the lockout state of the specified authentication type. This API uses a promise to return the result. |
| [getAuthenticator](arkts-userauthentication-getauthenticator-f.md#getauthenticator-1) | Obtains an **Authenticator** instance for user authentication. |
| [getAvailableStatus](arkts-userauthentication-getavailablestatus-f.md#getavailablestatus-1) | Checks whether the specified authentication capability is supported. |
| [getEnrolledState](arkts-userauthentication-getenrolledstate-f.md#getenrolledstate-1) | Obtains the credential state. |
| [getUserAuthInstance](arkts-userauthentication-getuserauthinstance-f.md#getuserauthinstance-1) | Obtains a [UserAuthInstance](arkts-userauthentication-userauthinstance-i.md#userauthinstance) instance for user authentication. The user authentication widget is also supported. &gt; **NOTE** &gt; Each **UserAuthInstance** can be used for authentication only once. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getUserAuthWidgetMgr](arkts-userauthentication-getuserauthwidgetmgr-f-sys.md#getuserauthwidgetmgr-1) | Obtains a **UserAuthWidgetMgr** instance for user authentication. &gt; **NOTE** &gt; A **UserAuthInstance** instance can be used for an authentication only once. |
| [queryReusableAuthResult](arkts-userauthentication-queryreusableauthresult-f-sys.md#queryreusableauthresult-1) | Queries whether there is any reusable identity authentication result. |
| [registerRemoteAuthCallback](arkts-userauthentication-registerremoteauthcallback-f-sys.md#registerremoteauthcallback-1) | Registers the callback for remote authentication. |
| [sendNotice](arkts-userauthentication-sendnotice-f-sys.md#sendnotice-1) | Sends a notification from the user authentication widget. |
| [unregisterRemoteAuthCallback](arkts-userauthentication-unregisterremoteauthcallback-f-sys.md#unregisterremoteauthcallback-1) | Unregisters the callback for remote authentication. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [UserAuth](arkts-userauthentication-userauth-c.md) | Provides APIs for managing the **UserAuth** object. |

### Interfaces

| Name | Description |
| --- | --- |
| [AuthEvent](arkts-userauthentication-authevent-i.md) | Provides an asynchronous callback to return the authentication event information. |
| [AuthInstance](arkts-userauthentication-authinstance-i.md) | Implements user authentication. |
| [AuthLockState](arkts-userauthentication-authlockstate-i.md) | Enumerates the lockout status of an identity authentication type. |
| [AuthParam](arkts-userauthentication-authparam-i.md) | Represents the user authentication parameters. |
| [AuthResult](arkts-userauthentication-authresult-i.md) | Represents the authentication result object. |
| [AuthResultInfo](arkts-userauthentication-authresultinfo-i.md) | Represents the authentication result. |
| [AuthTipInfo](arkts-userauthentication-authtipinfo-i.md) | Represents the intermediate authentication status. |
| [Authenticator](arkts-userauthentication-authenticator-i.md) | Provides APIs for managing the **Authenticator** object. |
| [EnrolledState](arkts-userauthentication-enrolledstate-i.md) | Represents the state of a credential enrolled. |
| [IAuthCallback](arkts-userauthentication-iauthcallback-i.md) | Provides callbacks to return the authentication result. |
| [IUserAuthCallback](arkts-userauthentication-iuserauthcallback-i.md) | Provides callbacks to return the authentication result. |
| [ReuseUnlockResult](arkts-userauthentication-reuseunlockresult-i.md) | Represents information about the authentication result reuse. &gt; **NOTE** &gt; If the credential changes within the reuse duration after a successful identity authentication (including device &gt; unlock authentication), the authentication result can still be reused and the actual **EnrolledState** is &gt; returned in the authentication result. If the credential used for the previous authentication has been deleted &gt; when the authentication result is used: - If the deleted credential is face or fingerprint, the authentication result can still be reused, but **credentialCount** and **credentialDigest** in the **EnrolledState** returned are both **0**. - If the deleted credential is a lock screen password, the reuse will fail. |
| [TipInfo](arkts-userauthentication-tipinfo-i.md) | Represents the tip information displayed during the authentication, which is used to provide feedback during the authentication process. |
| [UserAuthInstance](arkts-userauthentication-userauthinstance-i.md) | Provides APIs for user authentication. The user authentication widget is supported. Before using the APIs of **UserAuthInstance**, you must obtain a **UserAuthInstance** instance by using [getUserAuthInstance](arkts-userauthentication-getuserauthinstance-f.md#getuserauthinstance-1). |
| [UserAuthResult](arkts-userauthentication-userauthresult-i.md) | Represents the user authentication result. If the authentication is successful, the authentication type and token information are returned. |
| [WidgetParam](arkts-userauthentication-widgetparam-i.md) | Represents the information presented on the user authentication page. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AuthParam](arkts-userauthentication-authparam-i-sys.md) | Represents the user authentication parameters. |
| [IAuthWidgetCallback](arkts-userauthentication-iauthwidgetcallback-i-sys.md) | Provides the callback for returning the commands sent from the user authentication framework to the user authentication widget. |
| [IRemoteAuthCallback](arkts-userauthentication-iremoteauthcallback-i-sys.md) | Provides APIs for getting WidgetParam in remote authentication scenarios. |
| [UserAuthWidgetMgr](arkts-userauthentication-userauthwidgetmgr-i-sys.md) | Provides APIs for managing the user authentication widget. You can use the APIs to register the user authentication widget with UserAuthWidgetMgr for management and scheduling. |
| [WidgetParam](arkts-userauthentication-widgetparam-i-sys.md) | Represents the information presented on the user authentication page. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AuthTrustLevel](arkts-userauthentication-authtrustlevel-e.md) | Enumerates the trust levels of the authentication result. For typical use cases, see [Principles for Classifying Biometric Authentication Trust Levels](../../../../security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels) . |
| [AuthenticationResult](arkts-userauthentication-authenticationresult-e.md) | Enumerates the authentication results. |
| [FaceTips](arkts-userauthentication-facetips-e.md) | Enumerates the tip codes used during the facial authentication process. |
| [FingerprintTips](arkts-userauthentication-fingerprinttips-e.md) | Enumerates the tip codes used during the fingerprint authentication process. |
| [ResultCode](arkts-userauthentication-resultcode-e.md) | Enumerates the authentication result codes. |
| [ReuseMode](arkts-userauthentication-reusemode-e.md) | Enumerates the modes for reusing authentication results. |
| [UserAuthResultCode](arkts-userauthentication-userauthresultcode-e.md) | Enumerates the authentication result codes. |
| [UserAuthTipCode](arkts-userauthentication-userauthtipcode-e.md) | Enumerates the intermediate states of identity authentication. |
| [UserAuthType](arkts-userauthentication-userauthtype-e.md) | Enumerates the identity authentication types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [NoticeType](arkts-userauthentication-noticetype-e-sys.md) | Defines the type of the user authentication notification. |
| [UserAuthResultCode](arkts-userauthentication-userauthresultcode-e-sys.md) | Enumerates the authentication result codes. |
| [UserAuthType](arkts-userauthentication-userauthtype-e-sys.md) | Enumerates the identity authentication types. |
| [WindowModeType](arkts-userauthentication-windowmodetype-e-sys.md) | Enumerates the window types of the authentication widget. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AuthEventKey](arkts-userauthentication-autheventkey-t.md) | Defines the keyword of the authentication event type. It is used as a parameter of [on](arkts-userauthentication-authinstance-i.md#on). |
| [AuthTipCallback](arkts-userauthentication-authtipcallback-t.md) | Defines the callback to return the intermediate authentication status. |
| [AuthType](arkts-userauthentication-authtype-t.md) | Enumerates the authentication types. |
| [EventInfo](arkts-userauthentication-eventinfo-t.md) | Enumerates the authentication event information types. |
| [SecureLevel](arkts-userauthentication-securelevel-t.md) | Enumerates the authentication security levels. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ResultCallback](arkts-userauthentication-resultcallback-t-sys.md) | Called to return the authentication result. If the authentication is successful, UserAuthResult contains the token information. |
| [WidgetParamCallback](arkts-userauthentication-widgetparamcallback-t-sys.md) | Called to get the information presented on the user authentication page for remote authentication. |
<!--DelEnd-->

### Constants

| Name | Description |
| --- | --- |
| [MAX_ALLOWABLE_REUSE_DURATION](arkts-userauthentication-userauth-con.md#max_allowable_reuse_duration) | Maximum reuse duration of the authentication result, in milliseconds. The value is 300000. |
| [PERMANENT_LOCKOUT_DURATION](arkts-userauthentication-userauth-con.md#permanent_lockout_duration) | Permanent lockout duration, in milliseconds. The value is 0x7fffffff. |

