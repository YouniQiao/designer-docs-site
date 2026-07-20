# checkPersistentPermission

## Modules to Import

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## checkPersistentPermission

```TypeScript
function checkPersistentPermission(policies: Array<PolicyInfo>): Promise<Array<boolean>>
```

Check persistent permissions for the URI.

**Since:** 17

<!--Device-fileShare-function checkPersistentPermission(policies: Array<PolicyInfo>): Promise<Array<boolean>>--><!--Device-fileShare-function checkPersistentPermission(policies: Array<PolicyInfo>): Promise<Array<boolean>>-End-->

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policies | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<PolicyInfo> | Yes | Policy information to grant permission on URIs. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<boolean>> | Returns the persistent state of uri permissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 13900042 | Out of memory |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { picker } from '@kit.CoreFileKit';

async function checkPersistentPermissionExample() {
  try {
    let documentSelectOptions = new picker.DocumentSelectOptions();
    let documentPicker = new picker.DocumentViewPicker();
    let uris = await documentPicker.select(documentSelectOptions);
    let policyInfo: fileShare.PolicyInfo = {
      uri: uris[0], 
      // Multiple permissions can be checked in combination. For example, the read and write permissions can be checked using fileShare.OperationMode.READ_MODE | fileShare.OperationMode.WRITE_MODE.
      operationMode: fileShare.OperationMode.READ_MODE,
    };
    let policies: Array<fileShare.PolicyInfo> = [policyInfo];
    fileShare.checkPersistentPermission(policies).then(async (data) => {
      let result: Array<boolean> = data;
      for (let i = 0; i < result.length; i++) {
        console.info("checkPersistentPermission result: " + JSON.stringify(result[i]));
        if(!result[i]){
          let info: fileShare.PolicyInfo = {
            uri: policies[i].uri, 
            operationMode: policies[i].operationMode,
          };
          let policy : Array<fileShare.PolicyInfo> = [info];
          await fileShare.persistPermission(policy);
        }
      }
    }).catch((err: BusinessError<Array<fileShare.PolicyErrorResult>>) => {
      console.error("checkPersistentPermission failed with error message: " + err.message + ", error code: " + err.code);
    });
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error('checkPersistentPermission failed with err: ' + JSON.stringify(err));
  }
}

```

