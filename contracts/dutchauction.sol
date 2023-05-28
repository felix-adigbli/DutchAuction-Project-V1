// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DutchAuction {
    address payable public seller;
    uint public reservePrice;
    uint public numBlocksAuctionOpen;
    uint public offerPriceDecrement;
    uint public startBlock;
    uint public endBlock;
    uint public currentPrice;
    bool public auctionEnded;

    //Seller Placed A bid

    constructor(
        uint _reservePrice,
        uint _numBlocksAuctionOpen,
        uint _offerPriceDecrement
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
        require(block.number <= endBlock, "Auction Expired");
        require(!auctionEnded, "Auction has ended");
        currentPrice =
            reservePrice +
            (startBlock + numBlocksAuctionOpen - block.number) *
            offerPriceDecrement; //get current price
        if (msg.value >= currentPrice) {
            auctionEnded = true;
            seller.transfer(msg.value); //Transfer bid to seller
        } else {
            payable(msg.sender).transfer(msg.value); //Transfer bid to sender
        }
    }
}
