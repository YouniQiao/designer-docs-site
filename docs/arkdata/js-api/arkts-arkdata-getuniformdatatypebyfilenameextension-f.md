# getUniformDataTypeByFilenameExtension

## Modules to Import

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
```

## getUniformDataTypeByFilenameExtension

```TypeScript
function getUniformDataTypeByFilenameExtension(filenameExtension: string, belongsTo?: string): string
```

Obtains the uniform data type ID based on the given file name extension and data type. If there are multiple
uniform data type IDs matching the conditions, the first one is returned.

**Since:** 11

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
| string | ID of the uniform data type that matches the specified file name extension and **belongsTo** (if specified). If no match is found, the data type dynamically generated based on the rules specified by theinput parameters is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.ts', 'general.source-code');
    if(typeId) {
        console.info('typeId is general.type-script');
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getUniformDataTypeByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);
}

// If no uniform data type ID is found based on ".myts" and "general.plain-text", the type generated based on the input parameters is returned.
try {
    let typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.myts', 'general.plain-text');
    if(typeId) {
        console.info('typeId is flex.************');
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getUniformDataTypeByFilenameExtension throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

