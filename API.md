# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SecureParameterStore <a name="cdk-secure-parameter-store.SecureParameterStore"></a>

#### Initializers <a name="cdk-secure-parameter-store.SecureParameterStore.Initializer"></a>

```typescript
import { SecureParameterStore } from 'cdk-secure-parameter-store'

new SecureParameterStore(scope: Construct, id: string, props: ISecureParameterStoreProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-secure-parameter-store.SecureParameterStore.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-secure-parameter-store.SecureParameterStore.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-secure-parameter-store.SecureParameterStore.parameter.props"></a>

- *Type:* [`cdk-secure-parameter-store.ISecureParameterStoreProps`](#cdk-secure-parameter-store.ISecureParameterStoreProps)

---







## Protocols <a name="Protocols"></a>

### ISecureParameterStoreProps <a name="cdk-secure-parameter-store.ISecureParameterStoreProps"></a>

- *Implemented By:* [`cdk-secure-parameter-store.ISecureParameterStoreProps`](#cdk-secure-parameter-store.ISecureParameterStoreProps)


#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="cdk-secure-parameter-store.ISecureParameterStoreProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-secure-parameter-store.ISecureParameterStoreProps.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `resourceNamesPrefix`<sup>Optional</sup> <a name="cdk-secure-parameter-store.ISecureParameterStoreProps.property.resourceNamesPrefix"></a>

```typescript
public readonly resourceNamesPrefix: string;
```

- *Type:* `string`

---

