# getAddressesByNameWithOptions

## getAddressesByNameWithOptions

```TypeScript
function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>
```

Resolves a host name to obtain all IP addresses with specified query option.

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERNET

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the host name or the domain. |
| option | QueryOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NetAddress>> | - The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
let option: connection.QueryOptions = {
  family: connection.FamilyType.FAMILY_TYPE_IPV4
};
connection.getAddressesByNameWithOptions("www.example.com", option).then((data: connection.NetAddress[]) => {
  console.info(`Succeeded to get data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`get ERROR msg: ${JSON.stringify(err)}`)
});

```

