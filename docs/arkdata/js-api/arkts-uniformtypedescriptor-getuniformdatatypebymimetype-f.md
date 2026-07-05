# getUniformDataTypeByMIMEType

## getUniformDataTypeByMIMEType

```TypeScript
function getUniformDataTypeByMIMEType(mimeType: string, belongsTo?: string): string
```

Obtains the uniform data type ID based on the given MIME type and data type. If there are multiple uniform data type IDs matching the conditions, the first one is returned.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | MIME type. |
| belongsTo | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | ID of the uniform data type that matches the specified MIME type and belongsTo (if  specified). If no match is found, the data type dynamically generated based on the rules specified by the input  parameters is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let typeId = uniformTypeDescriptor.getUniformDataTypeByMIMEType('image/jpeg', 'general.image');
    if(typeId) {
        console.info('typeId is general.jpeg');
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getUniformDataTypeByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);
}

// If no uniform data type ID is found based on "image/myimage" and "general.image", the type generated based on the input parameters is returned.
try {
    let typeId = uniformTypeDescriptor.getUniformDataTypeByMIMEType('image/myimage', 'general.image');
    if(typeId) {
        console.info('typeId is flex.************');
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getUniformDataTypeByMIMEType throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

