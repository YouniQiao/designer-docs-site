# @ohos.account.osAccount

The **osAccount** module provides basic capabilities for managing system (OS) accounts, including adding, deleting, querying, setting, subscribing to, and enabling an OS account.

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAccountManager](arkts-basicservices-getaccountmanager-f.md#getaccountmanager-1) | Obtains an **AccountManager** instance. |
| [isDomainAccountSupported](arkts-basicservices-isdomainaccountsupported-f.md#isdomainaccountsupported-1) | Checks whether this domain account is supported. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getAuthorizationManager](arkts-basicservices-getauthorizationmanager-f-sys.md#getauthorizationmanager-1) | Obtains this OS account authorization manager. |
| [getOsAccountSubProfileManager](arkts-basicservices-getosaccountsubprofilemanager-f-sys.md#getosaccountsubprofilemanager-1) | Obtains an OS account sub-profile manager instance. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [DomainAccountManager](arkts-basicservices-domainaccountmanager-c.md) | Provides APIs for domain account management. |
| [DomainServerConfigManager](arkts-basicservices-domainserverconfigmanager-c.md) | Provides APIs for domain server configuration and management. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [DomainAccountManager](arkts-basicservices-domainaccountmanager-c-sys.md) | Provides APIs for domain account management. |
| [InputerManager](arkts-basicservices-inputermanager-c-sys.md) | Provides APIs for managing credential inputers. |
| [PINAuth](arkts-basicservices-pinauth-c-sys.md) | Provides APIs for PIN authentication. |
| [UserAuth](arkts-basicservices-userauth-c-sys.md) | Provides APIs for user authentication. |
| [UserIdentityManager](arkts-basicservices-useridentitymanager-c-sys.md) | Provides APIs for user IDM. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AccountManager](arkts-basicservices-accountmanager-i.md) | Provides APIs for managing OS accounts. |
| [CreateOsAccountForDomainOptions](arkts-basicservices-createosaccountfordomainoptions-i.md) | Represents a set of optional parameters for creating an OS account bound to the specified domain account. It inherits from [CreateOsAccountOptions](arkts-basicservices-createosaccountoptions-i-sys.md). |
| [DomainAccountInfo](arkts-basicservices-domainaccountinfo-i.md) | Represents the domain account information. |
| [DomainServerConfig](arkts-basicservices-domainserverconfig-i.md) | Represents the configuration of a domain server. |
| [OsAccountInfo](arkts-basicservices-osaccountinfo-i.md) | Represents information about an OS account. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AccountManager](arkts-basicservices-accountmanager-i-sys.md) | Provides APIs for managing OS accounts. |
| [AcquireAuthorizationOptions](arkts-basicservices-acquireauthorizationoptions-i-sys.md) | Defines the options for acquiring the authorization. |
| [AcquireAuthorizationResult](arkts-basicservices-acquireauthorizationresult-i-sys.md) | Defines the result of the authorization. |
| [AuthOptions](arkts-basicservices-authoptions-i-sys.md) | Represents a set of optional parameters for [auth](arkts-basicservices-userauth-c-sys.md#auth-2). |
| [AuthResult](arkts-basicservices-authresult-i-sys.md) | Defines the authentication result information. |
| [AuthStatusInfo](arkts-basicservices-authstatusinfo-i-sys.md) | Presents the authentication status information. |
| [AuthorizationManager](arkts-basicservices-authorizationmanager-i-sys.md) | Defines the OS account authorization manager class. |
| [ConstraintChangeInfo](arkts-basicservices-constraintchangeinfo-i-sys.md) | Defines the constraint change information. |
| [ConstraintSourceTypeInfo](arkts-basicservices-constraintsourcetypeinfo-i-sys.md) | Defines the constraint source type. |
| [CreateOsAccountOptions](arkts-basicservices-createosaccountoptions-i-sys.md) | Represents the optional parameter used to create an OS account. |
| [CredentialChangeInfo](arkts-basicservices-credentialchangeinfo-i-sys.md) | Defines the credential change information. |
| [CredentialInfo](arkts-basicservices-credentialinfo-i-sys.md) | Defines the credential information. |
| [DomainAccountAuthOptions](arkts-basicservices-domainaccountauthoptions-i-sys.md) | Defines the options for domain account authentication. |
| [DomainAccountInfo](arkts-basicservices-domainaccountinfo-i-sys.md) | Represents the domain account information. |
| [DomainPlugin](arkts-basicservices-domainplugin-i-sys.md) | Provides APIs for domain account authentication. |
| [EnrolledCredInfo](arkts-basicservices-enrolledcredinfo-i-sys.md) | Defines enrolled credential information. |
| [ExecutorProperty](arkts-basicservices-executorproperty-i-sys.md) | Defines the executor property. |
| [GetAuthInfoOptions](arkts-basicservices-getauthinfooptions-i-sys.md) | Represents a set of optional parameters for [GetAuthInfo](arkts-basicservices-useridentitymanager-c-sys.md#getauthinfo-4). |
| [GetDomainAccessTokenOptions](arkts-basicservices-getdomainaccesstokenoptions-i-sys.md) | Defines the options for obtaining a domain access token. |
| [GetDomainAccountInfoOptions](arkts-basicservices-getdomainaccountinfooptions-i-sys.md) | Defines the options for obtaining domain account information. |
| [GetDomainAccountInfoPluginOptions](arkts-basicservices-getdomainaccountinfopluginoptions-i-sys.md) | Defines the options for the domain plug-in to obtain the domain account information. The **GetDomainAccountInfoPluginOptions** class inherits from [**GetDomainAccountInfoOptions**](arkts-basicservices-getdomainaccountinfooptions-i-sys.md). |
| [GetInputDataOptions](arkts-basicservices-getinputdataoptions-i-sys.md) | Represents a set of optional parameters for [onGetData](../../../../reference/apis-basic-services-kit/js-apis-osAccount-sys.md#ongetdata8). |
| [GetPropertyRequest](arkts-basicservices-getpropertyrequest-i-sys.md) | Defines the request for obtaining property information. |
| [IIdmCallback](arkts-basicservices-iidmcallback-i-sys.md) | Provides callbacks for IDM. |
| [IInputData](arkts-basicservices-iinputdata-i-sys.md) | Provides callbacks for PIN operations. |
| [IInputer](arkts-basicservices-iinputer-i-sys.md) | Provides callbacks for credential inputers. |
| [IUserAuthCallback](arkts-basicservices-iuserauthcallback-i-sys.md) | Provides callbacks for user authentication. |
| [OsAccountInfo](arkts-basicservices-osaccountinfo-i-sys.md) | Represents information about an OS account. |
| [OsAccountSubProfile](arkts-basicservices-osaccountsubprofile-i-sys.md) | Definition of an OS account sub-profile. |
| [OsAccountSubProfileEventData](arkts-basicservices-osaccountsubprofileeventdata-i-sys.md) | Represents the event data of an OS account sub-profile. |
| [OsAccountSubProfileManager](arkts-basicservices-osaccountsubprofilemanager-i-sys.md) | Defines the OS account sub-profile manager class. |
| [OsAccountSwitchEventData](arkts-basicservices-osaccountswitcheventdata-i-sys.md) | Defines the event that indicates the start or end of a foreground-background OS account switchover. |
| [RemoteAuthOptions](arkts-basicservices-remoteauthoptions-i-sys.md) | Represents a set of optional parameters for remote authentication. |
| [RemoveOsAccountOptions](arkts-basicservices-removeosaccountoptions-i-sys.md) | Represents the optional parameter used to remove an OS account. |
| [RequestResult](arkts-basicservices-requestresult-i-sys.md) | Defines the request result information. |
| [SetOsAccountTypeOptions](arkts-basicservices-setosaccounttypeoptions-i-sys.md) | Defines the options for setting the OS account type. |
| [SetPropertyRequest](arkts-basicservices-setpropertyrequest-i-sys.md) | Defines the request for setting property information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [OsAccountType](arkts-basicservices-osaccounttype-e.md) | Enumerates the OS account types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuthIntent](arkts-basicservices-authintent-e-sys.md) | Enumerates the authentication intents. |
| [AuthSubType](arkts-basicservices-authsubtype-e-sys.md) | Enumerates the authentication credential subtypes. |
| [AuthTrustLevel](arkts-basicservices-authtrustlevel-e-sys.md) | Enumerates the trust levels of the authentication result. |
| [AuthType](arkts-basicservices-authtype-e-sys.md) | Enumerates the authentication credential types. |
| [AuthorizationResultCode](arkts-basicservices-authorizationresultcode-e-sys.md) | Enumerates authorization result codes. |
| [ConstraintSourceType](arkts-basicservices-constraintsourcetype-e-sys.md) | Enumerates the constraint sources. |
| [CredentialChangeType](arkts-basicservices-credentialchangetype-e-sys.md) | Enumerates the credential change types. |
| [FaceTipsCode](arkts-basicservices-facetipscode-e-sys.md) | Enumerates the tip codes for facial authentication. |
| [FingerprintTips](arkts-basicservices-fingerprinttips-e-sys.md) | Enumerates the tip codes for fingerprint authentication. |
| [GetPropertyType](arkts-basicservices-getpropertytype-e-sys.md) | Enumerates the types of properties to obtain. |
| [Module](arkts-basicservices-module-e-sys.md) | Enumerates the modules from which information is obtained. |
| [OsAccountSubProfileEvent](arkts-basicservices-osaccountsubprofileevent-e-sys.md) | Enumerates the events of an OS account sub-profile. |
| [OsAccountType](arkts-basicservices-osaccounttype-e-sys.md) | Enumerates the OS account types. |
| [ResultCode](arkts-basicservices-resultcode-e-sys.md) | Enumerates the authentication result codes. |
| [SetPropertyType](arkts-basicservices-setpropertytype-e-sys.md) | Enumerates the types of properties to set. |
<!--DelEnd-->

