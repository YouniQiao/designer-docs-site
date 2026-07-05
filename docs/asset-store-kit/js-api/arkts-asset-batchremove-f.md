# batchRemove

## batchRemove

```TypeScript
function batchRemove(assetsToBeRemoved: Array<AssetMap>): Promise<void>
```

批量删除符合条件的关键资产。使用Promise异步回调。 批量删除的关键资产必须具有相同的[Tag.GROUP_ID]asset.TagType和[Tag.REQUIRE_ATTR_ENCRYPTED]asset.TagType属性。 批量删除的关键资产数量最大值为100。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| assetsToBeRemoved | Array&lt;AssetMap> | Yes | 待删除关键资产的搜索条件数组，如别名、访问控制属性、自定义数据等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 24000001 | The ASSET service is unavailable. |
| 24000006 | Insufficient memory. |
| 24000007 | The asset is corrupted. |
| 24000008 | The database operation failed. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |
| 24000015 | Getting the system time failed. |
| 24000019 | Each value of {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED}  in the array is not consistent. |

