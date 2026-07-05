# listAliases

## listAliases

```TypeScript
function listAliases(options: HuksOptions): Promise<HuksListAliasesReturnResult>
```

查询密钥别名集接口。使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | HuksOptions | Yes | listAliases操作的参数集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksListAliasesReturnResult> | Promise对象，返回调用接口的结果。当调用成功时，HuksListAliasesReturnResult的成员  keyAliases为获取的密钥别名集。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit'

async function testListAliases() {
  let queryProperties: Array<huks.HuksParam> = [
    {
      tag: huks.HuksTag.HUKS_TAG_AUTH_STORAGE_LEVEL,
      value: huks.HuksAuthStorageLevel.HUKS_AUTH_STORAGE_LEVEL_DE
    }
  ];
  let queryOptions: huks.HuksOptions = {
    properties: queryProperties
  };

  try{
    await huks.listAliases(queryOptions)
      .then((data) => {
      console.info(`promise: listAliases success, data: ` + JSON.stringify(data));
    });
  } catch (error) {
    console.error(`promise: listAliases failed, errCode : ${error.code}, errMsg : ${error.message}`);
  }
}

```

