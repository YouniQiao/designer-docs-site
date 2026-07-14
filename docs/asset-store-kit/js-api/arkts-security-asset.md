# @ohos.security.asset

This module provides the capabilities for life cycle management of sensitive user data (Asset) such as passwords and tokens, including adding, removing, updating, and querying.

**Since:** 11

**System capability:** SystemCapability.Security.Asset

## Modules to Import

```TypeScript
import { asset } from '@kit.AssetStoreKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [add](arkts-assetstore-add-f.md#add-1) | Adds an asset. This API uses a promise to return the result. To set {@link Tag.IS_PERSISTENT}, the application must have the ohos.permission.STORE_PERSISTENT_DATA permission. |
| [addSync](arkts-assetstore-addsync-f.md#addsync-1) | Adds an asset. This API returns the result synchronously. To set {@link Tag.IS_PERSISTENT}, the application must have the ohos.permission.STORE_PERSISTENT_DATA permission. |
| [batchAdd](arkts-assetstore-batchadd-f.md#batchadd-1) | Adds assets in batches based on an attributes array. To set {@link Tag.IS_PERSISTENT}, the application must have the ohos.permission.STORE_PERSISTENT_DATA permission. Only assets with the same {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED} can be added in batches. |
| [batchRemove](arkts-assetstore-batchremove-f.md#batchremove-1) | Removes assets in batches based on an alias list. Only assets with the same {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED} can be removed in batches. |
| [batchUpdate](arkts-assetstore-batchupdate-f.md#batchupdate-1) | Updates assets in batches based on an attributes array. Only assets with the same {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED} can be updated in batches. |
| [postQuery](arkts-assetstore-postquery-f.md#postquery-1) | Performs postprocessing for the asset query. This API is used when user authentication is required for the access to an asset. This API must be used with [asset.preQuery](arkts-assetstore-prequery-f.md#prequery-1) together. This API uses a promise to return the result. |
| [postQuerySync](arkts-assetstore-postquerysync-f.md#postquerysync-1) | Performs postprocessing for the asset query. This API is used when user authentication is required for the access to the asset. This API must be used with [asset.preQuerySync](arkts-assetstore-prequerysync-f.md#prequerysync-1) together. This API returns the result synchronously. |
| [preQuery](arkts-assetstore-prequery-f.md#prequery-1) | Performs preprocessing for the asset query. This API is used when user authentication is required for the access to the asset. After the user authentication is successful, call [asset.query](arkts-assetstore-query-f.md#query-1) and [asset.postQuery](arkts-assetstore-postquery-f.md#postquery-1). This API uses a promise to return the result. |
| [preQuerySync](arkts-assetstore-prequerysync-f.md#prequerysync-1) | Performs preprocessing for the asset query. This API is used when user authentication is required for the access to the asset. After the user authentication is successful, call [asset.querySync](arkts-assetstore-querysync-f.md#querysync-1) and [asset.postQuerySync](arkts-assetstore-postquerysync-f.md#postquerysync-1). This API returns the result synchronously. |
| [query](arkts-assetstore-query-f.md#query-1) | Queries one or more assets. If user authentication is required for the access to the asset, call [asset.preQuery](arkts-assetstore-prequery-f.md#prequery-1) before this API and call [asset.postQuery](arkts-assetstore-postquery-f.md#postquery-1) after this API. For details about the development procedure, see [Development Guidance](../../../../security/AssetStoreKit/asset-js-query-auth.md). This API uses a promise to return the result. If no asset is found, an exception indicating that no asset is found is thrown instead of returning an empty query result list. |
| [querySync](arkts-assetstore-querysync-f.md#querysync-1) | Queries one or more assets. If user authentication is required for the access to the asset, call [asset.preQuerySync](arkts-assetstore-prequerysync-f.md#prequerysync-1) before this API and call [asset.postQuerySync](arkts-assetstore-postquerysync-f.md#postquerysync-1) after this API. For details about the development procedure, see [Development Guidance](../../../../security/AssetStoreKit/asset-js-query-auth.md). This API returns the result synchronously. If no asset is found, an exception indicating that no asset is found is thrown instead of returning an empty query result list. |
| [querySyncResult](arkts-assetstore-querysyncresult-f.md#querysyncresult-1) | Queries the result of the sync operation. This API uses a promise to return the result. |
| [remove](arkts-assetstore-remove-f.md#remove-1) | Removes one or more assets. This API uses a promise to return the result. |
| [removeSync](arkts-assetstore-removesync-f.md#removesync-1) | Removes one or more assets. This API returns the result synchronously. |
| [update](arkts-assetstore-update-f.md#update-1) | Updates an asset. This API uses a promise to return the result. |
| [updateSync](arkts-assetstore-updatesync-f.md#updatesync-1) | Updates an asset. This API returns the result synchronously. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addAsUser](arkts-assetstore-addasuser-f-sys.md#addasuser-1) | Adds an asset in the specified user space. This API uses a promise to return the result. To set {@link Tag.IS_PERSISTENT}, the application must have the ohos.permission.STORE_PERSISTENT_DATA permission. |
| [postQueryAsUser](arkts-assetstore-postqueryasuser-f-sys.md#postqueryasuser-1) | Performs postprocessing for the asset query in the specified user space. This API is used when user authentication is required for the access to an asset. This API must be used with [asset.preQueryAsUser](arkts-assetstore-prequeryasuser-f-sys.md#prequeryasuser-1) together. This API uses a promise to return the result. |
| [preQueryAsUser](arkts-assetstore-prequeryasuser-f-sys.md#prequeryasuser-1) | Performs preprocessing for the asset query in the specified user space. This API is used when user authentication is required for the access to an asset. After the user authentication is successful, call [asset.queryAsUser](arkts-assetstore-queryasuser-f-sys.md#queryasuser-1) and [asset.postQueryAsUser](arkts-assetstore-postqueryasuser-f-sys.md#postqueryasuser-1). This API uses a promise to return the result. |
| [queryAsUser](arkts-assetstore-queryasuser-f-sys.md#queryasuser-1) | Queries one or more assets in the specified user space. If user authentication is required for the access to the asset, call [asset.preQueryAsUser](arkts-assetstore-prequeryasuser-f-sys.md#prequeryasuser-1) before this API and call [asset.postQueryAsUser](arkts-assetstore-postqueryasuser-f-sys.md#postqueryasuser-1) after this API. For details about the development procedure, see [Development Guidance](../../../../security/AssetStoreKit/asset-js-query-auth.md). This API uses a promise to return the result. |
| [removeAsUser](arkts-assetstore-removeasuser-f-sys.md#removeasuser-1) | Removes one or more assets in the specified user space. This API uses a promise to return the result. |
| [updateAsUser](arkts-assetstore-updateasuser-f-sys.md#updateasuser-1) | Updates an asset in the specified user space. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BatchErrInfo](arkts-assetstore-batcherrinfo-i.md) | Result object containing error information with a specific index, error code, and message for a single asset. |
| [BatchResult](arkts-assetstore-batchresult-i.md) | Result object containing batch operation,including {@link batchAdd},{@link batchUpdate},{@link batchRemove}. |
| [SyncResult](arkts-assetstore-syncresult-i.md) | Represents the sync result of an asset. |

### Enums

| Name | Description |
| --- | --- |
| [Accessibility](arkts-assetstore-accessibility-e.md) | Enumerates the types of access control based on the lock screen status. |
| [AuthType](arkts-assetstore-authtype-e.md) | Enumerates the types of user authentication supported by an asset. |
| [ConflictResolution](arkts-assetstore-conflictresolution-e.md) | Enumerates the policies for resolving conflicts (for example, a duplicate alias) when an asset is added. |
| [ErrorCode](arkts-assetstore-errorcode-e.md) | Enumerates the error codes. |
| [OperationType](arkts-assetstore-operationtype-e.md) | Enumerates the types of additional operation to perform. |
| [ReturnType](arkts-assetstore-returntype-e.md) | Enumerates the type of information returned by an asset query operation. |
| [SyncType](arkts-assetstore-synctype-e.md) | Enumerates the sync types supported by an asset. |
| [Tag](arkts-assetstore-tag-e.md) | Enumerate the keys of asset attributes ([AssetMap](arkts-assetstore-assetmap-t.md)), which are in key-value (KV) pairs. |
| [TagType](arkts-assetstore-tagtype-e.md) | Enumerates the asset attribute types. |
| [WrapType](arkts-assetstore-wraptype-e.md) | Enumerates the encrypted import/export types supported by the asset. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuthType](arkts-assetstore-authtype-e-sys.md) | Enumerates the types of user authentication supported by an asset. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AssetMap](arkts-assetstore-assetmap-t.md) | Represents a set of asset attributes in the form of KV pairs. |
| [Value](arkts-assetstore-value-t.md) | Represents the value of each attribute in [AssetMap](arkts-assetstore-assetmap-t.md). |

