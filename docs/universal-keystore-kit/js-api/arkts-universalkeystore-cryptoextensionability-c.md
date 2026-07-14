# CryptoExtensionAbility

Class to be override for external crypto extension ability.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo, HuksCryptoExtensionResultCode, HuksCryptoExtensionParams, HuksCryptoExtensionParam, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';
```

## onAuthUkeyPin

```TypeScript
onAuthUkeyPin(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to be called to verify PIN of the provider handle.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | handle indicates the handle opened by onOpenResource. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | Yes | params indicatesthe properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey.34800006 - The UKey PIN is not correct. Please check the PIN you entered.34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded. |

## onClearUkeyPinAuthState

```TypeScript
onClearUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to clear the PIN auth state of the provider handle.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | handle indicates the handle opened by onOpenResource. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | Yes | params indicatesthe properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onCloseResource

```TypeScript
onCloseResource(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to be called to close the resource handle.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | handle indicates the handle opened by onOpenResource. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | Yes | paramsindicates the properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onEnumCertificates

```TypeScript
onEnumCertificates(params?: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]):
      Promise<HuksCryptoExtensionResult>
```

Callback to list all certificates of the provider.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | No | paramsindicates the properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800001 - The UKey does not exist. Possible causes:1. The UKey has been removed.2. The crypto extension maintained an error UKey state.34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status. |

## onExportCertificate

```TypeScript
onExportCertificate(resourceId: string, params?: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to export certificates specified by the resource id.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceId | string | Yes | resourceId indicates the resource id of the extension. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | No | paramsindicates the properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800001 - The UKey does not exist. Possible causes:1. The UKey has been removed.2. The crypto extension maintained an error UKey state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800004 - The resourceId does not exist. This indicates that the resourceId hasan incorrect device name, application name, or container name. |

## onExportKeyItem

```TypeScript
onExportKeyItem(handle: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to export the public key specified by the resource handle.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | Indicates the resource handle of the key to be exported. |
| params | HuksCryptoExtensionParam[] | Yes | Indicates the needed properties ofthe export public key operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.If the function execution fails, the extension needs to set the detailed error information inHuksCryptoExtensionResult.errInfo.HuksCryptoExtensionResult.resultCode may have the following values.0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onFinishSession

```TypeScript
onFinishSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams):
      Promise<HuksCryptoExtensionResult>
```

Callback to do the finish operation.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| initHandle | string | Yes | initHandle indicates the handle returned by onInitSession. |
| params | huks.HuksOptions \| HuksCryptoExtensionParams | Yes | params indicates theproperties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey.34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded. |

## onGenerateKeyItem

```TypeScript
onGenerateKeyItem(handle: string, params:HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to generate a key pair specified by the resource handle.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | Indicates the resource handle of the key to be generated. |
| params | HuksCryptoExtensionParam[] | Yes | Indicates the properties ofthe key generation operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onGetProperty

```TypeScript
onGetProperty(handle: string, propertyId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to be called to do general get operations of the provider.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | handle indicates the handle opened by onOpenResource. |
| propertyId | string | Yes | propertyId indicates the name of the property functionto be operated as defined in GMT 0016-2023. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | Yes | paramsindicates the properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey.34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded. |

## onGetResourceId

```TypeScript
onGetResourceId(params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to get the resource ID of the crypto extension.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | HuksCryptoExtensionParam[] | Yes | Indicatesthe needed properties of the get resource ID operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.If the function execution fails, the extension needs to set the detailed error information inHuksCryptoExtensionResult.errInfo.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state. |

## onGetUkeyPinAuthState

```TypeScript
onGetUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to get the PIN auth state of the provider handle.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | handle indicates the handle opened by onOpenResource. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | Yes | params indicatesthe properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onImportCertificate

```TypeScript
onImportCertificate(handle: string, params: HuksCryptoExtensionParam[],
      certInfo: HuksCryptoExtensionCertInfo): Promise<HuksCryptoExtensionResult>
```

Callback to import a certificate specified by the resource handle.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | Indicates the import certificate's resource handle. |
| params | HuksCryptoExtensionParam[] | Yes | Indicatesthe needed properties for the import certificate operation. |
| certInfo | HuksCryptoExtensionCertInfo | Yes | Indicates the certificate information to be imported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.If the function execution fails, the extension needs to set the detailed error information inHuksCryptoExtensionResult.errInfo.HuksCryptoExtensionResult.resultCode may have the following values.0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onImportWrappedKeyItem

```TypeScript
onImportWrappedKeyItem(handle: string, wrappingHandle: string, params: HuksCryptoExtensionParam[],
      wrappedKey: Uint8Array): Promise<HuksCryptoExtensionResult>
```

Callback to import the wrapped key pair specified by the resource handle.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | Indicates the resource handle of the wrapped key to be imported. |
| wrappingHandle | string | Yes | Indicates the resource handle of the key used to unwrap the imported key. |
| params | HuksCryptoExtensionParam[] | Yes | Indicates the needed properties forthe import wrapped key operation. |
| wrappedKey | Uint8Array | Yes | Indicates the wrapped key data, which format is defined by the crypto extension. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.If the function execution fails, the extension needs to set the detailed error information inHuksCryptoExtensionResult.errInfo.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of HUKS service and crypto extension are inconsistent. Due to an exception,the handle held by HUKS service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey. |

## onInitSession

```TypeScript
onInitSession(handle: string, params: huks.HuksOptions | HuksCryptoExtensionParams):
      Promise<HuksCryptoExtensionResult>
```

Callback to do the initialize operation.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | handle indicates the handle opened by onOpenResource. |
| params | huks.HuksOptions \| HuksCryptoExtensionParams | Yes | params indicatesthe properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey.34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded. |

## onOpenResource

```TypeScript
onOpenResource(resourceId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
     HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

Callback to be called to open the resource handle before crypto operations. NOTE: the handle returned must be closed by onCloseResource.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceId | string | Yes | resourceId indicates the resource id of the provider. |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | Yes | paramsindicates the properties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800001 - The UKey does not exist. Possible causes:1. The UKey has been removed.2. The crypto extension maintained an error UKey state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800004 - The resourceId does not exist. This indicates that the resourceId hasan incorrect device name, application name, or container name. |

## onSetProperty

```TypeScript
onSetProperty(handle: string, propertyId: string, params: HuksCryptoExtensionParam[]):
      Promise<HuksCryptoExtensionResult>
```

Callback to perform set operations of the provider.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | string | Yes | Indicates the resource handle for the set operation. |
| propertyId | string | Yes | Indicates the ID of the property needed to set.Currently supports part of the method names defined in GMT 0016-2023 and self-defined methods. |
| params | HuksCryptoExtensionParam[] | Yes | Indicates the operation parameters.This parameter contains parameters related to the property ID needed to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful.34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - Failed to call the UKey driver interface. Please check the UKey connection and driver status.34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of HUKS service and crypto extension are inconsistent. Due to an exception,the handle held by HUKS service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey.34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded. |

## onUpdateSession

```TypeScript
onUpdateSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams):
      Promise<HuksCryptoExtensionResult>
```

Callback to do update operation.

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| initHandle | string | Yes | initHandle indicates the handle returned by onInitSession. |
| params | huks.HuksOptions \| HuksCryptoExtensionParams | Yes | params indicates theproperties of the operation<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise used to return HuksCryptoExtensionResult.HuksCryptoExtensionResult.resultCode may have the following values:0 - The operation is successful34800000 - An error occurred in the crypto extension. Possible causes:1. The input parameter is invalid.2. The crypto extension encountered an unresolvable error state.34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.34800004 - The handle does not exist. Possible causes:1. The handle you entered is invalid.2. The states of huks service and crypto extension are inconsistent. Due to an exception,the handle held by huks service was not released.34800005 - The handle is unavailable, possibly due to an inconsistent statebetween the crypto extension and the UKey.34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded. |

