const fs = require("fs");
const PATH = "./PonteFlattenered.sol";

let content;
content = fs.readFileSync(PATH, "utf-8");
// Remove every line started with "// SPDX-License-Identifier:"
content = flattened.replace(/SPDX-License-Identifier:/gm, "License-Identifier:");
content = `// SPDX-License-Identifier: MIXED\n\n${content}`;
// Remove every line started with "pragma experimental ABIEncoderV2;" except the first one
content = content.replace(/pragma experimental ABIEncoderV2;\n/gm, ((i) => (m) => (!i++ ? m : ""))(0));

console.log(content);