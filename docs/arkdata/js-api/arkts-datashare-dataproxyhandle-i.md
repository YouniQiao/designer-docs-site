# DataProxyHandle

Defines the data proxy handle, which can be used to access or manage shared configuration information. Before calling an API provided by **DataProxyHandle**, you must create a **DataProxyHandle** instance using [createDataProxyHandle]dataShare.createDataProxyHandle.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

## Modules to Import

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## delete

```TypeScript
delete(uris: string[], config: DataProxyConfig): Promise<DataProxyResult[]>
```

Deletes the specified shared configuration items based on URIs. This API uses a promise to return the result. Only the publisher is allowed to delete shared configuration items.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | string[] | Yes | URI array of the shared configuration items to be deleted, with a maximum of 32 URIs.  The URI value is fixed at the format of "datashareproxy://{bundleName}/{path}", in which  bundleName indicates the bundle name of the publisher application, and path can be set to any value  but must be unique in the same application. The value contains a maximum of 256 bytes. |
| config | DataProxyConfig | Yes | Data proxy configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataProxyResult[]> | Promise used to return the result array of the batch operations. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
const urisToDelete: string[] =
  ['datashareproxy://com.example.app1/config1', 'datashareproxy://com.example.app1/config2',];
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
dataProxyHandle.delete(urisToDelete, config).then((results: dataShare.DataProxyResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to delete config. code: ${error.code}, message: ${error.message}`);
});

```

## deleteMyPublishedData

```TypeScript
deleteMyPublishedData(config: DataProxyConfig): Promise<DataProxyResult[]>
```

Deletes all the data published by the publisher. Only the data publisher can delete the data.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | DataProxyConfig | Yes | Configuration of the data proxy operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataProxyResult[]> | Promise used to return the operation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is  being restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
dataProxyHandle.deleteMyPublishedData(config).then((results: dataShare.DataProxyResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to delete all configs. Code: ${error.code}, message: ${error.message}`);
});

```

## get

```TypeScript
get(uris: string[], config: DataProxyConfig): Promise<DataProxyGetResult[]>
```

Obtains a specified shared configuration item based on the URI. This API uses a promise to return the result. Only the publisher and applications in the allowed list can access the shared configuration item.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | string[] | Yes | URI array of the shared configuration items to be obtained, with a maximum of 32 URIs.  The URI value is fixed at the format of "datashareproxy://{bundleName}/{path}", in which  bundleName indicates the bundle name of the publisher application, and path can be set to any value  but must be unique in the same application. The value contains a maximum of 256 bytes. |
| config | DataProxyConfig | Yes | Data proxy configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataProxyGetResult[]> | Promise used to return the result array of the batch operations. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
const urisToGet: string[] =
  ['datashareproxy://com.example.app1/config1', 'datashareproxy://com.example.app1/config2',];
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
dataProxyHandle.get(urisToGet, config).then((results: dataShare.DataProxyGetResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}, AllowList: ${result.allowList}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to get config. code: ${error.code}, message: ${error.message}`);
});

```

## getValues

```TypeScript
getValues(uri: string, config: DataProxyConfig): Promise<ValueType[]>
```

Obtains all multi-value data under a specified URI. Only the publisher and the applications in the [allowList]dataShare.ProxyData#allowList can obtain the data. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the URI of the data to operate. |
| config | DataProxyConfig | Yes | Configuration of the data proxy operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ValueType[]> | Promise used to return an array of all values under the URI. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is  being restarted abnormally. |
| 15700011 | The URI does not exist. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |
| 15700015 | No permission to access the data specified by the URI. |

**Example**

```TypeScript
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
let testUri: string = 'datashareproxy://com.test.dataproxyhandle/test/pv/001';
let newConfigData: dataShare.ProxyData[] = [{
  uri: testUri,
  values: { 0: 'init' },
  isMultiValues: true,
  allowList: [],
  trustProviders: []
}];

await dataProxyHandle!.publish(newConfigData, config).then((results: dataShare.DataProxyResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to publish config. code: ${error.code}, message: ${error.message}`);
});

try {
  let result: ValueType[] = await dataProxyHandle?.getValues(testUri, config);
  console.info(`getValues success. Values: ` + JSON.stringify(result));
} catch (error) {
  console.error(`getValues failed: code: ${error.code}, message: ${error.message}`);
}

```

## off

```TypeScript
off(
      event: 'dataChange',
      uris: string[],
      config: DataProxyConfig,
      callback?: AsyncCallback<DataProxyChangeInfo[]>
    ): DataProxyResult[]
```

Unsubscribes from the change event of the proxy data corresponding to a specified URI.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event or callback type. The value is dataChange, which indicates the data  change. |
| uris | string[] | Yes | Array of URIs to be unsubscribed, with a maximum of 32 URIs. The URI value is fixed at  the format of "datashareproxy://{bundleName}/{path}", in which bundleName indicates the bundle  name of the publisher application, and path can be set to any value but must be unique in the same  application. The value contains a maximum of 256 bytes. |
| config | DataProxyConfig | Yes | Data proxy configuration. |
| callback | AsyncCallback&lt;DataProxyChangeInfo[]> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| DataProxyResult[] | Batch operation result array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
const urisToUnWatch: string[] =
  ['datashareproxy://com.example.app1/config1', 'datashareproxy://com.example.app1/config2',];
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
const callback = (err: BusinessError<void>, changes: dataShare.DataProxyChangeInfo[]): void => {
  if (err) {
    console.error(`Failed to receive data change notification. Code: ${err.code}, message: ${err.message}`);
  } else {
    changes.forEach((change) => {
      console.info(`Change Type: ${change.type}, URI: ${change.uri}, Value: ${change.value}`);
    });
  }
};
const results: dataShare.DataProxyResult[] = dataProxyHandle.off('dataChange', urisToUnWatch, config, callback);
results.forEach((result) => {
  console.info(`URI: ${result.uri}, Result: ${result.result}`);
});

```

## offDataChange

```TypeScript
offDataChange(
      uris: string[],
      config: DataProxyConfig,
      callback?: Callback<DataProxyChangeInfo[]>
    ): DataProxyResult[]
```

Deregisters observers to observe proxy data change specified by the given URIs.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | string[] | Yes | Indicates the uris of the data to operate. |
| config | DataProxyConfig | Yes | Indicates the configuration of the data proxy operation. |
| callback | Callback&lt;DataProxyChangeInfo[]> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| DataProxyResult[] | : The operation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

## on

```TypeScript
on(
      event: 'dataChange',
      uris: string[],
      config: DataProxyConfig,
      callback: AsyncCallback<DataProxyChangeInfo[]>
    ): DataProxyResult[]
```

Subscribes to the change event of the shared configuration corresponding to a specified URI. If the change event is subscribed, the subscriber will receive a callback notification that carries the data change type, changed URI , and changed content when the publisher modifies the configuration. This API uses an asynchronous callback to return the result. This function does not support cross-user notification subscription or subscription to unpublished configurations. If the permission is revoked after the subscription is successful, the subscriber will not be notified consequently. When the publisher calls the [publish]dataShare.DataProxyHandle.publish or [delete]dataShare.DataProxyHandle.delete(uris: string[], config: DataProxyConfig) API to publish or delete a configuration, a notification is automatically triggered.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event or callback type. The value is dataChange, which indicates the data  change. This event is triggered when the publisher modifies the configuration. |
| uris | string[] | Yes | Array of URIs to be subscribed, with a maximum of 32 URIs. The URI value is fixed at  the format of "datashareproxy://{bundleName}/{path}", in which bundleName indicates the bundle  name of the publisher application, and path can be set to any value but must be unique in the same  application. The value contains a maximum of 256 bytes. |
| config | DataProxyConfig | Yes | Data proxy configuration. |
| callback | AsyncCallback&lt;DataProxyChangeInfo[]> | Yes | Callback triggered when the publisher modifies the  configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| DataProxyResult[] | Batch operation result array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
const urisToWatch: string[] =
  ['datashareproxy://com.example.app1/config1', 'datashareproxy://com.example.app1/config2',];
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
const callback = (err: BusinessError<void>, changes: dataShare.DataProxyChangeInfo[]): void => {
  if (err) {
    console.error(`Failed to receive data change notification. Code: ${err.code}, message: ${err.message}`);
  } else {
    changes.forEach((change) => {
      console.info(`Change Type: ${change.type}, URI: ${change.uri}, Value: ${change.value}`);
    });
  }
};
const results: dataShare.DataProxyResult[] = dataProxyHandle.on('dataChange', urisToWatch, config, callback);
results.forEach((result) => {
  console.info(`URI: ${result.uri}, Result: ${result.result}`);
});

```

## onDataChange

```TypeScript
onDataChange(
      uris: string[],
      config: DataProxyConfig,
      callback: Callback<DataProxyChangeInfo[]>
    ): DataProxyResult[]
```

Registers observers to observe proxy data change specified by the given URIs.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uris | string[] | Yes | Indicates the uris of the data to operate. |
| config | DataProxyConfig | Yes | Indicates the configuration of the data proxy operation. |
| callback | Callback&lt;DataProxyChangeInfo[]> | Yes | The callback function when data changes. |

**Return value:**

| Type | Description |
| --- | --- |
| DataProxyResult[] | : The operation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

## publish

```TypeScript
publish(data: ProxyData[], config: DataProxyConfig): Promise<DataProxyResult[]>
```

Publishes shared configuration items. This API uses a promise to return the result. After shared configuration items are published, the publisher and the applications in the allowlist can access these items. If the URI to be published already exists, the corresponding shared configuration item is updated. If any URI in the configuration item to be published exceeds the maximum length or fails the format verification, the current publish operation fails. Only the publisher can update shared configuration items. Each application supports a maximum of 32 shared configurations.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | ProxyData[] | Yes | Array of shared configuration items to be created or updated, with a maximum of 32  items. |
| config | DataProxyConfig | Yes | Data proxy configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataProxyResult[]> | Promise used to return the result array of the batch operations. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is being  restarted abnormally. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
const newConfigData: dataShare.ProxyData[] = [{
  uri: 'datashareproxy://com.example.app1/config1',
  value: 'Value1',
  allowList: ['appIdentifier2', 'appIdentifier3'], // The string here is only an example. Replace it with the actual appIdentifier of the application during use.
}, {
  uri: 'datashareproxy://com.example.app1/config2',
  value: 'Value2',
  allowList: ['appIdentifier3', 'appIdentifier4'], // The string here is only an example. Replace it with the actual appIdentifier of the application during use.
}];
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
dataProxyHandle.publish(newConfigData, config).then((results: dataShare.DataProxyResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to publish config. code: ${error.code}, message: ${error.message}`);
});

```

## putValue

```TypeScript
putValue(uri: string, key: int, value: ValueType, config: DataProxyConfig): Promise<void>
```

Puts a value into the published data. This operation can be performed only on multi-value type data. If the input **key** does not exist, a new value is added. If the input **key** already exists, the value corresponding to the key is updated. By default, a maximum of 10 values can be added to a single data record (that is, a URI) for a single application, and the maximum length of each value is 4096 bytes. In addition, the total length of all values in a single data record is limited by the value of the **maxValueLength** parameter that is specified during data publishing. Note that the **maxValueLength** parameter does not take effect in this API. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the URI of the data to operate. |
| key | int | Yes | The key corresponding to the added value. It is unique for the same application.  The value range is all integers. |
| value | ValueType | Yes | The value to be put. |
| config | DataProxyConfig | Yes | Configuration of the data proxy operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is  being restarted abnormally. |
| 15700011 | The URI does not exist. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |
| 15700015 | No permission to access the data specified by the URI. |

**Example**

```TypeScript
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
let testUri: string = 'datashareproxy://com.test.dataproxyhandle/test/pv/001';
let newConfigData: dataShare.ProxyData[] = [{
  uri: testUri,
  values: { 0: 'init' },
  isMultiValues: true,
  allowList: [],
  trustProviders: []
}];

await dataProxyHandle?.publish(newConfigData, config).then((results: dataShare.DataProxyResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to publish config. code: ${error.code}, message: ${error.message}`);
});

try {
  await dataProxyHandle?.putValue(testUri, 1, 'hello', config);
  console.info(`putValue success`);
} catch (error) {
  console.error(`putValue failed: code: ${error.code}, message: ${error.message}`);
}

```

## removeValue

```TypeScript
removeValue(uri: string, key: int, config: DataProxyConfig): Promise<void>
```

Removes the value corresponding to the key. This operation can be performed only on multi-value type data. Only values added by this application can be removed. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the URI of the data to operate. |
| key | int | Yes | The key corresponding to the added value.  The value range is all integers. |
| config | DataProxyConfig | Yes | Configuration of the data proxy operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15700000 | Inner error. Possible causes: The service is not ready or is  being restarted abnormally. |
| 15700011 | The URI does not exist. |
| 15700014 | The parameter format is incorrect or the value range is invalid. |
| 15700015 | No permission to access the data specified by the URI. |

**Example**

```TypeScript
const config: dataShare.DataProxyConfig = {
  type: dataShare.DataProxyType.SHARED_CONFIG,
};
let testUri: string = 'datashareproxy://com.test.dataproxyhandle/test/pv/001';
let newConfigData: dataShare.ProxyData[] = [{
  uri: testUri,
  values: { 0: 'init' },
  isMultiValues: true,
  allowList: [],
  trustProviders: []
}];

await dataProxyHandle?.publish(newConfigData, config).then((results: dataShare.DataProxyResult[]) => {
  results.forEach((result) => {
    console.info(`URI: ${result.uri}, Result: ${result.result}`);
  });
}).catch((error: BusinessError) => {
  console.error(`Failed to publish config. code: ${error.code}, message: ${error.message}`);
});

try {
  await dataProxyHandle?.removeValue(testUri, 0, config);
  console.info(`removeValue success`);
} catch (error) {
  console.error(`removeValue failed: code: ${error.code}, message: ${error.message}`);
}

```

