// ここからコードを書いてください
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  lengthUnit.forEach((unit) => {
    // 変換元用 option
    const fromOption = document.createElement("option");
    fromOption.value = unit.base;
    fromOption.textContent = unit.name;
    converterFrom.appendChild(fromOption);

    // 変換先用 option
    const toOption = document.createElement("option");
    toOption.value = unit.base;
    toOption.textContent = unit.name;
    converterTo.appendChild(toOption);
  });

  converterFrom.selectedIndex = 0;
  converterTo.selectedIndex = 1;

  //変換を実行
  function convert() {
    const value = parseFloat(converterInput.value);
    if (isNaN(value)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = converterFrom.value;
    const toBase = converterTo.value;
    const converted = (value * fromBase) / toBase;

    // 結果を3桁まで丸める
    converterResult.textContent = `${value} ${lengthUnit[converterFrom.selectedIndex].name} = ${converted.toFixed(3)} ${lengthUnit[converterTo.selectedIndex].name}`;
  }

  converterForm.addEventListener("input", convert); // 初期化
  convert(); // 初期値で変換を実行
}
