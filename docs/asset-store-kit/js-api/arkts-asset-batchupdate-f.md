# batchUpdate

## batchUpdate

```TypeScript
function batchUpdate(sourceAttributes: Array<AssetMap>, destAttributes: Array<AssetMap>): Promise<BatchResult>
```

批量更新符合条件的关键资产。使用Promise异步回调。 批量更新的关键资产必须具有相同的[Tag.GROUP_ID]asset.TagType和[Tag.REQUIRE_ATTR_ENCRYPTED]asset.TagType属性。 批量更新的关键资产数量最大值为100。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceAttributes | Array&lt;AssetMap> | Yes | 待更新关键资产的搜索条件数组。 |
| destAttributes | Array&lt;AssetMap> | Yes | 待更新关键资产的属性集合数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BatchResult> | Promise对象，返回批量操作结果，包含失败关键资产的错误信息。 |

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

