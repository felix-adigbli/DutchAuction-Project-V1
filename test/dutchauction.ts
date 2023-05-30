import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Signature, Signer } from 'ethers';
import { MockProvider } from 'ethereum-waffle';

describe('DutchAuction', () => {
    let dutchAuction;
    let reservePrice = 100
    let numBlocksAuctionOpen = 10
    let offerPriceDecrement = 5
    let seller: Signer;
    let provider: MockProvider;
    let bidder1;
    let bidder2;
    let bidder3;

    beforeEach(async () => {
        const DutchAuction = await ethers.getContractFactory('DutchAuction', seller);
        [seller, bidder1, bidder2, bidder3] = await ethers.getSigners();

        dutchAuction = await DutchAuction.deploy(
            reservePrice,
            numBlocksAuctionOpen,
            offerPriceDecrement
        );
        await dutchAuction.deployed();

    });

    describe('constructor', () => {
        it('should initialize contract variables correctly', async () => {
            expect(await dutchAuction.seller()).to.equal(seller.address);
            expect(await dutchAuction.reservePrice()).to.equal(reservePrice);
            expect(await dutchAuction.numBlocksAuctionOpen()).to.equal(
                numBlocksAuctionOpen
            );
            expect(await dutchAuction.offerPriceDecrement()).to.equal(
                offerPriceDecrement
            );
            const startBlock = await dutchAuction.startBlock();
            expect(await dutchAuction.startBlock()).to.equal(startBlock);
            expect(await dutchAuction.endBlock()).to.equal(startBlock.add(numBlocksAuctionOpen));
            expect(await dutchAuction.auctionEnded()).to.equal(false);
        });
    });


    describe('placeBid', () => {
        it('should reject bid if bid amout is less than the current price and balance trasfered back to bidder', async () => {


            const currentPrice = await dutchAuction.reservePrice() + ((await dutchAuction.endBlock()) - (await ethers.provider.getBlockNumber())) * (await dutchAuction.offerPriceDecrement())


            const bidAmount = reservePrice - 1;
            const sellerBalanceBefore = await seller.getBalance();
            const bidder1BalanceBefore = await bidder1.getBalance();

            const bidplaced = await dutchAuction.connect(bidder1).placeBid({ value: bidAmount });
            const receipt = await bidplaced.wait();
            const gassused = receipt.gasUsed;

            const sellerBalanceAfter = await seller.getBalance();
            const bidder1BalanceAfter = await bidder1.getBalance();

            expect(await dutchAuction.auctionEnded()).to.equal(false);
            // Verify the auction balance transfers for uncessful bid
            expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(0);
            expect(bidder1BalanceBefore.sub(bidder1BalanceAfter)).to.equal(gassused);

        })
    });

    describe('placeBid', () => {
        it('should allow a bid if the auction is still open and bid value is greater than or equal to the current price, transfer balace to seller, and reject any bid after', async () => {

            const currentPrice = await dutchAuction.reservePrice() + ((await dutchAuction.endBlock()) - (await ethers.provider.getBlockNumber())) * (await dutchAuction.offerPriceDecrement())

            const bidAmount = currentPrice + 1;
            const sellerBalanceBefore = await seller.getBalance();
            const bidder2BalanceBefore = await bidder2.getBalance();

            const bidplaced = await dutchAuction.connect(bidder2).placeBid({ value: bidAmount });
            const receipt = await bidplaced.wait();
            const gassused = receipt.gasUsed;

            const sellerBalanceAfter = await seller.getBalance();
            const bidder2BalanceAfter = await bidder2.getBalance();


            expect(await dutchAuction.auctionEnded()).to.equal(true);
            // Verify the auction balance transfers for successful bid
            expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(bidAmount);


            expect(bidder2BalanceBefore.sub(bidder2BalanceAfter)).to.equal(gassused.add(bidAmount));
            // Try placing another bid after the auction has ended
            await expect(dutchAuction.connect(bidder3).placeBid({ value: 100 })).to.be.revertedWith('Auction has ended');
        });


    });
});
