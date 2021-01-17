// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewDPP extends ethereum.Event {
  get params(): NewDPP__Params {
    return new NewDPP__Params(this);
  }
}

export class NewDPP__Params {
  _event: NewDPP;

  constructor(event: NewDPP) {
    this._event = event;
  }

  get baseToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get quoteToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get dpp(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OwnershipTransferPrepared extends ethereum.Event {
  get params(): OwnershipTransferPrepared__Params {
    return new OwnershipTransferPrepared__Params(this);
  }
}

export class OwnershipTransferPrepared__Params {
  _event: OwnershipTransferPrepared;

  constructor(event: OwnershipTransferPrepared) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemoveDPP extends ethereum.Event {
  get params(): RemoveDPP__Params {
    return new RemoveDPP__Params(this);
  }
}

export class RemoveDPP__Params {
  _event: RemoveDPP;

  constructor(event: RemoveDPP) {
    this._event = event;
  }

  get dpp(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DPPFactory__getPrivatePoolBidirectionResult {
  value0: Array<Address>;
  value1: Array<Address>;

  constructor(value0: Array<Address>, value1: Array<Address>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    return map;
  }
}

export class DPPFactory extends ethereum.SmartContract {
  static bind(address: Address): DPPFactory {
    return new DPPFactory("DPPFactory", address);
  }

  _CLONE_FACTORY_(): Address {
    let result = super.call(
      "_CLONE_FACTORY_",
      "_CLONE_FACTORY_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__CLONE_FACTORY_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_CLONE_FACTORY_",
      "_CLONE_FACTORY_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DEFAULT_MAINTAINER_(): Address {
    let result = super.call(
      "_DEFAULT_MAINTAINER_",
      "_DEFAULT_MAINTAINER_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__DEFAULT_MAINTAINER_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DEFAULT_MAINTAINER_",
      "_DEFAULT_MAINTAINER_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DEFAULT_MT_FEE_RATE_MODEL_(): Address {
    let result = super.call(
      "_DEFAULT_MT_FEE_RATE_MODEL_",
      "_DEFAULT_MT_FEE_RATE_MODEL_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__DEFAULT_MT_FEE_RATE_MODEL_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DEFAULT_MT_FEE_RATE_MODEL_",
      "_DEFAULT_MT_FEE_RATE_MODEL_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DODO_APPROVE_(): Address {
    let result = super.call("_DODO_APPROVE_", "_DODO_APPROVE_():(address)", []);

    return result[0].toAddress();
  }

  try__DODO_APPROVE_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DODO_APPROVE_",
      "_DODO_APPROVE_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DPP_ADMIN_TEMPLATE_(): Address {
    let result = super.call(
      "_DPP_ADMIN_TEMPLATE_",
      "_DPP_ADMIN_TEMPLATE_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__DPP_ADMIN_TEMPLATE_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DPP_ADMIN_TEMPLATE_",
      "_DPP_ADMIN_TEMPLATE_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DPP_TEMPLATE_(): Address {
    let result = super.call("_DPP_TEMPLATE_", "_DPP_TEMPLATE_():(address)", []);

    return result[0].toAddress();
  }

  try__DPP_TEMPLATE_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DPP_TEMPLATE_",
      "_DPP_TEMPLATE_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _NEW_OWNER_(): Address {
    let result = super.call("_NEW_OWNER_", "_NEW_OWNER_():(address)", []);

    return result[0].toAddress();
  }

  try__NEW_OWNER_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_NEW_OWNER_", "_NEW_OWNER_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _OWNER_(): Address {
    let result = super.call("_OWNER_", "_OWNER_():(address)", []);

    return result[0].toAddress();
  }

  try__OWNER_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_OWNER_", "_OWNER_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _REGISTRY_(param0: Address, param1: Address, param2: BigInt): Address {
    let result = super.call(
      "_REGISTRY_",
      "_REGISTRY_(address,address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toAddress();
  }

  try__REGISTRY_(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_REGISTRY_",
      "_REGISTRY_(address,address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _USER_REGISTRY_(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "_USER_REGISTRY_",
      "_USER_REGISTRY_(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try__USER_REGISTRY_(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_USER_REGISTRY_",
      "_USER_REGISTRY_(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createDODOPrivatePool(): Address {
    let result = super.call(
      "createDODOPrivatePool",
      "createDODOPrivatePool():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_createDODOPrivatePool(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createDODOPrivatePool",
      "createDODOPrivatePool():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPrivatePool(baseToken: Address, quoteToken: Address): Array<Address> {
    let result = super.call(
      "getPrivatePool",
      "getPrivatePool(address,address):(address[])",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromAddress(quoteToken)
      ]
    );

    return result[0].toAddressArray();
  }

  try_getPrivatePool(
    baseToken: Address,
    quoteToken: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getPrivatePool",
      "getPrivatePool(address,address):(address[])",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromAddress(quoteToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getPrivatePoolBidirection(
    token0: Address,
    token1: Address
  ): DPPFactory__getPrivatePoolBidirectionResult {
    let result = super.call(
      "getPrivatePoolBidirection",
      "getPrivatePoolBidirection(address,address):(address[],address[])",
      [ethereum.Value.fromAddress(token0), ethereum.Value.fromAddress(token1)]
    );

    return new DPPFactory__getPrivatePoolBidirectionResult(
      result[0].toAddressArray(),
      result[1].toAddressArray()
    );
  }

  try_getPrivatePoolBidirection(
    token0: Address,
    token1: Address
  ): ethereum.CallResult<DPPFactory__getPrivatePoolBidirectionResult> {
    let result = super.tryCall(
      "getPrivatePoolBidirection",
      "getPrivatePoolBidirection(address,address):(address[],address[])",
      [ethereum.Value.fromAddress(token0), ethereum.Value.fromAddress(token1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DPPFactory__getPrivatePoolBidirectionResult(
        value[0].toAddressArray(),
        value[1].toAddressArray()
      )
    );
  }

  getPrivatePoolByUser(user: Address): Array<Address> {
    let result = super.call(
      "getPrivatePoolByUser",
      "getPrivatePoolByUser(address):(address[])",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toAddressArray();
  }

  try_getPrivatePoolByUser(user: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getPrivatePoolByUser",
      "getPrivatePoolByUser(address):(address[])",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get cloneFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dppTemplate(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get dppAdminTemplate(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get defaultMaintainer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get defaultMtFeeRateModel(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get dodoApprove(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall extends ethereum.Call {
  get inputs(): ClaimOwnershipCall__Inputs {
    return new ClaimOwnershipCall__Inputs(this);
  }

  get outputs(): ClaimOwnershipCall__Outputs {
    return new ClaimOwnershipCall__Outputs(this);
  }
}

export class ClaimOwnershipCall__Inputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall__Outputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class InitOwnerCall extends ethereum.Call {
  get inputs(): InitOwnerCall__Inputs {
    return new InitOwnerCall__Inputs(this);
  }

  get outputs(): InitOwnerCall__Outputs {
    return new InitOwnerCall__Outputs(this);
  }
}

export class InitOwnerCall__Inputs {
  _call: InitOwnerCall;

  constructor(call: InitOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitOwnerCall__Outputs {
  _call: InitOwnerCall;

  constructor(call: InitOwnerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class CreateDODOPrivatePoolCall extends ethereum.Call {
  get inputs(): CreateDODOPrivatePoolCall__Inputs {
    return new CreateDODOPrivatePoolCall__Inputs(this);
  }

  get outputs(): CreateDODOPrivatePoolCall__Outputs {
    return new CreateDODOPrivatePoolCall__Outputs(this);
  }
}

export class CreateDODOPrivatePoolCall__Inputs {
  _call: CreateDODOPrivatePoolCall;

  constructor(call: CreateDODOPrivatePoolCall) {
    this._call = call;
  }
}

export class CreateDODOPrivatePoolCall__Outputs {
  _call: CreateDODOPrivatePoolCall;

  constructor(call: CreateDODOPrivatePoolCall) {
    this._call = call;
  }

  get newPrivatePool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class InitDODOPrivatePoolCall extends ethereum.Call {
  get inputs(): InitDODOPrivatePoolCall__Inputs {
    return new InitDODOPrivatePoolCall__Inputs(this);
  }

  get outputs(): InitDODOPrivatePoolCall__Outputs {
    return new InitDODOPrivatePoolCall__Outputs(this);
  }
}

export class InitDODOPrivatePoolCall__Inputs {
  _call: InitDODOPrivatePoolCall;

  constructor(call: InitDODOPrivatePoolCall) {
    this._call = call;
  }

  get dppAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get creator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get quoteToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get lpFeeRate(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get k(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get i(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class InitDODOPrivatePoolCall__Outputs {
  _call: InitDODOPrivatePoolCall;

  constructor(call: InitDODOPrivatePoolCall) {
    this._call = call;
  }
}

export class UpdateAdminTemplateCall extends ethereum.Call {
  get inputs(): UpdateAdminTemplateCall__Inputs {
    return new UpdateAdminTemplateCall__Inputs(this);
  }

  get outputs(): UpdateAdminTemplateCall__Outputs {
    return new UpdateAdminTemplateCall__Outputs(this);
  }
}

export class UpdateAdminTemplateCall__Inputs {
  _call: UpdateAdminTemplateCall;

  constructor(call: UpdateAdminTemplateCall) {
    this._call = call;
  }

  get _newDPPAdminTemplate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateAdminTemplateCall__Outputs {
  _call: UpdateAdminTemplateCall;

  constructor(call: UpdateAdminTemplateCall) {
    this._call = call;
  }
}

export class UpdateDppTemplateCall extends ethereum.Call {
  get inputs(): UpdateDppTemplateCall__Inputs {
    return new UpdateDppTemplateCall__Inputs(this);
  }

  get outputs(): UpdateDppTemplateCall__Outputs {
    return new UpdateDppTemplateCall__Outputs(this);
  }
}

export class UpdateDppTemplateCall__Inputs {
  _call: UpdateDppTemplateCall;

  constructor(call: UpdateDppTemplateCall) {
    this._call = call;
  }

  get _newDPPTemplate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateDppTemplateCall__Outputs {
  _call: UpdateDppTemplateCall;

  constructor(call: UpdateDppTemplateCall) {
    this._call = call;
  }
}

export class AddPoolByAdminCall extends ethereum.Call {
  get inputs(): AddPoolByAdminCall__Inputs {
    return new AddPoolByAdminCall__Inputs(this);
  }

  get outputs(): AddPoolByAdminCall__Outputs {
    return new AddPoolByAdminCall__Outputs(this);
  }
}

export class AddPoolByAdminCall__Inputs {
  _call: AddPoolByAdminCall;

  constructor(call: AddPoolByAdminCall) {
    this._call = call;
  }

  get creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get quoteToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get pool(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class AddPoolByAdminCall__Outputs {
  _call: AddPoolByAdminCall;

  constructor(call: AddPoolByAdminCall) {
    this._call = call;
  }
}

export class RemovePoolByAdminCall extends ethereum.Call {
  get inputs(): RemovePoolByAdminCall__Inputs {
    return new RemovePoolByAdminCall__Inputs(this);
  }

  get outputs(): RemovePoolByAdminCall__Outputs {
    return new RemovePoolByAdminCall__Outputs(this);
  }
}

export class RemovePoolByAdminCall__Inputs {
  _call: RemovePoolByAdminCall;

  constructor(call: RemovePoolByAdminCall) {
    this._call = call;
  }

  get creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get quoteToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get pool(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class RemovePoolByAdminCall__Outputs {
  _call: RemovePoolByAdminCall;

  constructor(call: RemovePoolByAdminCall) {
    this._call = call;
  }
}