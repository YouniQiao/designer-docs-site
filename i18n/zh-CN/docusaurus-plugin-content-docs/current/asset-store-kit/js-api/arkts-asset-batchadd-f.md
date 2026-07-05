# batchAdd

## batchAdd

```TypeScript
function batchAdd(attributesArray: Array<AssetMap>): Promise<BatchResult>
```

批量新增关键资产。使用Promise异步回调。 设置[Tag.IS_PERSISTENT]asset.TagType属性时，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考 [声明权限](docroot://security/AccessToken/declare-permissions.md)。 批量新增的关键资产必须具有相同的[Tag.GROUP_ID]asset.TagType和[Tag.REQUIRE_ATTR_ENCRYPTED]asset.TagType属性。 批量新增的关键资产数量最大值为100。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Security.Asset

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attributesArray | Array&lt;AssetMap> | 是 | 待新增关键资产的属性集合数组，包括关键资产明文、访问控制属性、自定义数据等。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BatchResult> | Promise对象，返回批量操作结果，包含失败关键资产的错误信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24000001 | The ASSET service is unavailable. |
| 24000005 | The screen lock status does not match. |
| 24000006 | Insufficient memory. |
| 24000007 | The asset is corrupted. |
| 24000008 | The database operation failed. |
| 24000009 | The cryptography operation failed. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |
| 24000014 | The file operation failed. |
| 24000015 | Getting the system time failed. |
| 24000019 | Each value of {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED}  in the array is not consistent. |

**示例：**

```TypeScript
import { asset } from '@kit.AssetStoreKit';
import { util } from '@kit.ArkTS';

function stringToArray(str: string): Uint8Array {
  let textEncoder = new util.TextEncoder();
  return textEncoder.encodeInto(str);
}

let attributesArray: Array<asset.AssetMap> = [];
let attr1: asset.AssetMap = new Map();
attr1.set(asset.Tag.SECRET, stringToArray('demo_pwd1'));
attr1.set(asset.Tag.ALIAS, stringToArray('demo_alias1'));
attr1.set(asset.Tag.ACCESSIBILITY, asset.Accessibility.DEVICE_FIRST_UNLOCKED);
attributesArray.push(attr1);

let attr2: asset.AssetMap = new Map();
attr2.set(asset.Tag.SECRET, stringToArray('demo_pwd2'));
attr2.set(asset.Tag.ALIAS, stringToArray('demo_alias2'));
attr2.set(asset.Tag.ACCESSIBILITY, asset.Accessibility.DEVICE_FIRST_UNLOCKED);
attributesArray.push(attr2);

asset.batchAdd(attributesArray).then((res: asset.BatchResult) => {
  console.info(`Succeeded in batch adding Asset, failedCount: ${res.failedCount}`);
});

```

