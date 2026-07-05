# getUniformDataTypeByFilenameExtension

## getUniformDataTypeByFilenameExtension

```TypeScript
function getUniformDataTypeByFilenameExtension(filenameExtension: string, belongsTo?: string): string
```

Obtains the uniform data type ID based on the given file name extension and data type. If there are multiple uniform data type IDs matching the conditions, the first one is returned.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filenameExtension | string | 是 | File name extension. |
| belongsTo | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | ID of the uniform data type that matches the specified file name extension and belongsTo (  if specified). If no match is found, the data type dynamically generated based on the rules specified by the  input parameters is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.ts', 'general.source-code');
  if (typeId) {
    console.info('typeId is general.type-script');
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`getUniformDataTypeByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);
}

// 根据“.myts”，“general.plain-text”查不到预置数据类型则按返回根据入参信息生成的动态类型。
try {
  let typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.myts', 'general.plain-text');
  if (typeId) {
    console.info('typeId is flex.************');
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`getUniformDataTypeByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

