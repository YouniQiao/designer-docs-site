# getAddressesByNameWithOptions

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getaddressesbynamewithoptions"></a>
## getAddressesByNameWithOptions

```TypeScript
function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>
```

Resolves a host name to obtain all IP addresses with specified query option.

**Since:** 23

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>--><!--Device-connection-function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the host name or the domain. |
| option | [QueryOptions](arkts-network-connection-queryoptions-i.md) | No | Indicates the query option. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NetAddress&gt;&gt; | - The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

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

