# @ohos.security.asset

关键资产存储服务提供了用户短敏感数据的安全存储及管理能力。其中，短敏感数据可以是密码类（账号/密码）、Token类（应用凭据）、其他关键明文（如银行卡号）等长度较短的用户敏感数据。

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
| [add](arkts-asset-add-f.md#add-1) | 新增一条关键资产。使用Promise异步回调。 设置[Tag.IS_PERSISTENT]{@link asset.TagType}属性时，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考 [声明权限](docroot://security/AccessToken/declare-permissions.md)。 |
| <!--DelRow-->[addAsUser](arkts-asset-addasuser-f-sys.md#addAsUser-1) | 在指定用户空间中新增一条关键资产。使用Promise异步回调。 设置[Tag.IS_PERSISTENT]{@link @ohos.security.asset:asset.TagType}属性，需申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参 考[声明权限](docroot://security/AccessToken/declare-permissions.md)。 |
| [addSync](arkts-asset-addsync-f.md#addSync-1) | 新增一条关键资产，使用同步方式返回结果。 如果要设置[Tag.IS_PERSISTENT]{@link asset.TagType}属性，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考 [声明权限](docroot://security/AccessToken/declare-permissions.md)。 |
| [batchAdd](arkts-asset-batchadd-f.md#batchAdd-1) | 批量新增关键资产。使用Promise异步回调。 设置[Tag.IS_PERSISTENT]{@link asset.TagType}属性时，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考 [声明权限](docroot://security/AccessToken/declare-permissions.md)。 批量新增的关键资产必须具有相同的[Tag.GROUP_ID]{@link asset.TagType}和[Tag.REQUIRE_ATTR_ENCRYPTED]{@link asset.TagType}属性。 批量新增的关键资产数量最大值为100。 |
| [batchRemove](arkts-asset-batchremove-f.md#batchRemove-1) | 批量删除符合条件的关键资产。使用Promise异步回调。 批量删除的关键资产必须具有相同的[Tag.GROUP_ID]{@link asset.TagType}和[Tag.REQUIRE_ATTR_ENCRYPTED]{@link asset.TagType}属性。 批量删除的关键资产数量最大值为100。 |
| [batchUpdate](arkts-asset-batchupdate-f.md#batchUpdate-1) | 批量更新符合条件的关键资产。使用Promise异步回调。 批量更新的关键资产必须具有相同的[Tag.GROUP_ID]{@link asset.TagType}和[Tag.REQUIRE_ATTR_ENCRYPTED]{@link asset.TagType}属性。 批量更新的关键资产数量最大值为100。 |
| [postQuery](arkts-asset-postquery-f.md#postQuery-1) | 查询的后置处理，用于需要用户认证的关键资产（与[asset.preQuery]{@link asset.preQuery}函数成对出现）。使用Promise异步回调。 |
| <!--DelRow-->[postQueryAsUser](arkts-asset-postqueryasuser-f-sys.md#postQueryAsUser-1) | 在指定用户空间中查询的后置处理，用于需要用户认证的关键资产（与[asset.preQueryAsUser]{@link asset.preQueryAsUser}函数成对出现）。使用Promise异步回调。 |
| [postQuerySync](arkts-asset-postquerysync-f.md#postQuerySync-1) | 查询的后置处理，用于需要用户认证的关键资产。需与[asset.preQuerySync]{@link asset.preQuerySync}函数成对出现。使用同步方式返回结果。 |
| [preQuery](arkts-asset-prequery-f.md#preQuery-1) | 查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.query]{@link asset.query}和[asset.postQuery]{@link asset.postQuery}接口。使用 Promise异步回调。 |
| <!--DelRow-->[preQueryAsUser](arkts-asset-prequeryasuser-f-sys.md#preQueryAsUser-1) | 在指定用户空间中查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.queryAsUser]{@link asset.queryAsUser}和 [asset.postQueryAsUser]{@link asset.postQueryAsUser}接口。使用Promise异步回调。 |
| [preQuerySync](arkts-asset-prequerysync-f.md#preQuerySync-1) | 查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.querySync]{@link asset.querySync}、 [asset.postQuerySync]{@link asset.postQuerySync}。使用同步方式返回结果。 |
| [query](arkts-asset-query-f.md#query-1) | 查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQuery]{@link asset.preQuery}接口，在本函数后调用 [asset.postQuery]{@link asset.postQuery}接口，开发步骤请参考[开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使 用Promise异步回调。 如果未查询到符合条件的关键资产，将抛出“未找到关键资产”的异常，而非返回空的查询结果列表。 |
| <!--DelRow-->[queryAsUser](arkts-asset-queryasuser-f-sys.md#queryAsUser-1) | 在指定用户空间中查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQueryAsUser]{@link asset.preQueryAsUser}接口，在本函数后调用 [asset.postQueryAsUser]{@link asset.postQueryAsUser}接口，开发步骤请参考 [开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使用Promise异步回调。 |
| [querySync](arkts-asset-querysync-f.md#querySync-1) | 查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQuerySync]{@link asset.preQuerySync}，在本函数后调用 [asset.postQuerySync]{@link asset.postQuerySync}，开发步骤请参考 [开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使用同步方式返回结果。 如果未查询到符合条件的关键资产，将抛出“未找到关键资产”的异常，而非返回空的查询结果列表。 |
| [querySyncResult](arkts-asset-querysyncresult-f.md#querySyncResult-1) | 执行同步操作后，查询同步执行结果。使用Promise异步回调。 |
| [remove](arkts-asset-remove-f.md#remove-1) | 删除符合条件的一条或多条关键资产。使用Promise异步回调。 |
| <!--DelRow-->[removeAsUser](arkts-asset-removeasuser-f-sys.md#removeAsUser-1) | 从指定用户空间中删除符合条件的一条或多条关键资产。使用Promise异步回调。 |
| [removeSync](arkts-asset-removesync-f.md#removeSync-1) | 删除符合条件的一条或多条关键资产，使用同步方式。 |
| [update](arkts-asset-update-f.md#update-1) | 更新符合条件的一条关键资产。使用Promise异步回调。 |
| <!--DelRow-->[updateAsUser](arkts-asset-updateasuser-f-sys.md#updateAsUser-1) | 在指定用户空间中更新符合条件的一条关键资产。使用Promise异步回调。 |
| [updateSync](arkts-asset-updatesync-f.md#updateSync-1) | 更新符合条件的一条关键资产，使用同步方式返回结果。 |

### Interfaces

| Name | Description |
| --- | --- |
| [BatchErrInfo](arkts-asset-batcherrinfo-i.md) | 批量操作中单个关键资产的错误信息。 |
| [BatchResult](arkts-asset-batchresult-i.md) | [batchAdd]{@link asset.batchAdd}、[batchUpdate]{@link asset.batchUpdate}和[batchRemove]{@link asset.batchRemove}批量操作的 结果。 |
| [SyncResult](arkts-asset-syncresult-i.md) | 关键资产同步的结果。 |

### Types

| Name | Description |
| --- | --- |
| [AssetMap](arkts-asset-assetmap-t.md) | 关键资产属性的键-值对集合。 |
| [Value](arkts-asset-value-t.md) | 关键资产属性的内容，用作[AssetMap]{@link asset.AssetMap}的值。 |

### Enums

| Name | Description |
| --- | --- |
| [Accessibility](arkts-asset-accessibility-e.md) | 枚举，关键资产基于锁屏状态的访问控制类型。 |
| [AuthType](arkts-asset-authtype-e.md) | 枚举，关键资产支持的用户认证类型。 |
| [ConflictResolution](arkts-asset-conflictresolution-e.md) | 枚举，新增关键资产时的冲突（如：别名相同）处理策略。 |
| [ErrorCode](arkts-asset-errorcode-e.md) | 表示错误码的枚举。 |
| [OperationType](arkts-asset-operationtype-e.md) | 枚举，附属的操作类型。 |
| [ReturnType](arkts-asset-returntype-e.md) | 枚举，关键资产查询返回的结果类型。 |
| [SyncType](arkts-asset-synctype-e.md) | 枚举，关键资产支持的同步类型。 |
| [Tag](arkts-asset-tag-e.md) | 枚举，关键资产支持的属性名称类型，用作[AssetMap]{@link asset.AssetMap}的键。 > **说明：** > > 以下为Tag类型的全量枚举值，每个接口可传的Tag枚举及对应的Value取值范围不同，详见 > [各个场景的开发指导](docroot://security/AssetStoreKit/asset-store-kit-overview.md)。 |
| [TagType](arkts-asset-tagtype-e.md) | 枚举，关键资产属性支持的数据类型。 |
| [WrapType](arkts-asset-wraptype-e.md) | 枚举，关键资产支持的加密导入导出类型。 |

