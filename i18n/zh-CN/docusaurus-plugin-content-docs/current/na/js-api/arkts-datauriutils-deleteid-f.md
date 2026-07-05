# deleteId

## deleteId

```TypeScript
function deleteId(uri: string): string
```

Deletes the ID from the end of the path component of the given uri.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.app.ability.dataUriUtils/dataUriUtils#deleteId

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the uri object from which the ID is to be deleted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the uri object with the ID deleted. |

**示例：**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let uri = dataUriUtils.deleteId('com.example.dataUriUtils/1221');

```

