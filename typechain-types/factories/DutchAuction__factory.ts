/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DutchAuction, DutchAuctionInterface } from "../DutchAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numBlocksAuctionOpen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offerPriceDecrement",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "auctionEnded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numBlocksAuctionOpen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "offerPriceDecrement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seller",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161087738038061087783398181016040528101906100329190610102565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260018190555081600281905550806003819055504360048190555060025460045461009e9190610184565b6005819055506000600760006101000a81548160ff0219169083151502179055505050506101b8565b600080fd5b6000819050919050565b6100df816100cc565b81146100ea57600080fd5b50565b6000815190506100fc816100d6565b92915050565b60008060006060848603121561011b5761011a6100c7565b5b6000610129868287016100ed565b935050602061013a868287016100ed565b925050604061014b868287016100ed565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061018f826100cc565b915061019a836100cc565b92508282019050808211156101b2576101b1610155565b5b92915050565b6106b0806101c76000396000f3fe6080604052600436106100865760003560e01c8063864333741161005957806386433374146101375780639d1b464a14610162578063d3642a881461018d578063db2e1eed146101b8578063ecfc7ecc146101e357610086565b8063083c63231461008b57806308551a53146100b65780633103ea62146100e157806348cd4cb11461010c575b600080fd5b34801561009757600080fd5b506100a06101ed565b6040516100ad919061040b565b60405180910390f35b3480156100c257600080fd5b506100cb6101f3565b6040516100d89190610467565b60405180910390f35b3480156100ed57600080fd5b506100f6610217565b604051610103919061040b565b60405180910390f35b34801561011857600080fd5b5061012161021d565b60405161012e919061040b565b60405180910390f35b34801561014357600080fd5b5061014c610223565b604051610159919061049d565b60405180910390f35b34801561016e57600080fd5b50610177610236565b604051610184919061040b565b60405180910390f35b34801561019957600080fd5b506101a261023c565b6040516101af919061040b565b60405180910390f35b3480156101c457600080fd5b506101cd610242565b6040516101da919061040b565b60405180910390f35b6101eb610248565b005b60055481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60045481565b600760009054906101000a900460ff1681565b60065481565b60035481565b60015481565b60055443111561028d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028490610515565b60405180910390fd5b600760009054906101000a900460ff16156102dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d490610581565b60405180910390fd5b600354436002546004546102f191906105d0565b6102fb9190610604565b6103059190610638565b60015461031291906105d0565b60068190555060065434106103a8576001600760006101000a81548160ff02191690831515021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156103a2573d6000803e3d6000fd5b506103f0565b3373ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156103ee573d6000803e3d6000fd5b505b565b6000819050919050565b610405816103f2565b82525050565b600060208201905061042060008301846103fc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061045182610426565b9050919050565b61046181610446565b82525050565b600060208201905061047c6000830184610458565b92915050565b60008115159050919050565b61049781610482565b82525050565b60006020820190506104b2600083018461048e565b92915050565b600082825260208201905092915050565b7f41756374696f6e20457870697265640000000000000000000000000000000000600082015250565b60006104ff600f836104b8565b915061050a826104c9565b602082019050919050565b6000602082019050818103600083015261052e816104f2565b9050919050565b7f41756374696f6e2068617320656e646564000000000000000000000000000000600082015250565b600061056b6011836104b8565b915061057682610535565b602082019050919050565b6000602082019050818103600083015261059a8161055e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105db826103f2565b91506105e6836103f2565b92508282019050808211156105fe576105fd6105a1565b5b92915050565b600061060f826103f2565b915061061a836103f2565b9250828203905081811115610632576106316105a1565b5b92915050565b6000610643826103f2565b915061064e836103f2565b925082820261065c816103f2565b91508282048414831517610673576106726105a1565b5b509291505056fea264697066735822122000a6f2508ccfc0885a8f44e67b42c678644a8df5b41b00b917fcdfc53cc50cc064736f6c63430008120033";

type DutchAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DutchAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DutchAuction__factory extends ContractFactory {
  constructor(...args: DutchAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _reservePrice: PromiseOrValue<BigNumberish>,
    _numBlocksAuctionOpen: PromiseOrValue<BigNumberish>,
    _offerPriceDecrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DutchAuction> {
    return super.deploy(
      _reservePrice,
      _numBlocksAuctionOpen,
      _offerPriceDecrement,
      overrides || {}
    ) as Promise<DutchAuction>;
  }
  override getDeployTransaction(
    _reservePrice: PromiseOrValue<BigNumberish>,
    _numBlocksAuctionOpen: PromiseOrValue<BigNumberish>,
    _offerPriceDecrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _reservePrice,
      _numBlocksAuctionOpen,
      _offerPriceDecrement,
      overrides || {}
    );
  }
  override attach(address: string): DutchAuction {
    return super.attach(address) as DutchAuction;
  }
  override connect(signer: Signer): DutchAuction__factory {
    return super.connect(signer) as DutchAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DutchAuctionInterface {
    return new utils.Interface(_abi) as DutchAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DutchAuction {
    return new Contract(address, _abi, signerOrProvider) as DutchAuction;
  }
}
