# getTypeDescriptor

## Modules to Import

```TypeScript
import { uniformTypeDescriptor } from '@ohos.data.uniformTypeDescriptor';
```

## getTypeDescriptor

```TypeScript
function getTypeDescriptor(typeId: string): TypeDescriptor
```

Obtains the **TypeDescriptor** object based on the uniform data type ID.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typeId | string | Yes | [Uniform data type ID]. |

**Return value:**

| Type | Description |
| --- | --- |
| TypeDescriptor | **TypeDescriptor** object obtained. If the uniform data type does not exist, **null**is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let typeObj : uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('com.adobe.photoshop-image');
    if (typeObj) {
        let typeId = typeObj.typeId;
        let belongingToTypes = typeObj.belongingToTypes;
        let description = typeObj.description;
        let referenceURL = typeObj.referenceURL;
        let iconFile = typeObj.iconFile;
        let filenameExtensions = typeObj.filenameExtensions;
        let mimeTypes = typeObj.mimeTypes;
        console.info(`typeId: ${typeId}, belongingToTypes: ${belongingToTypes}, description: ${description}, referenceURL: ${referenceURL}, iconFile: ${iconFile}, filenameExtensions: ${filenameExtensions}, mimeTypes: ${mimeTypes}`);
    } else {
        console.info('type com.adobe.photoshop-image does not exist');
    }
} catch(e) {
    let error: BusinessError = e as BusinessError;
    console.error(`getTypeDescriptor throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

