# getUniformDataTypesByFilenameExtension

## Modules to Import

```TypeScript
import { uniformTypeDescriptor } from '@ohos.data.uniformTypeDescriptor';
```

## getUniformDataTypesByFilenameExtension

```TypeScript
function getUniformDataTypesByFilenameExtension(filenameExtension: string, belongsTo?: string): Array<string>
```

Obtains the uniform data type IDs based on the given file name extension and data type.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filenameExtension | string | Yes | File name extension. |
| belongsTo | string | No | ID of the uniform data type, to which the data type to be obtained belongs. Thisparameter has no default value. If it is not specified, the[uniform data type ID] is queried based on the file nameextension. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Uniform data type IDs that match the specified file name extension and **belongsTo** (ifspecified). If no match is found, the data types dynamically generated based on the rules specified by theinput parameters are returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let typeIds = uniformTypeDescriptor.getUniformDataTypesByFilenameExtension('.ts', 'general.source-code');
    for (let typeId of typeIds) {
        console.info(`typeId is ${typeId}`);
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getUniformDataTypesByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);
}

// If no uniform data type ID is found based on ".myts" and "general.plain-text", the types generated based on the input parameters are returned.
try {
    let flexTypeIds = uniformTypeDescriptor.getUniformDataTypesByFilenameExtension('.myts', 'general.plain-text');
    for (let flexTypeId of flexTypeIds) {
        console.info(`typeId is flex type, flex typeId is ${flexTypeId}`);
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getUniformDataTypesByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

