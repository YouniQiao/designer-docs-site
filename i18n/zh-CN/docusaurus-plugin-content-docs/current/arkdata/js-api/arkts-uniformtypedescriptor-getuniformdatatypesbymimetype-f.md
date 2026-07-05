# getUniformDataTypesByMIMEType

## getUniformDataTypesByMIMEType

```TypeScript
function getUniformDataTypesByMIMEType(mimeType: string, belongsTo?: string): Array<string>
```

Obtains the uniform data type IDs based on the given MIME type and data type.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | MIME type. |
| belongsTo | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | Uniform data type IDs that match the specified MIME type and belongsTo (if specified  ). If no match is found, the data types dynamically generated based on the rules specified by the input  parameters are returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let typeIds = uniformTypeDescriptor.getUniformDataTypesByMIMEType('text/plain', 'general.text');
  for (let typeId of typeIds) {
    console.info(`typeId is ${typeId}`);
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`getUniformDataTypesByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);
}

// 根据“image/myimage”, “general.image”查不到预置数据类型则返回根据入参信息生成的动态类型列表。
try {
  let flexTypeIds = uniformTypeDescriptor.getUniformDataTypesByMIMEType('image/myimage', 'general.image');
  for (let flexTypeId of flexTypeIds) {
    console.info(`typeId is flex type, flex typeId is ${flexTypeId}`);
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`getUniformDataTypesByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

