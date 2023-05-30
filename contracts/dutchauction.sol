// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DutchAuction {
    address payable public seller;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;
    uint256 public startBlock;
    uint256 public endBlock;
    uint256 public currentPrice;
    bool public auctionEnded;

    //Seller Placed A bid

    constructor(
        uint256 _reservePrice,
        uint256 _numBlocksAuctionOpen,
        uint256 _offerPriceDecrement
    ) {
        seller = payable(msg.sender);
        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        startBlock = block.number;
        endBlock = startBlock + numBlocksAuctionOpen;
        auctionEnded = false;
    }

    //function for bidders to place bid and proccess the bid
    function placeBid() external payable {
            require(!auctionEnded, "Auction has ended");
        currentPrice =
            reservePrice +
            (endBlock - block.number) *
            offerPriceDecrement; //get current price
        if (msg.value >= currentPrice) {
            auctionEnded = true;
            seller.transfer(msg.value); //Transfer bid to seller
        } else {
            payable(msg.sender).transfer(msg.value); //Transfer bid to sender
        }
    }
}
