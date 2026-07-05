# attachId

## attachId

```TypeScript
function attachId(uri: string, id: number): string
```

Attaches the given ID to the end of the path component of the given uri.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.app.ability.dataUriUtils/dataUriUtils#attachId

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the uri string from which the ID is to be obtained. |
| id | number | 是 | Indicates the ID to attach. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the uri object with the given ID attached. |

**示例：**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let id = 1122;
let uri = dataUriUtils.attachId(
    'com.example.dataUriUtils',
	id,
);

```

