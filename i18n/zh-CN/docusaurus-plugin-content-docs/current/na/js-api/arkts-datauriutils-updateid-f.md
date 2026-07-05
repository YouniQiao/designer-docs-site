# updateId

## updateId

```TypeScript
function updateId(uri: string, id: number): string
```

Updates the ID in the specified uri

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.app.ability.dataUriUtils/dataUriUtils#updateId

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the uri object to be updated. |
| id | number | 是 | Indicates the new ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the updated uri object. |

**示例：**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let id = 1122;
let uri = dataUriUtils.updateId(
    'com.example.dataUriUtils/1221',
	id
);

```

