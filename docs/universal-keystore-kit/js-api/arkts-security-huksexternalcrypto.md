# @ohos.security.huksExternalCrypto

Provides the functionalities such as registration and deregistration of external key management extension, PIN
authentication, and acquisition of authentication state.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [clearUkeyPinAuthState](arkts-universalkeystore-clearukeypinauthstate-f.md#clearukeypinauthstate-1) | Clear the PIN auth state of the specified resource ID. |
| [closeResource](arkts-universalkeystore-closeresource-f.md#closeresource-1) | Close the resource with a specific resource ID. |
| [getErrorInfo](arkts-universalkeystore-geterrorinfo-f.md#geterrorinfo-1) | Get the detailed error information. |
| [getProperty](arkts-universalkeystore-getproperty-f.md#getproperty-1) | Obtains a property value. This API uses a promise to return the result.The **propertyId** indicates the ID of the property to be queried. Currently, only the SKF API names defined in GMT0016-2023 can be used as property IDs. The supported IDs are as follows:- SKF_EnumDev- SKF_GetDevInfo- SKF_EnumApplication- SKF_EnumContainer |
| [getResourceId](arkts-universalkeystore-getresourceid-f.md#getresourceid-1) | Obtain the resource ID of the provider. |
| [getUkeyPinAuthState](arkts-universalkeystore-getukeypinauthstate-f.md#getukeypinauthstate-1) | Obtains the PIN authentication state. This API uses a promise to return the result. |
| [openResource](arkts-universalkeystore-openresource-f.md#openresource-1) | Open resource by specific resource ID.NOTE: The opened resource must be closed using closeResource. |
| [registerProvider](arkts-universalkeystore-registerprovider-f.md#registerprovider-1) | Registers a specified external Provider. This API uses a promise to return the result. |
| [setProperty](arkts-universalkeystore-setproperty-f.md#setproperty-1) | The set-type operations of the external crypto extension support calling custom interfaces.However, the custom interface must be registered with the provider. |
| [unregisterProvider](arkts-universalkeystore-unregisterprovider-f.md#unregisterprovider-1) | Unregisters a specified external Provider. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [authUkeyPin](arkts-universalkeystore-authukeypin-f-sys.md#authukeypin-1) | Authenticates a UKey PIN. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [HuksExternalCryptoParam](arkts-universalkeystore-huksexternalcryptoparam-i.md) | Defines the type of the param array used for calling the API. |
| [HuksExternalErrorInfo](arkts-universalkeystore-huksexternalerrorinfo-i.md) | Defines detailed error information. |

### Enums

| Name | Description |
| --- | --- |
| [HuksExternalCryptoTag](arkts-universalkeystore-huksexternalcryptotag-e.md) | Enumerates the tags used to invoke parameters. |
| [HuksExternalCryptoTagType](arkts-universalkeystore-huksexternalcryptotagtype-e.md) | Enumerates the external encrypted data types. |
| [HuksExternalPinAuthState](arkts-universalkeystore-huksexternalpinauthstate-e.md) | Enumerates the Ukey PIN authentication states. |

