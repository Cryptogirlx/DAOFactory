/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUser, TestUserInterface } from "../TestUser";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionContract",
        type: "address",
      },
    ],
    name: "failClaimFromAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "saleContract",
        type: "address",
      },
    ],
    name: "failClaimFromSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "auctionContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "approvedContract",
        type: "address",
      },
    ],
    name: "mintNFTandCreateAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "saleContract",
        type: "address",
      },
    ],
    name: "mintNFTandCreateSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610707806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639c77a1ff116100505780639c77a1ff14610081578063a6b5bd6a14610094578063f23a6e61146100a757600080fd5b80631077a7d21461006c578063525d6de814610081575b600080fd5b61007f61007a3660046104fe565b610114565b005b61007f61008f366004610531565b610284565b61007f6100a2366004610553565b610310565b6100df6100b53660046105ac565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b604051630ab714fb60e11b81523060048201526001602482015260646044820181905283916001600160a01b0383169163156e29f69101600060405180830381600087803b15801561016557600080fd5b505af1158015610179573d6000803e3d6000fd5b50849250506001600160a01b0382169050634ccdb9868560016064426101a281622820a8610692565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b1681526001600160a01b0390951660048601526024850193909352604484019190915260648301526084820152670de0b6b3a764000060a4820152600a60c482015273aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa60e482015261010401602060405180830381600087803b15801561024557600080fd5b505af1158015610259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027d91906106b8565b5050505050565b6040517f693d0df200000000000000000000000000000000000000000000000000000000815273aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa600482015281906001600160a01b0382169063693d0df290602401600060405180830381600087803b1580156102f457600080fd5b505af1158015610308573d6000803e3d6000fd5b505050505050565b604051630ab714fb60e11b81523060048201526001602482015260646044820181905284916001600160a01b0383169163156e29f69101600060405180830381600087803b15801561036157600080fd5b505af1158015610375573d6000803e3d6000fd5b50506040517fa22cb4650000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152600160248301528416925063a22cb4659150604401600060405180830381600087803b1580156103dc57600080fd5b505af11580156103f0573d6000803e3d6000fd5b50859250506001600160a01b038216905063e6effbe98660014261041781622820a8610692565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526001600160a01b039094166004850152602484019290925260448301526064820152670de0b6b3a7640000608482015273aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa60a482015260c401602060405180830381600087803b1580156104aa57600080fd5b505af11580156104be573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030891906106b8565b80356001600160a01b03811681146104f957600080fd5b919050565b6000806040838503121561051157600080fd5b61051a836104e2565b9150610528602084016104e2565b90509250929050565b60006020828403121561054357600080fd5b61054c826104e2565b9392505050565b60008060006060848603121561056857600080fd5b610571846104e2565b925061057f602085016104e2565b915061058d604085016104e2565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a086880312156105c457600080fd5b6105cd866104e2565b94506105db602087016104e2565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561060657600080fd5b818801915088601f83011261061a57600080fd5b81358181111561062c5761062c610596565b604051601f8201601f19908116603f0116810190838211818310171561065457610654610596565b816040528281528b602084870101111561066d57600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b600082198211156106b357634e487b7160e01b600052601160045260246000fd5b500190565b6000602082840312156106ca57600080fd5b505191905056fea2646970667358221220728cc301ee1c22adb4fb7e2c2c88eaed4c4680199732d9656af29e91f495c47964736f6c63430008090033";

type TestUserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUser__factory extends ContractFactory {
  constructor(...args: TestUserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TestUser";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUser> {
    return super.deploy(overrides || {}) as Promise<TestUser>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestUser {
    return super.attach(address) as TestUser;
  }
  connect(signer: Signer): TestUser__factory {
    return super.connect(signer) as TestUser__factory;
  }
  static readonly contractName: "TestUser";
  public readonly contractName: "TestUser";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUserInterface {
    return new utils.Interface(_abi) as TestUserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUser {
    return new Contract(address, _abi, signerOrProvider) as TestUser;
  }
}