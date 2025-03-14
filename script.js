async function runCode() {
    let pyodide = await loadPyodide();
    let code = document.getElementById("editor").value;
    let output = await pyodide.runPythonAsync(code);
    document.getElementById("output").innerText = output;
}
