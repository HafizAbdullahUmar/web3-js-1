import "./App.css";

function App() {
  let Web3 = require("web3");
  let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  let contract = new web3.eth.Contract(
    [
      {
        inputs: [
          {
            internalType: "int256",
            name: "_i",
            type: "int256",
          },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "i",
        outputs: [
          {
            internalType: "int256",
            name: "",
            type: "int256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    "0x9B07f1363Ff0C3FeC9636AEd48D547D630Db22C0"
  );
  contract.methods
    .set(65)
    .send({ from: "0x1dc20456D83309C2ce4a5884F50133f237Ed8a43" });
  let r = contract.methods.i().call().then(console.log);
  return (
    <>
      <div className="container"></div>
    </>
  );
}

export default App;
