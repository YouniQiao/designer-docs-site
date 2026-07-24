# IDataSourcePrefetching

Extends the [IDataSource](../arkts-components/arkts-arkui-idatasource-i.md) API to add data prefetching capability to your data source.

**Inheritance/Implementation:** IDataSourcePrefetching extends [IDataSource](../arkts-components/arkts-arkui-idatasource-i.md)

**Since:** 12

<!--Device-unnamed-/* * Copyright (c) 2024 Huawei Device Co., Ltd. * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * *     http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */export interface IDataSourcePrefetching extends IDataSource--><!--Device-unnamed-/* * Copyright (c) 2024 Huawei Device Co., Ltd. * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * *     http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */export interface IDataSourcePrefetching extends IDataSource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IDataSourcePrefetching, BasicPrefetcher, IPrefetcher } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?(index: number): Promise<void> | void
```

Cancels the prefetching of a specified data item from the dataset. This API can be either synchronous or asynchronous.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IDataSourcePrefetching-cancel?(index: number): Promise<void> | void--><!--Device-IDataSourcePrefetching-cancel?(index: number): Promise<void> | void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the data item to cancel prefetching for. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise when this API is executed asynchronously; no return value when this API is executed synchronously. The promise only indicates that the operation is completed and contains no actual return content. |

## prefetch

```TypeScript
prefetch(index: number): Promise<void> | void
```

Prefetches a specified data item from the dataset. This API can be either synchronous or asynchronous.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IDataSourcePrefetching-prefetch(index: number): Promise<void> | void--><!--Device-IDataSourcePrefetching-prefetch(index: number): Promise<void> | void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the data item to prefetch. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise when this API is executed asynchronously; no return value when this API is executed synchronously. The promise only indicates that the operation is completed and contains no actual return content. |

