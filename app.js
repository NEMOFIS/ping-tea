import { ethers } from "ethers";
import contractABI from "./abi.js"; // Import the ABI

// Tea Sepolia Network Info
const provider = new ethers.JsonRpcProvider("https://tea-sepolia.g.alchemy.com/public");
const signer = provider.getSigner(); // User's wallet
const contractAddress = "0xd2009c31f10aF105CCb5294Ed73b78AC21e9e199"; // Replace with your deployed contract address

// Create contract instance
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// UI Elements
const pingButton = document.getElementById('pingButton');
const statusText = document.getElementById('status');

// Ping function
async function ping() {
    try {
        statusText.textContent = "Sending Ping..."; // Update UI status
        const tx = await contract.ping();
        await tx.wait(); // Wait for the transaction to be mined
        statusText.textContent = "Ping Successful!";
    } catch (err) {
        statusText.textContent = "Error: " + err.message;
    }
}

// Set up event listener for the Ping button
pingButton.addEventListener('click', ping);
